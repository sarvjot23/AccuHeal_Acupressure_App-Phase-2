/**
 * AccuHeal Static Screenshot Generation
 * Creates app store screenshots using static HTML templates
 */

const puppeteer = require('puppeteer');
const fs = require('fs').promises;
const path = require('path');

class StaticScreenshotGenerator {
  constructor() {
    this.browser = null;
    this.outputDir = path.join(__dirname, '../screenshots');
    
    // Device configurations for app stores
    this.deviceConfigs = {
      // iOS Screenshots
      'iphone-14-pro-max': { width: 1290, height: 2796, name: 'iPhone 6.7"' },
      'iphone-11-pro-max': { width: 1242, height: 2688, name: 'iPhone 6.5"' },
      'iphone-8-plus': { width: 1242, height: 2208, name: 'iPhone 5.5"' },
      'ipad-pro-12-9': { width: 2048, height: 2732, name: 'iPad Pro 12.9"' },
      
      // Android Screenshots
      'android-phone': { width: 1080, height: 1920, name: 'Android Phone' },
      'android-tablet-7': { width: 1200, height: 1920, name: 'Android 7" Tablet' },
      'android-tablet-10': { width: 1600, height: 2560, name: 'Android 10" Tablet' }
    };

    // Screenshot templates
    this.templates = [
      {
        name: 'home-screen',
        title: 'Welcome to Natural Healing',
        subtitle: 'Discover 24 professional acupressure points for wellness',
        content: this.generateHomeScreenHTML()
      },
      {
        name: 'search-interface',
        title: 'Smart Search & Discovery', 
        subtitle: 'Find relief by symptoms, body parts, or point codes',
        content: this.generateSearchScreenHTML()
      },
      {
        name: 'point-detail',
        title: 'Detailed Guidance',
        subtitle: 'Step-by-step instructions with safety guidelines',
        content: this.generatePointDetailHTML()
      },
      {
        name: 'questionnaire',
        title: 'Personalized Recommendations',
        subtitle: 'Interactive assessment for custom healing sessions',
        content: this.generateQuestionnaireHTML()
      },
      {
        name: 'bilingual-interface',
        title: 'Complete Hindi Support',
        subtitle: 'Traditional wellness in your preferred language',
        content: this.generateBilingualHTML()
      }
    ];
  }

  async initialize() {
    console.log('📸 Initializing Screenshot Generator...\n');
    
    // Create output directory
    await fs.mkdir(this.outputDir, { recursive: true });
    console.log(`📁 Output directory: ${this.outputDir}`);
    
    // Launch browser
    this.browser = await puppeteer.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-web-security'
      ]
    });
    
    console.log('✅ Browser launched successfully\n');
  }

  generateHomeScreenHTML() {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>AccuHeal - Home</title>
      <style>${this.getBaseStyles()}</style>
    </head>
    <body>
      <div class="app-container">
        <div class="header">
          <h1 class="app-title">AccuHeal</h1>
          <p class="welcome-text">प्राकृतिक एक्यूप्रेशर चिकित्सा के लिए आपका गाइड</p>
        </div>
        
        <div class="quick-actions">
          <div class="action-card">
            <div class="action-icon">🔍</div>
            <h3>Search by Symptoms</h3>
            <p>Find relief for headaches, stress, and more</p>
          </div>
          <div class="action-card">
            <div class="action-icon">🧘</div>
            <h3>Guided Questionnaire</h3>
            <p>Personalized acupressure recommendations</p>
          </div>
        </div>
        
        <div class="popular-points">
          <h2>Popular Acupressure Points</h2>
          <div class="point-grid">
            <div class="point-card">
              <div class="point-code">LI4</div>
              <h4>Large Intestine 4 - Hegu</h4>
              <p>Headaches, stress relief</p>
            </div>
            <div class="point-card">
              <div class="point-code">ST36</div>
              <h4>Stomach 36 - Zusanli</h4>
              <p>Digestive health, energy</p>
            </div>
            <div class="point-card">
              <div class="point-code">GB20</div>
              <h4>Gallbladder 20 - Fengchi</h4>
              <p>Neck tension, headaches</p>
            </div>
          </div>
        </div>
        
        <div class="bottom-nav">
          <div class="nav-item active">
            <span class="nav-icon">🏠</span>
            <span>Home</span>
          </div>
          <div class="nav-item">
            <span class="nav-icon">🔍</span>
            <span>Search</span>
          </div>
          <div class="nav-item">
            <span class="nav-icon">📋</span>
            <span>Guide</span>
          </div>
          <div class="nav-item">
            <span class="nav-icon">⚙️</span>
            <span>Settings</span>
          </div>
        </div>
      </div>
    </body>
    </html>`;
  }

  generateSearchScreenHTML() {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>AccuHeal - Search</title>
      <style>${this.getBaseStyles()}</style>
    </head>
    <body>
      <div class="app-container">
        <div class="header">
          <h1 class="screen-title">Search Acupressure Points</h1>
          <div class="search-bar">
            <input type="text" placeholder="Search by symptoms, body parts..." value="headache">
            <span class="search-icon">🔍</span>
          </div>
        </div>
        
        <div class="search-filters">
          <div class="filter-chip active">Symptoms</div>
          <div class="filter-chip">Body Parts</div>
          <div class="filter-chip">Point Codes</div>
        </div>
        
        <div class="search-results">
          <div class="result-header">
            <h3>7 results for "headache"</h3>
          </div>
          
          <div class="result-list">
            <div class="result-item">
              <div class="result-code">LI4</div>
              <div class="result-info">
                <h4>Large Intestine 4 - Hegu</h4>
                <p>बड़ी आंत 4 - हेगू</p>
                <div class="result-tags">
                  <span class="tag">Headache</span>
                  <span class="tag">Stress</span>
                  <span class="tag">Hand</span>
                </div>
              </div>
            </div>
            
            <div class="result-item">
              <div class="result-code">GB20</div>
              <div class="result-info">
                <h4>Gallbladder 20 - Fengchi</h4>
                <p>गॉलब्लैडर 20 - फेंगची</p>
                <div class="result-tags">
                  <span class="tag">Headache</span>
                  <span class="tag">Neck tension</span>
                  <span class="tag">Neck</span>
                </div>
              </div>
            </div>
            
            <div class="result-item">
              <div class="result-code">KI1</div>
              <div class="result-info">
                <h4>Kidney 1 - Yongquan</h4>
                <p>किडनी 1 - योंगक्वान</p>
                <div class="result-tags">
                  <span class="tag">Headache</span>
                  <span class="tag">Insomnia</span>
                  <span class="tag">Foot</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bottom-nav">
          <div class="nav-item">
            <span class="nav-icon">🏠</span>
            <span>Home</span>
          </div>
          <div class="nav-item active">
            <span class="nav-icon">🔍</span>
            <span>Search</span>
          </div>
          <div class="nav-item">
            <span class="nav-icon">📋</span>
            <span>Guide</span>
          </div>
          <div class="nav-item">
            <span class="nav-icon">⚙️</span>
            <span>Settings</span>
          </div>
        </div>
      </div>
    </body>
    </html>`;
  }

  generatePointDetailHTML() {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>AccuHeal - Point Detail</title>
      <style>${this.getBaseStyles()}</style>
    </head>
    <body>
      <div class="app-container">
        <div class="header">
          <button class="back-button">←</button>
          <h1 class="screen-title">Acupressure Point</h1>
        </div>
        
        <div class="point-header">
          <div class="point-code-large">LI4</div>
          <div class="point-names">
            <h2>Large Intestine 4 - Hegu</h2>
            <h3>बड़ी आंत 4 - हेगू</h3>
          </div>
          <div class="point-meta">
            <span class="difficulty beginner">Beginner</span>
            <span class="duration">3 min</span>
            <span class="pressure">Firm pressure</span>
          </div>
        </div>
        
        <div class="point-content">
          <div class="section">
            <h3>📍 Location</h3>
            <p>Located in the webbing between the thumb and index finger, closer to the index finger bone.</p>
            <p class="hindi">अंगूठे और तर्जनी के बीच की जगह में स्थित, तर्जनी की हड्डी के करीब।</p>
          </div>
          
          <div class="section">
            <h3>👆 Method</h3>
            <p>Apply firm pressure with your thumb for 1-3 minutes. Press and release in a rhythmic pattern.</p>
            <p class="hindi">अपने अंगूठे से 1-3 मिनट तक मजबूत दबाव डालें। लयबद्ध तरीके से दबाएं और छोड़ें।</p>
          </div>
          
          <div class="section">
            <h3>💊 Conditions</h3>
            <div class="condition-tags">
              <span class="condition-tag">Headache</span>
              <span class="condition-tag">Stress</span>
              <span class="condition-tag">Pain relief</span>
              <span class="condition-tag">Tension</span>
            </div>
          </div>
          
          <div class="section warning">
            <h3>⚠️ Contraindications</h3>
            <p>Avoid during pregnancy. Do not use if you have high blood pressure.</p>
          </div>
        </div>
      </div>
    </body>
    </html>`;
  }

  generateQuestionnaireHTML() {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>AccuHeal - Questionnaire</title>
      <style>${this.getBaseStyles()}</style>
    </head>
    <body>
      <div class="app-container">
        <div class="header">
          <h1 class="screen-title">Find Your Relief</h1>
          <p class="subtitle">Answer a few questions for personalized recommendations</p>
        </div>
        
        <div class="progress-bar">
          <div class="progress" style="width: 60%"></div>
        </div>
        <p class="progress-text">Step 3 of 5</p>
        
        <div class="question-container">
          <h2 class="question">What type of discomfort are you experiencing?</h2>
          <p class="question-hindi">आप किस प्रकार की परेशानी महसूस कर रहे हैं?</p>
          
          <div class="options">
            <div class="option-card selected">
              <div class="option-icon">🤕</div>
              <div class="option-text">
                <h4>Headache / Migraine</h4>
                <p>सिरदर्द / माइग्रेन</p>
              </div>
            </div>
            
            <div class="option-card">
              <div class="option-icon">😰</div>
              <div class="option-text">
                <h4>Stress / Anxiety</h4>
                <p>तनाव / चिंता</p>
              </div>
            </div>
            
            <div class="option-card">
              <div class="option-icon">🤲</div>
              <div class="option-text">
                <h4>Neck / Shoulder Pain</h4>
                <p>गर्दन / कंधे का दर्द</p>
              </div>
            </div>
            
            <div class="option-card">
              <div class="option-icon">🫃</div>
              <div class="option-text">
                <h4>Digestive Issues</h4>
                <p>पाचन संबंधी समस्याएं</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="action-buttons">
          <button class="button secondary">Previous</button>
          <button class="button primary">Next</button>
        </div>
      </div>
    </body>
    </html>`;
  }

  generateBilingualHTML() {
    return `
    <!DOCTYPE html>
    <html lang="hi">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>AccuHeal - Hindi Interface</title>
      <style>${this.getBaseStyles()}</style>
    </head>
    <body>
      <div class="app-container">
        <div class="header">
          <h1 class="app-title">AccuHeal</h1>
          <p class="welcome-text">प्राकृतिक एक्यूप्रेशर चिकित्सा के लिए आपका गाइड</p>
        </div>
        
        <div class="language-banner">
          <div class="language-toggle">
            <span class="lang-option">English</span>
            <span class="lang-option active">हिंदी</span>
          </div>
          <p>Complete bilingual support for traditional wellness</p>
        </div>
        
        <div class="feature-cards">
          <div class="feature-card">
            <div class="feature-icon">🔍</div>
            <h3>लक्षण खोजें</h3>
            <p>सिरदर्द, तनाव और अन्य समस्याओं के लिए राहत पाएं</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">📍</div>
            <h3>24 एक्यूप्रेशर पॉइंट्स</h3>
            <p>पेशेवर रूप से प्रलेखित बिंदुओं का पूरा संग्रह</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">🧘</div>
            <h3>व्यक्तिगत सुझाव</h3>
            <p>आपकी आवश्यकताओं के अनुसार कस्टम सत्र</p>
          </div>
        </div>
        
        <div class="hindi-demo">
          <h2>स्प्लीन 6 - सान्यिनजियाओ</h2>
          <div class="demo-content">
            <div class="demo-section">
              <h4>📍 स्थान</h4>
              <p>पैर के अंदरूनी हिस्से पर स्थित, भीतरी टखने की हड्डी से लगभग 4 अंगुली चौड़ाई ऊपर</p>
            </div>
            <div class="demo-section">
              <h4>👆 तरीका</h4>
              <p>अपने अंगूठे से 1-3 मिनट तक मध्यम से मजबूत दबाव डालें</p>
            </div>
          </div>
        </div>
        
        <div class="bottom-nav">
          <div class="nav-item active">
            <span class="nav-icon">🏠</span>
            <span>होम</span>
          </div>
          <div class="nav-item">
            <span class="nav-icon">🔍</span>
            <span>खोजें</span>
          </div>
          <div class="nav-item">
            <span class="nav-icon">📋</span>
            <span>गाइड</span>
          </div>
          <div class="nav-item">
            <span class="nav-icon">⚙️</span>
            <span>सेटिंग्स</span>
          </div>
        </div>
      </div>
    </body>
    </html>`;
  }

  getBaseStyles() {
    return `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
        background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
        color: #1f2937;
        line-height: 1.6;
      }
      
      .app-container {
        max-width: 400px;
        margin: 0 auto;
        min-height: 100vh;
        background: white;
        box-shadow: 0 0 30px rgba(0,0,0,0.1);
        display: flex;
        flex-direction: column;
      }
      
      .header {
        padding: 60px 20px 30px;
        background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
        color: white;
        text-align: center;
      }
      
      .app-title {
        font-size: 28px;
        font-weight: 900;
        margin-bottom: 8px;
        text-shadow: 0 2px 4px rgba(0,0,0,0.2);
      }
      
      .welcome-text {
        font-size: 16px;
        opacity: 0.9;
        margin-bottom: 0;
      }
      
      .screen-title {
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 8px;
      }
      
      .subtitle {
        font-size: 14px;
        opacity: 0.8;
      }
      
      .back-button {
        position: absolute;
        left: 20px;
        top: 65px;
        background: rgba(255,255,255,0.2);
        border: none;
        color: white;
        font-size: 20px;
        width: 40px;
        height: 40px;
        border-radius: 20px;
        cursor: pointer;
      }
      
      .quick-actions, .feature-cards {
        padding: 20px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 15px;
      }
      
      .action-card, .feature-card {
        background: white;
        padding: 20px;
        border-radius: 12px;
        text-align: center;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        border: 1px solid #e5e7eb;
      }
      
      .action-icon, .feature-icon {
        font-size: 28px;
        margin-bottom: 10px;
      }
      
      .action-card h3, .feature-card h3 {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 8px;
        color: #1f2937;
      }
      
      .action-card p, .feature-card p {
        font-size: 13px;
        color: #6b7280;
      }
      
      .popular-points {
        padding: 20px;
        flex-grow: 1;
      }
      
      .popular-points h2 {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 15px;
        color: #1f2937;
      }
      
      .point-grid {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      
      .point-card {
        background: white;
        padding: 16px;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        border-left: 4px solid #22c55e;
        display: flex;
        align-items: center;
        gap: 15px;
      }
      
      .point-code {
        background: #22c55e;
        color: white;
        padding: 8px 12px;
        border-radius: 8px;
        font-weight: 700;
        font-size: 14px;
        min-width: 50px;
        text-align: center;
      }
      
      .point-card h4 {
        font-size: 15px;
        font-weight: 600;
        margin-bottom: 4px;
        color: #1f2937;
      }
      
      .point-card p {
        font-size: 13px;
        color: #6b7280;
      }
      
      .search-bar {
        position: relative;
        margin-top: 20px;
      }
      
      .search-bar input {
        width: 100%;
        padding: 15px 50px 15px 20px;
        border: none;
        border-radius: 25px;
        font-size: 16px;
        background: rgba(255,255,255,0.95);
        backdrop-filter: blur(10px);
      }
      
      .search-icon {
        position: absolute;
        right: 18px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 18px;
        color: #6b7280;
      }
      
      .search-filters {
        padding: 20px;
        display: flex;
        gap: 10px;
      }
      
      .filter-chip {
        padding: 8px 16px;
        background: #f3f4f6;
        border-radius: 20px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s;
      }
      
      .filter-chip.active {
        background: #22c55e;
        color: white;
      }
      
      .search-results {
        padding: 0 20px 20px;
        flex-grow: 1;
      }
      
      .result-header h3 {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 15px;
        color: #1f2937;
      }
      
      .result-list {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      
      .result-item {
        background: white;
        padding: 16px;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        display: flex;
        gap: 15px;
        align-items: flex-start;
      }
      
      .result-code {
        background: #22c55e;
        color: white;
        padding: 8px 12px;
        border-radius: 8px;
        font-weight: 700;
        font-size: 14px;
        min-width: 55px;
        text-align: center;
      }
      
      .result-info h4 {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 4px;
        color: #1f2937;
      }
      
      .result-info p {
        font-size: 14px;
        color: #6b7280;
        margin-bottom: 8px;
      }
      
      .result-tags {
        display: flex;
        gap: 6px;
        flex-wrap: wrap;
      }
      
      .tag {
        background: #f3f4f6;
        padding: 4px 10px;
        border-radius: 12px;
        font-size: 12px;
        font-weight: 500;
        color: #4b5563;
      }
      
      .point-header {
        padding: 20px;
        background: white;
        margin: 20px;
        border-radius: 16px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        text-align: center;
      }
      
      .point-code-large {
        background: #22c55e;
        color: white;
        padding: 15px 20px;
        border-radius: 12px;
        font-weight: 900;
        font-size: 24px;
        display: inline-block;
        margin-bottom: 15px;
      }
      
      .point-names h2 {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 5px;
        color: #1f2937;
      }
      
      .point-names h3 {
        font-size: 16px;
        font-weight: 500;
        color: #6b7280;
        margin-bottom: 15px;
      }
      
      .point-meta {
        display: flex;
        justify-content: center;
        gap: 12px;
        flex-wrap: wrap;
      }
      
      .difficulty, .duration, .pressure {
        padding: 6px 12px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 600;
      }
      
      .difficulty.beginner {
        background: #dcfce7;
        color: #16a34a;
      }
      
      .duration, .pressure {
        background: #f3f4f6;
        color: #4b5563;
      }
      
      .point-content {
        padding: 0 20px 20px;
      }
      
      .section {
        background: white;
        padding: 20px;
        border-radius: 12px;
        margin-bottom: 15px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      }
      
      .section h3 {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 12px;
        color: #1f2937;
      }
      
      .section p {
        font-size: 14px;
        color: #374151;
        margin-bottom: 8px;
      }
      
      .hindi {
        color: #6b7280;
        font-style: italic;
      }
      
      .condition-tags {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
      }
      
      .condition-tag {
        background: #dcfce7;
        color: #16a34a;
        padding: 6px 12px;
        border-radius: 16px;
        font-size: 13px;
        font-weight: 500;
      }
      
      .warning {
        border-left: 4px solid #f59e0b;
        background: #fefbf0;
      }
      
      .progress-bar {
        margin: 20px;
        height: 6px;
        background: #e5e7eb;
        border-radius: 3px;
        overflow: hidden;
      }
      
      .progress {
        height: 100%;
        background: #22c55e;
        transition: width 0.3s ease;
      }
      
      .progress-text {
        text-align: center;
        font-size: 14px;
        color: #6b7280;
        margin-bottom: 20px;
      }
      
      .question-container {
        padding: 0 20px;
        flex-grow: 1;
      }
      
      .question {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 8px;
        color: #1f2937;
      }
      
      .question-hindi {
        font-size: 16px;
        color: #6b7280;
        margin-bottom: 30px;
      }
      
      .options {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      
      .option-card {
        background: white;
        padding: 16px;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        border: 2px solid transparent;
        display: flex;
        align-items: center;
        gap: 15px;
        cursor: pointer;
        transition: all 0.2s;
      }
      
      .option-card.selected {
        border-color: #22c55e;
        background: #f0fdf4;
      }
      
      .option-icon {
        font-size: 24px;
        min-width: 40px;
        text-align: center;
      }
      
      .option-text h4 {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 4px;
        color: #1f2937;
      }
      
      .option-text p {
        font-size: 14px;
        color: #6b7280;
      }
      
      .action-buttons {
        padding: 20px;
        display: flex;
        gap: 12px;
      }
      
      .button {
        flex: 1;
        padding: 14px 20px;
        border: none;
        border-radius: 10px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
      }
      
      .button.primary {
        background: #22c55e;
        color: white;
      }
      
      .button.secondary {
        background: #f3f4f6;
        color: #4b5563;
      }
      
      .language-banner {
        padding: 20px;
        background: #f0fdf4;
        text-align: center;
        border-bottom: 1px solid #dcfce7;
      }
      
      .language-toggle {
        display: inline-flex;
        background: white;
        border-radius: 25px;
        padding: 4px;
        margin-bottom: 10px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      }
      
      .lang-option {
        padding: 8px 20px;
        border-radius: 20px;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
      }
      
      .lang-option.active {
        background: #22c55e;
        color: white;
      }
      
      .hindi-demo {
        padding: 20px;
        background: white;
        margin: 20px;
        border-radius: 16px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      }
      
      .hindi-demo h2 {
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 15px;
        color: #1f2937;
        text-align: center;
        padding-bottom: 15px;
        border-bottom: 1px solid #e5e7eb;
      }
      
      .demo-content {
        display: flex;
        flex-direction: column;
        gap: 15px;
      }
      
      .demo-section h4 {
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 8px;
        color: #1f2937;
      }
      
      .demo-section p {
        font-size: 13px;
        color: #374151;
        line-height: 1.5;
      }
      
      .bottom-nav {
        display: flex;
        background: white;
        border-top: 1px solid #e5e7eb;
        padding: 10px 0;
        margin-top: auto;
      }
      
      .nav-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 8px;
        font-size: 12px;
        font-weight: 500;
        color: #6b7280;
        cursor: pointer;
        transition: color 0.2s;
      }
      
      .nav-item.active {
        color: #22c55e;
      }
      
      .nav-icon {
        font-size: 20px;
        margin-bottom: 4px;
      }
    `;
  }

  async generateScreenshots() {
    console.log('📸 Generating app store screenshots...\n');
    
    for (const deviceName in this.deviceConfigs) {
      const device = this.deviceConfigs[deviceName];
      console.log(`📱 ${device.name} (${device.width}x${device.height})`);
      
      // Create device-specific directory
      const deviceDir = path.join(this.outputDir, deviceName);
      await fs.mkdir(deviceDir, { recursive: true });
      
      for (const template of this.templates) {
        try {
          await this.captureScreenshot(device, template, deviceDir);
          console.log(`  ✅ ${template.name}`);
        } catch (error) {
          console.log(`  ❌ ${template.name}: ${error.message}`);
        }
      }
      
      console.log('');
    }
  }

  async captureScreenshot(device, template, outputDir) {
    const page = await this.browser.newPage();
    
    try {
      // Set viewport
      await page.setViewport({
        width: device.width,
        height: device.height,
        deviceScaleFactor: 2
      });
      
      // Create marketing overlay HTML
      const overlayHTML = this.createMarketingOverlay(template, device);
      const fullHTML = overlayHTML + template.content;
      
      // Set content
      await page.setContent(fullHTML, { waitUntil: 'networkidle0' });
      
      // Wait for content to render
      await page.waitForTimeout(1000);
      
      // Take screenshot
      const filename = `${template.name}.png`;
      const filepath = path.join(outputDir, filename);
      
      await page.screenshot({
        path: filepath,
        fullPage: false,
        type: 'png'
      });
      
    } finally {
      await page.close();
    }
  }

  createMarketingOverlay(template, device) {
    const overlayHeight = device.width > 1000 ? 140 : 100;
    const titleSize = device.width > 1000 ? '28px' : '22px';
    const subtitleSize = device.width > 1000 ? '18px' : '16px';
    
    return `
    <div style="
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: ${overlayHeight}px;
      background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 20px;
      z-index: 10000;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    ">
      <h1 style="
        margin: 0 0 8px 0;
        font-size: ${titleSize};
        font-weight: 800;
        line-height: 1.2;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui;
      ">${template.title}</h1>
      <p style="
        margin: 0;
        font-size: ${subtitleSize};
        font-weight: 500;
        opacity: 0.95;
        line-height: 1.3;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui;
      ">${template.subtitle}</p>
      <div style="
        position: absolute;
        top: 15px;
        left: 20px;
        font-size: 18px;
        font-weight: 900;
        opacity: 0.8;
      ">AccuHeal</div>
    </div>
    <div style="height: ${overlayHeight}px;"></div>
    `;
  }

  async generateFeatureGraphic() {
    console.log('🎨 Generating Google Play feature graphic...');
    
    const page = await this.browser.newPage();
    
    try {
      await page.setViewport({ width: 1024, height: 500 });
      
      const featureGraphicHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui;
            background: linear-gradient(135deg, #22c55e 0%, #16a34a 50%, #15803d 100%);
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 40px 60px;
            color: white;
            overflow: hidden;
            position: relative;
          }
          .background-pattern {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            opacity: 0.1;
            background-image: radial-gradient(circle at 20% 20%, rgba(255,255,255,0.2) 2px, transparent 2px),
                              radial-gradient(circle at 80% 80%, rgba(255,255,255,0.2) 2px, transparent 2px);
            background-size: 50px 50px;
          }
          .content {
            flex: 1;
            max-width: 500px;
            z-index: 2;
          }
          .logo {
            font-size: 48px;
            font-weight: 900;
            margin-bottom: 15px;
            text-shadow: 0 4px 20px rgba(0,0,0,0.3);
          }
          .tagline {
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 12px;
            line-height: 1.2;
          }
          .description {
            font-size: 18px;
            opacity: 0.95;
            line-height: 1.4;
            margin-bottom: 20px;
          }
          .features {
            display: flex;
            gap: 25px;
            font-size: 14px;
            font-weight: 600;
          }
          .feature {
            background: rgba(255,255,255,0.25);
            padding: 10px 18px;
            border-radius: 25px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.3);
          }
          .visual {
            width: 300px;
            height: 420px;
            background: rgba(255,255,255,0.15);
            border-radius: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            backdrop-filter: blur(10px);
            border: 2px solid rgba(255,255,255,0.3);
            z-index: 2;
          }
          .phone-content {
            text-align: center;
            padding: 20px;
          }
          .phone-title {
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 10px;
          }
          .phone-subtitle {
            font-size: 14px;
            opacity: 0.8;
            margin-bottom: 20px;
          }
          .phone-points {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }
          .phone-point {
            background: rgba(255,255,255,0.2);
            padding: 8px 12px;
            border-radius: 8px;
            font-size: 12px;
            backdrop-filter: blur(5px);
          }
        </style>
      </head>
      <body>
        <div class="background-pattern"></div>
        
        <div class="content">
          <div class="logo">AccuHeal</div>
          <div class="tagline">Natural Healing Through Acupressure</div>
          <div class="description">
            24 professional acupressure points with complete Hindi support. 
            Ancient wisdom meets modern technology for natural wellness.
          </div>
          <div class="features">
            <div class="feature">✨ 24 Points</div>
            <div class="feature">🌏 Bilingual</div>
            <div class="feature">🔍 Smart Search</div>
            <div class="feature">💡 Personalized</div>
          </div>
        </div>
        
        <div class="visual">
          <div class="phone-content">
            <div class="phone-title">AccuHeal</div>
            <div class="phone-subtitle">प्राकृतिक चिकित्सा</div>
            <div class="phone-points">
              <div class="phone-point">LI4 - Headache Relief</div>
              <div class="phone-point">ST36 - Digestive Health</div>
              <div class="phone-point">GB20 - Neck Tension</div>
              <div class="phone-point">+ 21 More Points</div>
            </div>
          </div>
        </div>
      </body>
      </html>`;
      
      await page.setContent(featureGraphicHTML);
      await page.waitForTimeout(1000);
      
      const filepath = path.join(this.outputDir, 'feature-graphic.png');
      await page.screenshot({
        path: filepath,
        type: 'png'
      });
      
      console.log('  ✅ Feature graphic generated');
      
    } finally {
      await page.close();
    }
  }

  async generateAppIcons() {
    console.log('🎯 Generating app icons...');
    
    const sizes = [512, 1024];
    
    for (const size of sizes) {
      const page = await this.browser.newPage();
      await page.setViewport({ width: size, height: size });
      
      const iconHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body {
            margin: 0;
            padding: 0;
            background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui;
            color: white;
            position: relative;
            overflow: hidden;
          }
          .icon-bg {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2) 0%, transparent 50%),
                        radial-gradient(circle at 70% 70%, rgba(255,255,255,0.1) 0%, transparent 50%);
          }
          .icon-content {
            text-align: center;
            z-index: 2;
          }
          .icon-letter {
            font-size: ${size * 0.5}px;
            font-weight: 900;
            text-shadow: 0 ${size * 0.02}px ${size * 0.06}px rgba(0, 0, 0, 0.4);
            letter-spacing: -${size * 0.02}px;
            margin-bottom: ${size * 0.05}px;
          }
          .icon-subtitle {
            font-size: ${size * 0.08}px;
            font-weight: 600;
            opacity: 0.9;
            text-shadow: 0 ${size * 0.01}px ${size * 0.03}px rgba(0, 0, 0, 0.3);
          }
        </style>
      </head>
      <body>
        <div class="icon-bg"></div>
        <div class="icon-content">
          <div class="icon-letter">A</div>
          <div class="icon-subtitle">HEAL</div>
        </div>
      </body>
      </html>`;
      
      await page.setContent(iconHTML);
      await page.waitForTimeout(500);
      
      const filepath = path.join(this.outputDir, `app-icon-${size}x${size}.png`);
      await page.screenshot({
        path: filepath,
        type: 'png'
      });
      
      console.log(`  ✅ App icon ${size}x${size}`);
      await page.close();
    }
  }

  async generateReadme() {
    const readmeContent = `# AccuHeal App Store Screenshots

Generated on: ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}

## 📱 Screenshot Overview

This package contains all required app store assets for AccuHeal v1.0.0:

### iOS App Store Screenshots
- **iPhone 6.7"** (1290x2796) - iPhone 14 Pro Max: 5 screenshots
- **iPhone 6.5"** (1242x2688) - iPhone 11 Pro Max: 5 screenshots  
- **iPhone 5.5"** (1242x2208) - iPhone 8 Plus: 5 screenshots
- **iPad Pro 12.9"** (2048x2732): 5 screenshots

### Android Play Store Screenshots
- **Phone** (1080x1920): 5 screenshots
- **7" Tablet** (1200x1920): 5 screenshots
- **10" Tablet** (1600x2560): 5 screenshots

### Additional Assets
- **Feature Graphic** (1024x500) - Google Play Store hero image
- **App Icons** - 512x512 and 1024x1024 for store listings

## 🎯 Screenshot Scenarios

1. **home-screen** - Welcome interface with popular acupressure points
2. **search-interface** - Smart search by symptoms demonstration
3. **point-detail** - Detailed acupressure point information view
4. **questionnaire** - Interactive symptom assessment wizard
5. **bilingual-interface** - Complete Hindi language support showcase

## 📋 App Store Submission Checklist

### iOS App Store Connect
- [ ] Upload iPhone 6.7" screenshots (5 images)
- [ ] Upload iPhone 6.5" screenshots (5 images)  
- [ ] Upload iPhone 5.5" screenshots (5 images)
- [ ] Upload iPad Pro 12.9" screenshots (5 images)
- [ ] Upload 1024x1024 app icon
- [ ] Add app description and keywords
- [ ] Set age rating to 4+ (Medical/Treatment Information)

### Google Play Console
- [ ] Upload Phone screenshots (5 images)
- [ ] Upload 7" Tablet screenshots (5 images)
- [ ] Upload 10" Tablet screenshots (5 images)
- [ ] Upload feature graphic (1024x500)
- [ ] Upload 512x512 app icon
- [ ] Add store listing description
- [ ] Set content rating to "Everyone" with Medical References

## 🎨 Design Features

- **Marketing Overlays**: Each screenshot includes app store-optimized titles and descriptions
- **Bilingual Content**: Demonstrates both English and Hindi language support
- **Professional Layout**: Clean, wellness-focused design with AccuHeal branding
- **Feature Highlights**: Showcases key app functionality and 24 acupressure points

## 📊 AccuHeal App Highlights

- **24 Professional Acupressure Points** with complete documentation
- **Bilingual Support** - Complete English/Hindi interface
- **Smart Search** - By symptoms, body parts, or traditional codes
- **Guided Questionnaire** - Personalized recommendations
- **Offline Functionality** - Works without internet connection
- **Medical Safety** - Proper contraindications and warnings included

## 🚀 Ready for Launch

All assets are optimized for:
- ✅ iOS App Store guidelines compliance
- ✅ Google Play Store requirements
- ✅ High-resolution display support (2x/3x scaling)
- ✅ Professional app store presentation
- ✅ Cultural sensitivity for Indian market

---

**AccuHeal v1.0.0** - Natural healing through traditional acupressure therapy
**Generated by**: AccuHeal Deployment System
**Status**: Ready for App Store Submission 🎉`;

    await fs.writeFile(path.join(this.outputDir, 'README.md'), readmeContent);
    console.log('📝 README.md generated');
  }

  async cleanup() {
    if (this.browser) {
      await this.browser.close();
      console.log('🧹 Browser closed');
    }
  }

  async run() {
    const startTime = Date.now();
    
    try {
      await this.initialize();
      await this.generateScreenshots();
      await this.generateFeatureGraphic();
      await this.generateAppIcons();
      await this.generateReadme();
      
      const duration = ((Date.now() - startTime) / 1000).toFixed(2);
      console.log(`\n🎉 Screenshot generation completed in ${duration}s`);
      console.log(`📁 All assets saved to: ${this.outputDir}`);
      console.log(`📊 Total files: ${this.templates.length * Object.keys(this.deviceConfigs).length + 3} screenshots + assets`);
      
    } catch (error) {
      console.error('\n❌ Screenshot generation failed:', error.message);
      throw error;
    } finally {
      await this.cleanup();
    }
  }
}

// Run if called directly
if (require.main === module) {
  const generator = new StaticScreenshotGenerator();
  generator.run().catch(console.error);
}

module.exports = StaticScreenshotGenerator;