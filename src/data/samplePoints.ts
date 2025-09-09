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

  // ===== EVERYDAY ESSENTIAL POINTS - STRESS & SLEEP =====
  
  {
    id: 'yintang',
    code: 'EX-HN3',
    name: {
      en: 'Yintang - Third Eye Point',
      hi: 'यिनतांग - तीसरा नेत्र बिंदु',
    },
    chineseName: {
      traditional: '印堂',
      pinyin: 'Yìntáng'
    },
    location: {
      en: 'Located at the center of the forehead, between the eyebrows, directly above the nose.',
      hi: 'माथे के मध्य में, भौहों के बीच, नाक के ठीक ऊपर स्थित।',
    },
    meridian: {
      name: {
        en: 'Extra Meridian',
        hi: 'अतिरिक्त मेरिडियन'
      },
      code: 'EX',
      element: undefined,
      polarity: undefined
    },
    indications: [
      {
        en: 'Stress and anxiety relief',
        hi: 'तनाव और चिंता से राहत'
      },
      {
        en: 'Insomnia and sleep disorders',
        hi: 'अनिद्रा और नींद संबंधी विकार'
      },
      {
        en: 'Mental fatigue and concentration',
        hi: 'मानसिक थकान और एकाग्रता'
      },
      {
        en: 'Frontal headaches',
        hi: 'ललाट में सिरदर्द'
      },
      {
        en: 'Emotional balance',
        hi: 'भावनात्मक संतुलन'
      }
    ],
    contraindications: {
      en: 'Use very gentle pressure. Avoid if you have any forehead injuries.',
      hi: 'बहुत हल्का दबाव डालें। माथे की चोट हो तो बचें।',
    },
    technique: {
      en: 'Use middle finger to apply gentle, circular pressure for 1-2 minutes while breathing deeply.',
      hi: 'गहरी सांस लेते हुए मध्यमा उंगली से 1-2 मिनट तक हल्का, गोलाकार दबाव डालें।',
    },
    duration: '1-2 minutes',
    pressure: 'Light',
    bodyPart: ['head', 'forehead'],
    symptoms: ['stress', 'anxiety', 'insomnia', 'concentration', 'headache', 'mental fatigue'],
    difficulty: 'Beginner',
    category: 'Extra',
    popularity: 9,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Use middle finger to apply gentle, circular pressure for 1-2 minutes while breathing deeply.',
      hi: 'गहरी सांस लेते हुए मध्यमा उंगली से 1-2 मिनट तक हल्का, गोलाकार दबाव डालें।',
    },
    conditions: ['stress', 'anxiety', 'insomnia', 'concentration', 'headache'],
    images: ['yintang_location.jpg'],
  },

  {
    id: 'anmian',
    code: 'EX-HN16',
    name: {
      en: 'Anmian - Peaceful Sleep',
      hi: 'आनमीन - शांतिपूर्ण नींद',
    },
    chineseName: {
      traditional: '安眠',
      pinyin: 'Ānmián'
    },
    location: {
      en: 'Located behind the ear, in the depression between the mastoid process and the base of the skull.',
      hi: 'कान के पीछे, मैस्टॉइड प्रक्रिया और खोपड़ी के आधार के बीच के गड्ढे में स्थित।',
    },
    meridian: {
      name: {
        en: 'Extra Meridian',
        hi: 'अतिरिक्त मेरिडियन'
      },
      code: 'EX',
      element: 'Water',
      polarity: 'Yin'
    },
    indications: [
      {
        en: 'Insomnia and sleep disorders',
        hi: 'अनिद्रा और नींद संबंधी विकार'
      },
      {
        en: 'Restlessness and agitation',
        hi: 'बेचैनी और उत्तेजना'
      },
      {
        en: 'Dream-disturbed sleep',
        hi: 'सपनों से परेशान नींद'
      },
      {
        en: 'Anxiety before sleep',
        hi: 'सोने से पहले चिंता'
      },
      {
        en: 'Hypertension',
        hi: 'उच्च रक्तचाप'
      }
    ],
    contraindications: {
      en: 'Use gentle pressure. Avoid if you have ear infections or neck injuries.',
      hi: 'हल्का दबाव डालें। कान के संक्रमण या गर्दन की चोट हो तो बचें।',
    },
    technique: {
      en: 'Use thumb or index finger to apply gentle pressure in small circles for 1-3 minutes on both sides.',
      hi: 'अंगूठे या तर्जनी से दोनों तरफ 1-3 मिनट तक छोटे गोलों में हल्का दबाव डालें।',
    },
    duration: '1-3 minutes',
    pressure: 'Light',
    bodyPart: ['head', 'neck', 'ear'],
    symptoms: ['insomnia', 'restlessness', 'anxiety', 'sleep disorders', 'hypertension'],
    difficulty: 'Beginner',
    category: 'Extra',
    popularity: 8,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Use thumb or index finger to apply gentle pressure in small circles for 1-3 minutes on both sides.',
      hi: 'अंगूठे या तर्जनी से दोनों तरफ 1-3 मिनट तक छोटे गोलों में हल्का दबाव डालें।',
    },
    conditions: ['insomnia', 'restlessness', 'anxiety', 'sleep disorders'],
    images: ['anmian_location.jpg'],
  },

  {
    id: 'ear_shenmen',
    code: 'EAR-55',
    name: {
      en: 'Ear Shenmen - Divine Gate',
      hi: 'कान शेनमेन - दिव्य द्वार',
    },
    chineseName: {
      traditional: '耳神門',
      pinyin: 'Ěr Shénmén'
    },
    location: {
      en: 'Located in the upper cartilage of the ear, in the triangular fossa area, about 2/3 up from the bottom.',
      hi: 'कान के ऊपरी उपास्थि में, त्रिकोणीय फोसा क्षेत्र में, नीचे से लगभग 2/3 ऊपर स्थित।',
    },
    meridian: {
      name: {
        en: 'Ear Acupuncture',
        hi: 'कान एक्यूपंक्चर'
      },
      code: 'EAR',
      element: undefined,
      polarity: undefined
    },
    indications: [
      {
        en: 'Stress and anxiety relief',
        hi: 'तनाव और चिंता से राहत'
      },
      {
        en: 'Addiction recovery support',
        hi: 'नशे की लत से मुक्ति में सहायता'
      },
      {
        en: 'Mental clarity and focus',
        hi: 'मानसिक स्पष्टता और ध्यान'
      },
      {
        en: 'Emotional stability',
        hi: 'भावनात्मक स्थिरता'
      },
      {
        en: 'Insomnia from stress',
        hi: 'तनाव से अनिद्रा'
      }
    ],
    contraindications: {
      en: 'Use very gentle pressure. Avoid if you have ear infections or piercings in the area.',
      hi: 'बहुत हल्का दबाव डालें। कान के संक्रमण या उस क्षेत्र में छेद हो तो बचें।',
    },
    technique: {
      en: 'Use tip of index finger to apply very gentle pressure for 30 seconds to 1 minute on both ears.',
      hi: 'तर्जनी की नोक से दोनों कानों में 30 सेकंड से 1 मिनट तक बहुत हल्का दबाव डालें।',
    },
    duration: '30 seconds - 1 minute',
    pressure: 'Light',
    bodyPart: ['ear', 'head'],
    symptoms: ['stress', 'anxiety', 'addiction', 'mental fog', 'insomnia', 'emotional instability'],
    difficulty: 'Beginner',
    category: 'Extra',
    popularity: 7,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Use tip of index finger to apply very gentle pressure for 30 seconds to 1 minute on both ears.',
      hi: 'तर्जनी की नोक से दोनों कानों में 30 सेकंड से 1 मिनट तक बहुत हल्का दबाव डालें।',
    },
    conditions: ['stress', 'anxiety', 'addiction', 'mental fog', 'insomnia'],
    images: ['ear_shenmen_location.jpg'],
  },

  // ===== EVERYDAY ESSENTIAL POINTS - DIGESTIVE HEALTH =====

  {
    id: 'zhongwan',
    code: 'CV12',
    name: {
      en: 'Zhongwan - Central Venter',
      hi: 'झोंगवान - केंद्रीय उदर',
    },
    chineseName: {
      traditional: '中脘',
      pinyin: 'Zhōngwǎn'
    },
    location: {
      en: 'Located on the midline of the abdomen, 4 finger widths above the navel, halfway between the navel and the sternum.',
      hi: 'पेट की मध्य रेखा पर, नाभि से 4 अंगुल ऊपर, नाभि और छाती की हड्डी के बीच में स्थित।',
    },
    meridian: {
      name: {
        en: 'Conception Vessel',
        hi: 'गर्भाधान पात्र'
      },
      code: 'CV',
      element: 'Earth',
      polarity: 'Yin'
    },
    indications: [
      {
        en: 'Stomach pain and indigestion',
        hi: 'पेट दर्द और अपच'
      },
      {
        en: 'Nausea and vomiting',
        hi: 'जी मिचलाना और उल्टी'
      },
      {
        en: 'Bloating and gas',
        hi: 'पेट फूलना और गैस'
      },
      {
        en: 'Acid reflux and heartburn',
        hi: 'एसिडिटी और सीने में जलन'
      },
      {
        en: 'Loss of appetite',
        hi: 'भूख न लगना'
      }
    ],
    contraindications: {
      en: 'Avoid during pregnancy. Use gentle pressure after meals. Do not press if you have severe abdominal pain.',
      hi: 'गर्भावस्था में बचें। खाने के बाद हल्का दबाव डालें। तेज पेट दर्द हो तो न दबाएं।',
    },
    technique: {
      en: 'Use 2-3 fingers to apply gentle, circular pressure for 1-3 minutes. Breathe slowly and deeply.',
      hi: '2-3 अंगुलियों से 1-3 मिनट तक हल्का, गोलाकार दबाव डालें। धीरे और गहरी सांस लें।',
    },
    duration: '1-3 minutes',
    pressure: 'Light',
    bodyPart: ['abdomen', 'stomach'],
    symptoms: ['indigestion', 'nausea', 'bloating', 'acid reflux', 'stomach pain', 'gas', 'appetite loss'],
    difficulty: 'Beginner',
    category: 'Extra',
    popularity: 9,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Use 2-3 fingers to apply gentle, circular pressure for 1-3 minutes. Breathe slowly and deeply.',
      hi: '2-3 अंगुलियों से 1-3 मिनट तक हल्का, गोलाकार दबाव डालें। धीरे और गहरी सांस लें।',
    },
    conditions: ['indigestion', 'nausea', 'bloating', 'acid reflux', 'stomach pain'],
    images: ['zhongwan_location.jpg'],
  },

  {
    id: 'tianshu',
    code: 'ST25',
    name: {
      en: 'Tianshu - Celestial Pivot',
      hi: 'तियानशू - स्वर्गीय धुरी',
    },
    chineseName: {
      traditional: '天樞',
      pinyin: 'Tiānshū'
    },
    location: {
      en: 'Located 2 finger widths on either side of the navel, level with the belly button.',
      hi: 'नाभि के दोनों ओर 2 अंगुल की दूरी पर, नाभि के स्तर पर स्थित।',
    },
    meridian: {
      name: {
        en: 'Stomach',
        hi: 'आमाशय'
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
        en: 'Irregular bowel movements',
        hi: 'अनियमित मल त्याग'
      },
      {
        en: 'Abdominal bloating',
        hi: 'पेट की सूजन'
      },
      {
        en: 'Digestive disorders',
        hi: 'पाचन संबंधी विकार'
      },
      {
        en: 'Menstrual irregularities',
        hi: 'मासिक धर्म की अनियमितता'
      }
    ],
    contraindications: {
      en: 'Avoid during pregnancy and menstruation. Use gentle pressure if you have inflammatory bowel conditions.',
      hi: 'गर्भावस्था और मासिक धर्म के दौरान बचें। आंत की सूजन हो तो हल्का दबाव डालें।',
    },
    technique: {
      en: 'Use fingers to apply gentle pressure on both sides simultaneously for 1-2 minutes. Massage in circular motions.',
      hi: 'दोनों तरफ एक साथ उंगलियों से 1-2 मिनट तक हल्का दबाव डालें। गोलाकार गति में मालिश करें।',
    },
    duration: '1-2 minutes',
    pressure: 'Light',
    bodyPart: ['abdomen'],
    symptoms: ['constipation', 'diarrhea', 'bloating', 'digestive issues', 'irregular bowels', 'menstrual issues'],
    difficulty: 'Beginner',
    category: 'Extra',
    popularity: 8,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Use fingers to apply gentle pressure on both sides simultaneously for 1-2 minutes. Massage in circular motions.',
      hi: 'दोनों तरफ एक साथ उंगलियों से 1-2 मिनट तक हल्का दबाव डालें। गोलाकार गति में मालिश करें।',
    },
    conditions: ['constipation', 'diarrhea', 'bloating', 'digestive issues', 'irregular bowels'],
    images: ['tianshu_location.jpg'],
  },

  {
    id: 'zusanli_enhanced',
    code: 'ST36',
    name: {
      en: 'Zusanli Enhanced - Digestive Power',
      hi: 'जुसानली संवर्धित - पाचन शक्ति',
    },
    chineseName: {
      traditional: '足三里',
      pinyin: 'Zúsānlǐ'
    },
    location: {
      en: 'Located 3 finger widths below the kneecap, on the outer edge of the shinbone.',
      hi: 'घुटने की टोपी से 3 अंगुल नीचे, पिंडली की हड्डी के बाहरी किनारे पर स्थित।',
    },
    meridian: {
      name: {
        en: 'Stomach',
        hi: 'आमाशय'
      },
      code: 'ST',
      element: 'Earth',
      polarity: 'Yang'
    },
    indications: [
      {
        en: 'Overall digestive health',
        hi: 'संपूर्ण पाचन स्वास्थ्य'
      },
      {
        en: 'Chronic fatigue from poor digestion',
        hi: 'कमजोर पाचन से थकान'
      },
      {
        en: 'Immune system support',
        hi: 'प्रतिरक्षा प्रणाली सहायता'
      },
      {
        en: 'Energy and stamina boost',
        hi: 'ऊर्जा और सहनशीलता बढ़ाना'
      },
      {
        en: 'Morning sickness',
        hi: 'गर्भावस्था की मतली'
      }
    ],
    contraindications: {
      en: 'Generally safe for everyone. Use moderate pressure on this sturdy point.',
      hi: 'आम तौर पर सभी के लिए सुरक्षित। इस मजबूत बिंदु पर मध्यम दबाव डालें।',
    },
    technique: {
      en: 'Use thumb to apply firm, steady pressure for 2-3 minutes on each leg. Can be done while sitting.',
      hi: 'अंगूठे से प्रत्येक पैर पर 2-3 मिनट तक मजबूत, स्थिर दबाव डालें। बैठकर कर सकते हैं।',
    },
    duration: '2-3 minutes each side',
    pressure: 'Firm',
    bodyPart: ['leg'],
    symptoms: ['digestive weakness', 'fatigue', 'low immunity', 'morning sickness', 'energy low'],
    difficulty: 'Beginner',
    category: 'Extra',
    popularity: 10,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Use thumb to apply firm, steady pressure for 2-3 minutes on each leg. Can be done while sitting.',
      hi: 'अंगूठे से प्रत्येक पैर पर 2-3 मिनट तक मजबूत, स्थिर दबाव डालें। बैठकर कर सकते हैं।',
    },
    conditions: ['digestive weakness', 'fatigue', 'low immunity', 'morning sickness'],
    images: ['zusanli_enhanced_location.jpg'],
  },

  // ===== EVERYDAY ESSENTIAL POINTS - PAIN RELIEF =====

  {
    id: 'fengchi',
    code: 'GB20',
    name: {
      en: 'Fengchi - Wind Pool',
      hi: 'फेंगची - वायु कुंड',
    },
    chineseName: {
      traditional: '風池',
      pinyin: 'Fēngchí'
    },
    location: {
      en: 'Located at the base of the skull, in the hollow between the two large neck muscles, just below the occipital bone.',
      hi: 'खोपड़ी के आधार पर, दो बड़ी गर्दन की मांसपेशियों के बीच के गड्ढे में, पश्चकपाल हड्डी के ठीक नीचे स्थित।',
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
        en: 'Neck pain and stiffness',
        hi: 'गर्दन का दर्द और अकड़न'
      },
      {
        en: 'Tension headaches',
        hi: 'तनाव के सिरदर्द'
      },
      {
        en: 'Migraine relief',
        hi: 'माइग्रेन से राहत'
      },
      {
        en: 'Eye strain and fatigue',
        hi: 'आंखों का तनाव और थकान'
      },
      {
        en: 'Stress-related head tension',
        hi: 'तनाव से सिर में तनाव'
      }
    ],
    contraindications: {
      en: 'Use moderate pressure. Avoid if you have severe neck injuries or cervical spine issues.',
      hi: 'मध्यम दबाव डालें। गंभीर गर्दन की चोट या ग्रीवा रीढ़ की समस्या हो तो बचें।',
    },
    technique: {
      en: 'Use thumbs to apply firm pressure on both sides simultaneously for 1-2 minutes. Breathe deeply and let shoulders relax.',
      hi: 'दोनों अंगूठों से दोनों तरफ एक साथ 1-2 मिनट तक मजबूत दबाव डालें। गहरी सांस लें और कंधों को आराम दें।',
    },
    duration: '1-2 minutes',
    pressure: 'Firm',
    bodyPart: ['neck', 'head'],
    symptoms: ['neck pain', 'tension headache', 'migraine', 'eye strain', 'neck stiffness', 'head tension'],
    difficulty: 'Beginner',
    category: 'Extra',
    popularity: 10,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Use thumbs to apply firm pressure on both sides simultaneously for 1-2 minutes. Breathe deeply and let shoulders relax.',
      hi: 'दोनों अंगूठों से दोनों तरफ एक साथ 1-2 मिनट तक मजबूत दबाव डालें। गहरी सांस लें और कंधों को आराम दें।',
    },
    conditions: ['neck pain', 'tension headache', 'migraine', 'eye strain', 'neck stiffness'],
    images: ['fengchi_location.jpg'],
  },

  {
    id: 'jianjing',
    code: 'GB21',
    name: {
      en: 'Jianjing - Shoulder Well',
      hi: 'जियानजिंग - कंधा कुआं',
    },
    chineseName: {
      traditional: '肩井',
      pinyin: 'Jiānjǐng'
    },
    location: {
      en: 'Located at the highest point of the shoulder, midway between the neck and the outer edge of the shoulder.',
      hi: 'कंधे के सबसे ऊंचे बिंदु पर, गर्दन और कंधे के बाहरी किनारे के बीच में स्थित।',
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
        hi: 'कंधे का तनाव और दर्द'
      },
      {
        en: 'Upper back stiffness',
        hi: 'ऊपरी पीठ की अकड़न'
      },
      {
        en: 'Neck and shoulder stress',
        hi: 'गर्दन और कंधे का तनाव'
      },
      {
        en: 'Computer-related tension',
        hi: 'कंप्यूटर से होने वाला तनाव'
      },
      {
        en: 'Headaches from shoulder tension',
        hi: 'कंधे के तनाव से सिरदर्द'
      }
    ],
    contraindications: {
      en: 'Avoid during pregnancy. Use moderate pressure as this point can be very sensitive.',
      hi: 'गर्भावस्था में बचें। मध्यम दबाव डालें क्योंकि यह बिंदु बहुत संवेदनशील हो सकता है।',
    },
    technique: {
      en: 'Use opposite hand to pinch and apply firm pressure for 1-2 minutes on each shoulder. Can be done at your desk.',
      hi: 'विपरीत हाथ से पकड़कर प्रत्येक कंधे पर 1-2 मिनट तक मजबूत दबाव डालें। डेस्क पर बैठकर कर सकते हैं।',
    },
    duration: '1-2 minutes each side',
    pressure: 'Firm',
    bodyPart: ['shoulder', 'neck'],
    symptoms: ['shoulder tension', 'upper back pain', 'computer neck', 'shoulder pain', 'tension headache'],
    difficulty: 'Beginner',
    category: 'Extra',
    popularity: 10,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Use opposite hand to pinch and apply firm pressure for 1-2 minutes on each shoulder. Can be done at your desk.',
      hi: 'विपरीत हाथ से पकड़कर प्रत्येक कंधे पर 1-2 मिनट तक मजबूत दबाव डालें। डेस्क पर बैठकर कर सकते हैं।',
    },
    conditions: ['shoulder tension', 'upper back pain', 'computer neck', 'shoulder pain'],
    images: ['jianjing_location.jpg'],
  },

  {
    id: 'houxi',
    code: 'SI3',
    name: {
      en: 'Houxi - Back Stream',
      hi: 'होउशी - पीछे की धारा',
    },
    chineseName: {
      traditional: '後溪',
      pinyin: 'Hòuxī'
    },
    location: {
      en: 'Located on the edge of the hand, below the little finger, in the crease when you make a loose fist.',
      hi: 'हाथ के किनारे पर, छोटी उंगली के नीचे, हल्की मुट्ठी बनाने पर बनने वाली सिलवट में स्थित।',
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
        en: 'Wrist and hand pain',
        hi: 'कलाई और हाथ का दर्द'
      },
      {
        en: 'Computer mouse strain',
        hi: 'कंप्यूटर माउस से तनाव'
      },
      {
        en: 'Carpal tunnel syndrome',
        hi: 'कार्पल टनल सिंड्रोम'
      },
      {
        en: 'Typing-related hand fatigue',
        hi: 'टाइपिंग से हाथों की थकान'
      },
      {
        en: 'Stiff neck from poor posture',
        hi: 'गलत मुद्रा से अकड़ी गर्दन'
      }
    ],
    contraindications: {
      en: 'Generally safe. Use gentle to moderate pressure on this small area.',
      hi: 'आम तौर पर सुरक्षित। इस छोटे क्षेत्र पर हल्का से मध्यम दबाव डालें।',
    },
    technique: {
      en: 'Use thumb of opposite hand to apply steady pressure for 1 minute on each hand. Perfect for desk workers.',
      hi: 'विपरीत हाथ के अंगूठे से प्रत्येक हाथ पर 1 मिनट तक स्थिर दबाव डालें। डेस्क वर्करों के लिए बेहतरीन।',
    },
    duration: '1 minute each hand',
    pressure: 'Moderate',
    bodyPart: ['hand', 'wrist'],
    symptoms: ['wrist pain', 'hand fatigue', 'carpal tunnel', 'mouse strain', 'typing pain', 'hand strain'],
    difficulty: 'Beginner',
    category: 'Extra',
    popularity: 8,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Use thumb of opposite hand to apply steady pressure for 1 minute on each hand. Perfect for desk workers.',
      hi: 'विपरीत हाथ के अंगूठे से प्रत्येक हाथ पर 1 मिनट तक स्थिर दबाव डालें। डेस्क वर्करों के लिए बेहतरीन।',
    },
    conditions: ['wrist pain', 'hand fatigue', 'carpal tunnel', 'mouse strain', 'typing pain'],
    images: ['houxi_location.jpg'],
  },

  // ===== EVERYDAY ESSENTIAL POINTS - ENERGY & VITALITY =====

  {
    id: 'qihai',
    code: 'CV6',
    name: {
      en: 'Qihai - Sea of Qi',
      hi: 'क्यीहाई - प्राण सागर',
    },
    chineseName: {
      traditional: '氣海',
      pinyin: 'Qìhǎi'
    },
    location: {
      en: 'Located on the midline of the abdomen, 2 finger widths below the navel.',
      hi: 'पेट की मध्य रेखा पर, नाभि से 2 अंगुल नीचे स्थित।',
    },
    meridian: {
      name: {
        en: 'Conception Vessel',
        hi: 'गर्भाधान पात्र'
      },
      code: 'CV',
      element: 'Fire',
      polarity: 'Yin'
    },
    indications: [
      {
        en: 'Chronic fatigue and low energy',
        hi: 'पुरानी थकान और कम ऊर्जा'
      },
      {
        en: 'General weakness and vitality',
        hi: 'सामान्य कमजोरी और जीवन शक्ति'
      },
      {
        en: 'Mental exhaustion',
        hi: 'मानसिक थकावट'
      },
      {
        en: 'Recovery from illness',
        hi: 'बीमारी से स्वस्थ होना'
      },
      {
        en: 'Building core strength',
        hi: 'मुख्य शक्ति निर्माण'
      }
    ],
    contraindications: {
      en: 'Avoid during pregnancy. Use gentle pressure and avoid immediately after eating.',
      hi: 'गर्भावस्था में बचें। हल्का दबाव डालें और खाने के तुरंत बाद न करें।',
    },
    technique: {
      en: 'Use 2-3 fingers to apply gentle, steady pressure for 2-3 minutes. Breathe deeply and visualize energy building.',
      hi: '2-3 उंगलियों से 2-3 मिनट तक हल्का, स्थिर दबाव डालें। गहरी सांस लें और ऊर्जा निर्माण की कल्पना करें।',
    },
    duration: '2-3 minutes',
    pressure: 'Light',
    bodyPart: ['abdomen'],
    symptoms: ['fatigue', 'low energy', 'weakness', 'exhaustion', 'recovery', 'vitality loss'],
    difficulty: 'Beginner',
    category: 'Extra',
    popularity: 9,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Use 2-3 fingers to apply gentle, steady pressure for 2-3 minutes. Breathe deeply and visualize energy building.',
      hi: '2-3 उंगलियों से 2-3 मिनट तक हल्का, स्थिर दबाव डालें। गहरी सांस लें और ऊर्जा निर्माण की कल्पना करें।',
    },
    conditions: ['fatigue', 'low energy', 'weakness', 'exhaustion', 'recovery'],
    images: ['qihai_location.jpg'],
  },

  {
    id: 'mingmen',
    code: 'GV4',
    name: {
      en: 'Mingmen - Gate of Life',
      hi: 'मिंगमेन - जीवन का द्वार',
    },
    chineseName: {
      traditional: '命門',
      pinyin: 'Mìngmén'
    },
    location: {
      en: 'Located on the spine, directly behind the navel, between the 2nd and 3rd lumbar vertebrae.',
      hi: 'रीढ़ पर, नाभि के ठीक पीछे, दूसरी और तीसरी कमर की हड्डी के बीच स्थित।',
    },
    meridian: {
      name: {
        en: 'Governing Vessel',
        hi: 'गवर्निंग वेसल'
      },
      code: 'GV',
      element: 'Fire',
      polarity: 'Yang'
    },
    indications: [
      {
        en: 'Lower back weakness',
        hi: 'कमर की कमजोरी'
      },
      {
        en: 'Kidney yang deficiency',
        hi: 'किडनी यांग की कमी'
      },
      {
        en: 'Sexual vitality and libido',
        hi: 'यौन जीवन शक्ति और कामेच्छा'
      },
      {
        en: 'Cold constitution',
        hi: 'ठंडी प्रकृति'
      },
      {
        en: 'Chronic fatigue from overwork',
        hi: 'अधिक काम से पुरानी थकान'
      }
    ],
    contraindications: {
      en: 'Avoid during pregnancy. Use moderate pressure. Best applied with warmth.',
      hi: 'गर्भावस्था में बचें। मध्यम दबाव डालें। गर्मी के साथ लगाना सबसे अच्छा।',
    },
    technique: {
      en: 'Use thumbs or knuckles to apply firm pressure for 1-2 minutes. Can be done lying face down or with a tennis ball.',
      hi: 'अंगूठे या पोरों से 1-2 मिनट तक मजबूत दबाव डालें। पेट के बल लेटकर या टेनिस बॉल से कर सकते हैं।',
    },
    duration: '1-2 minutes',
    pressure: 'Firm',
    bodyPart: ['back', 'spine'],
    symptoms: ['lower back weakness', 'kidney weakness', 'low libido', 'cold constitution', 'chronic fatigue'],
    difficulty: 'Intermediate',
    category: 'Extra',
    popularity: 7,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Use thumbs or knuckles to apply firm pressure for 1-2 minutes. Can be done lying face down or with a tennis ball.',
      hi: 'अंगूठे या पोरों से 1-2 मिनट तक मजबूत दबाव डालें। पेट के बल लेटकर या टेनिस बॉल से कर सकते हैं।',
    },
    conditions: ['lower back weakness', 'kidney weakness', 'low libido', 'cold constitution'],
    images: ['mingmen_location.jpg'],
  },

  {
    id: 'shenshu',
    code: 'BL23',
    name: {
      en: 'Shenshu - Kidney Shu',
      hi: 'शेनशू - किडनी शू',
    },
    chineseName: {
      traditional: '腎俞',
      pinyin: 'Shènshū'
    },
    location: {
      en: 'Located on the back, 1.5 finger widths on either side of the spine, level with the 2nd lumbar vertebra.',
      hi: 'पीठ पर, रीढ़ के दोनों ओर 1.5 अंगुल की दूरी पर, दूसरी कमर की हड्डी के स्तर पर स्थित।',
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
        en: 'Kidney function support',
        hi: 'किडनी कार्य सहायता'
      },
      {
        en: 'Lower back pain and stiffness',
        hi: 'कमर दर्द और अकड़न'
      },
      {
        en: 'Urinary problems',
        hi: 'मूत्र संबंधी समस्याएं'
      },
      {
        en: 'Sexual health and fertility',
        hi: 'यौन स्वास्थ्य और प्रजनन क्षमता'
      },
      {
        en: 'Energy depletion from stress',
        hi: 'तनाव से ऊर्जा की कमी'
      }
    ],
    contraindications: {
      en: 'Avoid during pregnancy. Use moderate pressure. Best done with partner assistance.',
      hi: 'गर्भावस्था में बचें। मध्यम दबाव डालें। साथी की सहायता से करना सबसे अच्छा।',
    },
    technique: {
      en: 'Use thumbs to apply steady pressure on both sides simultaneously for 1-2 minutes. Massage in circular motions.',
      hi: 'दोनों अंगूठों से दोनों तरफ एक साथ 1-2 मिनट तक स्थिर दबाव डालें। गोलाकार गति में मालिश करें।',
    },
    duration: '1-2 minutes',
    pressure: 'Moderate',
    bodyPart: ['back', 'kidney area'],
    symptoms: ['kidney weakness', 'lower back pain', 'urinary issues', 'sexual weakness', 'energy depletion'],
    difficulty: 'Intermediate',
    category: 'Extra',
    popularity: 8,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Use thumbs to apply steady pressure on both sides simultaneously for 1-2 minutes. Massage in circular motions.',
      hi: 'दोनों अंगूठों से दोनों तरफ एक साथ 1-2 मिनट तक स्थिर दबाव डालें। गोलाकार गति में मालिश करें।',
    },
    conditions: ['kidney weakness', 'lower back pain', 'urinary issues', 'sexual weakness'],
    images: ['shenshu_location.jpg'],
  },

  {
    id: 'yongquan',
    code: 'KD1',
    name: {
      en: 'Yongquan - Bubbling Spring',
      hi: 'योंगक्वान - बुदबुदाता झरना',
    },
    chineseName: {
      traditional: '湧泉',
      pinyin: 'Yǒngquán'
    },
    location: {
      en: 'Located on the sole of the foot, in the depression when you curl your toes, about 1/3 down from the toes.',
      hi: 'पैर के तलवे पर, पैर की उंगलियों को मोड़ने पर बनने वाले गड्ढे में, उंगलियों से लगभग 1/3 नीचे स्थित।',
    },
    meridian: {
      name: {
        en: 'Kidney',
        hi: 'गुर्दे'
      },
      code: 'KD',
      element: 'Water',
      polarity: 'Yin'
    },
    indications: [
      {
        en: 'Grounding and centering energy',
        hi: 'भूमिगत और केंद्रित ऊर्जा'
      },
      {
        en: 'Insomnia and restless mind',
        hi: 'अनिद्रा और अशांत मन'
      },
      {
        en: 'Hypertension and stress',
        hi: 'उच्च रक्तचाप और तनाव'
      },
      {
        en: 'Foot pain and plantar fasciitis',
        hi: 'पैर का दर्द और प्लांटर फेशिआइटिस'
      },
      {
        en: 'Connection to earth energy',
        hi: 'पृथ्वी ऊर्जा से जुड़ाव'
      }
    ],
    contraindications: {
      en: 'Avoid during pregnancy. Use gentle pressure as this point can be very sensitive.',
      hi: 'गर्भावस्था में बचें। हल्का दबाव डालें क्योंकि यह बिंदु बहुत संवेदनशील हो सकता है।',
    },
    technique: {
      en: 'Use thumb to apply gentle, steady pressure for 1-2 minutes on each foot. Best done while sitting or lying down.',
      hi: 'अंगूठे से प्रत्येक पैर पर 1-2 मिनट तक हल्का, स्थिर दबाव डालें। बैठकर या लेटकर करना सबसे अच्छा।',
    },
    duration: '1-2 minutes each foot',
    pressure: 'Light',
    bodyPart: ['foot'],
    symptoms: ['anxiety', 'insomnia', 'hypertension', 'foot pain', 'stress', 'grounding issues'],
    difficulty: 'Beginner',
    category: 'Extra',
    popularity: 8,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Use thumb to apply gentle, steady pressure for 1-2 minutes on each foot. Best done while sitting or lying down.',
      hi: 'अंगूठे से प्रत्येक पैर पर 1-2 मिनट तक हल्का, स्थिर दबाव डालें। बैठकर या लेटकर करना सबसे अच्छा।',
    },
    conditions: ['anxiety', 'insomnia', 'hypertension', 'foot pain', 'stress'],
    images: ['yongquan_location.jpg'],
  },

  // ===== EVERYDAY ESSENTIAL POINTS - WOMEN'S HEALTH & MODERN LIFE =====

  {
    id: 'sanyinjiao_enhanced',
    code: 'SP6',
    name: {
      en: 'Sanyinjiao Enhanced - Women\'s Health Point',
      hi: 'सानयिनजिओ संवर्धित - महिला स्वास्थ्य बिंदु',
    },
    chineseName: {
      traditional: '三陰交',
      pinyin: 'Sānyīnjiāo'
    },
    location: {
      en: 'Located 3 finger widths above the inner ankle bone, behind the shinbone.',
      hi: 'भीतरी टखने की हड्डी से 3 अंगुल ऊपर, पिंडली की हड्डी के पीछे स्थित।',
    },
    meridian: {
      name: {
        en: 'Spleen',
        hi: 'तिल्ली'
      },
      code: 'SP',
      element: 'Earth',
      polarity: 'Yin'
    },
    indications: [
      {
        en: 'Menstrual pain and irregularities',
        hi: 'मासिक धर्म का दर्द और अनियमितता'
      },
      {
        en: 'PMS and hormonal balance',
        hi: 'पीएमएस और हार्मोनल संतुलन'
      },
      {
        en: 'Fertility and reproductive health',
        hi: 'प्रजनन क्षमता और प्रजनन स्वास्थ्य'
      },
      {
        en: 'Digestive issues in women',
        hi: 'महिलाओं में पाचन संबंधी समस्याएं'
      },
      {
        en: 'Swollen legs and water retention',
        hi: 'पैरों में सूजन और पानी का रुकना'
      }
    ],
    contraindications: {
      en: 'Avoid during pregnancy especially first trimester. This point can induce labor.',
      hi: 'गर्भावस्था में विशेषकर पहली तिमाही में बचें। यह बिंदु प्रसव को प्रेरित कर सकता है।',
    },
    technique: {
      en: 'Use thumb to apply gentle pressure for 1-3 minutes on each leg. Best used regularly for women\'s health.',
      hi: 'अंगूठे से प्रत्येक पैर पर 1-3 मिनट तक हल्का दबाव डालें। महिलाओं के स्वास्थ्य के लिए नियमित उपयोग सर्वोत्तम।',
    },
    duration: '1-3 minutes each leg',
    pressure: 'Light',
    bodyPart: ['leg', 'ankle'],
    symptoms: ['menstrual pain', 'PMS', 'hormonal imbalance', 'fertility issues', 'water retention', 'digestive issues'],
    difficulty: 'Beginner',
    category: 'Extra',
    popularity: 9,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Use thumb to apply gentle pressure for 1-3 minutes on each leg. Best used regularly for women\'s health.',
      hi: 'अंगूठे से प्रत्येक पैर पर 1-3 मिनट तक हल्का दबाव डालें। महिलाओं के स्वास्थ्य के लिए नियमित उपयोग सर्वोत्तम।',
    },
    conditions: ['menstrual pain', 'PMS', 'hormonal imbalance', 'fertility issues', 'water retention'],
    images: ['sanyinjiao_enhanced_location.jpg'],
  },

  {
    id: 'yingxiang',
    code: 'LI20',
    name: {
      en: 'Yingxiang - Welcome Fragrance',
      hi: 'यिंगशिअंग - स्वागत सुगंध',
    },
    chineseName: {
      traditional: '迎香',
      pinyin: 'Yíngxiāng'
    },
    location: {
      en: 'Located in the groove beside the nostrils, at the widest part of the nose.',
      hi: 'नाक के छिद्रों के बगल में, नाक के सबसे चौड़े हिस्से पर स्थित।',
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
        en: 'Allergies and hay fever',
        hi: 'एलर्जी और बुखार'
      },
      {
        en: 'Facial pain and tension',
        hi: 'चेहरे का दर्द और तनाव'
      },
      {
        en: 'Loss of smell',
        hi: 'गंध का चले जाना'
      },
      {
        en: 'Computer eye strain affecting sinuses',
        hi: 'कंप्यूटर से आंखों का तनाव जो साइनस को प्रभावित करता है'
      }
    ],
    contraindications: {
      en: 'Use very gentle pressure. Avoid if you have active sinus infections.',
      hi: 'बहुत हल्का दबाव डालें। सक्रिय साइनस संक्रमण हो तो बचें।',
    },
    technique: {
      en: 'Use index fingers to apply very gentle pressure on both sides for 30 seconds to 1 minute. Can be done at your desk.',
      hi: 'तर्जनी से दोनों तरफ 30 सेकंड से 1 मिनट तक बहुत हल्का दबाव डालें। डेस्क पर बैठकर कर सकते हैं।',
    },
    duration: '30 seconds - 1 minute',
    pressure: 'Light',
    bodyPart: ['nose', 'face'],
    symptoms: ['nasal congestion', 'sinusitis', 'allergies', 'facial pain', 'loss of smell', 'sinus pressure'],
    difficulty: 'Beginner',
    category: 'Extra',
    popularity: 8,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Use index fingers to apply very gentle pressure on both sides for 30 seconds to 1 minute. Can be done at your desk.',
      hi: 'तर्जनी से दोनों तरफ 30 सेकंड से 1 मिनट तक बहुत हल्का दबाव डालें। डेस्क पर बैठकर कर सकते हैं।',
    },
    conditions: ['nasal congestion', 'sinusitis', 'allergies', 'facial pain', 'loss of smell'],
    images: ['yingxiang_location.jpg'],
  },

  {
    id: 'jingming',
    code: 'BL1',
    name: {
      en: 'Jingming - Bright Eyes',
      hi: 'जिंगमिंग - उज्ज्वल नेत्र',
    },
    chineseName: {
      traditional: '睛明',
      pinyin: 'Jīngmíng'
    },
    location: {
      en: 'Located in the inner corner of the eye, beside the tear duct.',
      hi: 'आंख के भीतरी कोने में, आंसू नली के पास स्थित।',
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
        en: 'Eye strain from computer work',
        hi: 'कंप्यूटर काम से आंखों का तनाव'
      },
      {
        en: 'Tired and dry eyes',
        hi: 'थकी और सूखी आंखें'
      },
      {
        en: 'Blurry vision from fatigue',
        hi: 'थकान से धुंधली दृष्टि'
      },
      {
        en: 'Headaches from eye strain',
        hi: 'आंखों के तनाव से सिरदर्द'
      },
      {
        en: 'Screen-related eye fatigue',
        hi: 'स्क्रीन से होने वाली आंखों की थकान'
      }
    ],
    contraindications: {
      en: 'Use extremely gentle pressure. Avoid if you have eye infections or injuries.',
      hi: 'अत्यंत हल्का दबाव डालें। आंखों के संक्रमण या चोट हो तो बचें।',
    },
    technique: {
      en: 'Use fingertips to apply very light pressure for 10-30 seconds. Perfect for computer workers during breaks.',
      hi: 'उंगलियों की नोक से 10-30 सेकंड तक बहुत हल्का दबाव डालें। कंप्यूटर वर्करों के लिए ब्रेक के दौरान बेहतरीन।',
    },
    duration: '10-30 seconds',
    pressure: 'Light',
    bodyPart: ['eye'],
    symptoms: ['eye strain', 'dry eyes', 'blurry vision', 'computer vision syndrome', 'eye fatigue', 'screen fatigue'],
    difficulty: 'Beginner',
    category: 'Extra',
    popularity: 9,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Use fingertips to apply very light pressure for 10-30 seconds. Perfect for computer workers during breaks.',
      hi: 'उंगलियों की नोक से 10-30 सेकंड तक बहुत हल्का दबाव डालें। कंप्यूटर वर्करों के लिए ब्रेक के दौरान बेहतरीन।',
    },
    conditions: ['eye strain', 'dry eyes', 'blurry vision', 'computer vision syndrome', 'eye fatigue'],
    images: ['jingming_location.jpg'],
  },
  
  // Additional important acupressure points
  {
    id: 'ren17',
    code: 'REN17',
    name: {
      en: 'Conception Vessel 17 - Danzhong',
      hi: 'कॉन्सेप्शन वेसल 17 - दानझोंग',
    },
    chineseName: {
      traditional: '膻中',
      pinyin: 'Dànzhōng'
    },
    location: {
      en: 'Located at the center of the chest, level with the 4th intercostal space, between the nipples.',
      hi: 'छाती के केंद्र में स्थित, चौथी इंटरकॉस्टल स्पेस के स्तर पर, निप्पल्स के बीच।',
    },
    meridian: {
      name: {
        en: 'Conception Vessel',
        hi: 'कॉन्सेप्शन वेसल'
      },
      code: 'REN',
      polarity: 'Yin'
    },
    indications: [
      {
        en: 'Breathing difficulties and asthma',
        hi: 'सांस की तकलीफ और दमा'
      },
      {
        en: 'Chest tightness and congestion',
        hi: 'छाती में जकड़न और कफ'
      },
      {
        en: 'Emotional stress and anxiety',
        hi: 'भावनात्मक तनाव और चिंता'
      },
      {
        en: 'Heart palpitations',
        hi: 'दिल की धड़कन'
      }
    ],
    contraindications: {
      en: 'Use gentle pressure only. Avoid deep pressure over the heart area.',
      hi: 'केवल हल्का दबाव डालें। हृदय क्षेत्र पर गहरा दबाव न डालें।',
    },
    technique: {
      en: 'Place your palm flat on the chest and apply gentle circular pressure for 2-3 minutes. Breathe deeply and slowly.',
      hi: 'अपनी हथेली को छाती पर सपाट रखें और 2-3 मिनट तक हल्का गोलाकार दबाव डालें। गहरी और धीमी सांस लें।',
    },
    duration: '2-3 minutes',
    pressure: 'Light',
    bodyPart: ['chest'],
    symptoms: ['breathing difficulties', 'chest congestion', 'anxiety', 'palpitations'],
    difficulty: 'Beginner',
    category: 'Classical',
    popularity: 4,
    method: {
      en: 'Place your palm flat on the chest and apply gentle circular pressure for 2-3 minutes. Breathe deeply and slowly.',
      hi: 'अपनी हथेली को छाती पर सपाट रखें और 2-3 मिनट तक हल्का गोलाकार दबाव डालें। गहरी और धीमी सांस लें।',
    },
    conditions: ['breathing difficulties', 'chest congestion', 'anxiety'],
    images: ['ren17_location.jpg', 'ren17_technique.jpg'],
  },
  {
    id: 'gb14',
    code: 'GB14',
    name: {
      en: 'Gallbladder 14 - Yangbai',
      hi: 'गॉल ब्लैडर 14 - यांगबाई',
    },
    chineseName: {
      traditional: '陽白',
      pinyin: 'Yángbái'
    },
    location: {
      en: 'Located above the eyebrow, directly above the pupil when looking straight ahead.',
      hi: 'भौं के ऊपर स्थित, सीधे देखते समय पुतली के ठीक ऊपर।',
    },
    meridian: {
      name: {
        en: 'Gallbladder',
        hi: 'गॉल ब्लैडर'
      },
      code: 'GB',
      element: 'Wood',
      polarity: 'Yang'
    },
    indications: [
      {
        en: 'Frontal headaches',
        hi: 'माथे का दर्द'
      },
      {
        en: 'Eye strain and fatigue',
        hi: 'आंखों का तनाव और थकान'
      },
      {
        en: 'Sinus pressure',
        hi: 'साइनस का दबाव'
      },
      {
        en: 'Mental fatigue',
        hi: 'मानसिक थकान'
      }
    ],
    contraindications: {
      en: 'Use gentle pressure. Avoid if you have severe eye conditions.',
      hi: 'हल्का दबाव डालें। गंभीर आंखों की समस्याओं में बचें।',
    },
    technique: {
      en: 'Use your index finger to apply gentle upward pressure for 1-2 minutes on both sides.',
      hi: 'अपनी तर्जनी से दोनों तरफ 1-2 मिनट तक हल्का ऊपर की ओर दबाव डालें।',
    },
    duration: '1-2 minutes',
    pressure: 'Light',
    bodyPart: ['face'],
    symptoms: ['frontal headache', 'eye strain', 'sinus pressure', 'mental fatigue'],
    difficulty: 'Beginner',
    category: 'Classical',
    popularity: 3,
    method: {
      en: 'Use your index finger to apply gentle upward pressure for 1-2 minutes on both sides.',
      hi: 'अपनी तर्जनी से दोनों तरफ 1-2 मिनट तक हल्का ऊपर की ओर दबाव डालें।',
    },
    conditions: ['frontal headache', 'eye strain', 'sinus pressure'],
    images: ['gb14_location.jpg', 'gb14_technique.jpg'],
  },
  {
    id: 'sp9',
    code: 'SP9',
    name: {
      en: 'Spleen 9 - Yinlingquan',
      hi: 'स्प्लीन 9 - यिनलिंगक्वान',
    },
    chineseName: {
      traditional: '陰陵泉',
      pinyin: 'Yīnlíngquán'
    },
    location: {
      en: 'Located below the knee, in the depression below and behind the medial condyle of the tibia.',
      hi: 'घुटने के नीचे, टिबिया की मध्यवर्ती कंडाइल के नीचे और पीछे के अवसाद में स्थित।',
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
        en: 'Water retention and swelling',
        hi: 'पानी की रुकावट और सूजन'
      },
      {
        en: 'Digestive issues',
        hi: 'पाचन संबंधी समस्याएं'
      },
      {
        en: 'Urinary problems',
        hi: 'मूत्र संबंधी समस्याएं'
      },
      {
        en: 'Knee pain',
        hi: 'घुटने का दर्द'
      }
    ],
    contraindications: {
      en: 'Avoid during pregnancy. Use moderate pressure.',
      hi: 'गर्भावस्था के दौरान बचें। मध्यम दबाव का प्रयोग करें।',
    },
    technique: {
      en: 'Apply firm pressure with your thumb while bending the knee slightly. Hold for 2-3 minutes.',
      hi: 'घुटने को थोड़ा मोड़ते हुए अंगूठे से मजबूत दबाव डालें। 2-3 मिनट तक दबाए रखें।',
    },
    duration: '2-3 minutes',
    pressure: 'Firm',
    bodyPart: ['leg'],
    symptoms: ['water retention', 'digestive issues', 'urinary problems', 'knee pain'],
    difficulty: 'Intermediate',
    category: 'Classical',
    popularity: 3,
    method: {
      en: 'Apply firm pressure with your thumb while bending the knee slightly. Hold for 2-3 minutes.',
      hi: 'घुटने को थोड़ा मोड़ते हुए अंगूठे से मजबूत दबाव डालें। 2-3 मिनट तक दबाए रखें।',
    },
    conditions: ['water retention', 'digestive issues', 'urinary problems'],
    images: ['sp9_location.jpg', 'sp9_technique.jpg'],
  },
  {
    id: 'bl13',
    code: 'BL13',
    name: {
      en: 'Bladder 13 - Feishu',
      hi: 'ब्लैडर 13 - फेइशु',
    },
    chineseName: {
      traditional: '肺俞',
      pinyin: 'Fèishū'
    },
    location: {
      en: 'Located 1.5 fingers width lateral to the 3rd thoracic vertebra, level with the inner edge of the shoulder blade.',
      hi: 'तीसरी थोरैसिक कशेरुका से 1.5 अंगुल की चौड़ाई बाहर की ओर, कंधे की हड्डी के अंदरूनी किनारे के स्तर पर स्थित।',
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
        en: 'Respiratory problems and cough',
        hi: 'सांस की समस्याएं और खांसी'
      },
      {
        en: 'Asthma and bronchitis',
        hi: 'दमा और ब्रोंकाइटिस'
      },
      {
        en: 'Upper back tension',
        hi: 'ऊपरी पीठ का तनाव'
      },
      {
        en: 'Lung qi deficiency',
        hi: 'फेफड़ों की क्यूई की कमी'
      }
    ],
    contraindications: {
      en: 'Better to have someone else apply pressure. Avoid if you have severe respiratory conditions.',
      hi: 'किसी अन्य व्यक्ति से दबाव दिलवाना बेहतर है। गंभीर सांस की समस्याओं में बचें।',
    },
    technique: {
      en: 'Have someone apply firm pressure with thumbs on both sides simultaneously for 2-3 minutes.',
      hi: 'किसी से कहें कि वे दोनों तरफ एक साथ अंगूठों से 2-3 मिनट तक मजबूत दबाव डालें।',
    },
    duration: '2-3 minutes',
    pressure: 'Firm',
    bodyPart: ['back'],
    symptoms: ['respiratory problems', 'cough', 'asthma', 'upper back tension'],
    difficulty: 'Advanced',
    category: 'Classical',
    popularity: 3,
    method: {
      en: 'Have someone apply firm pressure with thumbs on both sides simultaneously for 2-3 minutes.',
      hi: 'किसी से कहें कि वे दोनों तरफ एक साथ अंगूठों से 2-3 मिनट तक मजबूत दबाव डालें।',
    },
    conditions: ['respiratory problems', 'cough', 'asthma'],
    images: ['bl13_location.jpg', 'bl13_technique.jpg'],
  },
  {
    id: 'st8',
    code: 'ST8',
    name: {
      en: 'Stomach 8 - Touwei',
      hi: 'स्टमक 8 - तौवेई',
    },
    chineseName: {
      traditional: '頭維',
      pinyin: 'Tóuwéi'
    },
    location: {
      en: 'Located at the corner of the forehead, 0.5 finger width within the anterior hairline.',
      hi: 'माथे के कोने पर स्थित, बालों की रेखा के अंदर 0.5 अंगुल की चौड़ाई पर।',
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
        en: 'Temporal headaches',
        hi: 'कनपटी का दर्द'
      },
      {
        en: 'Eye disorders',
        hi: 'आंखों की समस्याएं'
      },
      {
        en: 'Facial paralysis',
        hi: 'चेहरे का लकवा'
      },
      {
        en: 'Mental stress',
        hi: 'मानसिक तनाव'
      }
    ],
    contraindications: {
      en: 'Use very gentle pressure. Avoid in case of head injuries.',
      hi: 'बहुत हल्का दबाव डालें। सिर की चोट के मामले में बचें।',
    },
    technique: {
      en: 'Use fingertips to apply gentle circular pressure for 1-2 minutes on both sides.',
      hi: 'उंगलियों के सिरों से दोनों तरफ 1-2 मिनट तक हल्का गोलाकार दबाव डालें।',
    },
    duration: '1-2 minutes',
    pressure: 'Light',
    bodyPart: ['head'],
    symptoms: ['temporal headache', 'eye disorders', 'facial paralysis', 'mental stress'],
    difficulty: 'Beginner',
    category: 'Classical',
    popularity: 2,
    method: {
      en: 'Use fingertips to apply gentle circular pressure for 1-2 minutes on both sides.',
      hi: 'उंगलियों के सिरों से दोनों तरफ 1-2 मिनट तक हल्का गोलाकार दबाव डालें।',
    },
    conditions: ['temporal headache', 'eye disorders', 'mental stress'],
    images: ['st8_location.jpg', 'st8_technique.jpg'],
  },
  {
    id: 'ki1_enhanced',
    code: 'KI1',
    name: {
      en: 'Kidney 1 - Yongquan (Bubbling Spring)',
      hi: 'किडनी 1 - योंगक्वान (बुदबुदाता झरना)',
    },
    chineseName: {
      traditional: '湧泉',
      pinyin: 'Yǒngquán'
    },
    location: {
      en: 'Located on the sole of the foot, in the depression when the toes are curled, about 1/3 from the toes.',
      hi: 'पैर के तलवे पर स्थित, जब पैर की उंगलियां मुड़ी हों तो बने अवसाद में, उंगलियों से लगभग 1/3 दूरी पर।',
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
        en: 'Insomnia and sleep disorders',
        hi: 'अनिद्रा और नींद की समस्याएं'
      },
      {
        en: 'High blood pressure',
        hi: 'उच्च रक्तचाप'
      },
      {
        en: 'Anxiety and restlessness',
        hi: 'चिंता और बेचैनी'
      },
      {
        en: 'Foot pain and fatigue',
        hi: 'पैर का दर्द और थकान'
      }
    ],
    contraindications: {
      en: 'Avoid during pregnancy. Use gentle pressure for elderly people.',
      hi: 'गर्भावस्था के दौरान बचें। बुजुर्गों के लिए हल्का दबाव डालें।',
    },
    technique: {
      en: 'Use your thumb to apply firm pressure in circular motions for 2-3 minutes before sleep.',
      hi: 'सोने से पहले अंगूठे से 2-3 मिनट तक गोलाकार गति में मजबूत दबाव डालें।',
    },
    duration: '2-3 minutes',
    pressure: 'Firm',
    bodyPart: ['foot'],
    symptoms: ['insomnia', 'high blood pressure', 'anxiety', 'foot pain'],
    difficulty: 'Beginner',
    category: 'Classical',
    popularity: 4,
    method: {
      en: 'Use your thumb to apply firm pressure in circular motions for 2-3 minutes before sleep.',
      hi: 'सोने से पहले अंगूठे से 2-3 मिनट तक गोलाकार गति में मजबूत दबाव डालें।',
    },
    conditions: ['insomnia', 'high blood pressure', 'anxiety'],
    images: ['ki1_location.jpg', 'ki1_technique.jpg'],
  },
  {
    id: 'li15',
    code: 'LI15',
    name: {
      en: 'Large Intestine 15 - Jianyu',
      hi: 'बड़ी आंत 15 - जियानयू',
    },
    chineseName: {
      traditional: '肩髃',
      pinyin: 'Jiānyú'
    },
    location: {
      en: 'Located at the shoulder, in the depression below the acromion when the arm is raised.',
      hi: 'कंधे पर स्थित, जब बांह उठाई जाए तो एक्रोमियन के नीचे के अवसाद में।',
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
        en: 'Shoulder pain and stiffness',
        hi: 'कंधे का दर्द और अकड़न'
      },
      {
        en: 'Arm weakness',
        hi: 'बांह की कमजोरी'
      },
      {
        en: 'Frozen shoulder',
        hi: 'जमे हुए कंधे'
      },
      {
        en: 'Upper body tension',
        hi: 'शरीर के ऊपरी हिस्से का तनाव'
      }
    ],
    contraindications: {
      en: 'Avoid if there is acute shoulder injury. Use moderate pressure.',
      hi: 'तीव्र कंधे की चोट में बचें। मध्यम दबाव का प्रयोग करें।',
    },
    technique: {
      en: 'Apply firm pressure with opposite hand while gently moving the shoulder. Hold for 2-3 minutes.',
      hi: 'विपरीत हाथ से मजबूत दबाव डालें और कंधे को धीरे से हिलाएं। 2-3 मिनट तक दबाए रखें।',
    },
    duration: '2-3 minutes',
    pressure: 'Firm',
    bodyPart: ['shoulder'],
    symptoms: ['shoulder pain', 'arm weakness', 'frozen shoulder', 'upper body tension'],
    difficulty: 'Intermediate',
    category: 'Classical',
    popularity: 3,
    method: {
      en: 'Apply firm pressure with opposite hand while gently moving the shoulder. Hold for 2-3 minutes.',
      hi: 'विपरीत हाथ से मजबूत दबाव डालें और कंधे को धीरे से हिलाएं। 2-3 मिनट तक दबाए रखें।',
    },
    conditions: ['shoulder pain', 'arm weakness', 'frozen shoulder'],
    images: ['li15_location.jpg', 'li15_technique.jpg'],
  },
  {
    id: 'gv24',
    code: 'GV24',
    name: {
      en: 'Governing Vessel 24 - Shenting',
      hi: 'गवर्निंग वेसल 24 - शेंटिंग',
    },
    chineseName: {
      traditional: '神庭',
      pinyin: 'Shéntíng'
    },
    location: {
      en: 'Located at the center of the forehead, 0.5 finger width above the anterior hairline.',
      hi: 'माथे के केंद्र में स्थित, बालों की अगली रेखा से 0.5 अंगुल ऊपर।',
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
        en: 'Mental disorders and anxiety',
        hi: 'मानसिक विकार और चिंता'
      },
      {
        en: 'Frontal headaches',
        hi: 'माथे का दर्द'
      },
      {
        en: 'Poor concentration',
        hi: 'एकाग्रता की कमी'
      },
      {
        en: 'Dizziness',
        hi: 'चक्कर आना'
      }
    ],
    contraindications: {
      en: 'Use very gentle pressure. Avoid deep pressure on the head.',
      hi: 'बहुत हल्का दबाव डालें। सिर पर गहरा दबाव न डालें।',
    },
    technique: {
      en: 'Use your middle finger to apply gentle pressure with small circular motions for 1-2 minutes.',
      hi: 'अपनी बीच की उंगली से 1-2 मिनट तक छोटी गोलाकार गति में हल्का दबाव डालें।',
    },
    duration: '1-2 minutes',
    pressure: 'Light',
    bodyPart: ['head'],
    symptoms: ['anxiety', 'frontal headache', 'poor concentration', 'dizziness'],
    difficulty: 'Beginner',
    category: 'Classical',
    popularity: 3,
    method: {
      en: 'Use your middle finger to apply gentle pressure with small circular motions for 1-2 minutes.',
      hi: 'अपनी बीच की उंगली से 1-2 मिनट तक छोटी गोलाकार गति में हल्का दबाव डालें।',
    },
    conditions: ['anxiety', 'frontal headache', 'poor concentration'],
    images: ['gv24_location.jpg', 'gv24_technique.jpg'],
  },
  {
    id: 'taiyang',
    code: 'EX-HN5',
    name: {
      en: 'Extra Point - Taiyang (Temple)',
      hi: 'अतिरिक्त बिंदु - ताइयांग (मंदिर)',
    },
    chineseName: {
      traditional: '太陽',
      pinyin: 'Tàiyáng'
    },
    location: {
      en: 'Located at the temple, in the depression behind the outer corner of the eye and eyebrow.',
      hi: 'मंदिर पर स्थित, आंख और भौं के बाहरी कोने के पीछे के अवसाद में।',
    },
    meridian: {
      name: {
        en: 'Extra Point',
        hi: 'अतिरिक्त बिंदु'
      },
      code: 'EX',
      polarity: undefined
    },
    indications: [
      {
        en: 'Temporal headaches and migraines',
        hi: 'कनपटी का दर्द और माइग्रेन'
      },
      {
        en: 'Eye fatigue and strain',
        hi: 'आंखों की थकान और खिंचाव'
      },
      {
        en: 'Facial neuralgia',
        hi: 'चेहरे की न्यूरेल्जिया'
      },
      {
        en: 'Stress and tension',
        hi: 'तनाव और चिंता'
      }
    ],
    contraindications: {
      en: 'Use gentle pressure. Avoid if you have severe eye conditions or recent head trauma.',
      hi: 'हल्का दबाव डालें। गंभीर आंखों की समस्याओं या हाल की सिर की चोट में बचें।',
    },
    technique: {
      en: 'Use your index and middle fingers to apply gentle circular pressure for 2-3 minutes on both temples.',
      hi: 'अपनी तर्जनी और बीच की उंगली से दोनों कनपटियों पर 2-3 मिनट तक हल्का गोलाकार दबाव डालें।',
    },
    duration: '2-3 minutes',
    pressure: 'Light',
    bodyPart: ['face'],
    symptoms: ['temporal headache', 'migraine', 'eye fatigue', 'facial neuralgia'],
    difficulty: 'Beginner',
    category: 'Extra',
    popularity: 5,
    method: {
      en: 'Use your index and middle fingers to apply gentle circular pressure for 2-3 minutes on both temples.',
      hi: 'अपनी तर्जनी और बीच की उंगली से दोनों कनपटियों पर 2-3 मिनट तक हल्का गोलाकार दबाव डालें।',
    },
    conditions: ['temporal headache', 'migraine', 'eye fatigue'],
    images: ['taiyang_location.jpg', 'taiyang_technique.jpg'],
  },

  // Point 76: Stomach 12 (Quepen) - Respiratory and throat support
  {
    id: 'st12',
    code: 'ST12',
    name: {
      en: 'Stomach 12 - Empty Basin',
      hi: 'स्टमक 12 - क्वेपेन',
    },
    chineseName: {
      traditional: '缺盆',
      pinyin: 'Quēpén'
    },
    location: {
      en: 'Located in the supraclavicular fossa, above the collarbone, lateral to the throat.',
      hi: 'हंसली के ऊपर, गले के बगल में, सुप्राक्लेविकुलर फोसा में स्थित।',
    },
    meridian: {
      name: {
        en: 'Stomach',
        hi: 'स्टमक',
      },
      code: 'ST',
      element: 'Earth',
      polarity: 'Yang'
    },
    indications: [
      {
        en: 'Respiratory congestion',
        hi: 'श्वसन संकुलन'
      },
      {
        en: 'Throat inflammation',
        hi: 'गले की सूजन'
      },
      {
        en: 'Shoulder tension',
        hi: 'कंधे का तनाव'
      },
      {
        en: 'Lymphatic congestion',
        hi: 'लसीका संकुलन'
      }
    ],
    contraindications: {
      en: 'Use very gentle pressure. Avoid with severe respiratory distress.',
      hi: 'बहुत हल्का दबाव का उपयोग करें। गंभीर श्वसन संकट में बचें।',
    },
    technique: {
      en: 'Use fingertips to apply gentle circular pressure for 30-60 seconds on both sides.',
      hi: 'अंगुली के सिरों से दोनों तरफ 30-60 सेकंड तक हल्का गोलाकार दबाव डालें।',
    },
    duration: '30-60 seconds',
    pressure: 'Light',
    bodyPart: ['chest', 'neck'],
    symptoms: ['respiratory congestion', 'throat pain', 'shoulder tension', 'lymph congestion'],
    difficulty: 'Intermediate',
    category: 'Classical',
    popularity: 3,
    method: {
      en: 'Use fingertips to apply gentle circular pressure for 30-60 seconds on both sides.',
      hi: 'अंगुली के सिरों से दोनों तरफ 30-60 सेकंड तक हल्का गोलाकार दबाव डालें।',
    },
    conditions: ['respiratory congestion', 'throat inflammation', 'shoulder tension'],
    images: ['st12_location.jpg'],
  },

  // Point 78: Lung 7 (Lieque) - Respiratory and circulation
  {
    id: 'lu7',
    code: 'LU7',
    name: {
      en: 'Lung 7 - Broken Sequence',
      hi: 'लंग 7 - लीक्यू',
    },
    chineseName: {
      traditional: '列缺',
      pinyin: 'Lièquē'
    },
    location: {
      en: 'Located on the thumb side of the forearm, about 1.5 finger widths above the wrist crease.',
      hi: 'हाथ के अंगूठे की तरफ, कलाई की रेखा से लगभग 1.5 उंगली चौड़ाई ऊपर स्थित।',
    },
    meridian: {
      name: {
        en: 'Lung',
        hi: 'लंग',
      },
      code: 'LU',
      element: 'Metal',
      polarity: 'Yin'
    },
    indications: [
      {
        en: 'Asthma',
        hi: 'दमा'
      },
      {
        en: 'Bronchitis',
        hi: 'ब्रोंकाइटिस'
      },
      {
        en: 'Wrist pain',
        hi: 'कलाई का दर्द'
      },
      {
        en: 'Skin disorders',
        hi: 'त्वचा विकार'
      }
    ],
    contraindications: {
      en: 'Avoid during pregnancy. Use gentle pressure for sensitive individuals.',
      hi: 'गर्भावस्था के दौरान बचें। संवेदनशील व्यक्तियों के लिए हल्का दबाव का उपयोग करें।',
    },
    technique: {
      en: 'Apply moderate pressure with thumb while supporting the arm, hold for 1-2 minutes.',
      hi: 'हाथ को सहारा देते हुए अंगूठे से मध्यम दबाव डालें, 1-2 मिनट तक रोकें।',
    },
    duration: '1-2 minutes',
    pressure: 'Moderate',
    bodyPart: ['arm', 'wrist'],
    symptoms: ['asthma', 'bronchitis', 'wrist pain', 'skin problems'],
    difficulty: 'Beginner',
    category: 'Classical',
    popularity: 4,
    method: {
      en: 'Apply moderate pressure with thumb while supporting the arm, hold for 1-2 minutes.',
      hi: 'हाथ को सहारा देते हुए अंगूठे से मध्यम दबाव डालें, 1-2 मिनट तक रोकें।',
    },
    conditions: ['asthma', 'bronchitis', 'wrist pain'],
    images: ['lu7_location.jpg'],
  },

  // Point 79: Liver 8 (Ququan) - Women's health and circulation
  {
    id: 'lv8',
    code: 'LV8',
    name: {
      en: 'Liver 8 - Crooked Spring',
      hi: 'लिवर 8 - क्वक्वान',
    },
    chineseName: {
      traditional: '曲泉',
      pinyin: 'Qūquán'
    },
    location: {
      en: 'Located on the inner side of the knee, at the end of the knee crease when knee is bent.',
      hi: 'घुटने के अंदरूनी हिस्से पर, घुटना मोड़ने पर घुटने की सिलवट के अंत में स्थित।',
    },
    meridian: {
      name: {
        en: 'Liver',
        hi: 'लिवर',
      },
      code: 'LV',
      element: 'Wood',
      polarity: 'Yin'
    },
    indications: [
      {
        en: 'Menstrual irregularities',
        hi: 'मासिक धर्म की अनियमितता'
      },
      {
        en: 'Knee pain',
        hi: 'घुटने का दर्द'
      },
      {
        en: 'Urinary problems',
        hi: 'मूत्र संबंधी समस्याएं'
      },
      {
        en: 'Emotional stress',
        hi: 'भावनात्मक तनाव'
      }
    ],
    contraindications: {
      en: 'Avoid during early pregnancy. Use gentle pressure for knee injuries.',
      hi: 'गर्भावस्था की शुरुआत में बचें। घुटने की चोट के लिए हल्का दबाव का उपयोग करें।',
    },
    technique: {
      en: 'Apply moderate pressure with thumb while knee is slightly bent, hold for 1-2 minutes.',
      hi: 'घुटना थोड़ा मोड़कर अंगूठे से मध्यम दबाव डालें, 1-2 मिनट तक रोकें।',
    },
    duration: '1-2 minutes',
    pressure: 'Moderate',
    bodyPart: ['knee', 'leg'],
    symptoms: ['menstrual problems', 'knee pain', 'urinary issues', 'stress'],
    difficulty: 'Intermediate',
    category: 'Classical',
    popularity: 3,
    method: {
      en: 'Apply moderate pressure with thumb while knee is slightly bent, hold for 1-2 minutes.',
      hi: 'घुटना थोड़ा मोड़कर अंगूठे से मध्यम दबाव डालें, 1-2 मिनट तक रोकें।',
    },
    conditions: ['menstrual irregularities', 'knee pain', 'urinary problems'],
    images: ['lv8_location.jpg'],
  },

  // Point 80: Bladder 15 (Xinshu) - Heart and emotional support
  {
    id: 'bl15',
    code: 'BL15',
    name: {
      en: 'Bladder 15 - Heart Shu',
      hi: 'ब्लैडर 15 - हार्ट शू',
    },
    chineseName: {
      traditional: '心俞',
      pinyin: 'Xīnshū'
    },
    location: {
      en: 'Located on the back, 1.5 finger widths lateral to the spine, level with the 5th thoracic vertebra.',
      hi: 'पीठ पर, रीढ़ की हड्डी से 1.5 उंगली चौड़ाई बगल में, 5वीं वक्षीय कशेरुका के स्तर पर स्थित।',
    },
    meridian: {
      name: {
        en: 'Bladder',
        hi: 'ब्लैडर',
      },
      code: 'BL',
      element: 'Water',
      polarity: 'Yang'
    },
    indications: [
      {
        en: 'Heart palpitations',
        hi: 'दिल की धड़कन'
      },
      {
        en: 'Anxiety disorders',
        hi: 'चिंता विकार'
      },
      {
        en: 'Insomnia',
        hi: 'अनिद्रा'
      },
      {
        en: 'Memory problems',
        hi: 'स्मृति समस्याएं'
      }
    ],
    contraindications: {
      en: 'Avoid with severe heart conditions. Professional guidance recommended.',
      hi: 'गंभीर हृदय रोगों में बचें। पेशेवर मार्गदर्शन की सिफारिश की जाती है।',
    },
    technique: {
      en: 'Apply gentle pressure with thumbs for 1-2 minutes while lying face down.',
      hi: 'मुंह के बल लेटकर अंगूठों से 1-2 मिनट तक हल्का दबाव डालें।',
    },
    duration: '1-2 minutes',
    pressure: 'Light',
    bodyPart: ['back'],
    symptoms: ['heart palpitations', 'anxiety', 'insomnia', 'memory issues'],
    difficulty: 'Advanced',
    category: 'Classical',
    popularity: 3,
    method: {
      en: 'Apply gentle pressure with thumbs for 1-2 minutes while lying face down.',
      hi: 'मुंह के बल लेटकर अंगूठों से 1-2 मिनट तक हल्का दबाव डालें।',
    },
    conditions: ['heart palpitations', 'anxiety', 'insomnia'],
    images: ['bl15_location.jpg'],
  },

  // Point 81: Spleen 2 (Dadu) - Digestive regulation
  {
    id: 'sp2',
    code: 'SP2',
    name: {
      en: 'Spleen 2 - Great Metropolis',
      hi: 'स्प्लीन 2 - दादू',
    },
    chineseName: {
      traditional: '大都',
      pinyin: 'Dàdū'
    },
    location: {
      en: 'Located on the inner edge of the foot, in the depression distal to the big toe joint.',
      hi: 'पैर के अंदरूनी किनारे पर, अंगूठे की जोड़ के आगे के गड्ढे में स्थित।',
    },
    meridian: {
      name: {
        en: 'Spleen',
        hi: 'स्प्लीन',
      },
      code: 'SP',
      element: 'Earth',
      polarity: 'Yin'
    },
    indications: [
      {
        en: 'Digestive disorders',
        hi: 'पाचन विकार'
      },
      {
        en: 'Diarrhea',
        hi: 'दस्त'
      },
      {
        en: 'Stomach heat',
        hi: 'पेट की गर्मी'
      },
      {
        en: 'Foot pain',
        hi: 'पैर का दर्द'
      }
    ],
    contraindications: {
      en: 'Avoid with severe digestive bleeding. Use gentle pressure.',
      hi: 'गंभीर पाचन रक्तस्राव में बचें। हल्का दबाव का प्रयोग करें।',
    },
    technique: {
      en: 'Apply moderate pressure with thumb for 1-2 minutes while supporting the foot.',
      hi: 'पैर को सहारा देते हुए अंगूठे से 1-2 मिनट तक मध्यम दबाव डालें।',
    },
    duration: '1-2 minutes',
    pressure: 'Moderate',
    bodyPart: ['foot'],
    symptoms: ['digestive problems', 'diarrhea', 'stomach heat', 'foot pain'],
    difficulty: 'Beginner',
    category: 'Classical',
    popularity: 3,
    method: {
      en: 'Apply moderate pressure with thumb for 1-2 minutes while supporting the foot.',
      hi: 'पैर को सहारा देते हुए अंगूठे से 1-2 मिनट तक मध्यम दबाव डालें।',
    },
    conditions: ['digestive disorders', 'diarrhea', 'stomach heat'],
    images: ['sp2_location.jpg'],
  },

  // Point 82: Triple Heater 21 (Ermen) - Hearing and ear health
  {
    id: 'th21',
    code: 'TH21',
    name: {
      en: 'Triple Heater 21 - Ear Gate',
      hi: 'ट्रिपल हीटर 21 - इरमेन',
    },
    chineseName: {
      traditional: '耳門',
      pinyin: 'Ěrmén'
    },
    location: {
      en: 'Located in front of the ear, in the depression above the ear canal opening.',
      hi: 'कान के सामने, कान की नली के मुंह के ऊपर के गड्ढे में स्थित।',
    },
    meridian: {
      name: {
        en: 'Triple Heater',
        hi: 'ट्रिपल हीटर',
      },
      code: 'TH',
      element: 'Fire',
      polarity: 'Yang'
    },
    indications: [
      {
        en: 'Hearing loss',
        hi: 'सुनने की हानि'
      },
      {
        en: 'Tinnitus',
        hi: 'कान में भनभनाहट'
      },
      {
        en: 'Ear infections',
        hi: 'कान के संक्रमण'
      },
      {
        en: 'TMJ disorders',
        hi: 'टीएमजे विकार'
      }
    ],
    contraindications: {
      en: 'Avoid with perforated eardrum. Use very gentle pressure.',
      hi: 'छिद्रित कान के पर्दे में बचें। बहुत हल्का दबाव का उपयोग करें।',
    },
    technique: {
      en: 'Apply very gentle circular pressure with fingertip for 30-60 seconds.',
      hi: 'अंगुली के सिरे से 30-60 सेकंड तक बहुत हल्का गोलाकार दबाव डालें।',
    },
    duration: '30-60 seconds',
    pressure: 'Light',
    bodyPart: ['ear'],
    symptoms: ['hearing loss', 'tinnitus', 'ear infections', 'TMJ disorders'],
    difficulty: 'Intermediate',
    category: 'Classical',
    popularity: 3,
    method: {
      en: 'Apply very gentle circular pressure with fingertip for 30-60 seconds.',
      hi: 'अंगुली के सिरे से 30-60 सेकंड तक बहुत हल्का गोलाकार दबाव डालें।',
    },
    conditions: ['hearing loss', 'tinnitus', 'ear infections'],
    images: ['th21_location.jpg'],
  },

  // Point 83: Kidney 16 (Huangshu) - Digestive and reproductive support
  {
    id: 'ki16',
    code: 'KI16',
    name: {
      en: 'Kidney 16 - Vital Shu',
      hi: 'किडनी 16 - हुआंगशू',
    },
    chineseName: {
      traditional: '肓俞',
      pinyin: 'Huāngshū'
    },
    location: {
      en: 'Located on the abdomen, 0.5 finger width lateral to the navel.',
      hi: 'पेट पर, नाभि से 0.5 उंगली चौड़ाई बगल में स्थित।',
    },
    meridian: {
      name: {
        en: 'Kidney',
        hi: 'किडनी',
      },
      code: 'KI',
      element: 'Water',
      polarity: 'Yin'
    },
    indications: [
      {
        en: 'Abdominal pain',
        hi: 'पेट दर्द'
      },
      {
        en: 'Digestive issues',
        hi: 'पाचन संबंधी समस्याएं'
      },
      {
        en: 'Constipation',
        hi: 'कब्ज'
      },
      {
        en: 'Reproductive disorders',
        hi: 'प्रजनन विकार'
      }
    ],
    contraindications: {
      en: 'Avoid during pregnancy. Use gentle pressure after meals.',
      hi: 'गर्भावस्था के दौरान बचें। भोजन के बाद हल्का दबाव का प्रयोग करें।',
    },
    technique: {
      en: 'Apply gentle circular pressure with fingertips for 1-2 minutes.',
      hi: 'अंगुली के सिरों से 1-2 मिनट तक हल्का गोलाकार दबाव डालें।',
    },
    duration: '1-2 minutes',
    pressure: 'Light',
    bodyPart: ['abdomen'],
    symptoms: ['abdominal pain', 'digestive issues', 'constipation', 'reproductive problems'],
    difficulty: 'Beginner',
    category: 'Classical',
    popularity: 3,
    method: {
      en: 'Apply gentle circular pressure with fingertips for 1-2 minutes.',
      hi: 'अंगुली के सिरों से 1-2 मिनट तक हल्का गोलाकार दबाव डालें।',
    },
    conditions: ['abdominal pain', 'digestive issues', 'constipation'],
    images: ['ki16_location.jpg'],
  },

  // Point 84: Small Intestine 8 (Xiaohai) - Elbow and emotional support
  {
    id: 'si8',
    code: 'SI8',
    name: {
      en: 'Small Intestine 8 - Small Sea',
      hi: 'स्मॉल इंटेस्टाइन 8 - शियाओहाई',
    },
    chineseName: {
      traditional: '小海',
      pinyin: 'Xiǎohǎi'
    },
    location: {
      en: 'Located on the inner side of the elbow, in the groove between the ulna bone and olecranon.',
      hi: 'कोहनी के अंदरूनी हिस्से पर, अल्ना हड्डी और ओलेक्रानॉन के बीच के नाली में स्थित।',
    },
    meridian: {
      name: {
        en: 'Small Intestine',
        hi: 'स्मॉल इंटेस्टाइन',
      },
      code: 'SI',
      element: 'Fire',
      polarity: 'Yang'
    },
    indications: [
      {
        en: 'Elbow pain',
        hi: 'कोहनी का दर्द'
      },
      {
        en: 'Arm numbness',
        hi: 'हाथ की सुन्नता'
      },
      {
        en: 'Mental restlessness',
        hi: 'मानसिक बेचैनी'
      },
      {
        en: 'Shoulder stiffness',
        hi: 'कंधे की अकड़न'
      }
    ],
    contraindications: {
      en: 'Avoid with elbow fractures. Use gentle pressure for inflammation.',
      hi: 'कोहनी के फ्रैक्चर में बचें। सूजन के लिए हल्का दबाव का उपयोग करें।',
    },
    technique: {
      en: 'Apply moderate pressure with thumb while arm is slightly bent for 1-2 minutes.',
      hi: 'हाथ थोड़ा मोड़कर अंगूठे से 1-2 मिनट तक मध्यम दबाव डालें।',
    },
    duration: '1-2 minutes',
    pressure: 'Moderate',
    bodyPart: ['arm', 'elbow'],
    symptoms: ['elbow pain', 'arm numbness', 'mental restlessness', 'shoulder stiffness'],
    difficulty: 'Intermediate',
    category: 'Classical',
    popularity: 3,
    method: {
      en: 'Apply moderate pressure with thumb while arm is slightly bent for 1-2 minutes.',
      hi: 'हाथ थोड़ा मोड़कर अंगूठे से 1-2 मिनट तक मध्यम दबाव डालें।',
    },
    conditions: ['elbow pain', 'arm numbness', 'mental restlessness'],
    images: ['si8_location.jpg'],
  },

  // Point 84: Conception Vessel 22 (Tiantu) - Sore throat and cough
  {
    id: 'cv22',
    code: 'CV22',
    name: {
      en: 'Conception Vessel 22 - Heavenly Chimney',
      hi: 'गर्भ वेसल 22 - स्वर्गीय चिमनी',
    },
    chineseName: {
      traditional: '天突',
      pinyin: 'Tiāntū'
    },
    location: {
      en: 'Located in the center of the suprasternal notch (hollow at the base of the throat).',
      hi: 'गले के आधार पर सुप्रास्टर्नल नॉच के केंद्र में स्थित।',
    },
    meridian: {
      name: {
        en: 'Conception Vessel',
        hi: 'गर्भ वेसल'
      },
      code: 'CV',
      element: 'Water',
      polarity: 'Yin'
    },
    indications: [
      {
        en: 'Sore throat',
        hi: 'गले में खराश'
      },
      {
        en: 'Dry cough',
        hi: 'सूखी खांसी'
      },
      {
        en: 'Difficulty swallowing',
        hi: 'निगलने में कठिनाई'
      },
      {
        en: 'Throat congestion',
        hi: 'गले की भीड़'
      }
    ],
    contraindications: {
      en: 'Avoid excessive pressure. Be gentle with this sensitive area.',
      hi: 'अधिक दबाव से बचें। इस संवेदनशील क्षेत्र के साथ सावधान रहें।',
    },
    technique: {
      en: 'Apply very gentle pressure with fingertip in small circular motions.',
      hi: 'उंगली की नोक से छोटी गोलाकार गतियों में बहुत हल्का दबाव डालें।',
    },
    duration: '30 seconds to 1 minute',
    pressure: 'Light',
    bodyPart: ['throat', 'neck'],
    symptoms: ['sore throat', 'dry cough', 'voice problems', 'throat pain', 'difficulty swallowing'],
    difficulty: 'Beginner',
    category: 'Classical',
    popularity: 4,
    method: {
      en: 'Apply very gentle pressure with fingertip for 30 seconds to 1 minute.',
      hi: 'उंगली की नोक से 30 सेकंड से 1 मिनट तक बहुत हल्का दबाव डालें।',
    },
    conditions: ['sore throat', 'dry cough', 'voice problems', 'throat inflammation'],
    images: ['cv22_location.jpg'],
  },

  // Point 85: Extra Point - Bitong (Nasal congestion)
  {
    id: 'bitong',
    code: 'EX-HN8',
    name: {
      en: 'Extra Point - Bitong (Nasal Patency)',
      hi: 'एक्स्ट्रा पॉइंट - बिटॉन्ग (नाक की रुकावट)',
    },
    chineseName: {
      traditional: '鼻通',
      pinyin: 'Bítōng'
    },
    location: {
      en: 'Located on both sides of the nose, at the junction of the nasal bone and nasal cartilage.',
      hi: 'नाक के दोनों किनारों पर, नासिका हड्डी और नासिका उपास्थि के जंक्शन पर स्थित।',
    },
    meridian: {
      name: {
        en: 'Extra Point',
        hi: 'एक्स्ट्रा पॉइंट'
      },
      code: 'EX',
      element: 'Metal',
      polarity: 'Yang'
    },
    indications: [
      {
        en: 'Blocked nose',
        hi: 'बंद नाक'
      },
      {
        en: 'Nasal congestion',
        hi: 'नाक की रुकावट'
      },
      {
        en: 'Rhinitis',
        hi: 'राइनाइटिस'
      },
      {
        en: 'Loss of smell',
        hi: 'गंध की हानि'
      }
    ],
    contraindications: {
      en: 'Be gentle, avoid if nose is injured or very inflamed.',
      hi: 'सावधान रहें, यदि नाक घायल है या बहुत सूजी है तो बचें।',
    },
    technique: {
      en: 'Apply gentle pressure with fingertips on both sides simultaneously.',
      hi: 'दोनों तरफ एक साथ उंगलियों की नोक से हल्का दबाव डालें।',
    },
    duration: '1-2 minutes',
    pressure: 'Light',
    bodyPart: ['nose', 'face'],
    symptoms: ['blocked nose', 'nasal congestion', 'rhinitis', 'loss of smell', 'stuffy nose'],
    difficulty: 'Beginner',
    category: 'Extra',
    popularity: 5,
    method: {
      en: 'Apply gentle pressure with fingertips on both sides for 1-2 minutes.',
      hi: 'उंगलियों की नोक से दोनों तरफ 1-2 मिनट तक हल्का दबाव डालें।',
    },
    conditions: ['blocked nose', 'nasal congestion', 'rhinitis', 'loss of smell'],
    images: ['bitong_location.jpg'],
  },

  // Point 86: Large Intestine 18 (Futu) - Throat and cough
  {
    id: 'li18',
    code: 'LI18',
    name: {
      en: 'Large Intestine 18 - Support and Rush Out',
      hi: 'बड़ी आंत 18 - सहारा और बाहर निकलना',
    },
    chineseName: {
      traditional: '扶突',
      pinyin: 'Fútū'
    },
    location: {
      en: 'Located on the lateral neck, at the anterior border of the sternocleidomastoid muscle.',
      hi: 'गर्दन के बाजू में, स्टर्नोक्लीडोमास्टॉइड मांसपेशी की अगली सीमा पर स्थित।',
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
        en: 'Productive cough',
        hi: 'कफ वाली खांसी'
      },
      {
        en: 'Throat phlegm',
        hi: 'गले में कफ'
      },
      {
        en: 'Voice hoarseness',
        hi: 'आवाज में भारीपन'
      },
      {
        en: 'Neck lymph congestion',
        hi: 'गर्दन की लसीका भीड़'
      }
    ],
    contraindications: {
      en: 'Avoid during pregnancy. Be gentle with neck area.',
      hi: 'गर्भावस्था के दौरान बचें। गर्दन के क्षेत्र के साथ सावधान रहें।',
    },
    technique: {
      en: 'Apply gentle pressure with fingertip while swallowing to activate.',
      hi: 'सक्रिय करने के लिए निगलते समय उंगली की नोक से हल्का दबाव डालें।',
    },
    duration: '1 minute',
    pressure: 'Light',
    bodyPart: ['neck', 'throat'],
    symptoms: ['productive cough', 'throat phlegm', 'voice hoarseness', 'lymph congestion', 'throat clearing'],
    difficulty: 'Intermediate',
    category: 'Classical',
    popularity: 3,
    method: {
      en: 'Apply gentle pressure with fingertip for 1 minute, can swallow during treatment.',
      hi: 'उंगली की नोक से 1 मिनट तक हल्का दबाव डालें, उपचार के दौरान निगल सकते हैं।',
    },
    conditions: ['productive cough', 'throat phlegm', 'voice hoarseness', 'lymph congestion'],
    images: ['li18_location.jpg'],
  },

  // Point 87: Stomach 6 Enhanced (Jiache) - Cold symptoms
  {
    id: 'st6_cold',
    code: 'ST6-C',
    name: {
      en: 'Stomach 6 Enhanced - Jaw Vehicle (Cold Relief)',
      hi: 'पेट 6 संवर्धित - जबड़ा वाहन (सर्दी राहत)',
    },
    chineseName: {
      traditional: '頰車',
      pinyin: 'Jiáchē'
    },
    location: {
      en: 'Located on the jaw, one finger width in front of the ear, in the depression when jaw is clenched.',
      hi: 'जबड़े पर, कान के सामने एक उंगली चौड़ाई में, जबड़ा भींचने पर गड्ढे में स्थित।',
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
        en: 'Common cold symptoms',
        hi: 'आम सर्दी के लक्षण'
      },
      {
        en: 'Facial congestion',
        hi: 'चेहरे की रुकावट'
      },
      {
        en: 'Sinus pressure',
        hi: 'साइनस दबाव'
      },
      {
        en: 'Cold-induced jaw tension',
        hi: 'सर्दी से प्रेरित जबड़े का तनाव'
      }
    ],
    contraindications: {
      en: 'Avoid if jaw is injured or if you have TMJ disorders.',
      hi: 'यदि जबड़ा घायल है या TMJ विकार है तो बचें।',
    },
    technique: {
      en: 'Apply firm pressure while opening and closing mouth gently.',
      hi: 'मुंह को धीरे से खोलते और बंद करते समय मजबूत दबाव डालें।',
    },
    duration: '1-2 minutes',
    pressure: 'Firm',
    bodyPart: ['jaw', 'face'],
    symptoms: ['common cold', 'facial congestion', 'sinus pressure', 'jaw tension', 'cold symptoms'],
    difficulty: 'Beginner',
    category: 'Classical',
    popularity: 4,
    method: {
      en: 'Apply firm pressure with fingertips for 1-2 minutes while gently moving jaw.',
      hi: 'जबड़े को धीरे से हिलाते हुए उंगलियों की नोक से 1-2 मिनट तक मजबूत दबाव डालें।',
    },
    conditions: ['common cold', 'facial congestion', 'sinus pressure', 'jaw tension'],
    images: ['st6_cold_location.jpg'],
  },

  // Point 88: Spleen 4 Enhanced (Gongsun) - Loose motions
  {
    id: 'sp4_diarrhea',
    code: 'SP4-D',
    name: {
      en: 'Spleen 4 Enhanced - Grandfather Grandson (Diarrhea Control)',
      hi: 'प्लीहा 4 संवर्धित - दादा पोता (दस्त नियंत्रण)',
    },
    chineseName: {
      traditional: '公孫',
      pinyin: 'Gōngsūn'
    },
    location: {
      en: 'Located on the inner edge of the foot, in the depression behind the base of the big toe.',
      hi: 'पैर के अंदरूनी किनारे पर, अंगूठे के आधार के पीछे गड्ढे में स्थित।',
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
        en: 'Loose motions',
        hi: 'पतले दस्त'
      },
      {
        en: 'Acute diarrhea',
        hi: 'तीव्र दस्त'
      },
      {
        en: 'Stomach upset',
        hi: 'पेट खराब'
      },
      {
        en: 'Digestive weakness',
        hi: 'पाचन कमजोरी'
      }
    ],
    contraindications: {
      en: 'Avoid during pregnancy. Consult doctor for chronic conditions.',
      hi: 'गर्भावस्था के दौरान बचें। पुरानी स्थितियों के लिए डॉक्टर से सलाह लें।',
    },
    technique: {
      en: 'Apply steady pressure while breathing deeply and relaxing abdomen.',
      hi: 'गहरी सांस लेते हुए और पेट को आराम देते हुए स्थिर दबाव डालें।',
    },
    duration: '2-3 minutes',
    pressure: 'Moderate',
    bodyPart: ['foot', 'digestive'],
    symptoms: ['loose motions', 'acute diarrhea', 'stomach upset', 'digestive weakness', 'watery stools'],
    difficulty: 'Beginner',
    category: 'Classical',
    popularity: 5,
    method: {
      en: 'Apply steady pressure with thumb for 2-3 minutes while breathing deeply.',
      hi: 'गहरी सांस लेते हुए अंगूठे से 2-3 मिनट तक स्थिर दबाव डालें।',
    },
    conditions: ['loose motions', 'acute diarrhea', 'stomach upset', 'digestive weakness'],
    images: ['sp4_diarrhea_location.jpg'],
  },

  // Point 89: Large Intestine 2 (Erjian) - Fever and sore throat
  {
    id: 'li2',
    code: 'LI2',
    name: {
      en: 'Large Intestine 2 - Second Interval',
      hi: 'बड़ी आंत 2 - द्वितीय अंतराल',
    },
    chineseName: {
      traditional: '二間',
      pinyin: 'Èrjiān'
    },
    location: {
      en: 'Located on the radial side of the index finger, in front of the second metacarpophalangeal joint.',
      hi: 'तर्जनी की रेडियल साइड पर, दूसरे मेटाकार्पोफैलेंजियल जॉइंट के सामने स्थित।',
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
        en: 'Fever reduction',
        hi: 'बुखार कम करना'
      },
      {
        en: 'Sore throat',
        hi: 'गले में खराश'
      },
      {
        en: 'Dry mouth',
        hi: 'मुंह सूखना'
      },
      {
        en: 'Heat symptoms',
        hi: 'गर्मी के लक्षण'
      }
    ],
    contraindications: {
      en: 'Avoid excessive pressure on finger joints.',
      hi: 'उंगली के जोड़ों पर अधिक दबाव से बचें।',
    },
    technique: {
      en: 'Pinch and hold with opposite thumb and index finger.',
      hi: 'विपरीत अंगूठे और तर्जनी से दबाकर पकड़ें।',
    },
    duration: '30 seconds to 1 minute',
    pressure: 'Moderate',
    bodyPart: ['finger', 'hand'],
    symptoms: ['fever', 'sore throat', 'dry mouth', 'heat symptoms', 'throat inflammation'],
    difficulty: 'Beginner',
    category: 'Classical',
    popularity: 4,
    method: {
      en: 'Pinch with opposite thumb and index finger for 30 seconds to 1 minute.',
      hi: 'विपरीत अंगूठे और तर्जनी से 30 सेकंड से 1 मिनट तक दबाएं।',
    },
    conditions: ['fever', 'sore throat', 'dry mouth', 'heat symptoms'],
    images: ['li2_location.jpg'],
  },

  // Point 90: Spleen 1 (Yinbai) - Menstrual support and digestive regulation
  {
    id: 'sp1',
    code: 'SP1',
    name: {
      en: 'Spleen 1 - Hidden White',
      hi: 'स्प्लीन 1 - छुपा हुआ सफेद',
    },
    chineseName: {
      traditional: '隱白',
      pinyin: 'Yǐnbái'
    },
    location: {
      en: 'Located on the medial side of the big toe, about 0.1 inch from the corner of the nail.',
      hi: 'बड़े पैर के अंगूठे के अंदरूनी किनारे पर, नाखून के कोने से लगभग 0.1 इंच की दूरी पर स्थित।',
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
        en: 'Heavy menstrual bleeding',
        hi: 'अधिक मासिक धर्म स्राव'
      },
      {
        en: 'Digestive weakness',
        hi: 'पाचन कमजोरी'
      },
      {
        en: 'Mental confusion',
        hi: 'मानसिक भ्रम'
      },
      {
        en: 'Abdominal bloating',
        hi: 'पेट फूलना'
      }
    ],
    contraindications: {
      en: 'Use very gentle pressure. Avoid during early pregnancy.',
      hi: 'बहुत हल्का दबाव का उपयोग करें। प्रारंभिक गर्भावस्था में बचें।',
    },
    technique: {
      en: 'Apply gentle pressure with fingertip for 30-60 seconds. Use pinching motion for stronger effect.',
      hi: 'अंगुली के सिरे से 30-60 सेकंड तक हल्का दबाव डालें। मजबूत प्रभाव के लिए चुटकी लेने वाली गति का उपयोग करें।',
    },
    duration: '30-60 seconds',
    pressure: 'Light',
    bodyPart: ['foot'],
    symptoms: ['menstrual problems', 'heavy bleeding', 'digestive issues', 'bloating', 'mental fog'],
    difficulty: 'Beginner',
    category: 'Classical',
    popularity: 3,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Apply gentle pressure with fingertip for 30-60 seconds. Use pinching motion for stronger effect.',
      hi: 'अंगुली के सिरे से 30-60 सेकंड तक हल्का दबाव डालें। मजबूत प्रभाव के लिए चुटकी लेने वाली गति का उपयोग करें।',
    },
    conditions: ['menstrual problems', 'heavy bleeding', 'digestive issues', 'bloating'],
    images: ['sp1_location.jpg'],
  },

  // Point 91: Lung 11 (Shaoshang) - Respiratory support and immune boost
  {
    id: 'lu11',
    code: 'LU11',
    name: {
      en: 'Lung 11 - Lesser Merchant',
      hi: 'फेफड़े 11 - छोटा व्यापारी',
    },
    chineseName: {
      traditional: '少商',
      pinyin: 'Shàoshāng'
    },
    location: {
      en: 'Located on the radial side of the thumb, about 0.1 inch from the corner of the thumbnail.',
      hi: 'अंगूठे के रेडियल साइड पर, अंगूठे के नाखून के कोने से लगभग 0.1 इंच की दूरी पर स्थित।',
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
        en: 'Sore throat and throat pain',
        hi: 'गले में खराश और गले का दर्द'
      },
      {
        en: 'Acute bronchitis',
        hi: 'तीव्र ब्रोंकाइटिस'
      },
      {
        en: 'Fever and chills',
        hi: 'बुखार और ठंड लगना'
      },
      {
        en: 'Respiratory infections',
        hi: 'श्वसन संक्रमण'
      },
      {
        en: 'Immune system support',
        hi: 'प्रतिरक्षा प्रणाली समर्थन'
      }
    ],
    contraindications: {
      en: 'Use gentle pressure only. This is a sensitive point.',
      hi: 'केवल हल्का दबाव का उपयोग करें। यह एक संवेदनशील बिंदु है।',
    },
    technique: {
      en: 'Pinch gently with opposite thumb and index finger for 15-30 seconds. Repeat 2-3 times.',
      hi: 'विपरीत अंगूठे और तर्जनी से धीरे से 15-30 सेकंड तक दबाएं। 2-3 बार दोहराएं।',
    },
    duration: '15-30 seconds',
    pressure: 'Light',
    bodyPart: ['hand'],
    symptoms: ['sore throat', 'bronchitis', 'fever', 'respiratory infection', 'low immunity'],
    difficulty: 'Beginner',
    category: 'Classical',
    popularity: 3,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Pinch gently with opposite thumb and index finger for 15-30 seconds. Repeat 2-3 times.',
      hi: 'विपरीत अंगूठे और तर्जनी से धीरे से 15-30 सेकंड तक दबाएं। 2-3 बार दोहराएं।',
    },
    conditions: ['sore throat', 'bronchitis', 'fever', 'respiratory infection'],
    images: ['lu11_location.jpg'],
  },

  // Point 92: Bladder 67 (Zhiyin) - Sleep quality and anxiety relief
  {
    id: 'bl67',
    code: 'BL67',
    name: {
      en: 'Bladder 67 - Reaching Yin',
      hi: 'ब्लैडर 67 - यिन तक पहुंचना',
    },
    chineseName: {
      traditional: '至陰',
      pinyin: 'Zhìyīn'
    },
    location: {
      en: 'Located on the lateral side of the little toe, about 0.1 inch from the corner of the toenail.',
      hi: 'छोटे पैर के अंगूठे के बाहरी किनारे पर, पैर के नाखून के कोने से लगभग 0.1 इंच की दूरी पर स्थित।',
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
        en: 'Insomnia and sleep disorders',
        hi: 'अनिद्रा और नींद संबंधी विकार'
      },
      {
        en: 'Anxiety and restlessness',
        hi: 'चिंता और बेचैनी'
      },
      {
        en: 'Headaches and migraines',
        hi: 'सिरदर्द और माइग्रेन'
      },
      {
        en: 'Difficult labor (pregnancy)',
        hi: 'कठिन प्रसव (गर्भावस्था)'
      },
      {
        en: 'Eye strain and vision problems',
        hi: 'आंखों का तनाव और दृष्टि समस्याएं'
      }
    ],
    contraindications: {
      en: 'Use gentle pressure. Avoid strong stimulation during pregnancy.',
      hi: 'हल्का दबाव का उपयोग करें। गर्भावस्था में मजबूत उत्तेजना से बचें।',
    },
    technique: {
      en: 'Apply gentle pressure or light pinching for 30-60 seconds before bedtime for best results.',
      hi: 'सर्वोत्तम परिणामों के लिए सोने से पहले 30-60 सेकंड तक हल्का दबाव या हल्की चुटकी लें।',
    },
    duration: '30-60 seconds',
    pressure: 'Light',
    bodyPart: ['foot'],
    symptoms: ['insomnia', 'anxiety', 'restlessness', 'headaches', 'eye strain'],
    difficulty: 'Beginner',
    category: 'Classical',
    popularity: 3,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Apply gentle pressure or light pinching for 30-60 seconds before bedtime for best results.',
      hi: 'सर्वोत्तम परिणामों के लिए सोने से पहले 30-60 सेकंड तक हल्का दबाव या हल्की चुटकी लें।',
    },
    conditions: ['insomnia', 'anxiety', 'restlessness', 'headaches'],
    images: ['bl67_location.jpg'],
  },

  // Point 93: Heart 9 (Shaochong) - Mental clarity and heart regulation  
  {
    id: 'ht9',
    code: 'HT9',
    name: {
      en: 'Heart 9 - Lesser Surge',
      hi: 'हृदय 9 - छोटी लहर',
    },
    chineseName: {
      traditional: '少衝',
      pinyin: 'Shàochōng'
    },
    location: {
      en: 'Located on the radial side of the little finger, about 0.1 inch from the corner of the fingernail.',
      hi: 'छोटी उंगली के रेडियल साइड पर, उंगली के नाखून के कोने से लगभग 0.1 इंच की दूरी पर स्थित।',
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
        en: 'Mental clarity and focus',
        hi: 'मानसिक स्पष्टता और फोकस'
      },
      {
        en: 'Heart palpitations',
        hi: 'दिल की धड़कन'
      },
      {
        en: 'Chest pain and tightness',
        hi: 'छाती दर्द और जकड़न'
      },
      {
        en: 'Emotional instability',
        hi: 'भावनात्मक अस्थिरता'
      },
      {
        en: 'Sudden faintness',
        hi: 'अचानक बेहोशी'
      }
    ],
    contraindications: {
      en: 'Use very gentle pressure. This point is quite sensitive.',
      hi: 'बहुत हल्का दबाव का उपयोग करें। यह बिंदु काफी संवेदनशील है।',
    },
    technique: {
      en: 'Pinch very gently with opposite thumb and index finger for 15-30 seconds when feeling mentally foggy.',
      hi: 'मानसिक धुंधलाहट महसूस करने पर विपरीत अंगूठे और तर्जनी से बहुत धीरे से 15-30 सेकंड तक दबाएं।',
    },
    duration: '15-30 seconds',
    pressure: 'Light',
    bodyPart: ['hand'],
    symptoms: ['mental fog', 'heart palpitations', 'chest pain', 'emotional instability', 'faintness'],
    difficulty: 'Intermediate',
    category: 'Classical',
    popularity: 2,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Pinch very gently with opposite thumb and index finger for 15-30 seconds when feeling mentally foggy.',
      hi: 'मानसिक धुंधलाहट महसूस करने पर विपरीत अंगूठे और तर्जनी से बहुत धीरे से 15-30 सेकंड तक दबाएं।',
    },
    conditions: ['mental fog', 'heart palpitations', 'chest pain', 'emotional instability'],
    images: ['ht9_location.jpg'],
  },

  // Point 94: Small Intestine 1 (Shaoze) - Lactation support and mental alertness
  {
    id: 'si1',
    code: 'SI1',
    name: {
      en: 'Small Intestine 1 - Lesser Marsh',
      hi: 'स्मॉल इंटेस्टाइन 1 - छोटा दलदल',
    },
    chineseName: {
      traditional: '少澤',
      pinyin: 'Shàozé'
    },
    location: {
      en: 'Located on the ulnar side of the little finger, about 0.1 inch from the corner of the fingernail.',
      hi: 'छोटी उंगली के उल्नार साइड पर, उंगली के नाखून के कोने से लगभग 0.1 इंच की दूरी पर स्थित।',
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
        en: 'Insufficient lactation',
        hi: 'अपर्याप्त स्तनपान'
      },
      {
        en: 'Mental alertness and clarity',
        hi: 'मानसिक सतर्कता और स्पष्टता'
      },
      {
        en: 'Sore throat',
        hi: 'गले में खराश'
      },
      {
        en: 'Breast pain and swelling',
        hi: 'स्तन दर्द और सूजन'
      },
      {
        en: 'Fever and headaches',
        hi: 'बुखार और सिरदर्द'
      }
    ],
    contraindications: {
      en: 'Use gentle pressure. Safe for breastfeeding mothers.',
      hi: 'हल्का दबाव का उपयोग करें। स्तनपान कराने वाली माताओं के लिए सुरक्षित।',
    },
    technique: {
      en: 'Pinch gently with opposite thumb and index finger for 30-60 seconds. Good for nursing mothers.',
      hi: 'विपरीत अंगूठे और तर्जनी से धीरे से 30-60 सेकंड तक दबाएं। स्तनपान कराने वाली माताओं के लिए अच्छा।',
    },
    duration: '30-60 seconds',
    pressure: 'Light',
    bodyPart: ['hand'],
    symptoms: ['insufficient lactation', 'mental fog', 'sore throat', 'breast pain', 'fever'],
    difficulty: 'Beginner',
    category: 'Classical',
    popularity: 3,
    
    // Legacy fields for backward compatibility
    method: {
      en: 'Pinch gently with opposite thumb and index finger for 30-60 seconds. Good for nursing mothers.',
      hi: 'विपरीत अंगूठे और तर्जनी से धीरे से 30-60 सेकंड तक दबाएं। स्तनपान कराने वाली माताओं के लिए अच्छा।',
    },
    conditions: ['insufficient lactation', 'mental fog', 'sore throat', 'breast pain'],
    images: ['si1_location.jpg'],
  }
];