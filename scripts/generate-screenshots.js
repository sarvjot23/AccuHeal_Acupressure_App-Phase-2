/**
 * AccuHeal Screenshot Generation Script
 * 
 * Generates app store screenshots using Puppeteer
 * Creates screenshots for iOS and Android app stores
 */

const puppeteer = require('puppeteer');
const fs = require('fs').promises;
const path = require('path');

class ScreenshotGenerator {
  constructor() {
    this.browser = null;
    this.page = null;
    this.outputDir = path.join(__dirname, '../screenshots');
    
    // Screenshot configurations for different devices
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

    // Screenshot scenarios
    this.scenarios = [
      {
        name: 'home-screen',
        title: 'Welcome to Natural Healing',
        description: 'Discover 24 professional acupressure points',
        url: 'http://localhost:8081',
        selector: '[data-testid="home-screen"]'
      },
      {
        name: 'search-interface', 
        title: 'Smart Search & Discovery',
        description: 'Find points by symptoms, body parts, or codes',
        url: 'http://localhost:8081/search',
        selector: '[data-testid="search-screen"]',
        setup: async (page) => {
          await page.type('input[placeholder*="search"]', 'headache');
          await page.waitForTimeout(1000);
        }
      },
      {
        name: 'point-detail',
        title: 'Detailed Guidance',
        description: 'Step-by-step instructions with safety guidelines',
        url: 'http://localhost:8081/point/li4',
        selector: '[data-testid="point-detail"]'
      },
      {
        name: 'questionnaire',
        title: 'Personalized Recommendations', 
        description: 'Interactive symptom assessment for custom sessions',
        url: 'http://localhost:8081/questionnaire',
        selector: '[data-testid="questionnaire-screen"]'
      },
      {
        name: 'bilingual-interface',
        title: 'Complete Hindi Support',
        description: 'Traditional wellness in your preferred language',
        url: 'http://localhost:8081/settings',
        selector: '[data-testid="settings-screen"]',
        setup: async (page) => {
          await page.click('[data-testid="language-hindi"]');
          await page.waitForTimeout(1000);
        }
      }
    ];
  }

  async initialize() {
    console.log('🚀 Initializing Screenshot Generator...\n');
    
    // Create output directory
    await fs.mkdir(this.outputDir, { recursive: true });
    console.log(`📁 Output directory: ${this.outputDir}`);
    
    // Launch browser
    this.browser = await puppeteer.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage'
      ]
    });
    
    console.log('✅ Browser launched successfully\n');
  }

  async generateScreenshots() {
    console.log('📸 Generating screenshots...\n');
    
    for (const deviceName in this.deviceConfigs) {
      const device = this.deviceConfigs[deviceName];
      console.log(`📱 ${device.name} (${device.width}x${device.height})`);
      
      // Create device-specific directory
      const deviceDir = path.join(this.outputDir, deviceName);
      await fs.mkdir(deviceDir, { recursive: true });
      
      for (const scenario of this.scenarios) {
        try {
          await this.captureScreenshot(device, scenario, deviceDir);
          console.log(`  ✅ ${scenario.name}`);
        } catch (error) {
          console.log(`  ❌ ${scenario.name}: ${error.message}`);
        }
      }
      
      console.log('');
    }
  }

  async captureScreenshot(device, scenario, outputDir) {
    const page = await this.browser.newPage();
    
    try {
      // Set viewport
      await page.setViewport({
        width: device.width,
        height: device.height,
        deviceScaleFactor: 2
      });
      
      // Navigate to page
      await page.goto(scenario.url, { 
        waitUntil: 'networkidle0',
        timeout: 30000 
      });
      
      // Run scenario setup if provided
      if (scenario.setup) {
        await scenario.setup(page);
      }
      
      // Wait for content to load
      if (scenario.selector) {
        await page.waitForSelector(scenario.selector, { timeout: 10000 });
      } else {
        await page.waitForTimeout(2000);
      }
      
      // Add screenshot overlay (title/description)
      await this.addScreenshotOverlay(page, scenario, device);
      
      // Take screenshot
      const filename = `${scenario.name}.png`;
      const filepath = path.join(outputDir, filename);
      
      await page.screenshot({
        path: filepath,
        fullPage: false,
        type: 'png',
        quality: 100
      });
      
    } finally {
      await page.close();
    }
  }

  async addScreenshotOverlay(page, scenario, device) {
    // Add app store-style overlay for marketing screenshots
    await page.evaluate((scenario, device) => {
      // Create overlay container
      const overlay = document.createElement('div');
      overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: linear-gradient(135deg, #4ade80 0%, #22c55e 100%);
        color: white;
        padding: ${device.width > 1000 ? '40px 30px' : '20px 15px'};
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui;
        z-index: 10000;
        text-align: center;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      `;
      
      // Add title
      const title = document.createElement('h1');
      title.textContent = scenario.title;
      title.style.cssText = `
        margin: 0 0 10px 0;
        font-size: ${device.width > 1000 ? '28px' : '22px'};
        font-weight: 700;
        line-height: 1.2;
      `;
      
      // Add description
      const description = document.createElement('p');
      description.textContent = scenario.description;
      description.style.cssText = `
        margin: 0;
        font-size: ${device.width > 1000 ? '18px' : '16px'};
        font-weight: 400;
        opacity: 0.9;
        line-height: 1.3;
      `;
      
      overlay.appendChild(title);
      overlay.appendChild(description);
      
      // Add AccuHeal logo/brand
      const brand = document.createElement('div');
      brand.textContent = 'AccuHeal';
      brand.style.cssText = `
        position: absolute;
        top: 15px;
        left: 20px;
        font-size: ${device.width > 1000 ? '20px' : '16px'};
        font-weight: 800;
        opacity: 0.8;
      `;
      
      overlay.appendChild(brand);
      document.body.appendChild(overlay);
      
      // Adjust main content position
      const mainContent = document.querySelector('#root') || document.body.firstElementChild;
      if (mainContent && mainContent !== overlay) {
        const overlayHeight = overlay.offsetHeight;
        mainContent.style.marginTop = overlayHeight + 'px';
      }
      
    }, scenario, device);
  }

  async generateFeatureGraphic() {
    console.log('🎨 Generating feature graphic for Google Play Store...');
    
    const page = await this.browser.newPage();
    
    try {
      await page.setViewport({ width: 1024, height: 500 });
      
      // Create feature graphic HTML
      await page.setContent(`
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui;
              background: linear-gradient(135deg, #4ade80 0%, #22c55e 50%, #16a34a 100%);
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 40px 60px;
              color: white;
              overflow: hidden;
            }
            .content {
              flex: 1;
              max-width: 500px;
            }
            .logo {
              font-size: 48px;
              font-weight: 900;
              margin-bottom: 15px;
              text-shadow: 0 2px 10px rgba(0,0,0,0.2);
            }
            .tagline {
              font-size: 28px;
              font-weight: 600;
              margin-bottom: 12px;
              line-height: 1.2;
            }
            .description {
              font-size: 18px;
              opacity: 0.9;
              line-height: 1.4;
              margin-bottom: 20px;
            }
            .features {
              display: flex;
              gap: 25px;
              font-size: 14px;
              font-weight: 500;
            }
            .feature {
              background: rgba(255,255,255,0.2);
              padding: 8px 16px;
              border-radius: 20px;
              backdrop-filter: blur(10px);
            }
            .visual {
              width: 300px;
              height: 420px;
              background: rgba(255,255,255,0.1);
              border-radius: 30px;
              display: flex;
              align-items: center;
              justify-content: center;
              position: relative;
              backdrop-filter: blur(10px);
              border: 2px solid rgba(255,255,255,0.2);
            }
            .phone-mockup {
              font-size: 64px;
              opacity: 0.3;
            }
            .floating-elements {
              position: absolute;
              width: 100%;
              height: 100%;
              overflow: hidden;
            }
            .element {
              position: absolute;
              background: rgba(255,255,255,0.1);
              border-radius: 50%;
              animation: float 6s ease-in-out infinite;
            }
            @keyframes float {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-20px) rotate(180deg); }
            }
          </style>
        </head>
        <body>
          <div class="floating-elements">
            <div class="element" style="width: 60px; height: 60px; top: 10%; left: 20%; animation-delay: 0s;"></div>
            <div class="element" style="width: 40px; height: 40px; top: 70%; left: 10%; animation-delay: 2s;"></div>
            <div class="element" style="width: 80px; height: 80px; top: 20%; right: 15%; animation-delay: 4s;"></div>
          </div>
          
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
            <div class="phone-mockup">📱</div>
          </div>
        </body>
        </html>
      `);
      
      await page.waitForTimeout(1000);
      
      const filepath = path.join(this.outputDir, 'feature-graphic.png');
      await page.screenshot({
        path: filepath,
        type: 'png',
        quality: 100
      });
      
      console.log('  ✅ Feature graphic generated');
      
    } finally {
      await page.close();
    }
  }

  async generateAppIcons() {
    console.log('🎯 Generating app icons...');
    
    const page = await this.browser.newPage();
    const sizes = [512, 1024]; // App store sizes
    
    for (const size of sizes) {
      await page.setViewport({ width: size, height: size });
      
      await page.setContent(`
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              margin: 0;
              padding: 0;
              background: linear-gradient(135deg, #4ade80 0%, #22c55e 100%);
              display: flex;
              align-items: center;
              justify-content: center;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui;
              color: white;
            }
            .icon {
              font-size: ${size * 0.4}px;
              font-weight: 900;
              text-shadow: 0 ${size * 0.02}px ${size * 0.06}px rgba(0, 0, 0, 0.3);
              letter-spacing: -${size * 0.01}px;
            }
          </style>
        </head>
        <body>
          <div class="icon">A</div>
        </body>
        </html>
      `);
      
      const filepath = path.join(this.outputDir, `app-icon-${size}x${size}.png`);
      await page.screenshot({
        path: filepath,
        type: 'png',
        quality: 100
      });
      
      console.log(`  ✅ App icon ${size}x${size}`);
    }
    
    await page.close();
  }

  async generateReadme() {
    const readmeContent = `# AccuHeal App Store Screenshots

Generated on: ${new Date().toLocaleDateString()}

## Screenshot Specifications

### iOS App Store
- iPhone 6.7" (1290x2796) - iPhone 14 Pro Max
- iPhone 6.5" (1242x2688) - iPhone 11 Pro Max  
- iPhone 5.5" (1242x2208) - iPhone 8 Plus
- iPad Pro 12.9" (2048x2732)

### Android Play Store
- Phone (1080x1920)
- 7" Tablet (1200x1920)
- 10" Tablet (1600x2560)
- Feature Graphic (1024x500)

## Screenshot Scenarios

1. **Home Screen** - Welcome interface with popular points
2. **Search Interface** - Smart search by symptoms
3. **Point Detail** - Detailed acupressure point information  
4. **Questionnaire** - Interactive symptom assessment
5. **Bilingual Interface** - Hindi language demonstration

## App Icons

- 512x512px (Google Play Store)
- 1024x1024px (iOS App Store)

## Usage

Upload the appropriate screenshots to:
- **iOS**: App Store Connect → My Apps → AccuHeal → App Store → Screenshots
- **Android**: Google Play Console → AccuHeal → Store listing → Graphics

## Notes

- All screenshots include marketing overlays with titles and descriptions
- Feature graphic is optimized for Google Play Store
- Icons use the AccuHeal brand colors and typography
- Screenshots demonstrate key app features and bilingual support
`;

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
      console.log(`📁 All files saved to: ${this.outputDir}`);
      
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
  const generator = new ScreenshotGenerator();
  generator.run().catch(console.error);
}

module.exports = ScreenshotGenerator;