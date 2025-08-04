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
      en: 'Extra Point - Yintang',
      hi: 'अतिरिक्त बिंदु - यिनतांग',
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
        en: 'Extra Point',
        hi: 'अतिरिक्त बिंदु'
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
  },
];