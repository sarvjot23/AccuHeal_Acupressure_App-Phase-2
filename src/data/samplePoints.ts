import { AcupressurePoint } from '@types';

export const samplePoints: AcupressurePoint[] = [
  // Existing 24 points updated to new format
  {
    id: 'li4',
    code: 'LI4',
    name: {
      en: 'Large Intestine 4 - Hegu',
      hi: 'बड़ी आंत 4 - हेगू',
    },
    chineseName: {
      traditional: '合谷',
      pinyin: 'Hégǔ'
    },
    location: {
      en: 'Located in the webbing between the thumb and index finger, closer to the index finger bone.',
      hi: 'अंगूठे और तर्जनी के बीच की जगह में स्थित, तर्जनी की हड्डी के करीब।',
    },
    meridian: {
      name: {
        en: 'Large Intestine',
        hi: 'बड़ी आंत'
      },
      code: 'LI',
      element: 'Metal',
      polarity: 'Yang'
    },
    indications: [
      {
        en: 'Headaches and migraines',
        hi: 'सिरदर्द और माइग्रेन'
      },
      {
        en: 'Stress and tension relief',
        hi: 'तनाव और चिंता से राहत'
      },
      {
        en: 'Pain relief',
        hi: 'दर्द से राहत'
      },
      {
        en: 'Toothache',
        hi: 'दांत दर्द'
      }
    ],
    contraindications: {
      en: 'Avoid during pregnancy. Do not use if you have high blood pressure.',
      hi: 'गर्भावस्था के दौरान बचें। उच्च रक्तचाप है तो उपयोग न करें।',
    },
    technique: {
      en: 'Apply firm pressure with your thumb for 1-3 minutes. Press and release in a rhythmic pattern. Breathe deeply while applying pressure.',
      hi: 'अपने अंगूठे से 1-3 मिनट तक मजबूत दबाव डालें। लयबद्ध तरीके से दबाएं और छोड़ें। दबाव डालते समय गहरी सांस लें।',
    },
    duration: '1-3 minutes',
    pressure: 'Firm',
    bodyPart: ['hand'],
    symptoms: ['headache', 'stress', 'pain relief', 'tension', 'toothache'],
    difficulty: 'Beginner',
    category: 'Classical',
    popularity: 5,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Apply firm pressure with your thumb for 1-3 minutes. Press and release in a rhythmic pattern. Breathe deeply while applying pressure.',
      hi: 'अपने अंगूठे से 1-3 मिनट तक मजबूत दबाव डालें। लयबद्ध तरीके से दबाएं और छोड़ें। दबाव डालते समय गहरी सांस लें।',
    },
    conditions: ['headache', 'stress', 'pain relief', 'tension'],
    images: ['li4_location.jpg', 'li4_technique.jpg'],
  },
  {
    id: 'gv20',
    code: 'GV20',
    name: {
      en: 'Governing Vessel 20 - Baihui',
      hi: 'गवर्निंग वेसल 20 - बाइहुई',
    },
    chineseName: {
      traditional: '百会',
      pinyin: 'Bǎihuì'
    },
    location: {
      en: 'Located at the top of the head, at the intersection of a line from ear to ear and nose to neck.',
      hi: 'सिर के शीर्ष पर स्थित, कान से कान और नाक से गर्दन की रेखा के प्रतिच्छेदन पर।',
    },
    meridian: {
      name: {
        en: 'Governing Vessel',
        hi: 'गवर्निंग वेसल'
      },
      code: 'GV',
      polarity: 'Yang'
    },
    indications: [
      {
        en: 'Mental clarity and focus',
        hi: 'मानसिक स्पष्टता और एकाग्रता'
      },
      {
        en: 'Headaches',
        hi: 'सिरदर्द'
      },
      {
        en: 'Dizziness',
        hi: 'चक्कर आना'
      },
      {
        en: 'Memory improvement',
        hi: 'स्मृति सुधार'
      }
    ],
    contraindications: {
      en: 'Use gentle pressure only. Avoid if you have head injuries.',
      hi: 'केवल हल्का दबाव का उपयोग करें। सिर की चोट है तो बचें।',
    },
    technique: {
      en: 'Gently press with your middle finger for 1-2 minutes. Use light to medium pressure in circular motions.',
      hi: 'अपनी मध्यमा अंगुली से 1-2 मिनट तक धीरे से दबाएं। गोलाकार गति में हल्का से मध्यम दबाव का उपयोग करें।',
    },
    duration: '1-2 minutes',
    pressure: 'Light',
    bodyPart: ['head'],
    symptoms: ['mental clarity', 'focus', 'dizziness', 'headache', 'memory'],
    difficulty: 'Beginner',
    category: 'Extra',
    popularity: 5,
    
    // Legacy fields
    method: {
      en: 'Gently press with your middle finger for 1-2 minutes. Use light to medium pressure in circular motions.',
      hi: 'अपनी मध्यमा अंगुली से 1-2 मिनट तक धीरे से दबाएं। गोलाकार गति में हल्का से मध्यम दबाव का उपयोग करें।',
    },
    conditions: ['mental clarity', 'focus', 'dizziness', 'headache'],
    images: ['gv20_location.jpg'],
  },
  {
    id: 'gb21',
    code: 'GB21',
    name: {
      en: 'Gallbladder 21 - Jianjing',
      hi: 'गॉलब्लैडर 21 - जियानजिंग',
    },
    chineseName: {
      traditional: '肩井',
      pinyin: 'Jiānjǐng'
    },
    location: {
      en: 'Located on the shoulder, halfway between the neck and the shoulder joint, on the highest point of the shoulder muscle.',
      hi: 'कंधे पर स्थित, गर्दन और कंधे के जोड़ के बीच में, कंधे की मांसपेशी के सबसे ऊंचे बिंदु पर।',
    },
    meridian: {
      name: {
        en: 'Gallbladder',
        hi: 'गॉलब्लैडर'
      },
      code: 'GB',
      element: 'Wood',
      polarity: 'Yang'
    },
    indications: [
      {
        en: 'Shoulder tension and pain',
        hi: 'कंधे में तनाव और दर्द'
      },
      {
        en: 'Neck pain',
        hi: 'गर्दन का दर्द'
      },
      {
        en: 'Stress relief',
        hi: 'तनाव से राहत'
      },
      {
        en: 'Upper back pain',
        hi: 'ऊपरी पीठ का दर्द'
      }
    ],
    contraindications: {
      en: 'Avoid during pregnancy. Do not use excessive pressure.',
      hi: 'गर्भावस्था के दौरान बचें। अधिक दबाव का उपयोग न करें।',
    },
    technique: {
      en: 'Apply medium pressure with your thumb or fingers for 1-2 minutes. You can also gently massage in circular motions.',
      hi: 'अपने अंगूठे या अंगुलियों से 1-2 मिनट तक मध्यम दबाव डालें। आप गोलाकार गति में धीरे से मालिश भी कर सकते हैं।',
    },
    duration: '1-2 minutes',
    pressure: 'Moderate',
    bodyPart: ['shoulder'],
    symptoms: ['shoulder tension', 'neck pain', 'stress', 'upper back pain'],
    difficulty: 'Beginner',
    category: 'Classical',
    popularity: 4,
    
    // Legacy fields
    method: {
      en: 'Apply medium pressure with your thumb or fingers for 1-2 minutes. You can also gently massage in circular motions.',
      hi: 'अपने अंगूठे या अंगुलियों से 1-2 मिनट तक मध्यम दबाव डालें। आप गोलाकार गति में धीरे से मालिश भी कर सकते हैं।',
    },
    conditions: ['shoulder tension', 'neck pain', 'stress', 'upper back pain'],
    images: ['gb21_location.jpg'],
  },
  {
    id: 'lv3',
    code: 'LV3',
    name: {
      en: 'Liver 3 - Taichong',
      hi: 'लिवर 3 - ताइचोंग',
    },
    chineseName: {
      traditional: '太冲',
      pinyin: 'Tàichōng'
    },
    location: {
      en: 'Located on the top of the foot, in the depression between the big toe and second toe, about 2 finger widths from the web.',
      hi: 'पैर के ऊपरी भाग पर स्थित, बड़े पैर की अंगुली और दूसरी अंगुली के बीच के गड्ढे में, जाली से लगभग 2 अंगुली चौड़ाई की दूरी पर।',
    },
    meridian: {
      name: {
        en: 'Liver',
        hi: 'लिवर'
      },
      code: 'LV',
      element: 'Wood',
      polarity: 'Yin'
    },
    indications: [
      {
        en: 'Anxiety and stress',
        hi: 'चिंता और तनाव'
      },
      {
        en: 'Anger management',
        hi: 'गुस्से पर नियंत्रण'
      },
      {
        en: 'Insomnia',
        hi: 'अनिद्रा'
      },
      {
        en: 'Irritability',
        hi: 'चिड़चिड़ाहट'
      }
    ],
    contraindications: {
      en: 'Avoid during pregnancy. Use caution if you have foot injuries.',
      hi: 'गर्भावस्था के दौरान बचें। पैर की चोट है तो सावधानी बरतें।',
    },
    technique: {
      en: 'Apply firm pressure with your thumb for 1-3 minutes. Press deeply and hold, then release. Repeat on both feet.',
      hi: 'अपने अंगूठे से 1-3 मिनट तक मजबूत दबाव डालें। गहराई से दबाएं और रोकें, फिर छोड़ें। दोनों पैरों पर दोहराएं।',
    },
    duration: '1-3 minutes',
    pressure: 'Firm',
    bodyPart: ['foot'],
    symptoms: ['anxiety', 'anger', 'stress', 'insomnia', 'irritability'],
    difficulty: 'Intermediate',
    category: 'Classical',
    popularity: 5,
    
    // Legacy fields
    method: {
      en: 'Apply firm pressure with your thumb for 1-3 minutes. Press deeply and hold, then release. Repeat on both feet.',
      hi: 'अपने अंगूठे से 1-3 मिनट तक मजबूत दबाव डालें। गहराई से दबाएं और रोकें, फिर छोड़ें। दोनों पैरों पर दोहराएं।',
    },
    conditions: ['anxiety', 'anger', 'stress', 'insomnia', 'irritability'],
    images: ['lv3_location.jpg'],
  },
  {
    id: 'sp6',
    code: 'SP6',
    name: {
      en: 'Spleen 6 - Sanyinjiao',
      hi: 'स्प्लीन 6 - सान्यिनजियाओ',
    },
    chineseName: {
      traditional: '三阴交',
      pinyin: 'Sānyīnjiāo'
    },
    location: {
      en: 'Located on the inside of the leg, about 4 finger widths above the inner ankle bone, behind the shin bone.',
      hi: 'पैर के अंदरूनी हिस्से पर स्थित, भीतरी टखने की हड्डी से लगभग 4 अंगुली चौड़ाई ऊपर, पिंडली की हड्डी के पीछे।',
    },
    meridian: {
      name: {
        en: 'Spleen',
        hi: 'स्प्लीन'
      },
      code: 'SP',
      element: 'Earth',
      polarity: 'Yin'
    },
    indications: [
      {
        en: 'Digestive issues',
        hi: 'पाचन संबंधी समस्याएं'
      },
      {
        en: 'Menstrual problems',
        hi: 'मासिक धर्म की समस्याएं'
      },
      {
        en: 'Insomnia',
        hi: 'अनिद्रा'
      },
      {
        en: 'Anxiety',
        hi: 'चिंता'
      }
    ],
    contraindications: {
      en: 'Strictly avoid during pregnancy as it may induce labor. Avoid if you have varicose veins.',
      hi: 'गर्भावस्था के दौरान सख्ती से बचें क्योंकि यह प्रसव पीड़ा को प्रेरित कर सकता है। वैरिकोस वेन्स है तो बचें।',
    },
    technique: {
      en: 'Apply medium to firm pressure with your thumb for 1-3 minutes. Press and hold, breathing deeply.',
      hi: 'अपने अंगूठे से 1-3 मिनट तक मध्यम से मजबूत दबाव डालें। दबाएं और रोकें, गहरी सांस लेते रहें।',
    },
    duration: '1-3 minutes',
    pressure: 'Moderate',
    bodyPart: ['leg'],
    symptoms: ['digestive issues', 'menstrual problems', 'insomnia', 'anxiety'],
    difficulty: 'Intermediate',
    category: 'Classical',
    popularity: 4,
    
    // Legacy fields
    method: {
      en: 'Apply medium to firm pressure with your thumb for 1-3 minutes. Press and hold, breathing deeply.',
      hi: 'अपने अंगूठे से 1-3 मिनट तक मध्यम से मजबूत दबाव डालें। दबाएं और रोकें, गहरी सांस लेते रहें।',
    },
    conditions: ['digestive issues', 'menstrual problems', 'insomnia', 'anxiety'],
    images: ['sp6_location.jpg'],
  },
  {
    id: 'yin_tang',
    code: 'EX-HN3',
    name: {
      en: 'Yintang',
      hi: 'यिनतांग',
    },
    chineseName: {
      traditional: '印堂',
      pinyin: 'Yìntáng'
    },
    location: {
      en: 'Located directly between the eyebrows, at the center of the forehead.',
      hi: 'भौंहों के ठीक बीच में, माथे के केंद्र में स्थित।',
    },
    meridian: {
      name: {
        en: 'Extra Meridian',
        hi: 'अतिरिक्त मेरिडियन'
      },
      code: 'EX',
      polarity: 'Yang'
    },
    indications: [
      {
        en: 'Anxiety and stress',
        hi: 'चिंता और तनाव'
      },
      {
        en: 'Insomnia',
        hi: 'अनिद्रा'
      },
      {
        en: 'Mental clarity',
        hi: 'मानसिक स्पष्टता'
      },
      {
        en: 'Frontal headaches',
        hi: 'माथे का दर्द'
      }
    ],
    contraindications: {
      en: 'Use very gentle pressure. Avoid if you have forehead injuries or severe headaches.',
      hi: 'बहुत हल्का दबाव का उपयोग करें। माथे की चोट या गंभीर सिरदर्द है तो बचें।',
    },
    technique: {
      en: 'Gently press with your middle finger for 1-2 minutes. Use light pressure in circular motions or simply hold.',
      hi: 'अपनी मध्यमा अंगुली से 1-2 मिनट तक धीरे से दबाएं। गोलाकार गति में हल्का दबाव का उपयोग करें या बस रोकें।',
    },
    duration: '1-2 minutes',
    pressure: 'Light',
    bodyPart: ['head'],
    symptoms: ['anxiety', 'stress', 'insomnia', 'mental clarity', 'third eye activation'],
    difficulty: 'Beginner',
    category: 'Extra',
    popularity: 4,
    
    // Legacy fields
    method: {
      en: 'Gently press with your middle finger for 1-2 minutes. Use light pressure in circular motions or simply hold.',
      hi: 'अपनी मध्यमा अंगुली से 1-2 मिनट तक धीरे से दबाएं। गोलाकार गति में हल्का दबाव का उपयोग करें या बस रोकें।',
    },
    conditions: ['anxiety', 'stress', 'insomnia', 'mental clarity', 'third eye activation'],
    images: ['yintang_location.jpg'],
  },
  {
    id: 'pc6',
    code: 'PC6',
    name: {
      en: 'Pericardium 6 - Neiguan',
      hi: 'पेरिकार्डियम 6 - नेइगुआन',
    },
    chineseName: {
      traditional: '内关',
      pinyin: 'Nèiguān'
    },
    location: {
      en: 'Located on the inner forearm, about 3 finger widths above the wrist crease, between the two tendons.',
      hi: 'भीतरी अग्रबाहु पर स्थित, कलाई की रेखा से लगभग 3 अंगुली चौड़ाई ऊपर, दो tendons के बीच में।',
    },
    meridian: {
      name: {
        en: 'Pericardium',
        hi: 'पेरिकार्डियम'
      },
      code: 'PC',
      element: 'Fire',
      polarity: 'Yin'
    },
    indications: [
      {
        en: 'Nausea and motion sickness',
        hi: 'मतली और मोशन सिकनेस'
      },
      {
        en: 'Anxiety',
        hi: 'चिंता'
      },
      {
        en: 'Wrist pain',
        hi: 'कलाई का दर्द'
      },
      {
        en: 'Heart palpitations',
        hi: 'दिल की धड़कन'
      }
    ],
    contraindications: {
      en: 'Avoid excessive pressure. Use caution if you have wrist injuries.',
      hi: 'अधिक दबाव से बचें। कलाई की चोट है तो सावधानी बरतें।',
    },
    technique: {
      en: 'Apply firm pressure with your thumb for 1-2 minutes. Press and hold while breathing deeply.',
      hi: 'अपने अंगूठे से 1-2 मिनट तक मजबूत दबाव डालें। गहरी सांस लेते हुए दबाएं और रोकें।',
    },
    duration: '1-2 minutes',
    pressure: 'Firm',
    bodyPart: ['arm'],
    symptoms: ['nausea', 'motion sickness', 'anxiety', 'wrist pain', 'heart palpitations'],
    difficulty: 'Beginner',
    category: 'Classical',
    popularity: 5,
    
    // Legacy fields
    method: {
      en: 'Apply firm pressure with your thumb for 1-2 minutes. Press and hold while breathing deeply.',
      hi: 'अपने अंगूठे से 1-2 मिनट तक मजबूत दबाव डालें। गहरी सांस लेते हुए दबाएं और रोकें।',
    },
    conditions: ['nausea', 'motion sickness', 'anxiety', 'wrist pain', 'heart palpitations'],
    images: ['pc6_location.jpg'],
  },
  {
    id: 'st36',
    code: 'ST36',
    name: {
      en: 'Stomach 36 - Zusanli',
      hi: 'स्टमक 36 - जुसानली',
    },
    chineseName: {
      traditional: '足三里',
      pinyin: 'Zúsānlǐ'
    },
    location: {
      en: 'Located on the outer side of the leg, about 4 finger widths below the kneecap, next to the shin bone.',
      hi: 'पैर के बाहरी हिस्से पर स्थित, घुटने की टोपी से लगभग 4 अंगुली चौड़ाई नीचे, पिंडली की हड्डी के बगल में।',
    },
    meridian: {
      name: {
        en: 'Stomach',
        hi: 'स्टमक'
      },
      code: 'ST',
      element: 'Earth',
      polarity: 'Yang'
    },
    indications: [
      {
        en: 'Digestive issues',
        hi: 'पाचन संबंधी समस्याएं'
      },
      {
        en: 'Fatigue and energy boost',
        hi: 'थकान और ऊर्जा की कमी'
      },
      {
        en: 'Immunity boost',
        hi: 'प्रतिरक्षा में वृद्धि'
      },
      {
        en: 'Leg weakness',
        hi: 'पैर की कमजोरी'
      }
    ],
    contraindications: {
      en: 'Avoid during pregnancy. Use caution if you have varicose veins.',
      hi: 'गर्भावस्था के दौरान बचें। वैरिकोस वेन्स है तो सावधानी बरतें।',
    },
    technique: {
      en: 'Apply firm pressure with your thumb for 2-3 minutes. Massage in clockwise circular motions.',
      hi: 'अपने अंगूठे से 2-3 मिनट तक मजबूत दबाव डालें। घड़ी की दिशा में गोलाकार गति में मालिश करें।',
    },
    duration: '2-3 minutes',
    pressure: 'Firm',
    bodyPart: ['leg'],
    symptoms: ['digestive issues', 'fatigue', 'immunity boost', 'leg weakness', 'nausea'],
    difficulty: 'Beginner',
    category: 'Classical',
    popularity: 5,
    
    // Legacy fields
    method: {
      en: 'Apply firm pressure with your thumb for 2-3 minutes. Massage in clockwise circular motions.',
      hi: 'अपने अंगूठे से 2-3 मिनट तक मजबूत दबाव डालें। घड़ी की दिशा में गोलाकार गति में मालिश करें।',
    },
    conditions: ['digestive issues', 'fatigue', 'immunity boost', 'leg weakness', 'nausea'],
    images: ['st36_location.jpg'],
  },

  // NEW ESSENTIAL POINTS (25 additional points from research)
  {
    id: 'li11',
    code: 'LI11',
    name: {
      en: 'Large Intestine 11 - Quchi',
      hi: 'बड़ी आंत 11 - क्यूची',
    },
    chineseName: {
      traditional: '曲池',
      pinyin: 'Qūchí'
    },
    location: {
      en: 'Located at the lateral end of the elbow crease, in the depression on the outer edge of the elbow when the arm is bent at 90 degrees.',
      hi: 'कोहनी की बाहरी किनार पर स्थित, जब बांह 90 डिग्री पर मुड़ी हो तो कोहनी की रेखा के अंत में गड्ढे में।',
    },
    meridian: {
      name: {
        en: 'Large Intestine',
        hi: 'बड़ी आंत'
      },
      code: 'LI',
      element: 'Metal',
      polarity: 'Yang'
    },
    indications: [
      {
        en: 'Fever and inflammation',
        hi: 'बुखार और सूजन'
      },
      {
        en: 'Elbow pain and tennis elbow',
        hi: 'कोहनी का दर्द और टेनिस एल्बो'
      },
      {
        en: 'Skin conditions',
        hi: 'त्वचा संबंधी समस्याएं'
      },
      {
        en: 'Hypertension',
        hi: 'उच्च रक्तचाप'
      }
    ],
    contraindications: {
      en: 'Use moderate pressure only. Avoid during pregnancy.',
      hi: 'केवल मध्यम दबाव का उपयोग करें। गर्भावस्था के दौरान बचें।',
    },
    technique: {
      en: 'Apply firm pressure with thumb for 1-2 minutes while flexing and extending the elbow.',
      hi: 'कोहनी को मोड़ते और सीधा करते हुए अंगूठे से 1-2 मिनट तक मजबूत दबाव डालें।',
    },
    duration: '1-2 minutes',
    pressure: 'Firm',
    bodyPart: ['elbow'],
    symptoms: ['fever', 'elbow pain', 'skin conditions', 'hypertension', 'tennis elbow'],
    difficulty: 'Beginner',
    category: 'Classical',
    popularity: 4,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Apply firm pressure with thumb for 1-2 minutes while flexing and extending the elbow.',
      hi: 'कोहनी को मोड़ते और सीधा करते हुए अंगूठे से 1-2 मिनट तक मजबूत दबाव डालें।',
    },
    conditions: ['fever', 'elbow pain', 'skin conditions', 'tennis elbow'],
    images: ['li11_location.jpg'],
  },
  {
    id: 'bl2',
    code: 'BL2',
    name: {
      en: 'Bladder 2 - Zanzhu',
      hi: 'ब्लैडर 2 - जानझू',
    },
    chineseName: {
      traditional: '攢竹',
      pinyin: 'Cuánzhú'
    },
    location: {
      en: 'Located at the inner end of the eyebrow, in the small depression at the medial end of the eyebrow.',
      hi: 'भौंह के भीतरी सिरे पर स्थित, भौंह के मध्य सिरे के छोटे गड्ढे में।',
    },
    meridian: {
      name: {
        en: 'Bladder',
        hi: 'ब्लैडर'
      },
      code: 'BL',
      element: 'Water',
      polarity: 'Yang'
    },
    indications: [
      {
        en: 'Headaches and migraines',
        hi: 'सिरदर्द और माइग्रेन'
      },
      {
        en: 'Eye strain and fatigue',
        hi: 'आंखों का तनाव और थकान'
      },
      {
        en: 'Frontal sinusitis',
        hi: 'माथे की साइनस की सूजन'
      },
      {
        en: 'Eyebrow pain',
        hi: 'भौंह का दर्द'
      }
    ],
    contraindications: {
      en: 'Use very gentle pressure. Avoid if eye injuries present.',
      hi: 'बहुत हल्का दबाव का उपयोग करें। आंख की चोट है तो बचें।',
    },
    technique: {
      en: 'Gently press with index fingers for 30 seconds to 1 minute using light circular motions.',
      hi: 'तर्जनी अंगुलियों से 30 सेकंड से 1 मिनट तक हल्की गोलाकार गति में धीरे से दबाएं।',
    },
    duration: '30 seconds-1 minute',
    pressure: 'Light',
    bodyPart: ['face'],
    symptoms: ['headache', 'eye strain', 'frontal sinusitis', 'eyebrow pain'],
    difficulty: 'Beginner',
    category: 'Classical',
    popularity: 3,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Gently press with index fingers for 30 seconds to 1 minute using light circular motions.',
      hi: 'तर्जनी अंगुलियों से 30 सेकंड से 1 मिनट तक हल्की गोलाकार गति में धीरे से दबाएं।',
    },
    conditions: ['headache', 'eye strain', 'frontal sinusitis', 'eyebrow pain'],
    images: ['bl2_location.jpg'],
  },
  {
    id: 'st6',
    code: 'ST6',
    name: {
      en: 'Stomach 6 - Jiache',
      hi: 'स्टमक 6 - जियाचे',
    },
    chineseName: {
      traditional: '頰車',
      pinyin: 'Jiáchē'
    },
    location: {
      en: 'Located on the prominence of the masseter muscle, about one finger-width above the lower angle of the jaw.',
      hi: 'जबड़े की मांसपेशी के उभार पर स्थित, जबड़े के निचले कोण से लगभग एक अंगुली चौड़ाई ऊपर।',
    },
    meridian: {
      name: {
        en: 'Stomach',
        hi: 'स्टमक'
      },
      code: 'ST',
      element: 'Earth',
      polarity: 'Yang'
    },
    indications: [
      {
        en: 'TMJ disorders',
        hi: 'TMJ विकार'
      },
      {
        en: 'Jaw pain and tension',
        hi: 'जबड़े का दर्द और तनाव'
      },
      {
        en: 'Facial paralysis',
        hi: 'चेहरे का पक्षाघात'
      },
      {
        en: 'Toothache',
        hi: 'दांत दर्द'
      }
    ],
    contraindications: {
      en: 'Use gentle pressure. Avoid with jaw injuries or recent dental work.',
      hi: 'हल्का दबाव का उपयोग करें। जबड़े की चोट या हाल की दंत चिकित्सा है तो बचें।',
    },
    technique: {
      en: 'Apply moderate pressure with fingertips for 1-2 minutes while opening and closing jaw gently.',
      hi: 'जबड़े को धीरे-धीरे खोलते और बंद करते हुए अंगुली के सिरों से 1-2 मिनट तक मध्यम दबाव डालें।',
    },
    duration: '1-2 minutes',
    pressure: 'Moderate',
    bodyPart: ['face'],
    symptoms: ['TMJ disorders', 'jaw pain', 'facial paralysis', 'toothache', 'grinding teeth'],
    difficulty: 'Beginner',
    category: 'Classical',
    popularity: 3,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Apply moderate pressure with fingertips for 1-2 minutes while opening and closing jaw gently.',
      hi: 'जबड़े को धीरे-धीरे खोलते और बंद करते हुए अंगुली के सिरों से 1-2 मिनट तक मध्यम दबाव डालें।',
    },
    conditions: ['TMJ disorders', 'jaw pain', 'facial paralysis', 'toothache'],
    images: ['st6_location.jpg'],
  },
  {
    id: 'te17',
    code: 'TE17',
    name: {
      en: 'Triple Energizer 17 - Yifeng',
      hi: 'ट्रिपल एनर्जाइज़र 17 - यिफेंग',
    },
    chineseName: {
      traditional: '翳風',
      pinyin: 'Yìfēng'
    },
    location: {
      en: 'Located in the depression behind the earlobe, between the mastoid process and the mandible.',
      hi: 'कान की लौ के पीछे के गड्ढे में स्थित, मास्टॉइड प्रक्रिया और जबड़े के बीच।',
    },
    meridian: {
      name: {
        en: 'Triple Energizer',
        hi: 'ट्रिपल एनर्जाइज़र'
      },
      code: 'TE',
      element: 'Fire',
      polarity: 'Yang'
    },
    indications: [
      {
        en: 'Tinnitus and hearing problems',
        hi: 'कान की आवाज और सुनने की समस्याएं'
      },
      {
        en: 'Ear infections',
        hi: 'कान के संक्रमण'
      },
      {
        en: 'Facial paralysis',
        hi: 'चेहरे का पक्षाघात'
      },
      {
        en: 'Jaw tension',
        hi: 'जबड़े का तनाव'
      }
    ],
    contraindications: {
      en: 'Use very gentle pressure. Avoid with ear infections or hearing aids.',
      hi: 'बहुत हल्का दबाव का उपयोग करें। कान के संक्रमण या हियरिंग एड्स है तो बचें।',
    },
    technique: {
      en: 'Gently press with middle finger for 1 minute using light circular motions.',
      hi: 'मध्यमा अंगुली से 1 मिनट तक हल्की गोलाकार गति में धीरे से दबाएं।',
    },
    duration: '1 minute',
    pressure: 'Light',
    bodyPart: ['ear', 'head'],
    symptoms: ['tinnitus', 'hearing problems', 'ear infections', 'facial paralysis', 'jaw tension'],
    difficulty: 'Intermediate',
    category: 'Classical',
    popularity: 3,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Gently press with middle finger for 1 minute using light circular motions.',
      hi: 'मध्यमा अंगुली से 1 मिनट तक हल्की गोलाकार गति में धीरे से दबाएं।',
    },
    conditions: ['tinnitus', 'hearing problems', 'ear infections', 'facial paralysis'],
    images: ['te17_location.jpg'],
  },
  {
    id: 'gv26',
    code: 'GV26',
    name: {
      en: 'Governing Vessel 26 - Shuigou',
      hi: 'गवर्निंग वेसल 26 - शुइगाओ',
    },
    chineseName: {
      traditional: '水溝',
      pinyin: 'Shuǐgōu'
    },
    location: {
      en: 'Located at the junction of the upper 1/3 and middle 1/3 of the philtrum (groove between nose and upper lip).',
      hi: 'नाक और ऊपरी होंठ के बीच की नाली के ऊपरी 1/3 और मध्य 1/3 के मिलन पर स्थित।',
    },
    meridian: {
      name: {
        en: 'Governing Vessel',
        hi: 'गवर्निंग वेसल'
      },
      code: 'GV',
      polarity: 'Yang'
    },
    indications: [
      {
        en: 'Emergency revival',
        hi: 'आपातकालीन पुनर्जीवन'
      },
      {
        en: 'Fainting and shock',
        hi: 'बेहोशी और शॉक'
      },
      {
        en: 'Mental clarity',
        hi: 'मानसिक स्पष्टता'
      },
      {
        en: 'Nasal congestion',
        hi: 'नाक की बंद'
      }
    ],
    contraindications: {
      en: 'Use gentle pressure only. For emergency use, seek medical attention.',
      hi: 'केवल हल्का दबाव का उपयोग करें। आपातकाल के लिए, चिकित्सा सहायता लें।',
    },
    technique: {
      en: 'Apply firm upward pressure with fingernail for 10-30 seconds.',
      hi: 'नाखून से 10-30 सेकंड तक ऊपर की ओर मजबूत दबाव डालें।',
    },
    duration: '10-30 seconds',
    pressure: 'Firm',
    bodyPart: ['face'],
    symptoms: ['emergency revival', 'fainting', 'shock', 'mental clarity', 'nasal congestion'],
    difficulty: 'Advanced',
    category: 'Extra',
    popularity: 2,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Apply firm upward pressure with fingernail for 10-30 seconds.',
      hi: 'नाखून से 10-30 सेकंड तक ऊपर की ओर मजबूत दबाव डालें।',
    },
    conditions: ['emergency revival', 'fainting', 'shock', 'mental clarity'],
    images: ['gv26_location.jpg'],
  },
  {
    id: 'ht7',
    code: 'HT7',
    name: {
      en: 'Heart 7 - Shenmen',
      hi: 'हार्ट 7 - शेनमेन',
    },
    chineseName: {
      traditional: '神門',
      pinyin: 'Shénmén'
    },
    location: {
      en: 'Located on the wrist crease, on the pinky side, in the depression next to the tendon.',
      hi: 'कलाई की रेखा पर स्थित, छोटी अंगुली की तरफ, tendon के बगल के गड्ढे में।',
    },
    meridian: {
      name: {
        en: 'Heart',
        hi: 'हार्ट'
      },
      code: 'HT',
      element: 'Fire',
      polarity: 'Yin'
    },
    indications: [
      {
        en: 'Insomnia and sleep disorders',
        hi: 'अनिद्रा और नींद की समस्याएं'
      },
      {
        en: 'Anxiety and panic attacks',
        hi: 'चिंता और घबराहट के दौरे'
      },
      {
        en: 'Heart palpitations',
        hi: 'दिल की धड़कन'
      },
      {
        en: 'Memory problems',
        hi: 'याददाश्त की समस्याएं'
      }
    ],
    contraindications: {
      en: 'Use gentle pressure. Avoid with severe heart conditions without medical supervision.',
      hi: 'हल्का दबाव का उपयोग करें। गंभीर हृदय रोग है तो चिकित्सा देखरेख के बिना बचें।',
    },
    technique: {
      en: 'Apply gentle pressure with thumb for 1-3 minutes. Hold and breathe deeply.',
      hi: 'अंगूठे से 1-3 मिनट तक हल्का दबाव डालें। दबाएं और गहरी सांस लें।',
    },
    duration: '1-3 minutes',
    pressure: 'Light',
    bodyPart: ['wrist'],
    symptoms: ['insomnia', 'anxiety', 'heart palpitations', 'memory problems', 'emotional balance'],
    difficulty: 'Beginner',
    category: 'Classical',
    popularity: 5,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Apply gentle pressure with thumb for 1-3 minutes. Hold and breathe deeply.',
      hi: 'अंगूठे से 1-3 मिनट तक हल्का दबाव डालें। दबाएं और गहरी सांस लें।',
    },
    conditions: ['insomnia', 'anxiety', 'heart palpitations', 'memory problems'],
    images: ['ht7_location.jpg'],
  },
  {
    id: 'ki3',
    code: 'KI3',
    name: {
      en: 'Kidney 3 - Taixi',
      hi: 'किडनी 3 - ताइक्सी',
    },
    chineseName: {
      traditional: '太溪',
      pinyin: 'Tàixī'
    },
    location: {
      en: 'Located on the inner ankle, in the depression between the ankle bone and Achilles tendon.',
      hi: 'भीतरी टखने पर स्थित, टखने की हड्डी और एच्लिस टेंडन के बीच के गड्ढे में।',
    },
    meridian: {
      name: {
        en: 'Kidney',
        hi: 'किडनी'
      },
      code: 'KI',
      element: 'Water',
      polarity: 'Yin'
    },
    indications: [
      {
        en: 'Fatigue and energy depletion',
        hi: 'थकान और ऊर्जा की कमी'
      },
      {
        en: 'Lower back pain',
        hi: 'पीठ के निचले हिस्से का दर्द'
      },
      {
        en: 'Kidney support',
        hi: 'किडनी का समर्थन'
      },
      {
        en: 'Reproductive health',
        hi: 'प्रजनन स्वास्थ्य'
      }
    ],
    contraindications: {
      en: 'Avoid during pregnancy. Use gentle pressure with kidney disease.',
      hi: 'गर्भावस्था के दौरान बचें। किडनी रोग है तो हल्का दबाव का उपयोग करें।',
    },
    technique: {
      en: 'Apply firm pressure with thumb for 1-3 minutes. Hold and rotate gently.',
      hi: 'अंगूठे से 1-3 मिनट तक मजबूत दबाव डालें। दबाएं और धीरे से घुमाएं।',
    },
    duration: '1-3 minutes',
    pressure: 'Firm',
    bodyPart: ['ankle'],
    symptoms: ['fatigue', 'lower back pain', 'kidney support', 'reproductive health', 'vitality'],
    difficulty: 'Beginner',
    category: 'Classical',
    popularity: 5,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Apply firm pressure with thumb for 1-3 minutes. Hold and rotate gently.',
      hi: 'अंगूठे से 1-3 मिनट तक मजबूत दबाव डालें। दबाएं और धीरे से घुमाएं।',
    },
    conditions: ['fatigue', 'lower back pain', 'kidney support', 'reproductive health'],
    images: ['ki3_location.jpg'],
  },
  {
    id: 'lu9',
    code: 'LU9',
    name: {
      en: 'Lung 9 - Taiyuan',
      hi: 'लंग 9 - ताइयुआन',
    },
    chineseName: {
      traditional: '太淵',
      pinyin: 'Tàiyuān'
    },
    location: {
      en: 'Located at the wrist crease, on the thumb side, in the depression between tendons where the pulse is felt.',
      hi: 'कलाई की रेखा पर स्थित, अंगूठे की तरफ, tendons के बीच के गड्ढे में जहां नाड़ी महसूस होती है।',
    },
    meridian: {
      name: {
        en: 'Lung',
        hi: 'लंग'
      },
      code: 'LU',
      element: 'Metal',
      polarity: 'Yin'
    },
    indications: [
      {
        en: 'Respiratory issues and cough',
        hi: 'श्वसन संबंधी समस्याएं और खांसी'
      },
      {
        en: 'Asthma and breathing difficulties',
        hi: 'अस्थमा और सांस लेने में कठिनाई'
      },
      {
        en: 'Wrist pain',
        hi: 'कलाई का दर्द'
      },
      {
        en: 'Circulation problems',
        hi: 'रक्त संचार की समस्याएं'
      }
    ],
    contraindications: {
      en: 'Use gentle pressure. Avoid with severe heart conditions.',
      hi: 'हल्का दबाव का उपयोग करें। गंभीर हृदय रोग है तो बचें।',
    },
    technique: {
      en: 'Apply light pressure with thumb for 1-2 minutes. Feel for the pulse and breathe deeply.',
      hi: 'अंगूठे से 1-2 मिनट तक हल्का दबाव डालें। नाड़ी महसूस करें और गहरी सांस लें।',
    },
    duration: '1-2 minutes',
    pressure: 'Light',
    bodyPart: ['wrist'],
    symptoms: ['respiratory issues', 'cough', 'asthma', 'wrist pain', 'circulation'],
    difficulty: 'Beginner',
    category: 'Classical',
    popularity: 4,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Apply light pressure with thumb for 1-2 minutes. Feel for the pulse and breathe deeply.',
      hi: 'अंगूठे से 1-2 मिनट तक हल्का दबाव डालें। नाड़ी महसूस करें और गहरी सांस लें।',
    },
    conditions: ['respiratory issues', 'cough', 'asthma', 'wrist pain'],
    images: ['lu9_location.jpg'],
  },
  {
    id: 'gb20',
    code: 'GB20',
    name: {
      en: 'Gallbladder 20 - Fengchi',
      hi: 'गॉलब्लैडर 20 - फेंगची',
    },
    chineseName: {
      traditional: '風池',
      pinyin: 'Fēngchí'
    },
    location: {
      en: 'Located at the base of the skull, in the hollow below the occipital bone, between neck muscles.',
      hi: 'खोपड़ी के आधार पर स्थित, ऑक्सिपिटल हड्डी के नीचे के खोखले हिस्से में, गर्दन की मांसपेशियों के बीच।',
    },
    meridian: {
      name: {
        en: 'Gallbladder',
        hi: 'गॉलब्लैडर'
      },
      code: 'GB',
      element: 'Wood',
      polarity: 'Yang'
    },
    indications: [
      {
        en: 'Tension headaches',
        hi: 'तनाव के सिरदर्द'
      },
      {
        en: 'Neck pain and stiffness',
        hi: 'गर्दन का दर्द और अकड़न'
      },
      {
        en: 'Cold and flu symptoms',
        hi: 'सर्दी-जुकाम के लक्षण'
      },
      {
        en: 'Eye strain',
        hi: 'आंखों का तनाव'
      }
    ],
    contraindications: {
      en: 'Avoid during pregnancy. Use caution with high blood pressure.',
      hi: 'गर्भावस्था के दौरान बचें। उच्च रक्तचाप है तो सावधानी बरतें।',
    },
    technique: {
      en: 'Apply firm pressure with thumbs for 1-2 minutes while tilting head forward slightly.',
      hi: 'सिर को थोड़ा आगे झुकाते हुए अंगूठों से 1-2 मिनट तक मजबूत दबाव डालें।',
    },
    duration: '1-2 minutes',
    pressure: 'Firm',
    bodyPart: ['neck'],
    symptoms: ['tension headaches', 'neck pain', 'cold symptoms', 'eye strain', 'stiffness'],
    difficulty: 'Intermediate',
    category: 'Classical',
    popularity: 5,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Apply firm pressure with thumbs for 1-2 minutes while tilting head forward slightly.',
      hi: 'सिर को थोड़ा आगे झुकाते हुए अंगूठों से 1-2 मिनट तक मजबूत दबाव डालें।',
    },
    conditions: ['tension headaches', 'neck pain', 'cold symptoms', 'eye strain'],
    images: ['gb20_location.jpg'],
  },
  {
    id: 'sp3',
    code: 'SP3',
    name: {
      en: 'Spleen 3 - Taibai',
      hi: 'स्प्लीन 3 - ताइबाई',
    },
    chineseName: {
      traditional: '太白',
      pinyin: 'Tàibái'
    },
    location: {
      en: 'Located on the inner side of the foot, behind the base of the big toe, in the depression below the joint.',
      hi: 'पैर के भीतरी हिस्से पर स्थित, बड़े पैर की अंगुली के आधार के पीछे, जोड़ के नीचे के गड्ढे में।',
    },
    meridian: {
      name: {
        en: 'Spleen',
        hi: 'स्प्लीन'
      },
      code: 'SP',
      element: 'Earth',
      polarity: 'Yin'
    },
    indications: [
      {
        en: 'Digestive disorders',
        hi: 'पाचन संबंधी विकार'
      },
      {
        en: 'Bloating and gas',
        hi: 'पेट फूलना और गैस'
      },
      {
        en: 'Loose stools',
        hi: 'ढीला मल'
      },
      {
        en: 'Abdominal pain',
        hi: 'पेट दर्द'
      }
    ],
    contraindications: {
      en: 'Use gentle pressure. Avoid during pregnancy.',
      hi: 'हल्का दबाव का उपयोग करें। गर्भावस्था के दौरान बचें।',
    },
    technique: {
      en: 'Apply moderate pressure with thumb for 1-2 minutes in circular motions.',
      hi: 'अंगूठे से 1-2 मिनट तक गोलाकार गति में मध्यम दबाव डालें।',
    },
    duration: '1-2 minutes',
    pressure: 'Moderate',
    bodyPart: ['foot'],
    symptoms: ['digestive disorders', 'bloating', 'gas', 'loose stools', 'abdominal pain'],
    difficulty: 'Beginner',
    category: 'Classical',
    popularity: 3,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Apply moderate pressure with thumb for 1-2 minutes in circular motions.',
      hi: 'अंगूठे से 1-2 मिनट तक गोलाकार गति में मध्यम दबाव डालें।',
    },
    conditions: ['digestive disorders', 'bloating', 'gas', 'abdominal pain'],
    images: ['sp3_location.jpg'],
  },
  {
    id: 'bl23',
    code: 'BL23',
    name: {
      en: 'Bladder 23 - Shenshu',
      hi: 'ब्लैडर 23 - शेंशू',
    },
    chineseName: {
      traditional: '腎俞',
      pinyin: 'Shènshū'
    },
    location: {
      en: 'Located on the back, 1.5 thumb-widths lateral to the spine, at the level of the second lumbar vertebra.',
      hi: 'पीठ पर स्थित, रीढ़ की हड्डी से 1.5 अंगूठा चौड़ाई बाहर की ओर, दूसरी लम्बर कशेरुका के स्तर पर।',
    },
    meridian: {
      name: {
        en: 'Bladder',
        hi: 'ब्लैडर'
      },
      code: 'BL',
      element: 'Water',
      polarity: 'Yang'
    },
    indications: [
      {
        en: 'Kidney and bladder support',
        hi: 'किडनी और मूत्राशय का समर्थन'
      },
      {
        en: 'Lower back pain',
        hi: 'पीठ के निचले हिस्से का दर्द'
      },
      {
        en: 'Urinary disorders',
        hi: 'मूत्र संबंधी विकार'
      },
      {
        en: 'Sexual dysfunction',
        hi: 'यौन दुष्क्रिया'
      }
    ],
    contraindications: {
      en: 'Avoid during pregnancy. Use caution with kidney stones.',
      hi: 'गर्भावस्था के दौरान बचें। किडनी की पथरी है तो सावधानी बरतें।',
    },
    technique: {
      en: 'Apply firm pressure with thumbs for 2-3 minutes or have someone massage the area.',
      hi: 'अंगूठों से 2-3 मिनट तक मजबूत दबाव डालें या किसी से उस क्षेत्र की मालिश कराएं।',
    },
    duration: '2-3 minutes',
    pressure: 'Firm',
    bodyPart: ['back'],
    symptoms: ['kidney support', 'lower back pain', 'urinary disorders', 'sexual dysfunction', 'fatigue'],
    difficulty: 'Advanced',
    category: 'Classical',
    popularity: 3,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Apply firm pressure with thumbs for 2-3 minutes or have someone massage the area.',
      hi: 'अंगूठों से 2-3 मिनट तक मजबूत दबाव डालें या किसी से उस क्षेत्र की मालिश कराएं।',
    },
    conditions: ['kidney support', 'lower back pain', 'urinary disorders', 'fatigue'],
    images: ['bl23_location.jpg'],
  },
  {
    id: 'te5',
    code: 'TE5',
    name: {
      en: 'Triple Energizer 5 - Waiguan',
      hi: 'ट्रिपल एनर्जाइज़र 5 - वाइगुआन',
    },
    chineseName: {
      traditional: '外關',
      pinyin: 'Wàiguān'
    },
    location: {
      en: 'Located on the back of the forearm, about 2 thumb-widths above the wrist, between the two bones.',
      hi: 'अग्रबाहु के पीछे की तरफ स्थित, कलाई से लगभग 2 अंगूठा चौड़ाई ऊपर, दो हड्डियों के बीच।',
    },
    meridian: {
      name: {
        en: 'Triple Energizer',
        hi: 'ट्रिपल एनर्जाइज़र'
      },
      code: 'TE',
      element: 'Fire',
      polarity: 'Yang'
    },
    indications: [
      {
        en: 'Headaches and migraines',
        hi: 'सिरदर्द और माइग्रेन'
      },
      {
        en: 'Neck and shoulder tension',
        hi: 'गर्दन और कंधे का तनाव'
      },
      {
        en: 'Common cold',
        hi: 'सामान्य सर्दी'
      },
      {
        en: 'Wrist and arm pain',
        hi: 'कलाई और बांह का दर्द'
      }
    ],
    contraindications: {
      en: 'Use moderate pressure. Avoid with wrist injuries.',
      hi: 'मध्यम दबाव का उपयोग करें। कलाई की चोट है तो बचें।',
    },
    technique: {
      en: 'Apply firm pressure with thumb for 1-2 minutes while rotating the wrist.',
      hi: 'कलाई को घुमाते हुए अंगूठे से 1-2 मिनट तक मजबूत दबाव डालें।',
    },
    duration: '1-2 minutes',
    pressure: 'Firm',
    bodyPart: ['arm'],
    symptoms: ['headaches', 'neck tension', 'common cold', 'wrist pain', 'shoulder tension'],
    difficulty: 'Intermediate',
    category: 'Classical',
    popularity: 4,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Apply firm pressure with thumb for 1-2 minutes while rotating the wrist.',
      hi: 'कलाई को घुमाते हुए अंगूठे से 1-2 मिनट तक मजबूत दबाव डालें।',
    },
    conditions: ['headaches', 'neck tension', 'common cold', 'wrist pain'],
    images: ['te5_location.jpg'],
  },
  {
    id: 'cv17',
    code: 'CV17',
    name: {
      en: 'Conception Vessel 17 - Danzhong',
      hi: 'कन्सेप्शन वेसल 17 - डानझोंग',
    },
    chineseName: {
      traditional: '膻中',
      pinyin: 'Dānzhōng'
    },
    location: {
      en: 'Located in the center of the chest, between the nipples, at the level of the fourth rib space.',
      hi: 'छाती के बीच में स्थित, निप्पल के बीच, चौथी पसली के स्थान के स्तर पर।',
    },
    meridian: {
      name: {
        en: 'Conception Vessel',
        hi: 'कन्सेप्शन वेसल'
      },
      code: 'CV',
      polarity: 'Yin'
    },
    indications: [
      {
        en: 'Emotional stress and grief',
        hi: 'भावनात्मक तनाव और दुख'
      },
      {
        en: 'Chest tightness',
        hi: 'छाती में जकड़न'
      },
      {
        en: 'Breathing difficulties',
        hi: 'सांस लेने में कठिनाई'
      },
      {
        en: 'Heart palpitations',
        hi: 'दिल की धड़कन'
      }
    ],
    contraindications: {
      en: 'Use very gentle pressure. Avoid during pregnancy and with heart conditions.',
      hi: 'बहुत हल्का दबाव का उपयोग करें। गर्भावस्था और हृदय रोग में बचें।',
    },
    technique: {
      en: 'Apply light pressure with fingertips for 1-2 minutes while taking deep breaths.',
      hi: 'गहरी सांस लेते हुए अंगुली के सिरों से 1-2 मिनट तक हल्का दबाव डालें।',
    },
    duration: '1-2 minutes',
    pressure: 'Light',
    bodyPart: ['chest'],
    symptoms: ['emotional stress', 'chest tightness', 'breathing difficulties', 'heart palpitations', 'grief'],
    difficulty: 'Intermediate',
    category: 'Extra',
    popularity: 4,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Apply light pressure with fingertips for 1-2 minutes while taking deep breaths.',
      hi: 'गहरी सांस लेते हुए अंगुली के सिरों से 1-2 मिनट तक हल्का दबाव डालें।',
    },
    conditions: ['emotional stress', 'chest tightness', 'breathing difficulties', 'heart palpitations'],
    images: ['cv17_location.jpg'],
  },
  {
    id: 'si3',
    code: 'SI3',
    name: {
      en: 'Small Intestine 3 - Houxi',
      hi: 'स्मॉल इंटेस्टाइन 3 - हौक्सी',
    },
    chineseName: {
      traditional: '後溪',
      pinyin: 'Hòuxī'
    },
    location: {
      en: 'Located on the outer edge of the hand, below the pinky finger, where the palm meets the back of the hand.',
      hi: 'हाथ के बाहरी किनारे पर स्थित, छोटी अंगुली के नीचे, जहां हथेली हाथ की पीठ से मिलती है।',
    },
    meridian: {
      name: {
        en: 'Small Intestine',
        hi: 'स्मॉल इंटेस्टाइन'
      },
      code: 'SI',
      element: 'Fire',
      polarity: 'Yang'
    },
    indications: [
      {
        en: 'Neck stiffness and pain',
        hi: 'गर्दन की अकड़न और दर्द'
      },
      {
        en: 'Headaches',
        hi: 'सिरदर्द'
      },
      {
        en: 'Eye strain from computer work',
        hi: 'कंप्यूटर काम से आंखों का तनाव'
      },
      {
        en: 'Emotional agitation',
        hi: 'भावनात्मक बेचैनी'
      }
    ],
    contraindications: {
      en: 'Use gentle pressure. Avoid with hand injuries.',
      hi: 'हल्का दबाव का उपयोग करें। हाथ की चोट है तो बचें।',
    },
    technique: {
      en: 'Apply firm pressure with thumb for 1-2 minutes while making a loose fist.',
      hi: 'ढीली मुट्ठी बनाते हुए अंगूठे से 1-2 मिनट तक मजबूत दबाव डालें।',
    },
    duration: '1-2 minutes',
    pressure: 'Firm',
    bodyPart: ['hand'],
    symptoms: ['neck stiffness', 'headaches', 'eye strain', 'computer fatigue', 'emotional agitation'],
    difficulty: 'Beginner',
    category: 'Classical',
    popularity: 4,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Apply firm pressure with thumb for 1-2 minutes while making a loose fist.',
      hi: 'ढीली मुट्ठी बनाते हुए अंगूठे से 1-2 मिनट तक मजबूत दबाव डालें।',
    },
    conditions: ['neck stiffness', 'headaches', 'eye strain', 'computer fatigue'],
    images: ['si3_location.jpg'],
  },
  {
    id: 'gb34',
    code: 'GB34',
    name: {
      en: 'Gallbladder 34 - Yanglingquan',
      hi: 'गॉलब्लैडर 34 - यांगलिंगक्वान',
    },
    chineseName: {
      traditional: '陽陵泉',
      pinyin: 'Yánglíngquán'
    },
    location: {
      en: 'Located on the outer side of the leg, in the depression below the head of the fibula bone.',
      hi: 'पैर के बाहरी हिस्से पर स्थित, फाइबुला हड्डी के सिरे के नीचे के गड्ढे में।',
    },
    meridian: {
      name: {
        en: 'Gallbladder',
        hi: 'गॉलब्लैडर'
      },
      code: 'GB',
      element: 'Wood',
      polarity: 'Yang'
    },
    indications: [
      {
        en: 'Muscle and tendon problems',
        hi: 'मांसपेशी और टेंडन की समस्याएं'
      },
      {
        en: 'Knee pain and stiffness',
        hi: 'घुटने का दर्द और अकड़न'
      },
      {
        en: 'Hip pain',
        hi: 'कूल्हे का दर्द'
      },
      {
        en: 'Sciatica pain',
        hi: 'साइटिका का दर्द'
      }
    ],
    contraindications: {
      en: 'Avoid during pregnancy. Use caution with knee injuries.',
      hi: 'गर्भावस्था के दौरान बचें। घुटने की चोट है तो सावधानी बरतें।',
    },
    technique: {
      en: 'Apply firm pressure with thumb for 1-3 minutes while gently moving the knee.',
      hi: 'घुटने को धीरे से हिलाते हुए अंगूठे से 1-3 मिनट तक मजबूत दबाव डालें।',
    },
    duration: '1-3 minutes',
    pressure: 'Firm',
    bodyPart: ['leg'],
    symptoms: ['muscle problems', 'knee pain', 'hip pain', 'sciatica', 'tendon issues'],
    difficulty: 'Intermediate',
    category: 'Classical',
    popularity: 4,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Apply firm pressure with thumb for 1-3 minutes while gently moving the knee.',
      hi: 'घुटने को धीरे से हिलाते हुए अंगूठे से 1-3 मिनट तक मजबूत दबाव डालें।',
    },
    conditions: ['muscle problems', 'knee pain', 'hip pain', 'sciatica'],
    images: ['gb34_location.jpg'],
  },
  {
    id: 'sp10',
    code: 'SP10',
    name: {
      en: 'Spleen 10 - Xuehai',
      hi: 'स्प्लीन 10 - क्स्यूहाई',
    },
    chineseName: {
      traditional: '血海',
      pinyin: 'Xuèhǎi'
    },
    location: {
      en: 'Located on the inner thigh, about 3 finger-widths above the kneecap, on the bulge of the thigh muscle.',
      hi: 'भीतरी जांघ पर स्थित, घुटने की टोपी से लगभग 3 अंगुली चौड़ाई ऊपर, जांघ की मांसपेशी के उभार पर।',
    },
    meridian: {
      name: {
        en: 'Spleen',
        hi: 'स्प्लीन'
      },
      code: 'SP',
      element: 'Earth',
      polarity: 'Yin'
    },
    indications: [
      {
        en: 'Menstrual irregularities',
        hi: 'मासिक धर्म की अनियमितताएं'
      },
      {
        en: 'Skin conditions and eczema',
        hi: 'त्वचा की स्थिति और एक्जिमा'
      },
      {
        en: 'Blood circulation issues',
        hi: 'रक्त संचार की समस्याएं'
      },
      {
        en: 'Knee pain',
        hi: 'घुटने का दर्द'
      }
    ],
    contraindications: {
      en: 'Avoid during pregnancy. Use gentle pressure only.',
      hi: 'गर्भावस्था के दौरान बचें। केवल हल्का दबाव का उपयोग करें।',
    },
    technique: {
      en: 'Apply moderate pressure with thumb for 1-2 minutes in circular motions.',
      hi: 'अंगूठे से 1-2 मिनट तक गोलाकार गति में मध्यम दबाव डालें।',
    },
    duration: '1-2 minutes',
    pressure: 'Moderate',
    bodyPart: ['leg'],
    symptoms: ['menstrual irregularities', 'skin conditions', 'circulation issues', 'knee pain'],
    difficulty: 'Beginner',
    category: 'Classical',
    popularity: 3,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Apply moderate pressure with thumb for 1-2 minutes in circular motions.',
      hi: 'अंगूठे से 1-2 मिनट तक गोलाकार गति में मध्यम दबाव डालें।',
    },
    conditions: ['menstrual irregularities', 'skin conditions', 'circulation issues', 'knee pain'],
    images: ['sp10_location.jpg'],
  },
  {
    id: 'pc8',
    code: 'PC8',
    name: {
      en: 'Pericardium 8 - Laogong',
      hi: 'पेरिकार्डियम 8 - लाओगोंग',
    },
    chineseName: {
      traditional: '勞宮',
      pinyin: 'Láogōng'
    },
    location: {
      en: 'Located in the center of the palm, between the 2nd and 3rd metacarpal bones, where the middle finger touches when making a fist.',
      hi: 'हथेली के बीच में स्थित, 2री और 3री मेटाकार्पल हड्डियों के बीच, जहां मुट्ठी बनाने पर मध्यमा अंगुली छूती है।',
    },
    meridian: {
      name: {
        en: 'Pericardium',
        hi: 'पेरिकार्डियम'
      },
      code: 'PC',
      element: 'Fire',
      polarity: 'Yin'
    },
    indications: [
      {
        en: 'Anxiety and nervousness',
        hi: 'चिंता और घबराहट'
      },
      {
        en: 'Insomnia and restlessness',
        hi: 'अनिद्रा और बेचैनी'
      },
      {
        en: 'Palm sweating',
        hi: 'हथेली में पसीना'
      },
      {
        en: 'Heart palpitations',
        hi: 'दिल की धड़कन'
      }
    ],
    contraindications: {
      en: 'Use gentle pressure. Avoid with heart conditions without medical guidance.',
      hi: 'हल्का दबाव का उपयोग करें। हृदय रोग है तो चिकित्सा मार्गदर्शन के बिना बचें।',
    },
    technique: {
      en: 'Apply gentle pressure with opposite thumb for 1-2 minutes while taking deep breaths.',
      hi: 'गहरी सांस लेते हुए विपरीत अंगूठे से 1-2 मिनट तक हल्का दबाव डालें।',
    },
    duration: '1-2 minutes',
    pressure: 'Light',
    bodyPart: ['palm'],
    symptoms: ['anxiety', 'nervousness', 'insomnia', 'palm sweating', 'heart palpitations'],
    difficulty: 'Beginner',
    category: 'Classical',
    popularity: 4,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Apply gentle pressure with opposite thumb for 1-2 minutes while taking deep breaths.',
      hi: 'गहरी सांस लेते हुए विपरीत अंगूठे से 1-2 मिनट तक हल्का दबाव डालें।',
    },
    conditions: ['anxiety', 'nervousness', 'insomnia', 'palm sweating'],
    images: ['pc8_location.jpg'],
  },
  {
    id: 'bl60',
    code: 'BL60',
    name: {
      en: 'Bladder 60 - Kunlun',
      hi: 'ब्लैडर 60 - कुनलुन',
    },
    chineseName: {
      traditional: '崑崙',
      pinyin: 'Kūnlún'
    },
    location: {
      en: 'Located in the depression between the outer ankle bone and the Achilles tendon.',
      hi: 'बाहरी टखने की हड्डी और एच्लिस टेंडन के बीच के गड्ढे में स्थित।',
    },
    meridian: {
      name: {
        en: 'Bladder',
        hi: 'ब्लैडर'
      },
      code: 'BL',
      element: 'Water',
      polarity: 'Yang'
    },
    indications: [
      {
        en: 'Lower back and spine pain',
        hi: 'पीठ के निचले हिस्से और रीढ़ का दर्द'
      },
      {
        en: 'Ankle pain and swelling',
        hi: 'टखने का दर्द और सूजन'
      },
      {
        en: 'Headaches and neck stiffness',
        hi: 'सिरदर्द और गर्दन की अकड़न'
      },
      {
        en: 'Childbirth support',
        hi: 'प्रसव सहायता'
      }
    ],
    contraindications: {
      en: 'STRICTLY avoid during pregnancy as it can induce labor. Use caution with ankle injuries.',
      hi: 'गर्भावस्था के दौरान सख्ती से बचें क्योंकि यह प्रसव को प्रेरित कर सकता है। टखने की चोट है तो सावधानी बरतें।',
    },
    technique: {
      en: 'Apply firm pressure with thumb for 1-2 minutes while rotating the ankle.',
      hi: 'टखने को घुमाते हुए अंगूठे से 1-2 मिनट तक मजबूत दबाव डालें।',
    },
    duration: '1-2 minutes',
    pressure: 'Firm',
    bodyPart: ['ankle'],
    symptoms: ['lower back pain', 'ankle pain', 'headaches', 'neck stiffness', 'spine pain'],
    difficulty: 'Intermediate',
    category: 'Classical',
    popularity: 4,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Apply firm pressure with thumb for 1-2 minutes while rotating the ankle.',
      hi: 'टखने को घुमाते हुए अंगूठे से 1-2 मिनट तक मजबूत दबाव डालें।',
    },
    conditions: ['lower back pain', 'ankle pain', 'headaches', 'neck stiffness'],
    images: ['bl60_location.jpg'],
  },
  {
    id: 'li20',
    code: 'LI20',
    name: {
      en: 'Large Intestine 20 - Yingxiang',
      hi: 'बड़ी आंत 20 - यिंगक्स्यांग',
    },
    chineseName: {
      traditional: '迎香',
      pinyin: 'Yíngxiāng'
    },
    location: {
      en: 'Located beside the nostrils, in the nasolabial groove at the level of the midpoint of the lateral border of the ala nasi.',
      hi: 'नासिका के बगल में स्थित, नाक के पंख के बाहरी किनारे के मध्य बिंदु के स्तर पर नासो-लेबियल खांचे में।',
    },
    meridian: {
      name: {
        en: 'Large Intestine',
        hi: 'बड़ी आंत'
      },
      code: 'LI',
      element: 'Metal',
      polarity: 'Yang'
    },
    indications: [
      {
        en: 'Nasal congestion and sinusitis',
        hi: 'नाक की रुकावट और साइनसाइटिस'
      },
      {
        en: 'Loss of smell',
        hi: 'गंध की हानि'
      },
      {
        en: 'Facial paralysis',
        hi: 'चेहरे का पक्षाघात'
      },
      {
        en: 'Allergic rhinitis',
        hi: 'एलर्जिक राइनाइटिस'
      }
    ],
    contraindications: {
      en: 'Use very gentle pressure. Avoid with severe nasal infections.',
      hi: 'बहुत हल्का दबाव का उपयोग करें। गंभीर नाक के संक्रमण है तो बचें।',
    },
    technique: {
      en: 'Apply gentle pressure with index fingers for 30 seconds to 1 minute using upward circular motions.',
      hi: 'तर्जनी अंगुलियों से 30 सेकंड से 1 मिनट तक ऊपर की ओर गोलाकार गति में हल्का दबाव डालें।',
    },
    duration: '30 seconds-1 minute',
    pressure: 'Light',
    bodyPart: ['face'],
    symptoms: ['nasal congestion', 'sinusitis', 'loss of smell', 'facial paralysis', 'allergies'],
    difficulty: 'Beginner',
    category: 'Classical',
    popularity: 5,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Apply gentle pressure with index fingers for 30 seconds to 1 minute using upward circular motions.',
      hi: 'तर्जनी अंगुलियों से 30 सेकंड से 1 मिनट तक ऊपर की ओर गोलाकार गति में हल्का दबाव डालें।',
    },
    conditions: ['nasal congestion', 'sinusitis', 'loss of smell', 'allergies'],
    images: ['li20_location.jpg'],
  },
  {
    id: 'st25',
    code: 'ST25',
    name: {
      en: 'Stomach 25 - Tianshu',
      hi: 'स्टमक 25 - तियानशू',
    },
    chineseName: {
      traditional: '天樞',
      pinyin: 'Tiānshū'
    },
    location: {
      en: 'Located 2 finger-widths lateral to the navel, at the same horizontal level as the umbilicus.',
      hi: 'नाभि से 2 अंगुली चौड़ाई बाहर की ओर स्थित, नाभि के समान क्षैतिज स्तर पर।',
    },
    meridian: {
      name: {
        en: 'Stomach',
        hi: 'स्टमक'
      },
      code: 'ST',
      element: 'Earth',
      polarity: 'Yang'
    },
    indications: [
      {
        en: 'Constipation and diarrhea',
        hi: 'कब्ज और दस्त'
      },
      {
        en: 'Abdominal pain and bloating',
        hi: 'पेट दर्द और पेट फूलना'
      },
      {
        en: 'Irritable bowel syndrome',
        hi: 'चिड़चिड़ी आंत सिंड्रोम'
      },
      {
        en: 'Digestive disorders',
        hi: 'पाचन संबंधी विकार'
      }
    ],
    contraindications: {
      en: 'Avoid during pregnancy. Use gentle pressure with abdominal conditions.',
      hi: 'गर्भावस्था के दौरान बचें। पेट की समस्याओं के साथ हल्का दबाव का उपयोग करें।',
    },
    technique: {
      en: 'Apply moderate pressure with fingertips for 1-2 minutes in clockwise circular motions.',
      hi: 'अंगुली के सिरों से 1-2 मिनट तक घड़ी की दिशा में गोलाकार गति में मध्यम दबाव डालें।',
    },
    duration: '1-2 minutes',
    pressure: 'Moderate',
    bodyPart: ['abdomen'],
    symptoms: ['constipation', 'diarrhea', 'abdominal pain', 'bloating', 'IBS'],
    difficulty: 'Beginner',
    category: 'Classical',
    popularity: 4,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Apply moderate pressure with fingertips for 1-2 minutes in clockwise circular motions.',
      hi: 'अंगुली के सिरों से 1-2 मिनट तक घड़ी की दिशा में गोलाकार गति में मध्यम दबाव डालें।',
    },
    conditions: ['constipation', 'diarrhea', 'abdominal pain', 'bloating'],
    images: ['st25_location.jpg'],
  },
  {
    id: 'ki7',
    code: 'KI7',
    name: {
      en: 'Kidney 7 - Fuliu',
      hi: 'किडनी 7 - फुलिउ',
    },
    chineseName: {
      traditional: '復溜',
      pinyin: 'Fùliū'
    },
    location: {
      en: 'Located on the inner side of the leg, about 2 finger-widths above KI3, on the anterior border of the Achilles tendon.',
      hi: 'पैर के भीतरी हिस्से पर स्थित, KI3 से लगभग 2 अंगुली चौड़ाई ऊपर, एच्लिस टेंडन के अगले किनारे पर।',
    },
    meridian: {
      name: {
        en: 'Kidney',
        hi: 'किडनी'
      },
      code: 'KI',
      element: 'Water',
      polarity: 'Yin'
    },
    indications: [
      {
        en: 'Night sweats and hot flashes',
        hi: 'रात का पसीना और गर्म लहरें'
      },
      {
        en: 'Leg swelling and edema',
        hi: 'पैर की सूजन और शोफ'
      },
      {
        en: 'Chronic fatigue',
        hi: 'पुरानी थकान'
      },
      {
        en: 'Kidney weakness',
        hi: 'किडनी की कमजोरी'
      }
    ],
    contraindications: {
      en: 'Avoid during pregnancy. Use gentle pressure with kidney disease.',
      hi: 'गर्भावस्था के दौरान बचें। किडनी रोग है तो हल्का दबाव का उपयोग करें।',
    },
    technique: {
      en: 'Apply moderate pressure with thumb for 2-3 minutes while breathing deeply.',
      hi: 'गहरी सांस लेते हुए अंगूठे से 2-3 मिनट तक मध्यम दबाव डालें।',
    },
    duration: '2-3 minutes',
    pressure: 'Moderate',
    bodyPart: ['leg'],
    symptoms: ['night sweats', 'hot flashes', 'leg swelling', 'chronic fatigue', 'kidney weakness'],
    difficulty: 'Intermediate',
    category: 'Classical',
    popularity: 3,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Apply moderate pressure with thumb for 2-3 minutes while breathing deeply.',
      hi: 'गहरी सांस लेते हुए अंगूठे से 2-3 मिनट तक मध्यम दबाव डालें।',
    },
    conditions: ['night sweats', 'hot flashes', 'leg swelling', 'chronic fatigue'],
    images: ['ki7_location.jpg'],
  },
  {
    id: 'ren6',
    code: 'REN6',
    name: {
      en: 'Conception Vessel 6 - Qihai',
      hi: 'कन्सेप्शन वेसल 6 - क्यीहाई',
    },
    chineseName: {
      traditional: '氣海',
      pinyin: 'Qìhǎi'
    },
    location: {
      en: 'Located 1.5 finger-widths below the navel, on the midline of the abdomen.',
      hi: 'नाभि से 1.5 अंगुली चौड़ाई नीचे स्थित, पेट की मध्य रेखा पर।',
    },
    meridian: {
      name: {
        en: 'Conception Vessel',
        hi: 'कन्सेप्शन वेसल'
      },
      code: 'REN',
      polarity: 'Yin'
    },
    indications: [
      {
        en: 'General weakness and fatigue',
        hi: 'सामान्य कमजोरी और थकान'
      },
      {
        en: 'Digestive weakness',
        hi: 'पाचन की कमजोरी'
      },
      {
        en: 'Lower abdominal pain',
        hi: 'पेट के निचले हिस्से का दर्द'
      },
      {
        en: 'Energy restoration',
        hi: 'ऊर्जा की बहाली'
      }
    ],
    contraindications: {
      en: 'Avoid during pregnancy. Use gentle pressure only.',
      hi: 'गर्भावस्था के दौरान बचें। केवल हल्का दबाव का उपयोग करें।',
    },
    technique: {
      en: 'Apply gentle pressure with fingertips for 2-3 minutes in clockwise circular motions.',
      hi: 'अंगुली के सिरों से 2-3 मिनट तक घड़ी की दिशा में गोलाकार गति में हल्का दबाव डालें।',
    },
    duration: '2-3 minutes',
    pressure: 'Light',
    bodyPart: ['abdomen'],
    symptoms: ['general weakness', 'fatigue', 'digestive weakness', 'abdominal pain', 'low energy'],
    difficulty: 'Beginner',
    category: 'Extra',
    popularity: 4,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Apply gentle pressure with fingertips for 2-3 minutes in clockwise circular motions.',
      hi: 'अंगुली के सिरों से 2-3 मिनट तक घड़ी की दिशा में गोलाकार गति में हल्का दबाव डालें।',
    },
    conditions: ['general weakness', 'fatigue', 'digestive weakness', 'abdominal pain'],
    images: ['ren6_location.jpg'],
  },
  {
    id: 'gv16',
    code: 'GV16',
    name: {
      en: 'Governing Vessel 16 - Fengfu',
      hi: 'गवर्निंग वेसल 16 - फेंगफू',
    },
    chineseName: {
      traditional: '風府',
      pinyin: 'Fēngfǔ'
    },
    location: {
      en: 'Located at the center of the nape of the neck, in the depression below the external occipital protuberance.',
      hi: 'गर्दन की नप के बीच में स्थित, बाहरी ऑक्सिपिटल प्रोट्यूबरेंस के नीचे के गड्ढे में।',
    },
    meridian: {
      name: {
        en: 'Governing Vessel',
        hi: 'गवर्निंग वेसल'
      },
      code: 'GV',
      polarity: 'Yang'
    },
    indications: [
      {
        en: 'Mental clarity and focus',
        hi: 'मानसिक स्पष्टता और एकाग्रता'
      },
      {
        en: 'Neck stiffness',
        hi: 'गर्दन की अकड़न'
      },
      {
        en: 'Headaches',
        hi: 'सिरदर्द'
      },
      {
        en: 'Speech difficulties',
        hi: 'बोलने की कठिनाई'
      }
    ],
    contraindications: {
      en: 'Use very gentle pressure. Avoid with neck injuries or severe headaches.',
      hi: 'बहुत हल्का दबाव का उपयोग करें। गर्दन की चोट या गंभीर सिरदर्द है तो बचें।',
    },
    technique: {
      en: 'Apply very gentle pressure with middle finger for 30 seconds to 1 minute.',
      hi: 'मध्यमा अंगुली से 30 सेकंड से 1 मिनट तक बहुत हल्का दबाव डालें।',
    },
    duration: '30 seconds-1 minute',
    pressure: 'Light',
    bodyPart: ['neck'],
    symptoms: ['mental clarity', 'focus', 'neck stiffness', 'headaches', 'speech difficulties'],
    difficulty: 'Advanced',
    category: 'Extra',
    popularity: 3,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Apply very gentle pressure with middle finger for 30 seconds to 1 minute.',
      hi: 'मध्यमा अंगुली से 30 सेकंड से 1 मिनट तक बहुत हल्का दबाव डालें।',
    },
    conditions: ['mental clarity', 'focus', 'neck stiffness', 'headaches'],
    images: ['gv16_location.jpg'],
  },
  {
    id: 'lu1',
    code: 'LU1',
    name: {
      en: 'Lung 1 - Zhongfu',
      hi: 'लंग 1 - झोंगफू',
    },
    chineseName: {
      traditional: '中府',
      pinyin: 'Zhōngfǔ'
    },
    location: {
      en: 'Located in the lateral depression below the outer third of the collarbone, about 1 thumb-width below the clavicle.',
      hi: 'कॉलरबोन के बाहरी तिहाई के नीचे बाहरी गड्ढे में स्थित, हंसली से लगभग 1 अंगूठा चौड़ाई नीचे।',
    },
    meridian: {
      name: {
        en: 'Lung',
        hi: 'लंग'
      },
      code: 'LU',
      element: 'Metal',
      polarity: 'Yin'
    },
    indications: [
      {
        en: 'Cough and bronchitis',
        hi: 'खांसी और ब्रॉन्काइटिस'
      },
      {
        en: 'Chest congestion',
        hi: 'छाती में कंजेशन'
      },
      {
        en: 'Immune system support',
        hi: 'प्रतिरक्षा प्रणाली का समर्थन'
      },
      {
        en: 'Shoulder tension',
        hi: 'कंधे का तनाव'
      }
    ],
    contraindications: {
      en: 'Use gentle pressure. Avoid with severe respiratory conditions.',
      hi: 'हल्का दबाव का उपयोग करें। गंभीर श्वसन संबंधी स्थितियों में बचें।',
    },
    technique: {
      en: 'Apply gentle pressure with thumb for 1-2 minutes while breathing deeply.',
      hi: 'गहरी सांस लेते हुए अंगूठे से 1-2 मिनट तक हल्का दबाव डालें।',
    },
    duration: '1-2 minutes',
    pressure: 'Light',
    bodyPart: ['chest'],
    symptoms: ['cough', 'bronchitis', 'chest congestion', 'immune support', 'shoulder tension'],
    difficulty: 'Beginner',
    category: 'Classical',
    popularity: 4,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Apply gentle pressure with thumb for 1-2 minutes while breathing deeply.',
      hi: 'गहरी सांस लेते हुए अंगूठे से 1-2 मिनट तक हल्का दबाव डालें।',
    },
    conditions: ['cough', 'bronchitis', 'chest congestion', 'immune support'],
    images: ['lu1_location.jpg'],
  },
  {
    id: 'ex21',
    code: 'EX-HN21',
    name: {
      en: 'Sishencong',
      hi: 'सिशेनकॉन्ग',
    },
    chineseName: {
      traditional: '四神聰',
      pinyin: 'Sìshéncōng'
    },
    location: {
      en: 'Four points located 1 thumb-width away from GV20 in the four directions (front, back, left, right).',
      hi: 'चार बिंदु जो GV20 से चार दिशाओं (आगे, पीछे, बाएं, दाएं) में 1 अंगूठा चौड़ाई दूरी पर स्थित हैं।',
    },
    meridian: {
      name: {
        en: 'Extra Meridian',
        hi: 'अतिरिक्त मेरिडियन'
      },
      code: 'EX',
      polarity: 'Yang'
    },
    indications: [
      {
        en: 'Memory enhancement',
        hi: 'स्मृति वृद्धि'
      },
      {
        en: 'Concentration and focus',
        hi: 'एकाग्रता और फोकस'
      },
      {
        en: 'Mental fatigue',
        hi: 'मानसिक थकान'
      },
      {
        en: 'Headaches from studying',
        hi: 'पढ़ाई से सिरदर्द'
      }
    ],
    contraindications: {
      en: 'Use very gentle pressure. Safe for children above 5 years.',
      hi: 'बहुत हल्का दबाव का उपयोग करें। 5 साल से अधिक उम्र के बच्चों के लिए सुरक्षित।',
    },
    technique: {
      en: 'Gently press all four points simultaneously with fingertips for 1 minute.',
      hi: 'अंगुली के सिरों से चारों बिंदुओं को एक साथ 1 मिनट तक धीरे से दबाएं।',
    },
    duration: '1 minute',
    pressure: 'Light',
    bodyPart: ['head'],
    symptoms: ['memory enhancement', 'concentration', 'mental fatigue', 'study headaches', 'brain fog'],
    difficulty: 'Intermediate',
    category: 'Extra',
    popularity: 4,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Gently press all four points simultaneously with fingertips for 1 minute.',
      hi: 'अंगुली के सिरों से चारों बिंदुओं को एक साथ 1 मिनट तक धीरे से दबाएं।',
    },
    conditions: ['memory enhancement', 'concentration', 'mental fatigue', 'study headaches'],
    images: ['ex21_location.jpg'],
  },
  {
    id: 'gb39',
    code: 'GB39',
    name: {
      en: 'Gallbladder 39 - Xuanzhong',
      hi: 'गॉलब्लैडर 39 - क्स्यूआनझोंग',
    },
    chineseName: {
      traditional: '懸鐘',
      pinyin: 'Xuánzhōng'
    },
    location: {
      en: 'Located on the outer side of the leg, 3 finger-widths above the outer ankle bone, in front of the fibula.',
      hi: 'पैर के बाहरी हिस्से पर स्थित, बाहरी टखने की हड्डी से 3 अंगुली चौड़ाई ऊपर, फाइबुला के सामने।',
    },
    meridian: {
      name: {
        en: 'Gallbladder',
        hi: 'गॉलब्लैडर'
      },
      code: 'GB',
      element: 'Wood',
      polarity: 'Yang'
    },
    indications: [
      {
        en: 'Bone and joint health',
        hi: 'हड्डी और जोड़ों का स्वास्थ्य'
      },
      {
        en: 'Neck stiffness',
        hi: 'गर्दन की अकड़न'
      },
      {
        en: 'Ankle weakness',
        hi: 'टखने की कमजोरी'
      },
      {
        en: 'Bone density support',
        hi: 'हड्डी घनत्व का समर्थन'
      }
    ],
    contraindications: {
      en: 'Avoid during pregnancy. Use caution with ankle injuries.',
      hi: 'गर्भावस्था के दौरान बचें। टखने की चोट है तो सावधानी बरतें।',
    },
    technique: {
      en: 'Apply moderate pressure with thumb for 1-2 minutes in circular motions.',
      hi: 'अंगूठे से 1-2 मिनट तक गोलाकार गति में मध्यम दबाव डालें।',
    },
    duration: '1-2 minutes',
    pressure: 'Moderate',
    bodyPart: ['leg'],
    symptoms: ['bone health', 'joint health', 'neck stiffness', 'ankle weakness', 'osteoporosis prevention'],
    difficulty: 'Beginner',
    category: 'Classical',
    popularity: 3,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Apply moderate pressure with thumb for 1-2 minutes in circular motions.',
      hi: 'अंगूठे से 1-2 मिनट तक गोलाकार गति में मध्यम दबाव डालें।',
    },
    conditions: ['bone health', 'joint health', 'neck stiffness', 'ankle weakness'],
    images: ['gb39_location.jpg'],
  },
  {
    id: 'du14',
    code: 'GV14',
    name: {
      en: 'Governing Vessel 14 - Dazhui',
      hi: 'गवर्निंग वेसल 14 - दाझुई',
    },
    chineseName: {
      traditional: '大椎',
      pinyin: 'Dàzhuī'
    },
    location: {
      en: 'Located at the back of the neck, below the 7th cervical vertebra, at the most prominent vertebra when head is bent forward.',
      hi: 'गर्दन के पीछे स्थित, 7वीं ग्रीवा कशेरुका के नीचे, जब सिर आगे झुका हो तो सबसे प्रमुख कशेरुका पर।',
    },
    meridian: {
      name: {
        en: 'Governing Vessel',
        hi: 'गवर्निंग वेसल'
      },
      code: 'GV',
      polarity: 'Yang'
    },
    indications: [
      {
        en: 'Immune system boost',
        hi: 'प्रतिरक्षा प्रणाली को बढ़ावा'
      },
      {
        en: 'Cold and flu prevention',
        hi: 'सर्दी-जुकाम की रोकथाम'
      },
      {
        en: 'Fever reduction',
        hi: 'बुखार कम करना'
      },
      {
        en: 'General vitality',
        hi: 'सामान्य जीवन शक्ति'
      }
    ],
    contraindications: {
      en: 'Use gentle pressure. Avoid with severe neck problems.',
      hi: 'हल्का दबाव का उपयोग करें। गंभीर गर्दन की समस्याओं में बचें।',
    },
    technique: {
      en: 'Apply gentle pressure with middle finger for 1-2 minutes or have someone massage the area.',
      hi: 'मध्यमा अंगुली से 1-2 मिनट तक हल्का दबाव डालें या किसी से उस क्षेत्र की मालिश कराएं।',
    },
    duration: '1-2 minutes',
    pressure: 'Light',
    bodyPart: ['neck'],
    symptoms: ['immune boost', 'cold prevention', 'fever reduction', 'vitality', 'neck tension'],
    difficulty: 'Advanced',
    category: 'Extra',
    popularity: 5,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Apply gentle pressure with middle finger for 1-2 minutes or have someone massage the area.',
      hi: 'मध्यमा अंगुली से 1-2 मिनट तक हल्का दबाव डालें या किसी से उस क्षेत्र की मालिश कराएं।',
    },
    conditions: ['immune boost', 'cold prevention', 'fever reduction', 'vitality'],
    images: ['du14_location.jpg'],
  },

  // Point 33: Stomach 6 (Jiache) - Jaw tension and TMJ
  {
    id: 'st6',
    code: 'ST6',
    name: {
      en: 'Stomach 6 - Jaw Chariot',
      hi: 'पेट 6 - जॉ चैरियट',
    },
    chineseName: {
      traditional: '頰車',
      pinyin: 'Jiáchē'
    },
    location: {
      en: 'Located at the prominence of the masseter muscle when teeth are clenched, about one finger-width above the angle of the jaw.',
      hi: 'दांत भींचने पर मैसेटर मांसपेशी के उभार पर स्थित, जबड़े के कोण से लगभग एक अंगुल ऊपर।',
    },
    meridian: {
      name: {
        en: 'Stomach',
        hi: 'पेट'
      },
      code: 'ST',
      element: 'Earth',
      polarity: 'Yang'
    },
    indications: [
      {
        en: 'TMJ disorders',
        hi: 'टीएमजे विकार'
      },
      {
        en: 'Jaw tension and pain',
        hi: 'जबड़े में तनाव और दर्द'
      },
      {
        en: 'Teeth grinding',
        hi: 'दांत पीसना'
      },
      {
        en: 'Facial paralysis support',
        hi: 'चेहरे के पक्षाघात का समर्थन'
      }
    ],
    contraindications: {
      en: 'Use gentle pressure only. Avoid if severe jaw injury.',
      hi: 'केवल हल्का दबाव का उपयोग करें। गंभीर जबड़े की चोट में बचें।',
    },
    technique: {
      en: 'Place fingertips on the muscle prominence and apply gentle circular pressure for 30-60 seconds.',
      hi: 'मांसपेशी के उभार पर अंगुलियों के सिरे रखें और 30-60 सेकंड के लिए हल्का वृत्ताकार दबाव डालें।',
    },
    duration: '30-60 seconds',
    pressure: 'Light',
    bodyPart: ['face'],
    symptoms: ['jaw pain', 'TMJ', 'teeth grinding', 'facial tension', 'lockjaw'],
    difficulty: 'Beginner',
    category: 'Classical',
    popularity: 4,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Place fingertips on the muscle prominence and apply gentle circular pressure for 30-60 seconds.',
      hi: 'मांसपेशी के उभार पर अंगुलियों के सिरे रखें और 30-60 सेकंड के लिए हल्का वृत्ताकार दबाव डालें।',
    },
    conditions: ['jaw pain', 'TMJ', 'teeth grinding', 'facial tension'],
    images: ['st6_location.jpg'],
  },

  // Point 34: Spleen 4 (Gongsun) - Digestive harmony and stomach issues
  {
    id: 'sp4',
    code: 'SP4',
    name: {
      en: 'Spleen 4 - Grandfather Grandson',
      hi: 'प्लीहा 4 - दादा पोता',
    },
    chineseName: {
      traditional: '公孫',
      pinyin: 'Gōngsūn'
    },
    location: {
      en: 'Located on the inner side of the foot, in the depression distal to the base of the first metatarsal bone.',
      hi: 'पैर के अंदरूनी हिस्से पर, पहली मेटाटार्सल हड्डी के आधार से दूर के गड्ढे में स्थित।',
    },
    meridian: {
      name: {
        en: 'Spleen',
        hi: 'प्लीहा'
      },
      code: 'SP',
      element: 'Earth',
      polarity: 'Yin'
    },
    indications: [
      {
        en: 'Stomach pain and cramps',
        hi: 'पेट दर्द और ऐंठन'
      },
      {
        en: 'Digestive disorders',
        hi: 'पाचन संबंधी विकार'
      },
      {
        en: 'Food stagnation',
        hi: 'भोजन का ठहराव'
      },
      {
        en: 'Heart palpitations',
        hi: 'हृदय की धड़कन'
      }
    ],
    contraindications: {
      en: 'Avoid during pregnancy. Use gentle pressure.',
      hi: 'गर्भावस्था में बचें। हल्का दबाव का उपयोग करें।',
    },
    technique: {
      en: 'Apply steady pressure with thumb for 1-2 minutes while breathing deeply.',
      hi: 'गहरी सांस लेते हुए अंगूठे से 1-2 मिनट तक स्थिर दबाव डालें।',
    },
    duration: '1-2 minutes',
    pressure: 'Moderate',
    bodyPart: ['foot'],
    symptoms: ['stomach pain', 'digestion', 'food stagnation', 'heart palpitations', 'gastric issues'],
    difficulty: 'Intermediate',
    category: 'Classical',
    popularity: 4,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Apply steady pressure with thumb for 1-2 minutes while breathing deeply.',
      hi: 'गहरी सांस लेते हुए अंगूठे से 1-2 मिनट तक स्थिर दबाव डालें।',
    },
    conditions: ['stomach pain', 'digestion', 'food stagnation', 'heart palpitations'],
    images: ['sp4_location.jpg'],
  },

  // Point 35: Bladder 40 (Weizhong) - Lower back and knee support
  {
    id: 'bl40',
    code: 'BL40',
    name: {
      en: 'Bladder 40 - Supporting Middle',
      hi: 'मूत्राशय 40 - सपोर्टिंग मिडिल',
    },
    chineseName: {
      traditional: '委中',
      pinyin: 'Wěizhōng'
    },
    location: {
      en: 'Located at the center of the back of the knee, in the middle of the popliteal crease between the tendons.',
      hi: 'घुटने के पीछे के केंद्र में, टेंडन के बीच पॉप्लिटियल क्रीज के मध्य में स्थित।',
    },
    meridian: {
      name: {
        en: 'Bladder',
        hi: 'मूत्राशय'
      },
      code: 'BL',
      element: 'Water',
      polarity: 'Yang'
    },
    indications: [
      {
        en: 'Lower back pain',
        hi: 'कमर दर्द'
      },
      {
        en: 'Knee pain and stiffness',
        hi: 'घुटने का दर्द और अकड़न'
      },
      {
        en: 'Sciatic pain',
        hi: 'साइटिक दर्द'
      },
      {
        en: 'Hip joint issues',
        hi: 'हिप जॉइंट की समस्याएं'
      }
    ],
    contraindications: {
      en: 'Avoid if varicose veins present behind knee. Use gentle pressure only.',
      hi: 'घुटने के पीछे वैरिकोस वेन्स हों तो बचें। केवल हल्का दबाव का उपयोग करें।',
    },
    technique: {
      en: 'Support the knee and apply gentle pressure with fingers for 30-60 seconds.',
      hi: 'घुटने को सहारा दें और अंगुलियों से 30-60 सेकंड के लिए हल्का दबाव डालें।',
    },
    duration: '30-60 seconds',
    pressure: 'Light',
    bodyPart: ['leg'],
    symptoms: ['back pain', 'knee pain', 'sciatica', 'hip pain', 'leg stiffness'],
    difficulty: 'Advanced',
    category: 'Classical',
    popularity: 5,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Support the knee and apply gentle pressure with fingers for 30-60 seconds.',
      hi: 'घुटने को सहारा दें और अंगुलियों से 30-60 सेकंड के लिए हल्का दबाव डालें।',
    },
    conditions: ['back pain', 'knee pain', 'sciatica', 'hip pain'],
    images: ['bl40_location.jpg'],
  },

  // Point 36: Heart 3 (Shaohai) - Emotional balance and elbow issues
  {
    id: 'ht3',
    code: 'HT3',
    name: {
      en: 'Heart 3 - Lesser Sea',
      hi: 'हृदय 3 - लेसर सी',
    },
    chineseName: {
      traditional: '少海',
      pinyin: 'Shàohǎi'
    },
    location: {
      en: 'Located at the inner side of the elbow, at the medial end of the elbow crease when arm is flexed.',
      hi: 'कोहनी के अंदरूनी हिस्से पर, हाथ मोड़ने पर कोहनी की सिलवट के मध्य छोर पर स्थित।',
    },
    meridian: {
      name: {
        en: 'Heart',
        hi: 'हृदय'
      },
      code: 'HT',
      element: 'Fire',
      polarity: 'Yin'
    },
    indications: [
      {
        en: 'Emotional instability',
        hi: 'भावनात्मक अस्थिरता'
      },
      {
        en: 'Elbow pain and stiffness',
        hi: 'कोहनी का दर्द और अकड़न'
      },
      {
        en: 'Arm numbness',
        hi: 'हाथ की सुन्नता'
      },
      {
        en: 'Mental restlessness',
        hi: 'मानसिक बेचैनी'
      }
    ],
    contraindications: {
      en: 'Use gentle pressure. Avoid with severe elbow injury.',
      hi: 'हल्का दबाव का उपयोग करें। गंभीर कोहनी की चोट में बचें।',
    },
    technique: {
      en: 'Bend elbow and apply gentle pressure with opposite thumb for 1 minute.',
      hi: 'कोहनी मोड़ें और विपरीत अंगूठे से 1 मिनट के लिए हल्का दबाव डालें।',
    },
    duration: '1 minute',
    pressure: 'Light',
    bodyPart: ['arm'],
    symptoms: ['emotional balance', 'elbow pain', 'arm numbness', 'restlessness', 'mental clarity'],
    difficulty: 'Beginner',
    category: 'Classical',
    popularity: 3,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Bend elbow and apply gentle pressure with opposite thumb for 1 minute.',
      hi: 'कोहनी मोड़ें और विपरीत अंगूठे से 1 मिनट के लिए हल्का दबाव डालें।',
    },
    conditions: ['emotional balance', 'elbow pain', 'arm numbness', 'restlessness'],
    images: ['ht3_location.jpg'],
  },

  // Point 37: Gallbladder 21 (Jianjing) - Shoulder and neck tension
  {
    id: 'gb21',
    code: 'GB21',
    name: {
      en: 'Gallbladder 21 - Shoulder Well',
      hi: 'पित्ताशय 21 - शोल्डर वेल',
    },
    chineseName: {
      traditional: '肩井',
      pinyin: 'Jiānjǐng'
    },
    location: {
      en: 'Located at the highest point of the shoulder, midway between the neck and shoulder tip, in the trapezius muscle.',
      hi: 'कंधे के सबसे ऊंचे बिंदु पर, गर्दन और कंधे के सिरे के बीच में, ट्रेपेजियस मांसपेशी में स्थित।',
    },
    meridian: {
      name: {
        en: 'Gallbladder',
        hi: 'पित्ताशय'
      },
      code: 'GB',
      element: 'Wood',
      polarity: 'Yang'
    },
    indications: [
      {
        en: 'Shoulder tension and pain',
        hi: 'कंधे में तनाव और दर्द'
      },
      {
        en: 'Neck stiffness',
        hi: 'गर्दन की अकड़न'
      },
      {
        en: 'Upper back pain',
        hi: 'ऊपरी पीठ दर्द'
      },
      {
        en: 'Stress relief',
        hi: 'तनाव से राहत'
      }
    ],
    contraindications: {
      en: 'Avoid during pregnancy. Use moderate pressure only.',
      hi: 'गर्भावस्था में बचें। केवल मध्यम दबाव का उपयोग करें।',
    },
    technique: {
      en: 'Pinch the shoulder muscle between thumb and fingers, hold for 30-45 seconds.',
      hi: 'अंगूठे और अंगुलियों के बीच कंधे की मांसपेशी को दबाएं, 30-45 सेकंड तक पकड़ें।',
    },
    duration: '30-45 seconds',
    pressure: 'Moderate',
    bodyPart: ['shoulder'],
    symptoms: ['shoulder pain', 'neck stiffness', 'upper back pain', 'stress', 'tension headaches'],
    difficulty: 'Intermediate',
    category: 'Classical',
    popularity: 5,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Pinch the shoulder muscle between thumb and fingers, hold for 30-45 seconds.',
      hi: 'अंगूठे और अंगुलियों के बीच कंधे की मांसपेशी को दबाएं, 30-45 सेकंड तक पकड़ें।',
    },
    conditions: ['shoulder pain', 'neck stiffness', 'upper back pain', 'stress'],
    images: ['gb21_location.jpg'],
  },

  // Point 38: Large Intestine 20 (Yingxiang) - Nasal congestion and allergies
  {
    id: 'li20',
    code: 'LI20',
    name: {
      en: 'Large Intestine 20 - Welcome Fragrance',
      hi: 'बड़ी आंत 20 - वेलकम फ्रैग्रेंस',
    },
    chineseName: {
      traditional: '迎香',
      pinyin: 'Yíngxiāng'
    },
    location: {
      en: 'Located beside the nostrils, at the outer edge where the nostril meets the cheek.',
      hi: 'नाक के छिद्रों के बगल में स्थित, बाहरी किनारे पर जहां नासिका गाल से मिलती है।',
    },
    meridian: {
      name: {
        en: 'Large Intestine',
        hi: 'बड़ी आंत'
      },
      code: 'LI',
      element: 'Metal',
      polarity: 'Yang'
    },
    indications: [
      {
        en: 'Nasal congestion',
        hi: 'नाक की रुकावट'
      },
      {
        en: 'Sinus problems',
        hi: 'साइनस की समस्याएं'
      },
      {
        en: 'Allergic rhinitis',
        hi: 'एलर्जिक रिनाइटिस'
      },
      {
        en: 'Loss of smell',
        hi: 'गंध की हानि'
      }
    ],
    contraindications: {
      en: 'Use very gentle pressure. Avoid with facial injuries or infections.',
      hi: 'बहुत हल्का दबाव का उपयोग करें। चेहरे की चोट या संक्रमण में बचें।',
    },
    technique: {
      en: 'Apply gentle circular pressure with index finger for 30-60 seconds on each side.',
      hi: 'दोनों तरफ तर्जनी अंगुली से 30-60 सेकंड के लिए हल्का वृत्ताकार दबाव डालें।',
    },
    duration: '30-60 seconds',
    pressure: 'Light',
    bodyPart: ['face'],
    symptoms: ['nasal congestion', 'sinus problems', 'allergies', 'runny nose', 'smell loss'],
    difficulty: 'Beginner',
    category: 'Classical',
    popularity: 5,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Apply gentle circular pressure with index finger for 30-60 seconds on each side.',
      hi: 'दोनों तरफ तर्जनी अंगुली से 30-60 सेकंड के लिए हल्का वृत्ताकार दबाव डालें।',
    },
    conditions: ['nasal congestion', 'sinus problems', 'allergies', 'runny nose'],
    images: ['li20_location.jpg'],
  },

  // Point 39: Kidney 27 (Shufu) - Chest congestion and breathing
  {
    id: 'ki27',
    code: 'KI27',
    name: {
      en: 'Kidney 27 - Spirit Storehouse',
      hi: 'किडनी 27 - स्पिरिट स्टोरहाउस',
    },
    chineseName: {
      traditional: '俞府',
      pinyin: 'Shùfǔ'
    },
    location: {
      en: 'Located in the hollow below the collarbone, next to the breastbone, in the first intercostal space.',
      hi: 'कॉलरबोन के नीचे के गड्ढे में, ब्रेस्टबोन के बगल में, पहली इंटरकॉस्टल स्पेस में स्थित।',
    },
    meridian: {
      name: {
        en: 'Kidney',
        hi: 'किडनी'
      },
      code: 'KI',
      element: 'Water',
      polarity: 'Yin'
    },
    indications: [
      {
        en: 'Chest congestion',
        hi: 'छाती की जकड़न'
      },
      {
        en: 'Breathing difficulties',
        hi: 'सांस लेने में कठिनाई'
      },
      {
        en: 'Cough and phlegm',
        hi: 'खांसी और कफ'
      },
      {
        en: 'Anxiety and stress',
        hi: 'चिंता और तनाव'
      }
    ],
    contraindications: {
      en: 'Use gentle pressure only. Avoid with severe chest problems.',
      hi: 'केवल हल्का दबाव का उपयोग करें। गंभीर छाती की समस्याओं में बचें।',
    },
    technique: {
      en: 'Apply gentle pressure with fingertips for 30-45 seconds while breathing deeply.',
      hi: 'गहरी सांस लेते हुए अंगुलियों के सिरे से 30-45 सेकंड के लिए हल्का दबाव डालें।',
    },
    duration: '30-45 seconds',
    pressure: 'Light',
    bodyPart: ['chest'],
    symptoms: ['chest congestion', 'breathing problems', 'cough', 'anxiety', 'stress'],
    difficulty: 'Intermediate',
    category: 'Classical',
    popularity: 3,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Apply gentle pressure with fingertips for 30-45 seconds while breathing deeply.',
      hi: 'गहरी सांस लेते हुए अंगुलियों के सिरे से 30-45 सेकंड के लिए हल्का दबाव डालें।',
    },
    conditions: ['chest congestion', 'breathing problems', 'cough', 'anxiety'],
    images: ['ki27_location.jpg'],
  },

  // Point 40: Triple Heater 3 (Zhongzhu) - Wrist and finger issues
  {
    id: 'th3',
    code: 'TH3',
    name: {
      en: 'Triple Heater 3 - Central Islet',
      hi: 'ट्रिपल हीटर 3 - सेंट्रल आइलेट',
    },
    chineseName: {
      traditional: '中渚',
      pinyin: 'Zhōngzhǔ'
    },
    location: {
      en: 'Located on the back of the hand, between the 4th and 5th metacarpal bones, behind the knuckles.',
      hi: 'हाथ की पीठ पर, 4वीं और 5वीं मेटाकार्पल हड्डियों के बीच, पोरों के पीछे स्थित।',
    },
    meridian: {
      name: {
        en: 'Triple Heater',
        hi: 'ट्रिपल हीटर'
      },
      code: 'TH',
      element: 'Fire',
      polarity: 'Yang'
    },
    indications: [
      {
        en: 'Wrist pain and stiffness',
        hi: 'कलाई का दर्द और अकड़न'
      },
      {
        en: 'Finger joint problems',
        hi: 'उंगली के जोड़ों की समस्याएं'
      },
      {
        en: 'Hand numbness',
        hi: 'हाथ की सुन्नता'
      },
      {
        en: 'Repetitive strain injury',
        hi: 'दोहराव तनाव चोट'
      }
    ],
    contraindications: {
      en: 'Use gentle pressure. Avoid with open wounds on hands.',
      hi: 'हल्का दबाव का उपयोग करें। हाथों पर खुले घाव हों तो बचें।',
    },
    technique: {
      en: 'Apply steady pressure with opposite thumb for 1 minute, then gently rotate wrist.',
      hi: 'विपरीत अंगूठे से 1 मिनट तक स्थिर दबाव डालें, फिर कलाई को धीरे से घुमाएं।',
    },
    duration: '1 minute',
    pressure: 'Moderate',
    bodyPart: ['hand'],
    symptoms: ['wrist pain', 'finger stiffness', 'hand numbness', 'repetitive strain', 'joint pain'],
    difficulty: 'Beginner',
    category: 'Classical',
    popularity: 4,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Apply steady pressure with opposite thumb for 1 minute, then gently rotate wrist.',
      hi: 'विपरीत अंगूठे से 1 मिनट तक स्थिर दबाव डालें, फिर कलाई को धीरे से घुमाएं।',
    },
    conditions: ['wrist pain', 'finger stiffness', 'hand numbness', 'repetitive strain'],
    images: ['th3_location.jpg'],
  },

  // Point 41: Stomach 25 (Tianshu) - Digestive regulation
  {
    id: 'st25',
    code: 'ST25',
    name: {
      en: 'Stomach 25 - Celestial Pivot',
      hi: 'पेट 25 - सेलेस्टियल पिवट',
    },
    chineseName: {
      traditional: '天樞',
      pinyin: 'Tiānshū'
    },
    location: {
      en: 'Located 2 finger-widths to the side of the navel, at the same level as the belly button.',
      hi: 'नाभि के स्तर पर, नाभि से 2 अंगुल की दूरी पर स्थित।',
    },
    meridian: {
      name: {
        en: 'Stomach',
        hi: 'पेट'
      },
      code: 'ST',
      element: 'Earth',
      polarity: 'Yang'
    },
    indications: [
      {
        en: 'Digestive disorders',
        hi: 'पाचन संबंधी विकार'
      },
      {
        en: 'Constipation and diarrhea',
        hi: 'कब्ज और दस्त'
      },
      {
        en: 'Abdominal pain',
        hi: 'पेट दर्द'
      },
      {
        en: 'Bloating and gas',
        hi: 'पेट फूलना और गैस'
      }
    ],
    contraindications: {
      en: 'Avoid during pregnancy and immediately after meals.',
      hi: 'गर्भावस्था में और खाने के तुरंत बाद बचें।',
    },
    technique: {
      en: 'Apply gentle circular massage with palm for 1-2 minutes in clockwise direction.',
      hi: 'हथेली से दक्षिणावर्त दिशा में 1-2 मिनट तक हल्की वृत्ताकार मालिश करें।',
    },
    duration: '1-2 minutes',
    pressure: 'Light',
    bodyPart: ['abdomen'],
    symptoms: ['digestion problems', 'constipation', 'diarrhea', 'abdominal pain', 'bloating'],
    difficulty: 'Beginner',
    category: 'Classical',
    popularity: 5,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Apply gentle circular massage with palm for 1-2 minutes in clockwise direction.',
      hi: 'हथेली से दक्षिणावर्त दिशा में 1-2 मिनट तक हल्की वृत्ताकार मालिश करें।',
    },
    conditions: ['digestion problems', 'constipation', 'diarrhea', 'abdominal pain'],
    images: ['st25_location.jpg'],
  },

  // Point 42: Conception Vessel 4 (Guanyuan) - Energy and vitality
  {
    id: 'cv4',
    code: 'CV4',
    name: {
      en: 'Conception Vessel 4 - Origin Pass',
      hi: 'कंसेप्शन वेसल 4 - ओरिजिन पास',
    },
    chineseName: {
      traditional: '關元',
      pinyin: 'Guānyuán'
    },
    location: {
      en: 'Located 3 finger-widths below the navel, on the centerline of the lower abdomen.',
      hi: 'नाभि से 3 अंगुल नीचे, निचले पेट की मध्य रेखा पर स्थित।',
    },
    meridian: {
      name: {
        en: 'Conception Vessel',
        hi: 'कंसेप्शन वेसल'
      },
      code: 'CV',
      polarity: 'Yin'
    },
    indications: [
      {
        en: 'Low energy and fatigue',
        hi: 'कम ऊर्जा और थकान'
      },
      {
        en: 'Reproductive health',
        hi: 'प्रजनन स्वास्थ्य'
      },
      {
        en: 'Lower abdominal pain',
        hi: 'निचले पेट का दर्द'
      },
      {
        en: 'General weakness',
        hi: 'सामान्य कमजोरी'
      }
    ],
    contraindications: {
      en: 'Avoid during pregnancy and menstruation. Use gentle pressure.',
      hi: 'गर्भावस्था और मासिक धर्म के दौरान बचें। हल्का दबाव का उपयोग करें।',
    },
    technique: {
      en: 'Apply gentle downward pressure with palm for 1-3 minutes while breathing deeply.',
      hi: 'गहरी सांस लेते हुए हथेली से 1-3 मिनट तक हल्का नीचे की ओर दबाव डालें।',
    },
    duration: '1-3 minutes',
    pressure: 'Light',
    bodyPart: ['abdomen'],
    symptoms: ['low energy', 'fatigue', 'reproductive issues', 'abdominal pain', 'weakness'],
    difficulty: 'Intermediate',
    category: 'Extra',
    popularity: 4,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Apply gentle downward pressure with palm for 1-3 minutes while breathing deeply.',
      hi: 'गहरी सांस लेते हुए हथेली से 1-3 मिनट तक हल्का नीचे की ओर दबाव डालें।',
    },
    conditions: ['low energy', 'fatigue', 'reproductive issues', 'abdominal pain'],
    images: ['cv4_location.jpg'],
  },

  // Point 43: Large Intestine 1 (Shangyang) - Acute headaches and finger pain
  {
    id: 'li1',
    code: 'LI1',
    name: {
      en: 'Large Intestine 1 - Shang Yang',
      hi: 'बड़ी आंत 1 - शांग यांग',
    },
    chineseName: {
      traditional: '商陽',
      pinyin: 'Shāngyáng'
    },
    location: {
      en: 'Located at the outer corner of the index fingernail, on the thumb side.',
      hi: 'तर्जनी उंगली के नाखून के बाहरी कोने पर, अंगूठे की तरफ स्थित।',
    },
    meridian: {
      name: {
        en: 'Large Intestine',
        hi: 'बड़ी आंत'
      },
      code: 'LI',
      element: 'Metal',
      polarity: 'Yang'
    },
    indications: [
      {
        en: 'Acute headaches',
        hi: 'तीव्र सिरदर्द'
      },
      {
        en: 'Finger joint pain',
        hi: 'उंगली के जोड़ का दर्द'
      },
      {
        en: 'Mental alertness',
        hi: 'मानसिक सचेतता'
      },
      {
        en: 'Emergency point for fainting',
        hi: 'बेहोशी के लिए आपातकालीन बिंदु'
      }
    ],
    contraindications: {
      en: 'Use firm but careful pressure. Avoid with nail injuries.',
      hi: 'मजबूत लेकिन सावधान दबाव का उपयोग करें। नाखून की चोट में बचें।',
    },
    technique: {
      en: 'Apply firm pressure with opposite thumbnail for 10-30 seconds.',
      hi: 'विपरीत अंगूठे के नाखून से 10-30 सेकंड तक मजबूत दबाव डालें।',
    },
    duration: '10-30 seconds',
    pressure: 'Firm',
    bodyPart: ['hand'],
    symptoms: ['acute headache', 'finger pain', 'mental fog', 'fainting', 'emergency'],
    difficulty: 'Advanced',
    category: 'Classical',
    popularity: 3,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Apply firm pressure with opposite thumbnail for 10-30 seconds.',
      hi: 'विपरीत अंगूठे के नाखून से 10-30 सेकंड तक मजबूत दबाव डालें।',
    },
    conditions: ['acute headache', 'finger pain', 'mental fog', 'fainting'],
    images: ['li1_location.jpg'],
  },

  // Point 44: Spleen 21 (Dabao) - Side pain and breathing
  {
    id: 'sp21',
    code: 'SP21',
    name: {
      en: 'Spleen 21 - Great Wrapping',
      hi: 'प्लीहा 21 - ग्रेट रैपिंग',
    },
    chineseName: {
      traditional: '大包',
      pinyin: 'Dàbāo'
    },
    location: {
      en: 'Located on the side of the chest, in the 6th intercostal space, on the mid-axillary line.',
      hi: 'छाती के किनारे, 6वें इंटरकॉस्टल स्पेस में, मध्य-अक्षीय रेखा पर स्थित।',
    },
    meridian: {
      name: {
        en: 'Spleen',
        hi: 'प्लीहा'
      },
      code: 'SP',
      element: 'Earth',
      polarity: 'Yin'
    },
    indications: [
      {
        en: 'Side chest pain',
        hi: 'छाती के किनारे का दर्द'
      },
      {
        en: 'Intercostal pain',
        hi: 'इंटरकॉस्टल दर्द'
      },
      {
        en: 'Shallow breathing',
        hi: 'उथली सांस'
      },
      {
        en: 'General body aches',
        hi: 'सामान्य शरीर दर्द'
      }
    ],
    contraindications: {
      en: 'Use gentle pressure. Avoid with rib injuries or breathing problems.',
      hi: 'हल्का दबाव का उपयोग करें। पसली की चोट या सांस की समस्याओं में बचें।',
    },
    technique: {
      en: 'Apply gentle pressure with fingertips for 30-60 seconds while breathing deeply.',
      hi: 'गहरी सांस लेते हुए अंगुलियों के सिरे से 30-60 सेकंड तक हल्का दबाव डालें।',
    },
    duration: '30-60 seconds',
    pressure: 'Light',
    bodyPart: ['chest'],
    symptoms: ['side pain', 'intercostal pain', 'shallow breathing', 'body aches', 'chest tightness'],
    difficulty: 'Advanced',
    category: 'Classical',
    popularity: 2,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Apply gentle pressure with fingertips for 30-60 seconds while breathing deeply.',
      hi: 'गहरी सांस लेते हुए अंगुलियों के सिरे से 30-60 सेकंड तक हल्का दबाव डालें।',
    },
    conditions: ['side pain', 'intercostal pain', 'shallow breathing', 'body aches'],
    images: ['sp21_location.jpg'],
  },

  // Point 45: Bladder 2 (Zanzhu) - Eye strain and frontal headaches
  {
    id: 'bl2',
    code: 'BL2',
    name: {
      en: 'Bladder 2 - Gathering Bamboo',
      hi: 'मूत्राशय 2 - गैदरिंग बैम्बू',
    },
    chineseName: {
      traditional: '攢竹',
      pinyin: 'Cuánzhú'
    },
    location: {
      en: 'Located at the inner end of the eyebrow, in the depression above the inner corner of the eye.',
      hi: 'भौंह के अंदरूनी सिरे पर, आंख के अंदरूनी कोने के ऊपर के गड्ढे में स्थित।',
    },
    meridian: {
      name: {
        en: 'Bladder',
        hi: 'मूत्राशय'
      },
      code: 'BL',
      element: 'Water',
      polarity: 'Yang'
    },
    indications: [
      {
        en: 'Eye strain and fatigue',
        hi: 'आंखों का तनाव और थकान'
      },
      {
        en: 'Frontal headaches',
        hi: 'माथे का सिरदर्द'
      },
      {
        en: 'Blurred vision',
        hi: 'धुंधली दृष्टि'
      },
      {
        en: 'Sinus congestion',
        hi: 'साइनस की रुकावट'
      }
    ],
    contraindications: {
      en: 'Use very gentle pressure. Avoid with eye infections or injuries.',
      hi: 'बहुत हल्का दबाव का उपयोग करें। आंख के संक्रमण या चोट में बचें।',
    },
    technique: {
      en: 'Apply gentle upward pressure with fingertips for 30-45 seconds on both sides.',
      hi: 'दोनों तरफ अंगुलियों के सिरे से 30-45 सेकंड तक हल्का ऊपर की ओर दबाव डालें।',
    },
    duration: '30-45 seconds',
    pressure: 'Light',
    bodyPart: ['face'],
    symptoms: ['eye strain', 'frontal headache', 'blurred vision', 'sinus pressure', 'eye fatigue'],
    difficulty: 'Beginner',
    category: 'Classical',
    popularity: 5,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Apply gentle upward pressure with fingertips for 30-45 seconds on both sides.',
      hi: 'दोनों तरफ अंगुलियों के सिरे से 30-45 सेकंड तक हल्का ऊपर की ओर दबाव डालें।',
    },
    conditions: ['eye strain', 'frontal headache', 'blurred vision', 'sinus pressure'],
    images: ['bl2_location.jpg'],
  },

  // Point 46: Liver 14 (Qimen) - Emotional stress and liver support
  {
    id: 'lv14',
    code: 'LV14',
    name: {
      en: 'Liver 14 - Cycle Gate',
      hi: 'लिवर 14 - साइकल गेट',
    },
    chineseName: {
      traditional: '期門',
      pinyin: 'Qīmén'
    },
    location: {
      en: 'Located on the chest, in the 6th intercostal space, directly below the nipple.',
      hi: 'छाती पर, 6वें इंटरकॉस्टल स्पेस में, निप्पल के सीधे नीचे स्थित।',
    },
    meridian: {
      name: {
        en: 'Liver',
        hi: 'लिवर'
      },
      code: 'LV',
      element: 'Wood',
      polarity: 'Yin'
    },
    indications: [
      {
        en: 'Emotional stress and irritability',
        hi: 'भावनात्मक तनाव और चिड़चिड़ाहट'
      },
      {
        en: 'Liver support and detox',
        hi: 'लिवर सपोर्ट और डिटॉक्स'
      },
      {
        en: 'Chest tightness',
        hi: 'छाती की जकड़न'
      },
      {
        en: 'Digestive issues',
        hi: 'पाचन संबंधी समस्याएं'
      }
    ],
    contraindications: {
      en: 'Use gentle pressure. Women should use lighter pressure over breast area.',
      hi: 'हल्का दबाव का उपयोग करें। महिलाओं को स्तन क्षेत्र पर हल्का दबाव करना चाहिए।',
    },
    technique: {
      en: 'Apply gentle circular pressure with fingertips for 1-2 minutes.',
      hi: 'अंगुलियों के सिरे से 1-2 मिनट तक हल्का वृत्ताकार दबाव डालें।',
    },
    duration: '1-2 minutes',
    pressure: 'Light',
    bodyPart: ['chest'],
    symptoms: ['emotional stress', 'irritability', 'liver issues', 'chest tightness', 'anger'],
    difficulty: 'Intermediate',
    category: 'Classical',
    popularity: 4,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Apply gentle circular pressure with fingertips for 1-2 minutes.',
      hi: 'अंगुलियों के सिरे से 1-2 मिनट तक हल्का वृत्ताकार दबाव डालें।',
    },
    conditions: ['emotional stress', 'irritability', 'liver issues', 'chest tightness'],
    images: ['lv14_location.jpg'],
  },

  // Point 47: Small Intestine 19 (Tinggong) - Hearing and ear problems
  {
    id: 'si19',
    code: 'SI19',
    name: {
      en: 'Small Intestine 19 - Listening Palace',
      hi: 'छोटी आंत 19 - लिसनिंग पैलेस',
    },
    chineseName: {
      traditional: '聽宮',
      pinyin: 'Tīnggōng'
    },
    location: {
      en: 'Located in front of the ear, in the depression when the mouth is slightly open.',
      hi: 'कान के आगे, मुंह थोड़ा खुला होने पर बने गड्ढे में स्थित।',
    },
    meridian: {
      name: {
        en: 'Small Intestine',
        hi: 'छोटी आंत'
      },
      code: 'SI',
      element: 'Fire',
      polarity: 'Yang'
    },
    indications: [
      {
        en: 'Hearing loss and tinnitus',
        hi: 'सुनने की हानि और कान में आवाज'
      },
      {
        en: 'Ear pain and infections',
        hi: 'कान दर्द और संक्रमण'
      },
      {
        en: 'TMJ disorders',
        hi: 'टीएमजे विकार'
      },
      {
        en: 'Jaw pain',
        hi: 'जबड़े का दर्द'
      }
    ],
    contraindications: {
      en: 'Use very gentle pressure. Avoid with ear infections or perforated eardrum.',
      hi: 'बहुत हल्का दबाव का उपयोग करें। कान के संक्रमण या छिद्रित कान के पर्दे में बचें।',
    },
    technique: {
      en: 'Apply gentle circular pressure with fingertip for 30-60 seconds with mouth slightly open.',
      hi: 'मुंह थोड़ा खुला रखकर अंगुली के सिरे से 30-60 सेकंड तक हल्का वृत्ताकार दबाव डालें।',
    },
    duration: '30-60 seconds',
    pressure: 'Light',
    bodyPart: ['head'],
    symptoms: ['hearing loss', 'tinnitus', 'ear pain', 'ear infection', 'jaw pain'],
    difficulty: 'Intermediate',
    category: 'Classical',
    popularity: 4,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Apply gentle circular pressure with fingertip for 30-60 seconds with mouth slightly open.',
      hi: 'मुंह थोड़ा खुला रखकर अंगुली के सिरे से 30-60 सेकंड तक हल्का वृत्ताकार दबाव डालें।',
    },
    conditions: ['hearing loss', 'tinnitus', 'ear pain', 'ear infection'],
    images: ['si19_location.jpg'],
  },

  // Point 48: Gallbladder 34 (Yanglingquan) - Knee and lateral leg issues
  {
    id: 'gb34',
    code: 'GB34',
    name: {
      en: 'Gallbladder 34 - Yang Mound Spring',
      hi: 'पित्ताशय 34 - यांग माउंड स्प्रिंग',
    },
    chineseName: {
      traditional: '陽陵泉',
      pinyin: 'Yánglíngquán'
    },
    location: {
      en: 'Located on the outer side of the leg, below the knee, in the depression in front of the fibula head.',
      hi: 'पैर के बाहरी हिस्से पर, घुटने के नीचे, फाइबुला सिर के आगे के गड्ढे में स्थित।',
    },
    meridian: {
      name: {
        en: 'Gallbladder',
        hi: 'पित्ताशय'
      },
      code: 'GB',
      element: 'Wood',
      polarity: 'Yang'
    },
    indications: [
      {
        en: 'Knee pain and stiffness',
        hi: 'घुटने का दर्द और अकड़न'
      },
      {
        en: 'Lateral leg pain',
        hi: 'पैर के किनारे का दर्द'
      },
      {
        en: 'Muscle tension and cramps',
        hi: 'मांसपेशी तनाव और ऐंठन'
      },
      {
        en: 'Hip joint problems',
        hi: 'हिप जॉइंट की समस्याएं'
      }
    ],
    contraindications: {
      en: 'Use moderate pressure. Avoid with severe knee injuries.',
      hi: 'मध्यम दबाव का उपयोग करें। गंभीर घुटने की चोट में बचें।',
    },
    technique: {
      en: 'Apply steady pressure with thumb for 1-2 minutes while gently moving the knee.',
      hi: 'घुटने को धीरे से हिलाते हुए अंगूठे से 1-2 मिनट तक स्थिर दबाव डालें।',
    },
    duration: '1-2 minutes',
    pressure: 'Moderate',
    bodyPart: ['leg'],
    symptoms: ['knee pain', 'lateral leg pain', 'muscle cramps', 'hip problems', 'leg stiffness'],
    difficulty: 'Intermediate',
    category: 'Classical',
    popularity: 5,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Apply steady pressure with thumb for 1-2 minutes while gently moving the knee.',
      hi: 'घुटने को धीरे से हिलाते हुए अंगूठे से 1-2 मिनट तक स्थिर दबाव डालें।',
    },
    conditions: ['knee pain', 'lateral leg pain', 'muscle cramps', 'hip problems'],
    images: ['gb34_location.jpg'],
  },

  // Point 49: Pericardium 8 (Laogong) - Anxiety and palm heat
  {
    id: 'pc8',
    code: 'PC8',
    name: {
      en: 'Pericardium 8 - Labor Palace',
      hi: 'पेरिकार्डियम 8 - लेबर पैलेस',
    },
    chineseName: {
      traditional: '勞宮',
      pinyin: 'Láogōng'
    },
    location: {
      en: 'Located in the center of the palm, between the 2nd and 3rd metacarpal bones, where the middle finger touches when making a fist.',
      hi: 'हथेली के केंद्र में, 2री और 3री मेटाकार्पल हड्डियों के बीच, जहां मुट्ठी बनाने पर मध्यमा उंगली छूती है।',
    },
    meridian: {
      name: {
        en: 'Pericardium',
        hi: 'पेरिकार्डियम'
      },
      code: 'PC',
      element: 'Fire',
      polarity: 'Yin'
    },
    indications: [
      {
        en: 'Anxiety and panic attacks',
        hi: 'चिंता और पैनिक अटैक'
      },
      {
        en: 'Heart palpitations',
        hi: 'हृदय की धड़कन'
      },
      {
        en: 'Palm sweating',
        hi: 'हथेली का पसीना'
      },
      {
        en: 'Insomnia and restlessness',
        hi: 'अनिद्रा और बेचैनी'
      }
    ],
    contraindications: {
      en: 'Use gentle to moderate pressure. Safe for most people.',
      hi: 'हल्के से मध्यम दबाव का उपयोग करें। अधिकांश लोगों के लिए सुरक्षित।',
    },
    technique: {
      en: 'Apply steady pressure with opposite thumb for 1-3 minutes while taking deep breaths.',
      hi: 'गहरी सांस लेते हुए विपरीत अंगूठे से 1-3 मिनट तक स्थिर दबाव डालें।',
    },
    duration: '1-3 minutes',
    pressure: 'Moderate',
    bodyPart: ['hand'],
    symptoms: ['anxiety', 'panic attacks', 'heart palpitations', 'palm sweating', 'insomnia'],
    difficulty: 'Beginner',
    category: 'Classical',
    popularity: 5,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Apply steady pressure with opposite thumb for 1-3 minutes while taking deep breaths.',
      hi: 'गहरी सांस लेते हुए विपरीत अंगूठे से 1-3 मिनट तक स्थिर दबाव डालें।',
    },
    conditions: ['anxiety', 'panic attacks', 'heart palpitations', 'palm sweating'],
    images: ['pc8_location.jpg'],
  },

  // Point 50: Lung 5 (Chize) - Elbow and respiratory issues
  {
    id: 'lu5',
    code: 'LU5',
    name: {
      en: 'Lung 5 - Cubit Marsh',
      hi: 'फेफड़े 5 - क्यूबिट मार्श',
    },
    chineseName: {
      traditional: '尺澤',
      pinyin: 'Chǐzé'
    },
    location: {
      en: 'Located at the outer edge of the biceps tendon, on the thumb side of the elbow crease when arm is bent.',
      hi: 'बांह मोड़ने पर कोहनी की सिलवट पर, बाइसेप्स टेंडन के बाहरी किनारे पर, अंगूठे की तरफ स्थित।',
    },
    meridian: {
      name: {
        en: 'Lung',
        hi: 'फेफड़े'
      },
      code: 'LU',
      element: 'Metal',
      polarity: 'Yin'
    },
    indications: [
      {
        en: 'Cough and bronchitis',
        hi: 'खांसी और ब्रॉन्काइटिस'
      },
      {
        en: 'Elbow pain and tennis elbow',
        hi: 'कोहनी का दर्द और टेनिस एल्बो'
      },
      {
        en: 'Breathing difficulties',
        hi: 'सांस लेने में कठिनाई'
      },
      {
        en: 'Fever and chills',
        hi: 'बुखार और ठंड लगना'
      }
    ],
    contraindications: {
      en: 'Use moderate pressure. Avoid with severe elbow injuries.',
      hi: 'मध्यम दबाव का उपयोग करें। गंभीर कोहनी की चोट में बचें।',
    },
    technique: {
      en: 'Bend elbow and apply firm pressure with opposite thumb for 1-2 minutes.',
      hi: 'कोहनी मोड़ें और विपरीत अंगूठे से 1-2 मिनट तक मजबूत दबाव डालें।',
    },
    duration: '1-2 minutes',
    pressure: 'Firm',
    bodyPart: ['arm'],
    symptoms: ['cough', 'bronchitis', 'elbow pain', 'tennis elbow', 'breathing problems'],
    difficulty: 'Intermediate',
    category: 'Classical',
    popularity: 4,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Bend elbow and apply firm pressure with opposite thumb for 1-2 minutes.',
      hi: 'कोहनी मोड़ें और विपरीत अंगूठे से 1-2 मिनट तक मजबूत दबाव डालें।',
    },
    conditions: ['cough', 'bronchitis', 'elbow pain', 'tennis elbow'],
    images: ['lu5_location.jpg'],
  },
];