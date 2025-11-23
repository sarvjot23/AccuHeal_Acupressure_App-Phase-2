-- AccuHeal Acupressure Points Import
-- Generated: 2025-11-23T17:05:14.503Z
-- Total points: 81

-- NOTE: Run this in Supabase SQL Editor
-- Make sure you're logged into your Supabase dashboard first

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'li4', 'LI4', 'Large Intestine 4 - Hegu', 'बड़ी आंत 4 - हेगू',
  'Located in the webbing between the thumb and index finger, closer to the index finger bone.', 'अंगूठे और तर्जनी के बीच की जगह में स्थित, तर्जनी की हड्डी के करीब।',
  'Apply firm pressure with your thumb for 1-3 minutes. Press and release in a rhythmic pattern. Breathe deeply while applying pressure.', 'अपने अंगूठे से 1-3 मिनट तक मजबूत दबाव डालें। लयबद्ध तरीके से दबाएं और छोड़ें। दबाव डालते समय गहरी सांस लें।',
  'Avoid during pregnancy. Do not use if you have high blood pressure.', 'गर्भावस्था के दौरान बचें। उच्च रक्तचाप है तो उपयोग न करें।',
  '合谷',
  'Hégǔ',
  'Large Intestine', 'बड़ी आंत',
  'LI',
  'Metal',
  'Yang',
  ARRAY['hand'], ARRAY['headache', 'stress', 'pain relief', 'tension', 'toothache'],
  ARRAY['Headaches and migraines', 'Stress and tension relief', 'Pain relief', 'Toothache'], ARRAY['सिरदर्द और माइग्रेन', 'तनाव और चिंता से राहत', 'दर्द से राहत', 'दांत दर्द'],
  '1-3 minutes', 'Firm',
  'Beginner', 'Classical',
  5, '@assets/acupressure_points/LI4_Hegu_dorsal_hand_point_4753731a.png'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'gv20', 'GV20', 'Governing Vessel 20 - Baihui', 'गवर्निंग वेसल 20 - बाइहुई',
  'Located at the top of the head, at the intersection of a line from ear to ear and nose to neck.', 'सिर के शीर्ष पर स्थित, कान से कान और नाक से गर्दन की रेखा के प्रतिच्छेदन पर।',
  'Gently press with your middle finger for 1-2 minutes. Use light to medium pressure in circular motions.', 'अपनी मध्यमा अंगुली से 1-2 मिनट तक धीरे से दबाएं। गोलाकार गति में हल्का से मध्यम दबाव का उपयोग करें।',
  'Use gentle pressure only. Avoid if you have head injuries.', 'केवल हल्का दबाव का उपयोग करें। सिर की चोट है तो बचें।',
  '百会',
  'Bǎihuì',
  'Governing Vessel', 'गवर्निंग वेसल',
  'GV',
  NULL,
  'Yang',
  ARRAY['head'], ARRAY['mental clarity', 'focus', 'dizziness', 'headache', 'memory'],
  ARRAY['Mental clarity and focus', 'Headaches', 'Dizziness', 'Memory improvement'], ARRAY['मानसिक स्पष्टता और एकाग्रता', 'सिरदर्द', 'चक्कर आना', 'स्मृति सुधार'],
  '1-2 minutes', 'Light',
  'Beginner', 'Extra',
  5, '@assets/acupressure_points/GV20_Baihui_crown_intersection_point_0794ad19.png'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'lv3', 'LV3', 'Liver 3 - Taichong', 'लिवर 3 - ताइचोंग',
  'Located on the top of the foot, in the depression between the big toe and second toe, about 2 finger widths from the web.', 'पैर के ऊपरी भाग पर स्थित, बड़े पैर की अंगुली और दूसरी अंगुली के बीच के गड्ढे में, जाली से लगभग 2 अंगुली चौड़ाई की दूरी पर।',
  'Apply firm pressure with your thumb for 1-3 minutes. Press deeply and hold, then release. Repeat on both feet.', 'अपने अंगूठे से 1-3 मिनट तक मजबूत दबाव डालें। गहराई से दबाएं और रोकें, फिर छोड़ें। दोनों पैरों पर दोहराएं।',
  'Avoid during pregnancy. Use caution if you have foot injuries.', 'गर्भावस्था के दौरान बचें। पैर की चोट है तो सावधानी बरतें।',
  '太冲',
  'Tàichōng',
  'Liver', 'लिवर',
  'LV',
  'Wood',
  'Yin',
  ARRAY['foot'], ARRAY['anxiety', 'anger', 'stress', 'insomnia', 'irritability'],
  ARRAY['Anxiety and stress', 'Anger management', 'Insomnia', 'Irritability'], ARRAY['चिंता और तनाव', 'गुस्से पर नियंत्रण', 'अनिद्रा', 'चिड़चिड़ाहट'],
  '1-3 minutes', 'Firm',
  'Intermediate', 'Classical',
  5, '@assets/acupressure_points/LV3_Taichong_foot_acupressure_point_5548e99c.png'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'sp6', 'SP6', 'Spleen 6 - Sanyinjiao', 'स्प्लीन 6 - सान्यिनजियाओ',
  'Located on the inside of the leg, about 4 finger widths above the inner ankle bone, behind the shin bone.', 'पैर के अंदरूनी हिस्से पर स्थित, भीतरी टखने की हड्डी से लगभग 4 अंगुली चौड़ाई ऊपर, पिंडली की हड्डी के पीछे।',
  'Apply medium to firm pressure with your thumb for 1-3 minutes. Press and hold, breathing deeply.', 'अपने अंगूठे से 1-3 मिनट तक मध्यम से मजबूत दबाव डालें। दबाएं और रोकें, गहरी सांस लेते रहें।',
  'Strictly avoid during pregnancy as it may induce labor. Avoid if you have varicose veins.', 'गर्भावस्था के दौरान सख्ती से बचें क्योंकि यह प्रसव पीड़ा को प्रेरित कर सकता है। वैरिकोस वेन्स है तो बचें।',
  '三阴交',
  'Sānyīnjiāo',
  'Spleen', 'स्प्लीन',
  'SP',
  'Earth',
  'Yin',
  ARRAY['leg'], ARRAY['digestive issues', 'menstrual problems', 'insomnia', 'anxiety'],
  ARRAY['Digestive issues', 'Menstrual problems', 'Insomnia', 'Anxiety'], ARRAY['पाचन संबंधी समस्याएं', 'मासिक धर्म की समस्याएं', 'अनिद्रा', 'चिंता'],
  '1-3 minutes', 'Moderate',
  'Intermediate', 'Classical',
  4, '@assets/acupressure_points/SP6_Sanyinjiao_inner_ankle_point_a9e8f6df.png'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'pc6', 'PC6', 'Pericardium 6 - Neiguan', 'पेरिकार्डियम 6 - नेइगुआन',
  'Located on the inner forearm, about 3 finger widths above the wrist crease, between the two tendons.', 'भीतरी अग्रबाहु पर स्थित, कलाई की रेखा से लगभग 3 अंगुली चौड़ाई ऊपर, दो tendons के बीच में।',
  'Apply firm pressure with your thumb for 1-2 minutes. Press and hold while breathing deeply.', 'अपने अंगूठे से 1-2 मिनट तक मजबूत दबाव डालें। गहरी सांस लेते हुए दबाएं और रोकें।',
  'Avoid excessive pressure. Use caution if you have wrist injuries.', 'अधिक दबाव से बचें। कलाई की चोट है तो सावधानी बरतें।',
  '内关',
  'Nèiguān',
  'Pericardium', 'पेरिकार्डियम',
  'PC',
  'Fire',
  'Yin',
  ARRAY['arm'], ARRAY['nausea', 'motion sickness', 'anxiety', 'wrist pain', 'heart palpitations'],
  ARRAY['Nausea and motion sickness', 'Anxiety', 'Wrist pain', 'Heart palpitations'], ARRAY['मतली और मोशन सिकनेस', 'चिंता', 'कलाई का दर्द', 'दिल की धड़कन'],
  '1-2 minutes', 'Firm',
  'Beginner', 'Classical',
  5, '@assets/acupressure_points/PC6_Neiguan_between_tendons_point_0cad7f27.png'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'st36', 'ST36', 'Stomach 36 - Zusanli', 'स्टमक 36 - जुसानली',
  'Located on the outer side of the leg, about 4 finger widths below the kneecap, next to the shin bone.', 'पैर के बाहरी हिस्से पर स्थित, घुटने की टोपी से लगभग 4 अंगुली चौड़ाई नीचे, पिंडली की हड्डी के बगल में।',
  'Apply firm pressure with your thumb for 2-3 minutes. Massage in clockwise circular motions.', 'अपने अंगूठे से 2-3 मिनट तक मजबूत दबाव डालें। घड़ी की दिशा में गोलाकार गति में मालिश करें।',
  'Avoid during pregnancy. Use caution if you have varicose veins.', 'गर्भावस्था के दौरान बचें। वैरिकोस वेन्स है तो सावधानी बरतें।',
  '足三里',
  'Zúsānlǐ',
  'Stomach', 'स्टमक',
  'ST',
  'Earth',
  'Yang',
  ARRAY['leg'], ARRAY['digestive issues', 'fatigue', 'immunity boost', 'leg weakness', 'nausea'],
  ARRAY['Digestive issues', 'Fatigue and energy boost', 'Immunity boost', 'Leg weakness'], ARRAY['पाचन संबंधी समस्याएं', 'थकान और ऊर्जा की कमी', 'प्रतिरक्षा में वृद्धि', 'पैर की कमजोरी'],
  '2-3 minutes', 'Firm',
  'Beginner', 'Classical',
  5, '@assets/acupressure_points/ST36_Zusanli_tibia_leg_point_d593dc9b.png'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'li11', 'LI11', 'Large Intestine 11 - Quchi', 'बड़ी आंत 11 - क्यूची',
  'Located at the lateral end of the elbow crease, in the depression on the outer edge of the elbow when the arm is bent at 90 degrees.', 'कोहनी की बाहरी किनार पर स्थित, जब बांह 90 डिग्री पर मुड़ी हो तो कोहनी की रेखा के अंत में गड्ढे में।',
  'Apply firm pressure with thumb for 1-2 minutes while flexing and extending the elbow.', 'कोहनी को मोड़ते और सीधा करते हुए अंगूठे से 1-2 मिनट तक मजबूत दबाव डालें।',
  'Use moderate pressure only. Avoid during pregnancy.', 'केवल मध्यम दबाव का उपयोग करें। गर्भावस्था के दौरान बचें।',
  '曲池',
  'Qūchí',
  'Large Intestine', 'बड़ी आंत',
  'LI',
  'Metal',
  'Yang',
  ARRAY['elbow'], ARRAY['fever', 'elbow pain', 'skin conditions', 'hypertension', 'tennis elbow'],
  ARRAY['Fever and inflammation', 'Elbow pain and tennis elbow', 'Skin conditions', 'Hypertension'], ARRAY['बुखार और सूजन', 'कोहनी का दर्द और टेनिस एल्बो', 'त्वचा संबंधी समस्याएं', 'उच्च रक्तचाप'],
  '1-2 minutes', 'Firm',
  'Beginner', 'Classical',
  4, '@assets/acupressure_points/LI11_Quchi_elbow_acupressure_point_b6ecb42b.png'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'bl2', 'BL2', 'Bladder 2 - Zanzhu', 'ब्लैडर 2 - जानझू',
  'Located at the inner end of the eyebrow, in the small depression at the medial end of the eyebrow.', 'भौंह के भीतरी सिरे पर स्थित, भौंह के मध्य सिरे के छोटे गड्ढे में।',
  'Gently press with index fingers for 30 seconds to 1 minute using light circular motions.', 'तर्जनी अंगुलियों से 30 सेकंड से 1 मिनट तक हल्की गोलाकार गति में धीरे से दबाएं।',
  'Use very gentle pressure. Avoid if eye injuries present.', 'बहुत हल्का दबाव का उपयोग करें। आंख की चोट है तो बचें।',
  '攢竹',
  'Cuánzhú',
  'Bladder', 'ब्लैडर',
  'BL',
  'Water',
  'Yang',
  ARRAY['face'], ARRAY['headache', 'eye strain', 'frontal sinusitis', 'eyebrow pain'],
  ARRAY['Headaches and migraines', 'Eye strain and fatigue', 'Frontal sinusitis', 'Eyebrow pain'], ARRAY['सिरदर्द और माइग्रेन', 'आंखों का तनाव और थकान', 'माथे की साइनस की सूजन', 'भौंह का दर्द'],
  '30 seconds-1 minute', 'Light',
  'Beginner', 'Classical',
  3, '@assets/acupressure_points/BL2_Zanzhu_eyebrow_acupressure_point_881d24ee.png'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'te17', 'TE17', 'Triple Energizer 17 - Yifeng', 'ट्रिपल एनर्जाइज़र 17 - यिफेंग',
  'Located in the depression behind the earlobe, between the mastoid process and the mandible.', 'कान की लौ के पीछे के गड्ढे में स्थित, मास्टॉइड प्रक्रिया और जबड़े के बीच।',
  'Gently press with middle finger for 1 minute using light circular motions.', 'मध्यमा अंगुली से 1 मिनट तक हल्की गोलाकार गति में धीरे से दबाएं।',
  'Use very gentle pressure. Avoid with ear infections or hearing aids.', 'बहुत हल्का दबाव का उपयोग करें। कान के संक्रमण या हियरिंग एड्स है तो बचें।',
  '翳風',
  'Yìfēng',
  'Triple Energizer', 'ट्रिपल एनर्जाइज़र',
  'TE',
  'Fire',
  'Yang',
  ARRAY['ear', 'head'], ARRAY['tinnitus', 'hearing problems', 'ear infections', 'facial paralysis', 'jaw tension'],
  ARRAY['Tinnitus and hearing problems', 'Ear infections', 'Facial paralysis', 'Jaw tension'], ARRAY['कान की आवाज और सुनने की समस्याएं', 'कान के संक्रमण', 'चेहरे का पक्षाघात', 'जबड़े का तनाव'],
  '1 minute', 'Light',
  'Intermediate', 'Classical',
  3, '@assets/acupressure_points/TE17_Yifeng_ear_acupressure_point_c48cdf2e.png'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'gv26', 'GV26', 'Governing Vessel 26 - Shuigou', 'गवर्निंग वेसल 26 - शुइगाओ',
  'Located at the junction of the upper 1/3 and middle 1/3 of the philtrum (groove between nose and upper lip).', 'नाक और ऊपरी होंठ के बीच की नाली के ऊपरी 1/3 और मध्य 1/3 के मिलन पर स्थित।',
  'Apply firm upward pressure with fingernail for 10-30 seconds.', 'नाखून से 10-30 सेकंड तक ऊपर की ओर मजबूत दबाव डालें।',
  'Use gentle pressure only. For emergency use, seek medical attention.', 'केवल हल्का दबाव का उपयोग करें। आपातकाल के लिए, चिकित्सा सहायता लें।',
  '水溝',
  'Shuǐgōu',
  'Governing Vessel', 'गवर्निंग वेसल',
  'GV',
  NULL,
  'Yang',
  ARRAY['face'], ARRAY['emergency revival', 'fainting', 'shock', 'mental clarity', 'nasal congestion'],
  ARRAY['Emergency revival', 'Fainting and shock', 'Mental clarity', 'Nasal congestion'], ARRAY['आपातकालीन पुनर्जीवन', 'बेहोशी और शॉक', 'मानसिक स्पष्टता', 'नाक की बंद'],
  '10-30 seconds', 'Firm',
  'Advanced', 'Extra',
  2, '@assets/acupressure_points/GV26_Renzhong_face_acupressure_point_5a31f098.png'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'ht7', 'HT7', 'Heart 7 - Shenmen', 'हार्ट 7 - शेनमेन',
  'Located on the wrist crease, on the pinky side, in the depression next to the tendon.', 'कलाई की रेखा पर स्थित, छोटी अंगुली की तरफ, tendon के बगल के गड्ढे में।',
  'Apply gentle pressure with thumb for 1-3 minutes. Hold and breathe deeply.', 'अंगूठे से 1-3 मिनट तक हल्का दबाव डालें। दबाएं और गहरी सांस लें।',
  'Use gentle pressure. Avoid with severe heart conditions without medical supervision.', 'हल्का दबाव का उपयोग करें। गंभीर हृदय रोग है तो चिकित्सा देखरेख के बिना बचें।',
  '神門',
  'Shénmén',
  'Heart', 'हार्ट',
  'HT',
  'Fire',
  'Yin',
  ARRAY['wrist'], ARRAY['insomnia', 'anxiety', 'heart palpitations', 'memory problems', 'emotional balance'],
  ARRAY['Insomnia and sleep disorders', 'Anxiety and panic attacks', 'Heart palpitations', 'Memory problems'], ARRAY['अनिद्रा और नींद की समस्याएं', 'चिंता और घबराहट के दौरे', 'दिल की धड़कन', 'याददाश्त की समस्याएं'],
  '1-3 minutes', 'Light',
  'Beginner', 'Classical',
  5, '@assets/acupressure_points/HT7_Shenmen_wrist_acupressure_point_c660a59c.png'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'ki3', 'KI3', 'Kidney 3 - Taixi', 'किडनी 3 - ताइक्सी',
  'Located on the inner ankle, in the depression between the ankle bone and Achilles tendon.', 'भीतरी टखने पर स्थित, टखने की हड्डी और एच्लिस टेंडन के बीच के गड्ढे में।',
  'Apply firm pressure with thumb for 1-3 minutes. Hold and rotate gently.', 'अंगूठे से 1-3 मिनट तक मजबूत दबाव डालें। दबाएं और धीरे से घुमाएं।',
  'Avoid during pregnancy. Use gentle pressure with kidney disease.', 'गर्भावस्था के दौरान बचें। किडनी रोग है तो हल्का दबाव का उपयोग करें।',
  '太溪',
  'Tàixī',
  'Kidney', 'किडनी',
  'KI',
  'Water',
  'Yin',
  ARRAY['ankle'], ARRAY['fatigue', 'lower back pain', 'kidney support', 'reproductive health', 'vitality'],
  ARRAY['Fatigue and energy depletion', 'Lower back pain', 'Kidney support', 'Reproductive health'], ARRAY['थकान और ऊर्जा की कमी', 'पीठ के निचले हिस्से का दर्द', 'किडनी का समर्थन', 'प्रजनन स्वास्थ्य'],
  '1-3 minutes', 'Firm',
  'Beginner', 'Classical',
  5, '@assets/acupressure_points/KI3_Taixi_ankle_acupressure_point_f8e5a56f.png'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'lu9', 'LU9', 'Lung 9 - Taiyuan', 'लंग 9 - ताइयुआन',
  'Located at the wrist crease, on the thumb side, in the depression between tendons where the pulse is felt.', 'कलाई की रेखा पर स्थित, अंगूठे की तरफ, tendons के बीच के गड्ढे में जहां नाड़ी महसूस होती है।',
  'Apply light pressure with thumb for 1-2 minutes. Feel for the pulse and breathe deeply.', 'अंगूठे से 1-2 मिनट तक हल्का दबाव डालें। नाड़ी महसूस करें और गहरी सांस लें।',
  'Use gentle pressure. Avoid with severe heart conditions.', 'हल्का दबाव का उपयोग करें। गंभीर हृदय रोग है तो बचें।',
  '太淵',
  'Tàiyuān',
  'Lung', 'लंग',
  'LU',
  'Metal',
  'Yin',
  ARRAY['wrist'], ARRAY['respiratory issues', 'cough', 'asthma', 'wrist pain', 'circulation'],
  ARRAY['Respiratory issues and cough', 'Asthma and breathing difficulties', 'Wrist pain', 'Circulation problems'], ARRAY['श्वसन संबंधी समस्याएं और खांसी', 'अस्थमा और सांस लेने में कठिनाई', 'कलाई का दर्द', 'रक्त संचार की समस्याएं'],
  '1-2 minutes', 'Light',
  'Beginner', 'Classical',
  4, 'lu9_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'gb20', 'GB20', 'Gallbladder 20 - Fengchi', 'गॉलब्लैडर 20 - फेंगची',
  'Located at the base of the skull, in the hollow below the occipital bone, between neck muscles.', 'खोपड़ी के आधार पर स्थित, ऑक्सिपिटल हड्डी के नीचे के खोखले हिस्से में, गर्दन की मांसपेशियों के बीच।',
  'Apply firm pressure with thumbs for 1-2 minutes while tilting head forward slightly.', 'सिर को थोड़ा आगे झुकाते हुए अंगूठों से 1-2 मिनट तक मजबूत दबाव डालें।',
  'Avoid during pregnancy. Use caution with high blood pressure.', 'गर्भावस्था के दौरान बचें। उच्च रक्तचाप है तो सावधानी बरतें।',
  '風池',
  'Fēngchí',
  'Gallbladder', 'गॉलब्लैडर',
  'GB',
  'Wood',
  'Yang',
  ARRAY['neck'], ARRAY['tension headaches', 'neck pain', 'cold symptoms', 'eye strain', 'stiffness'],
  ARRAY['Tension headaches', 'Neck pain and stiffness', 'Cold and flu symptoms', 'Eye strain'], ARRAY['तनाव के सिरदर्द', 'गर्दन का दर्द और अकड़न', 'सर्दी-जुकाम के लक्षण', 'आंखों का तनाव'],
  '1-2 minutes', 'Firm',
  'Intermediate', 'Classical',
  5, '@assets/acupressure_points/GB20_Fengchi_skull_base_point_203a6a1d.png'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'sp3', 'SP3', 'Spleen 3 - Taibai', 'स्प्लीन 3 - ताइबाई',
  'Located on the inner side of the foot, behind the base of the big toe, in the depression below the joint.', 'पैर के भीतरी हिस्से पर स्थित, बड़े पैर की अंगुली के आधार के पीछे, जोड़ के नीचे के गड्ढे में।',
  'Apply moderate pressure with thumb for 1-2 minutes in circular motions.', 'अंगूठे से 1-2 मिनट तक गोलाकार गति में मध्यम दबाव डालें।',
  'Use gentle pressure. Avoid during pregnancy.', 'हल्का दबाव का उपयोग करें। गर्भावस्था के दौरान बचें।',
  '太白',
  'Tàibái',
  'Spleen', 'स्प्लीन',
  'SP',
  'Earth',
  'Yin',
  ARRAY['foot'], ARRAY['digestive disorders', 'bloating', 'gas', 'loose stools', 'abdominal pain'],
  ARRAY['Digestive disorders', 'Bloating and gas', 'Loose stools', 'Abdominal pain'], ARRAY['पाचन संबंधी विकार', 'पेट फूलना और गैस', 'ढीला मल', 'पेट दर्द'],
  '1-2 minutes', 'Moderate',
  'Beginner', 'Classical',
  3, 'sp3_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'bl23', 'BL23', 'Bladder 23 - Shenshu', 'ब्लैडर 23 - शेंशू',
  'Located on the back, 1.5 thumb-widths lateral to the spine, at the level of the second lumbar vertebra.', 'पीठ पर स्थित, रीढ़ की हड्डी से 1.5 अंगूठा चौड़ाई बाहर की ओर, दूसरी लम्बर कशेरुका के स्तर पर।',
  'Apply firm pressure with thumbs for 2-3 minutes or have someone massage the area.', 'अंगूठों से 2-3 मिनट तक मजबूत दबाव डालें या किसी से उस क्षेत्र की मालिश कराएं।',
  'Avoid during pregnancy. Use caution with kidney stones.', 'गर्भावस्था के दौरान बचें। किडनी की पथरी है तो सावधानी बरतें।',
  '腎俞',
  'Shènshū',
  'Bladder', 'ब्लैडर',
  'BL',
  'Water',
  'Yang',
  ARRAY['back'], ARRAY['kidney support', 'lower back pain', 'urinary disorders', 'sexual dysfunction', 'fatigue'],
  ARRAY['Kidney and bladder support', 'Lower back pain', 'Urinary disorders', 'Sexual dysfunction'], ARRAY['किडनी और मूत्राशय का समर्थन', 'पीठ के निचले हिस्से का दर्द', 'मूत्र संबंधी विकार', 'यौन दुष्क्रिया'],
  '2-3 minutes', 'Firm',
  'Advanced', 'Classical',
  3, '@assets/acupressure_points/BL23_Shenshu_lower_back_point_4a3f81a2.png'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'te5', 'TE5', 'Triple Energizer 5 - Waiguan', 'ट्रिपल एनर्जाइज़र 5 - वाइगुआन',
  'Located on the back of the forearm, about 2 thumb-widths above the wrist, between the two bones.', 'अग्रबाहु के पीछे की तरफ स्थित, कलाई से लगभग 2 अंगूठा चौड़ाई ऊपर, दो हड्डियों के बीच।',
  'Apply firm pressure with thumb for 1-2 minutes while rotating the wrist.', 'कलाई को घुमाते हुए अंगूठे से 1-2 मिनट तक मजबूत दबाव डालें।',
  'Use moderate pressure. Avoid with wrist injuries.', 'मध्यम दबाव का उपयोग करें। कलाई की चोट है तो बचें।',
  '外關',
  'Wàiguān',
  'Triple Energizer', 'ट्रिपल एनर्जाइज़र',
  'TE',
  'Fire',
  'Yang',
  ARRAY['arm'], ARRAY['headaches', 'neck tension', 'common cold', 'wrist pain', 'shoulder tension'],
  ARRAY['Headaches and migraines', 'Neck and shoulder tension', 'Common cold', 'Wrist and arm pain'], ARRAY['सिरदर्द और माइग्रेन', 'गर्दन और कंधे का तनाव', 'सामान्य सर्दी', 'कलाई और बांह का दर्द'],
  '1-2 minutes', 'Firm',
  'Intermediate', 'Classical',
  4, '@assets/acupressure_points/TE5_Waiguan_wrist_acupressure_point_6d3731a9.png'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'cv17', 'CV17', 'Conception Vessel 17 - Danzhong', 'कन्सेप्शन वेसल 17 - डानझोंग',
  'Located in the center of the chest, between the nipples, at the level of the fourth rib space.', 'छाती के बीच में स्थित, निप्पल के बीच, चौथी पसली के स्थान के स्तर पर।',
  'Apply light pressure with fingertips for 1-2 minutes while taking deep breaths.', 'गहरी सांस लेते हुए अंगुली के सिरों से 1-2 मिनट तक हल्का दबाव डालें।',
  'Use very gentle pressure. Avoid during pregnancy and with heart conditions.', 'बहुत हल्का दबाव का उपयोग करें। गर्भावस्था और हृदय रोग में बचें।',
  '膻中',
  'Dānzhōng',
  'Conception Vessel', 'कन्सेप्शन वेसल',
  'CV',
  NULL,
  'Yin',
  ARRAY['chest'], ARRAY['emotional stress', 'chest tightness', 'breathing difficulties', 'heart palpitations', 'grief'],
  ARRAY['Emotional stress and grief', 'Chest tightness', 'Breathing difficulties', 'Heart palpitations'], ARRAY['भावनात्मक तनाव और दुख', 'छाती में जकड़न', 'सांस लेने में कठिनाई', 'दिल की धड़कन'],
  '1-2 minutes', 'Light',
  'Intermediate', 'Extra',
  4, '@assets/acupressure_points/CV17_Danzhong_chest_acupressure_point_c3e55971.png'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'si3', 'SI3', 'Small Intestine 3 - Houxi', 'स्मॉल इंटेस्टाइन 3 - हौक्सी',
  'Located on the outer edge of the hand, below the pinky finger, where the palm meets the back of the hand.', 'हाथ के बाहरी किनारे पर स्थित, छोटी अंगुली के नीचे, जहां हथेली हाथ की पीठ से मिलती है।',
  'Apply firm pressure with thumb for 1-2 minutes while making a loose fist.', 'ढीली मुट्ठी बनाते हुए अंगूठे से 1-2 मिनट तक मजबूत दबाव डालें।',
  'Use gentle pressure. Avoid with hand injuries.', 'हल्का दबाव का उपयोग करें। हाथ की चोट है तो बचें।',
  '後溪',
  'Hòuxī',
  'Small Intestine', 'स्मॉल इंटेस्टाइन',
  'SI',
  'Fire',
  'Yang',
  ARRAY['hand'], ARRAY['neck stiffness', 'headaches', 'eye strain', 'computer fatigue', 'emotional agitation'],
  ARRAY['Neck stiffness and pain', 'Headaches', 'Eye strain from computer work', 'Emotional agitation'], ARRAY['गर्दन की अकड़न और दर्द', 'सिरदर्द', 'कंप्यूटर काम से आंखों का तनाव', 'भावनात्मक बेचैनी'],
  '1-2 minutes', 'Firm',
  'Beginner', 'Classical',
  4, '@assets/acupressure_points/SI3_Houxi_hand_acupressure_point_1ace32ce.png'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'gb34', 'GB34', 'Gallbladder 34 - Yanglingquan', 'गॉलब्लैडर 34 - यांगलिंगक्वान',
  'Located on the outer side of the leg, in the depression below the head of the fibula bone.', 'पैर के बाहरी हिस्से पर स्थित, फाइबुला हड्डी के सिरे के नीचे के गड्ढे में।',
  'Apply firm pressure with thumb for 1-3 minutes while gently moving the knee.', 'घुटने को धीरे से हिलाते हुए अंगूठे से 1-3 मिनट तक मजबूत दबाव डालें।',
  'Avoid during pregnancy. Use caution with knee injuries.', 'गर्भावस्था के दौरान बचें। घुटने की चोट है तो सावधानी बरतें।',
  '陽陵泉',
  'Yánglíngquán',
  'Gallbladder', 'गॉलब्लैडर',
  'GB',
  'Wood',
  'Yang',
  ARRAY['leg'], ARRAY['muscle problems', 'knee pain', 'hip pain', 'sciatica', 'tendon issues'],
  ARRAY['Muscle and tendon problems', 'Knee pain and stiffness', 'Hip pain', 'Sciatica pain'], ARRAY['मांसपेशी और टेंडन की समस्याएं', 'घुटने का दर्द और अकड़न', 'कूल्हे का दर्द', 'साइटिका का दर्द'],
  '1-3 minutes', 'Firm',
  'Intermediate', 'Classical',
  4, '@assets/acupressure_points/GB34_Yanglingquan_knee_acupressure_point_02064cf1.png'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'sp10', 'SP10', 'Spleen 10 - Xuehai', 'स्प्लीन 10 - क्स्यूहाई',
  'Located on the inner thigh, about 3 finger-widths above the kneecap, on the bulge of the thigh muscle.', 'भीतरी जांघ पर स्थित, घुटने की टोपी से लगभग 3 अंगुली चौड़ाई ऊपर, जांघ की मांसपेशी के उभार पर।',
  'Apply moderate pressure with thumb for 1-2 minutes in circular motions.', 'अंगूठे से 1-2 मिनट तक गोलाकार गति में मध्यम दबाव डालें।',
  'Avoid during pregnancy. Use gentle pressure only.', 'गर्भावस्था के दौरान बचें। केवल हल्का दबाव का उपयोग करें।',
  '血海',
  'Xuèhǎi',
  'Spleen', 'स्प्लीन',
  'SP',
  'Earth',
  'Yin',
  ARRAY['leg'], ARRAY['menstrual irregularities', 'skin conditions', 'circulation issues', 'knee pain'],
  ARRAY['Menstrual irregularities', 'Skin conditions and eczema', 'Blood circulation issues', 'Knee pain'], ARRAY['मासिक धर्म की अनियमितताएं', 'त्वचा की स्थिति और एक्जिमा', 'रक्त संचार की समस्याएं', 'घुटने का दर्द'],
  '1-2 minutes', 'Moderate',
  'Beginner', 'Classical',
  3, 'sp10_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'pc8', 'PC8', 'Pericardium 8 - Laogong', 'पेरिकार्डियम 8 - लाओगोंग',
  'Located in the center of the palm, between the 2nd and 3rd metacarpal bones, where the middle finger touches when making a fist.', 'हथेली के बीच में स्थित, 2री और 3री मेटाकार्पल हड्डियों के बीच, जहां मुट्ठी बनाने पर मध्यमा अंगुली छूती है।',
  'Apply gentle pressure with opposite thumb for 1-2 minutes while taking deep breaths.', 'गहरी सांस लेते हुए विपरीत अंगूठे से 1-2 मिनट तक हल्का दबाव डालें।',
  'Use gentle pressure. Avoid with heart conditions without medical guidance.', 'हल्का दबाव का उपयोग करें। हृदय रोग है तो चिकित्सा मार्गदर्शन के बिना बचें।',
  '勞宮',
  'Láogōng',
  'Pericardium', 'पेरिकार्डियम',
  'PC',
  'Fire',
  'Yin',
  ARRAY['palm'], ARRAY['anxiety', 'nervousness', 'insomnia', 'palm sweating', 'heart palpitations'],
  ARRAY['Anxiety and nervousness', 'Insomnia and restlessness', 'Palm sweating', 'Heart palpitations'], ARRAY['चिंता और घबराहट', 'अनिद्रा और बेचैनी', 'हथेली में पसीना', 'दिल की धड़कन'],
  '1-2 minutes', 'Light',
  'Beginner', 'Classical',
  4, '@assets/acupressure_points/PC8_Laogong_palm_acupressure_point_20499451.png'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'bl60', 'BL60', 'Bladder 60 - Kunlun', 'ब्लैडर 60 - कुनलुन',
  'Located in the depression between the outer ankle bone and the Achilles tendon.', 'बाहरी टखने की हड्डी और एच्लिस टेंडन के बीच के गड्ढे में स्थित।',
  'Apply firm pressure with thumb for 1-2 minutes while rotating the ankle.', 'टखने को घुमाते हुए अंगूठे से 1-2 मिनट तक मजबूत दबाव डालें।',
  'STRICTLY avoid during pregnancy as it can induce labor. Use caution with ankle injuries.', 'गर्भावस्था के दौरान सख्ती से बचें क्योंकि यह प्रसव को प्रेरित कर सकता है। टखने की चोट है तो सावधानी बरतें।',
  '崑崙',
  'Kūnlún',
  'Bladder', 'ब्लैडर',
  'BL',
  'Water',
  'Yang',
  ARRAY['ankle'], ARRAY['lower back pain', 'ankle pain', 'headaches', 'neck stiffness', 'spine pain'],
  ARRAY['Lower back and spine pain', 'Ankle pain and swelling', 'Headaches and neck stiffness', 'Childbirth support'], ARRAY['पीठ के निचले हिस्से और रीढ़ का दर्द', 'टखने का दर्द और सूजन', 'सिरदर्द और गर्दन की अकड़न', 'प्रसव सहायता'],
  '1-2 minutes', 'Firm',
  'Intermediate', 'Classical',
  4, 'bl60_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'li20', 'LI20', 'Large Intestine 20 - Yingxiang', 'बड़ी आंत 20 - यिंगक्स्यांग',
  'Located beside the nostrils, in the nasolabial groove at the level of the midpoint of the lateral border of the ala nasi.', 'नासिका के बगल में स्थित, नाक के पंख के बाहरी किनारे के मध्य बिंदु के स्तर पर नासो-लेबियल खांचे में।',
  'Apply gentle pressure with index fingers for 30 seconds to 1 minute using upward circular motions.', 'तर्जनी अंगुलियों से 30 सेकंड से 1 मिनट तक ऊपर की ओर गोलाकार गति में हल्का दबाव डालें।',
  'Use very gentle pressure. Avoid with severe nasal infections.', 'बहुत हल्का दबाव का उपयोग करें। गंभीर नाक के संक्रमण है तो बचें।',
  '迎香',
  'Yíngxiāng',
  'Large Intestine', 'बड़ी आंत',
  'LI',
  'Metal',
  'Yang',
  ARRAY['face'], ARRAY['nasal congestion', 'sinusitis', 'loss of smell', 'facial paralysis', 'allergies'],
  ARRAY['Nasal congestion and sinusitis', 'Loss of smell', 'Facial paralysis', 'Allergic rhinitis'], ARRAY['नाक की रुकावट और साइनसाइटिस', 'गंध की हानि', 'चेहरे का पक्षाघात', 'एलर्जिक राइनाइटिस'],
  '30 seconds-1 minute', 'Light',
  'Beginner', 'Classical',
  5, '@assets/acupressure_points/LI20_Yingxiang_nasolabial_groove_point_847df89e.png'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'st25', 'ST25', 'Stomach 25 - Tianshu', 'स्टमक 25 - तियानशू',
  'Located 2 finger-widths lateral to the navel, at the same horizontal level as the umbilicus.', 'नाभि से 2 अंगुली चौड़ाई बाहर की ओर स्थित, नाभि के समान क्षैतिज स्तर पर।',
  'Apply moderate pressure with fingertips for 1-2 minutes in clockwise circular motions.', 'अंगुली के सिरों से 1-2 मिनट तक घड़ी की दिशा में गोलाकार गति में मध्यम दबाव डालें।',
  'Avoid during pregnancy. Use gentle pressure with abdominal conditions.', 'गर्भावस्था के दौरान बचें। पेट की समस्याओं के साथ हल्का दबाव का उपयोग करें।',
  '天樞',
  'Tiānshū',
  'Stomach', 'स्टमक',
  'ST',
  'Earth',
  'Yang',
  ARRAY['abdomen'], ARRAY['constipation', 'diarrhea', 'abdominal pain', 'bloating', 'IBS'],
  ARRAY['Constipation and diarrhea', 'Abdominal pain and bloating', 'Irritable bowel syndrome', 'Digestive disorders'], ARRAY['कब्ज और दस्त', 'पेट दर्द और पेट फूलना', 'चिड़चिड़ी आंत सिंड्रोम', 'पाचन संबंधी विकार'],
  '1-2 minutes', 'Moderate',
  'Beginner', 'Classical',
  4, '@assets/acupressure_points/ST25_Tianshu_abdomen_acupressure_point_66670710.png'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'ki7', 'KI7', 'Kidney 7 - Fuliu', 'किडनी 7 - फुलिउ',
  'Located on the inner side of the leg, about 2 finger-widths above KI3, on the anterior border of the Achilles tendon.', 'पैर के भीतरी हिस्से पर स्थित, KI3 से लगभग 2 अंगुली चौड़ाई ऊपर, एच्लिस टेंडन के अगले किनारे पर।',
  'Apply moderate pressure with thumb for 2-3 minutes while breathing deeply.', 'गहरी सांस लेते हुए अंगूठे से 2-3 मिनट तक मध्यम दबाव डालें।',
  'Avoid during pregnancy. Use gentle pressure with kidney disease.', 'गर्भावस्था के दौरान बचें। किडनी रोग है तो हल्का दबाव का उपयोग करें।',
  '復溜',
  'Fùliū',
  'Kidney', 'किडनी',
  'KI',
  'Water',
  'Yin',
  ARRAY['leg'], ARRAY['night sweats', 'hot flashes', 'leg swelling', 'chronic fatigue', 'kidney weakness'],
  ARRAY['Night sweats and hot flashes', 'Leg swelling and edema', 'Chronic fatigue', 'Kidney weakness'], ARRAY['रात का पसीना और गर्म लहरें', 'पैर की सूजन और शोफ', 'पुरानी थकान', 'किडनी की कमजोरी'],
  '2-3 minutes', 'Moderate',
  'Intermediate', 'Classical',
  3, 'ki7_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'ren6', 'REN6', 'Conception Vessel 6 - Qihai', 'कन्सेप्शन वेसल 6 - क्यीहाई',
  'Located 1.5 finger-widths below the navel, on the midline of the abdomen.', 'नाभि से 1.5 अंगुली चौड़ाई नीचे स्थित, पेट की मध्य रेखा पर।',
  'Apply gentle pressure with fingertips for 2-3 minutes in clockwise circular motions.', 'अंगुली के सिरों से 2-3 मिनट तक घड़ी की दिशा में गोलाकार गति में हल्का दबाव डालें।',
  'Avoid during pregnancy. Use gentle pressure only.', 'गर्भावस्था के दौरान बचें। केवल हल्का दबाव का उपयोग करें।',
  '氣海',
  'Qìhǎi',
  'Conception Vessel', 'कन्सेप्शन वेसल',
  'REN',
  NULL,
  'Yin',
  ARRAY['abdomen'], ARRAY['general weakness', 'fatigue', 'digestive weakness', 'abdominal pain', 'low energy'],
  ARRAY['General weakness and fatigue', 'Digestive weakness', 'Lower abdominal pain', 'Energy restoration'], ARRAY['सामान्य कमजोरी और थकान', 'पाचन की कमजोरी', 'पेट के निचले हिस्से का दर्द', 'ऊर्जा की बहाली'],
  '2-3 minutes', 'Light',
  'Beginner', 'Extra',
  4, 'ren6_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'gv16', 'GV16', 'Governing Vessel 16 - Fengfu', 'गवर्निंग वेसल 16 - फेंगफू',
  'Located at the center of the nape of the neck, in the depression below the external occipital protuberance.', 'गर्दन की नप के बीच में स्थित, बाहरी ऑक्सिपिटल प्रोट्यूबरेंस के नीचे के गड्ढे में।',
  'Apply very gentle pressure with middle finger for 30 seconds to 1 minute.', 'मध्यमा अंगुली से 30 सेकंड से 1 मिनट तक बहुत हल्का दबाव डालें।',
  'Use very gentle pressure. Avoid with neck injuries or severe headaches.', 'बहुत हल्का दबाव का उपयोग करें। गर्दन की चोट या गंभीर सिरदर्द है तो बचें।',
  '風府',
  'Fēngfǔ',
  'Governing Vessel', 'गवर्निंग वेसल',
  'GV',
  NULL,
  'Yang',
  ARRAY['neck'], ARRAY['mental clarity', 'focus', 'neck stiffness', 'headaches', 'speech difficulties'],
  ARRAY['Mental clarity and focus', 'Neck stiffness', 'Headaches', 'Speech difficulties'], ARRAY['मानसिक स्पष्टता और एकाग्रता', 'गर्दन की अकड़न', 'सिरदर्द', 'बोलने की कठिनाई'],
  '30 seconds-1 minute', 'Light',
  'Advanced', 'Extra',
  3, 'gv16_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'lu1', 'LU1', 'Lung 1 - Zhongfu', 'लंग 1 - झोंगफू',
  'Located in the lateral depression below the outer third of the collarbone, about 1 thumb-width below the clavicle.', 'कॉलरबोन के बाहरी तिहाई के नीचे बाहरी गड्ढे में स्थित, हंसली से लगभग 1 अंगूठा चौड़ाई नीचे।',
  'Apply gentle pressure with thumb for 1-2 minutes while breathing deeply.', 'गहरी सांस लेते हुए अंगूठे से 1-2 मिनट तक हल्का दबाव डालें।',
  'Use gentle pressure. Avoid with severe respiratory conditions.', 'हल्का दबाव का उपयोग करें। गंभीर श्वसन संबंधी स्थितियों में बचें।',
  '中府',
  'Zhōngfǔ',
  'Lung', 'लंग',
  'LU',
  'Metal',
  'Yin',
  ARRAY['chest'], ARRAY['cough', 'bronchitis', 'chest congestion', 'immune support', 'shoulder tension'],
  ARRAY['Cough and bronchitis', 'Chest congestion', 'Immune system support', 'Shoulder tension'], ARRAY['खांसी और ब्रॉन्काइटिस', 'छाती में कंजेशन', 'प्रतिरक्षा प्रणाली का समर्थन', 'कंधे का तनाव'],
  '1-2 minutes', 'Light',
  'Beginner', 'Classical',
  4, 'lu1_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'ex21', 'EX-HN21', 'Sishencong', 'सिशेनकॉन्ग',
  'Four points located 1 thumb-width away from GV20 in the four directions (front, back, left, right).', 'चार बिंदु जो GV20 से चार दिशाओं (आगे, पीछे, बाएं, दाएं) में 1 अंगूठा चौड़ाई दूरी पर स्थित हैं।',
  'Gently press all four points simultaneously with fingertips for 1 minute.', 'अंगुली के सिरों से चारों बिंदुओं को एक साथ 1 मिनट तक धीरे से दबाएं।',
  'Use very gentle pressure. Safe for children above 5 years.', 'बहुत हल्का दबाव का उपयोग करें। 5 साल से अधिक उम्र के बच्चों के लिए सुरक्षित।',
  '四神聰',
  'Sìshéncōng',
  'Extra Meridian', 'अतिरिक्त मेरिडियन',
  'EX',
  NULL,
  'Yang',
  ARRAY['head'], ARRAY['memory enhancement', 'concentration', 'mental fatigue', 'study headaches', 'brain fog'],
  ARRAY['Memory enhancement', 'Concentration and focus', 'Mental fatigue', 'Headaches from studying'], ARRAY['स्मृति वृद्धि', 'एकाग्रता और फोकस', 'मानसिक थकान', 'पढ़ाई से सिरदर्द'],
  '1 minute', 'Light',
  'Intermediate', 'Extra',
  4, 'ex21_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'gb39', 'GB39', 'Gallbladder 39 - Xuanzhong', 'गॉलब्लैडर 39 - क्स्यूआनझोंग',
  'Located on the outer side of the leg, 3 finger-widths above the outer ankle bone, in front of the fibula.', 'पैर के बाहरी हिस्से पर स्थित, बाहरी टखने की हड्डी से 3 अंगुली चौड़ाई ऊपर, फाइबुला के सामने।',
  'Apply moderate pressure with thumb for 1-2 minutes in circular motions.', 'अंगूठे से 1-2 मिनट तक गोलाकार गति में मध्यम दबाव डालें।',
  'Avoid during pregnancy. Use caution with ankle injuries.', 'गर्भावस्था के दौरान बचें। टखने की चोट है तो सावधानी बरतें।',
  '懸鐘',
  'Xuánzhōng',
  'Gallbladder', 'गॉलब्लैडर',
  'GB',
  'Wood',
  'Yang',
  ARRAY['leg'], ARRAY['bone health', 'joint health', 'neck stiffness', 'ankle weakness', 'osteoporosis prevention'],
  ARRAY['Bone and joint health', 'Neck stiffness', 'Ankle weakness', 'Bone density support'], ARRAY['हड्डी और जोड़ों का स्वास्थ्य', 'गर्दन की अकड़न', 'टखने की कमजोरी', 'हड्डी घनत्व का समर्थन'],
  '1-2 minutes', 'Moderate',
  'Beginner', 'Classical',
  3, 'gb39_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'du14', 'GV14', 'Governing Vessel 14 - Dazhui', 'गवर्निंग वेसल 14 - दाझुई',
  'Located at the back of the neck, below the 7th cervical vertebra, at the most prominent vertebra when head is bent forward.', 'गर्दन के पीछे स्थित, 7वीं ग्रीवा कशेरुका के नीचे, जब सिर आगे झुका हो तो सबसे प्रमुख कशेरुका पर।',
  'Apply gentle pressure with middle finger for 1-2 minutes or have someone massage the area.', 'मध्यमा अंगुली से 1-2 मिनट तक हल्का दबाव डालें या किसी से उस क्षेत्र की मालिश कराएं।',
  'Use gentle pressure. Avoid with severe neck problems.', 'हल्का दबाव का उपयोग करें। गंभीर गर्दन की समस्याओं में बचें।',
  '大椎',
  'Dàzhuī',
  'Governing Vessel', 'गवर्निंग वेसल',
  'GV',
  NULL,
  'Yang',
  ARRAY['neck'], ARRAY['immune boost', 'cold prevention', 'fever reduction', 'vitality', 'neck tension'],
  ARRAY['Immune system boost', 'Cold and flu prevention', 'Fever reduction', 'General vitality'], ARRAY['प्रतिरक्षा प्रणाली को बढ़ावा', 'सर्दी-जुकाम की रोकथाम', 'बुखार कम करना', 'सामान्य जीवन शक्ति'],
  '1-2 minutes', 'Light',
  'Advanced', 'Extra',
  5, 'du14_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'st6', 'ST6', 'Stomach 6 - Jaw Chariot', 'पेट 6 - जॉ चैरियट',
  'Located at the prominence of the masseter muscle when teeth are clenched, about one finger-width above the angle of the jaw.', 'दांत भींचने पर मैसेटर मांसपेशी के उभार पर स्थित, जबड़े के कोण से लगभग एक अंगुल ऊपर।',
  'Place fingertips on the muscle prominence and apply gentle circular pressure for 30-60 seconds.', 'मांसपेशी के उभार पर अंगुलियों के सिरे रखें और 30-60 सेकंड के लिए हल्का वृत्ताकार दबाव डालें।',
  'Use gentle pressure only. Avoid if severe jaw injury.', 'केवल हल्का दबाव का उपयोग करें। गंभीर जबड़े की चोट में बचें।',
  '頰車',
  'Jiáchē',
  'Stomach', 'पेट',
  'ST',
  'Earth',
  'Yang',
  ARRAY['face'], ARRAY['jaw pain', 'TMJ', 'teeth grinding', 'facial tension', 'lockjaw'],
  ARRAY['TMJ disorders', 'Jaw tension and pain', 'Teeth grinding', 'Facial paralysis support'], ARRAY['टीएमजे विकार', 'जबड़े में तनाव और दर्द', 'दांत पीसना', 'चेहरे के पक्षाघात का समर्थन'],
  '30-60 seconds', 'Light',
  'Beginner', 'Classical',
  4, 'st6_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'sp4', 'SP4', 'Spleen 4 - Grandfather Grandson', 'प्लीहा 4 - दादा पोता',
  'Located on the inner side of the foot, in the depression distal to the base of the first metatarsal bone.', 'पैर के अंदरूनी हिस्से पर, पहली मेटाटार्सल हड्डी के आधार से दूर के गड्ढे में स्थित।',
  'Apply steady pressure with thumb for 1-2 minutes while breathing deeply.', 'गहरी सांस लेते हुए अंगूठे से 1-2 मिनट तक स्थिर दबाव डालें।',
  'Avoid during pregnancy. Use gentle pressure.', 'गर्भावस्था में बचें। हल्का दबाव का उपयोग करें।',
  '公孫',
  'Gōngsūn',
  'Spleen', 'प्लीहा',
  'SP',
  'Earth',
  'Yin',
  ARRAY['foot'], ARRAY['stomach pain', 'digestion', 'food stagnation', 'heart palpitations', 'gastric issues'],
  ARRAY['Stomach pain and cramps', 'Digestive disorders', 'Food stagnation', 'Heart palpitations'], ARRAY['पेट दर्द और ऐंठन', 'पाचन संबंधी विकार', 'भोजन का ठहराव', 'हृदय की धड़कन'],
  '1-2 minutes', 'Moderate',
  'Intermediate', 'Classical',
  4, 'sp4_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'bl40', 'BL40', 'Bladder 40 - Supporting Middle', 'मूत्राशय 40 - सपोर्टिंग मिडिल',
  'Located at the center of the back of the knee, in the middle of the popliteal crease between the tendons.', 'घुटने के पीछे के केंद्र में, टेंडन के बीच पॉप्लिटियल क्रीज के मध्य में स्थित।',
  'Support the knee and apply gentle pressure with fingers for 30-60 seconds.', 'घुटने को सहारा दें और अंगुलियों से 30-60 सेकंड के लिए हल्का दबाव डालें।',
  'Avoid if varicose veins present behind knee. Use gentle pressure only.', 'घुटने के पीछे वैरिकोस वेन्स हों तो बचें। केवल हल्का दबाव का उपयोग करें।',
  '委中',
  'Wěizhōng',
  'Bladder', 'मूत्राशय',
  'BL',
  'Water',
  'Yang',
  ARRAY['leg'], ARRAY['back pain', 'knee pain', 'sciatica', 'hip pain', 'leg stiffness'],
  ARRAY['Lower back pain', 'Knee pain and stiffness', 'Sciatic pain', 'Hip joint issues'], ARRAY['कमर दर्द', 'घुटने का दर्द और अकड़न', 'साइटिक दर्द', 'हिप जॉइंट की समस्याएं'],
  '30-60 seconds', 'Light',
  'Advanced', 'Classical',
  5, 'bl40_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'ht3', 'HT3', 'Heart 3 - Lesser Sea', 'हृदय 3 - लेसर सी',
  'Located at the inner side of the elbow, at the medial end of the elbow crease when arm is flexed.', 'कोहनी के अंदरूनी हिस्से पर, हाथ मोड़ने पर कोहनी की सिलवट के मध्य छोर पर स्थित।',
  'Bend elbow and apply gentle pressure with opposite thumb for 1 minute.', 'कोहनी मोड़ें और विपरीत अंगूठे से 1 मिनट के लिए हल्का दबाव डालें।',
  'Use gentle pressure. Avoid with severe elbow injury.', 'हल्का दबाव का उपयोग करें। गंभीर कोहनी की चोट में बचें।',
  '少海',
  'Shàohǎi',
  'Heart', 'हृदय',
  'HT',
  'Fire',
  'Yin',
  ARRAY['arm'], ARRAY['emotional balance', 'elbow pain', 'arm numbness', 'restlessness', 'mental clarity'],
  ARRAY['Emotional instability', 'Elbow pain and stiffness', 'Arm numbness', 'Mental restlessness'], ARRAY['भावनात्मक अस्थिरता', 'कोहनी का दर्द और अकड़न', 'हाथ की सुन्नता', 'मानसिक बेचैनी'],
  '1 minute', 'Light',
  'Beginner', 'Classical',
  3, 'ht3_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'gb21', 'GB21', 'Gallbladder 21 - Shoulder Well', 'पित्ताशय 21 - शोल्डर वेल',
  'Located at the highest point of the shoulder, midway between the neck and shoulder tip, in the trapezius muscle.', 'कंधे के सबसे ऊंचे बिंदु पर, गर्दन और कंधे के सिरे के बीच में, ट्रेपेजियस मांसपेशी में स्थित।',
  'Pinch the shoulder muscle between thumb and fingers, hold for 30-45 seconds.', 'अंगूठे और अंगुलियों के बीच कंधे की मांसपेशी को दबाएं, 30-45 सेकंड तक पकड़ें।',
  'Avoid during pregnancy. Use moderate pressure only.', 'गर्भावस्था में बचें। केवल मध्यम दबाव का उपयोग करें।',
  '肩井',
  'Jiānjǐng',
  'Gallbladder', 'पित्ताशय',
  'GB',
  'Wood',
  'Yang',
  ARRAY['shoulder'], ARRAY['shoulder pain', 'neck stiffness', 'upper back pain', 'stress', 'tension headaches'],
  ARRAY['Shoulder tension and pain', 'Neck stiffness', 'Upper back pain', 'Stress relief'], ARRAY['कंधे में तनाव और दर्द', 'गर्दन की अकड़न', 'ऊपरी पीठ दर्द', 'तनाव से राहत'],
  '30-45 seconds', 'Moderate',
  'Intermediate', 'Classical',
  5, '@assets/acupressure_points/GB21_Jianjing_shoulder_acupressure_point_873be72c.png'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'ki27', 'KI27', 'Kidney 27 - Spirit Storehouse', 'किडनी 27 - स्पिरिट स्टोरहाउस',
  'Located in the hollow below the collarbone, next to the breastbone, in the first intercostal space.', 'कॉलरबोन के नीचे के गड्ढे में, ब्रेस्टबोन के बगल में, पहली इंटरकॉस्टल स्पेस में स्थित।',
  'Apply gentle pressure with fingertips for 30-45 seconds while breathing deeply.', 'गहरी सांस लेते हुए अंगुलियों के सिरे से 30-45 सेकंड के लिए हल्का दबाव डालें।',
  'Use gentle pressure only. Avoid with severe chest problems.', 'केवल हल्का दबाव का उपयोग करें। गंभीर छाती की समस्याओं में बचें।',
  '俞府',
  'Shùfǔ',
  'Kidney', 'किडनी',
  'KI',
  'Water',
  'Yin',
  ARRAY['chest'], ARRAY['chest congestion', 'breathing problems', 'cough', 'anxiety', 'stress'],
  ARRAY['Chest congestion', 'Breathing difficulties', 'Cough and phlegm', 'Anxiety and stress'], ARRAY['छाती की जकड़न', 'सांस लेने में कठिनाई', 'खांसी और कफ', 'चिंता और तनाव'],
  '30-45 seconds', 'Light',
  'Intermediate', 'Classical',
  3, 'ki27_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'th3', 'TH3', 'Triple Heater 3 - Central Islet', 'ट्रिपल हीटर 3 - सेंट्रल आइलेट',
  'Located on the back of the hand, between the 4th and 5th metacarpal bones, behind the knuckles.', 'हाथ की पीठ पर, 4वीं और 5वीं मेटाकार्पल हड्डियों के बीच, पोरों के पीछे स्थित।',
  'Apply steady pressure with opposite thumb for 1 minute, then gently rotate wrist.', 'विपरीत अंगूठे से 1 मिनट तक स्थिर दबाव डालें, फिर कलाई को धीरे से घुमाएं।',
  'Use gentle pressure. Avoid with open wounds on hands.', 'हल्का दबाव का उपयोग करें। हाथों पर खुले घाव हों तो बचें।',
  '中渚',
  'Zhōngzhǔ',
  'Triple Heater', 'ट्रिपल हीटर',
  'TH',
  'Fire',
  'Yang',
  ARRAY['hand'], ARRAY['wrist pain', 'finger stiffness', 'hand numbness', 'repetitive strain', 'joint pain'],
  ARRAY['Wrist pain and stiffness', 'Finger joint problems', 'Hand numbness', 'Repetitive strain injury'], ARRAY['कलाई का दर्द और अकड़न', 'उंगली के जोड़ों की समस्याएं', 'हाथ की सुन्नता', 'दोहराव तनाव चोट'],
  '1 minute', 'Moderate',
  'Beginner', 'Classical',
  4, 'th3_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'cv4', 'CV4', 'Conception Vessel 4 - Origin Pass', 'कंसेप्शन वेसल 4 - ओरिजिन पास',
  'Located 3 finger-widths below the navel, on the centerline of the lower abdomen.', 'नाभि से 3 अंगुल नीचे, निचले पेट की मध्य रेखा पर स्थित।',
  'Apply gentle downward pressure with palm for 1-3 minutes while breathing deeply.', 'गहरी सांस लेते हुए हथेली से 1-3 मिनट तक हल्का नीचे की ओर दबाव डालें।',
  'Avoid during pregnancy and menstruation. Use gentle pressure.', 'गर्भावस्था और मासिक धर्म के दौरान बचें। हल्का दबाव का उपयोग करें।',
  '關元',
  'Guānyuán',
  'Conception Vessel', 'कंसेप्शन वेसल',
  'CV',
  NULL,
  'Yin',
  ARRAY['abdomen'], ARRAY['low energy', 'fatigue', 'reproductive issues', 'abdominal pain', 'weakness'],
  ARRAY['Low energy and fatigue', 'Reproductive health', 'Lower abdominal pain', 'General weakness'], ARRAY['कम ऊर्जा और थकान', 'प्रजनन स्वास्थ्य', 'निचले पेट का दर्द', 'सामान्य कमजोरी'],
  '1-3 minutes', 'Light',
  'Intermediate', 'Extra',
  4, '@assets/acupressure_points/CV4_Guanyuan_abdomen_acupressure_point_3e177c1d.png'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'li1', 'LI1', 'Large Intestine 1 - Shang Yang', 'बड़ी आंत 1 - शांग यांग',
  'Located at the outer corner of the index fingernail, on the thumb side.', 'तर्जनी उंगली के नाखून के बाहरी कोने पर, अंगूठे की तरफ स्थित।',
  'Apply firm pressure with opposite thumbnail for 10-30 seconds.', 'विपरीत अंगूठे के नाखून से 10-30 सेकंड तक मजबूत दबाव डालें।',
  'Use firm but careful pressure. Avoid with nail injuries.', 'मजबूत लेकिन सावधान दबाव का उपयोग करें। नाखून की चोट में बचें।',
  '商陽',
  'Shāngyáng',
  'Large Intestine', 'बड़ी आंत',
  'LI',
  'Metal',
  'Yang',
  ARRAY['hand'], ARRAY['acute headache', 'finger pain', 'mental fog', 'fainting', 'emergency'],
  ARRAY['Acute headaches', 'Finger joint pain', 'Mental alertness', 'Emergency point for fainting'], ARRAY['तीव्र सिरदर्द', 'उंगली के जोड़ का दर्द', 'मानसिक सचेतता', 'बेहोशी के लिए आपातकालीन बिंदु'],
  '10-30 seconds', 'Firm',
  'Advanced', 'Classical',
  3, 'li1_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'sp21', 'SP21', 'Spleen 21 - Great Wrapping', 'प्लीहा 21 - ग्रेट रैपिंग',
  'Located on the side of the chest, in the 6th intercostal space, on the mid-axillary line.', 'छाती के किनारे, 6वें इंटरकॉस्टल स्पेस में, मध्य-अक्षीय रेखा पर स्थित।',
  'Apply gentle pressure with fingertips for 30-60 seconds while breathing deeply.', 'गहरी सांस लेते हुए अंगुलियों के सिरे से 30-60 सेकंड तक हल्का दबाव डालें।',
  'Use gentle pressure. Avoid with rib injuries or breathing problems.', 'हल्का दबाव का उपयोग करें। पसली की चोट या सांस की समस्याओं में बचें।',
  '大包',
  'Dàbāo',
  'Spleen', 'प्लीहा',
  'SP',
  'Earth',
  'Yin',
  ARRAY['chest'], ARRAY['side pain', 'intercostal pain', 'shallow breathing', 'body aches', 'chest tightness'],
  ARRAY['Side chest pain', 'Intercostal pain', 'Shallow breathing', 'General body aches'], ARRAY['छाती के किनारे का दर्द', 'इंटरकॉस्टल दर्द', 'उथली सांस', 'सामान्य शरीर दर्द'],
  '30-60 seconds', 'Light',
  'Advanced', 'Classical',
  2, 'sp21_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'lv14', 'LV14', 'Liver 14 - Cycle Gate', 'लिवर 14 - साइकल गेट',
  'Located on the chest, in the 6th intercostal space, directly below the nipple.', 'छाती पर, 6वें इंटरकॉस्टल स्पेस में, निप्पल के सीधे नीचे स्थित।',
  'Apply gentle circular pressure with fingertips for 1-2 minutes.', 'अंगुलियों के सिरे से 1-2 मिनट तक हल्का वृत्ताकार दबाव डालें।',
  'Use gentle pressure. Women should use lighter pressure over breast area.', 'हल्का दबाव का उपयोग करें। महिलाओं को स्तन क्षेत्र पर हल्का दबाव करना चाहिए।',
  '期門',
  'Qīmén',
  'Liver', 'लिवर',
  'LV',
  'Wood',
  'Yin',
  ARRAY['chest'], ARRAY['emotional stress', 'irritability', 'liver issues', 'chest tightness', 'anger'],
  ARRAY['Emotional stress and irritability', 'Liver support and detox', 'Chest tightness', 'Digestive issues'], ARRAY['भावनात्मक तनाव और चिड़चिड़ाहट', 'लिवर सपोर्ट और डिटॉक्स', 'छाती की जकड़न', 'पाचन संबंधी समस्याएं'],
  '1-2 minutes', 'Light',
  'Intermediate', 'Classical',
  4, 'lv14_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'si19', 'SI19', 'Small Intestine 19 - Listening Palace', 'छोटी आंत 19 - लिसनिंग पैलेस',
  'Located in front of the ear, in the depression when the mouth is slightly open.', 'कान के आगे, मुंह थोड़ा खुला होने पर बने गड्ढे में स्थित।',
  'Apply gentle circular pressure with fingertip for 30-60 seconds with mouth slightly open.', 'मुंह थोड़ा खुला रखकर अंगुली के सिरे से 30-60 सेकंड तक हल्का वृत्ताकार दबाव डालें।',
  'Use very gentle pressure. Avoid with ear infections or perforated eardrum.', 'बहुत हल्का दबाव का उपयोग करें। कान के संक्रमण या छिद्रित कान के पर्दे में बचें।',
  '聽宮',
  'Tīnggōng',
  'Small Intestine', 'छोटी आंत',
  'SI',
  'Fire',
  'Yang',
  ARRAY['head'], ARRAY['hearing loss', 'tinnitus', 'ear pain', 'ear infection', 'jaw pain'],
  ARRAY['Hearing loss and tinnitus', 'Ear pain and infections', 'TMJ disorders', 'Jaw pain'], ARRAY['सुनने की हानि और कान में आवाज', 'कान दर्द और संक्रमण', 'टीएमजे विकार', 'जबड़े का दर्द'],
  '30-60 seconds', 'Light',
  'Intermediate', 'Classical',
  4, 'si19_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'lu5', 'LU5', 'Lung 5 - Cubit Marsh', 'फेफड़े 5 - क्यूबिट मार्श',
  'Located at the outer edge of the biceps tendon, on the thumb side of the elbow crease when arm is bent.', 'बांह मोड़ने पर कोहनी की सिलवट पर, बाइसेप्स टेंडन के बाहरी किनारे पर, अंगूठे की तरफ स्थित।',
  'Bend elbow and apply firm pressure with opposite thumb for 1-2 minutes.', 'कोहनी मोड़ें और विपरीत अंगूठे से 1-2 मिनट तक मजबूत दबाव डालें।',
  'Use moderate pressure. Avoid with severe elbow injuries.', 'मध्यम दबाव का उपयोग करें। गंभीर कोहनी की चोट में बचें।',
  '尺澤',
  'Chǐzé',
  'Lung', 'फेफड़े',
  'LU',
  'Metal',
  'Yin',
  ARRAY['arm'], ARRAY['cough', 'bronchitis', 'elbow pain', 'tennis elbow', 'breathing problems'],
  ARRAY['Cough and bronchitis', 'Elbow pain and tennis elbow', 'Breathing difficulties', 'Fever and chills'], ARRAY['खांसी और ब्रॉन्काइटिस', 'कोहनी का दर्द और टेनिस एल्बो', 'सांस लेने में कठिनाई', 'बुखार और ठंड लगना'],
  '1-2 minutes', 'Firm',
  'Intermediate', 'Classical',
  4, 'lu5_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'yintang', 'EX-HN3', 'Yintang - Third Eye Point', 'यिनतांग - तीसरा नेत्र बिंदु',
  'Located at the center of the forehead, between the eyebrows, directly above the nose.', 'माथे के मध्य में, भौहों के बीच, नाक के ठीक ऊपर स्थित।',
  'Use middle finger to apply gentle, circular pressure for 1-2 minutes while breathing deeply.', 'गहरी सांस लेते हुए मध्यमा उंगली से 1-2 मिनट तक हल्का, गोलाकार दबाव डालें।',
  'Use very gentle pressure. Avoid if you have any forehead injuries.', 'बहुत हल्का दबाव डालें। माथे की चोट हो तो बचें।',
  '印堂',
  'Yìntáng',
  'Extra Meridian', 'अतिरिक्त मेरिडियन',
  'EX',
  NULL,
  NULL,
  ARRAY['head', 'forehead'], ARRAY['stress', 'anxiety', 'insomnia', 'concentration', 'headache', 'mental fatigue'],
  ARRAY['Stress and anxiety relief', 'Insomnia and sleep disorders', 'Mental fatigue and concentration', 'Frontal headaches', 'Emotional balance'], ARRAY['तनाव और चिंता से राहत', 'अनिद्रा और नींद संबंधी विकार', 'मानसिक थकान और एकाग्रता', 'ललाट में सिरदर्द', 'भावनात्मक संतुलन'],
  '1-2 minutes', 'Light',
  'Beginner', 'Extra',
  5, 'yintang_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'anmian', 'EX-HN16', 'Anmian - Peaceful Sleep', 'आनमीन - शांतिपूर्ण नींद',
  'Located behind the ear, in the depression between the mastoid process and the base of the skull.', 'कान के पीछे, मैस्टॉइड प्रक्रिया और खोपड़ी के आधार के बीच के गड्ढे में स्थित।',
  'Use thumb or index finger to apply gentle pressure in small circles for 1-3 minutes on both sides.', 'अंगूठे या तर्जनी से दोनों तरफ 1-3 मिनट तक छोटे गोलों में हल्का दबाव डालें।',
  'Use gentle pressure. Avoid if you have ear infections or neck injuries.', 'हल्का दबाव डालें। कान के संक्रमण या गर्दन की चोट हो तो बचें।',
  '安眠',
  'Ānmián',
  'Extra Meridian', 'अतिरिक्त मेरिडियन',
  'EX',
  'Water',
  'Yin',
  ARRAY['head', 'neck', 'ear'], ARRAY['insomnia', 'restlessness', 'anxiety', 'sleep disorders', 'hypertension'],
  ARRAY['Insomnia and sleep disorders', 'Restlessness and agitation', 'Dream-disturbed sleep', 'Anxiety before sleep', 'Hypertension'], ARRAY['अनिद्रा और नींद संबंधी विकार', 'बेचैनी और उत्तेजना', 'सपनों से परेशान नींद', 'सोने से पहले चिंता', 'उच्च रक्तचाप'],
  '1-3 minutes', 'Light',
  'Beginner', 'Extra',
  5, 'anmian_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'ear_shenmen', 'EAR-55', 'Ear Shenmen - Divine Gate', 'कान शेनमेन - दिव्य द्वार',
  'Located in the upper cartilage of the ear, in the triangular fossa area, about 2/3 up from the bottom.', 'कान के ऊपरी उपास्थि में, त्रिकोणीय फोसा क्षेत्र में, नीचे से लगभग 2/3 ऊपर स्थित।',
  'Use tip of index finger to apply very gentle pressure for 30 seconds to 1 minute on both ears.', 'तर्जनी की नोक से दोनों कानों में 30 सेकंड से 1 मिनट तक बहुत हल्का दबाव डालें।',
  'Use very gentle pressure. Avoid if you have ear infections or piercings in the area.', 'बहुत हल्का दबाव डालें। कान के संक्रमण या उस क्षेत्र में छेद हो तो बचें।',
  '耳神門',
  'Ěr Shénmén',
  'Ear Acupuncture', 'कान एक्यूपंक्चर',
  'EAR',
  NULL,
  NULL,
  ARRAY['ear', 'head'], ARRAY['stress', 'anxiety', 'addiction', 'mental fog', 'insomnia', 'emotional instability'],
  ARRAY['Stress and anxiety relief', 'Addiction recovery support', 'Mental clarity and focus', 'Emotional stability', 'Insomnia from stress'], ARRAY['तनाव और चिंता से राहत', 'नशे की लत से मुक्ति में सहायता', 'मानसिक स्पष्टता और ध्यान', 'भावनात्मक स्थिरता', 'तनाव से अनिद्रा'],
  '30 seconds - 1 minute', 'Light',
  'Beginner', 'Extra',
  5, 'ear_shenmen_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'zhongwan', 'CV12', 'Zhongwan - Central Venter', 'झोंगवान - केंद्रीय उदर',
  'Located on the midline of the abdomen, 4 finger widths above the navel, halfway between the navel and the sternum.', 'पेट की मध्य रेखा पर, नाभि से 4 अंगुल ऊपर, नाभि और छाती की हड्डी के बीच में स्थित।',
  'Use 2-3 fingers to apply gentle, circular pressure for 1-3 minutes. Breathe slowly and deeply.', '2-3 अंगुलियों से 1-3 मिनट तक हल्का, गोलाकार दबाव डालें। धीरे और गहरी सांस लें।',
  'Avoid during pregnancy. Use gentle pressure after meals. Do not press if you have severe abdominal pain.', 'गर्भावस्था में बचें। खाने के बाद हल्का दबाव डालें। तेज पेट दर्द हो तो न दबाएं।',
  '中脘',
  'Zhōngwǎn',
  'Conception Vessel', 'गर्भाधान पात्र',
  'CV',
  'Earth',
  'Yin',
  ARRAY['abdomen', 'stomach'], ARRAY['indigestion', 'nausea', 'bloating', 'acid reflux', 'stomach pain', 'gas', 'appetite loss'],
  ARRAY['Stomach pain and indigestion', 'Nausea and vomiting', 'Bloating and gas', 'Acid reflux and heartburn', 'Loss of appetite'], ARRAY['पेट दर्द और अपच', 'जी मिचलाना और उल्टी', 'पेट फूलना और गैस', 'एसिडिटी और सीने में जलन', 'भूख न लगना'],
  '1-3 minutes', 'Light',
  'Beginner', 'Extra',
  5, 'zhongwan_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'qihai', 'CV6', 'Qihai - Sea of Qi', 'क्यीहाई - प्राण सागर',
  'Located on the midline of the abdomen, 2 finger widths below the navel.', 'पेट की मध्य रेखा पर, नाभि से 2 अंगुल नीचे स्थित।',
  'Use 2-3 fingers to apply gentle, steady pressure for 2-3 minutes. Breathe deeply and visualize energy building.', '2-3 उंगलियों से 2-3 मिनट तक हल्का, स्थिर दबाव डालें। गहरी सांस लें और ऊर्जा निर्माण की कल्पना करें।',
  'Avoid during pregnancy. Use gentle pressure and avoid immediately after eating.', 'गर्भावस्था में बचें। हल्का दबाव डालें और खाने के तुरंत बाद न करें।',
  '氣海',
  'Qìhǎi',
  'Conception Vessel', 'गर्भाधान पात्र',
  'CV',
  'Fire',
  'Yin',
  ARRAY['abdomen'], ARRAY['fatigue', 'low energy', 'weakness', 'exhaustion', 'recovery', 'vitality loss'],
  ARRAY['Chronic fatigue and low energy', 'General weakness and vitality', 'Mental exhaustion', 'Recovery from illness', 'Building core strength'], ARRAY['पुरानी थकान और कम ऊर्जा', 'सामान्य कमजोरी और जीवन शक्ति', 'मानसिक थकावट', 'बीमारी से स्वस्थ होना', 'मुख्य शक्ति निर्माण'],
  '2-3 minutes', 'Light',
  'Beginner', 'Extra',
  5, 'qihai_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'mingmen', 'GV4', 'Mingmen - Gate of Life', 'मिंगमेन - जीवन का द्वार',
  'Located on the spine, directly behind the navel, between the 2nd and 3rd lumbar vertebrae.', 'रीढ़ पर, नाभि के ठीक पीछे, दूसरी और तीसरी कमर की हड्डी के बीच स्थित।',
  'Use thumbs or knuckles to apply firm pressure for 1-2 minutes. Can be done lying face down or with a tennis ball.', 'अंगूठे या पोरों से 1-2 मिनट तक मजबूत दबाव डालें। पेट के बल लेटकर या टेनिस बॉल से कर सकते हैं।',
  'Avoid during pregnancy. Use moderate pressure. Best applied with warmth.', 'गर्भावस्था में बचें। मध्यम दबाव डालें। गर्मी के साथ लगाना सबसे अच्छा।',
  '命門',
  'Mìngmén',
  'Governing Vessel', 'गवर्निंग वेसल',
  'GV',
  'Fire',
  'Yang',
  ARRAY['back', 'spine'], ARRAY['lower back weakness', 'kidney weakness', 'low libido', 'cold constitution', 'chronic fatigue'],
  ARRAY['Lower back weakness', 'Kidney yang deficiency', 'Sexual vitality and libido', 'Cold constitution', 'Chronic fatigue from overwork'], ARRAY['कमर की कमजोरी', 'किडनी यांग की कमी', 'यौन जीवन शक्ति और कामेच्छा', 'ठंडी प्रकृति', 'अधिक काम से पुरानी थकान'],
  '1-2 minutes', 'Firm',
  'Intermediate', 'Extra',
  5, 'mingmen_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'yongquan', 'KD1', 'Yongquan - Bubbling Spring', 'योंगक्वान - बुदबुदाता झरना',
  'Located on the sole of the foot, in the depression when you curl your toes, about 1/3 down from the toes.', 'पैर के तलवे पर, पैर की उंगलियों को मोड़ने पर बनने वाले गड्ढे में, उंगलियों से लगभग 1/3 नीचे स्थित।',
  'Use thumb to apply gentle, steady pressure for 1-2 minutes on each foot. Best done while sitting or lying down.', 'अंगूठे से प्रत्येक पैर पर 1-2 मिनट तक हल्का, स्थिर दबाव डालें। बैठकर या लेटकर करना सबसे अच्छा।',
  'Avoid during pregnancy. Use gentle pressure as this point can be very sensitive.', 'गर्भावस्था में बचें। हल्का दबाव डालें क्योंकि यह बिंदु बहुत संवेदनशील हो सकता है।',
  '湧泉',
  'Yǒngquán',
  'Kidney', 'गुर्दे',
  'KD',
  'Water',
  'Yin',
  ARRAY['foot'], ARRAY['anxiety', 'insomnia', 'hypertension', 'foot pain', 'stress', 'grounding issues'],
  ARRAY['Grounding and centering energy', 'Insomnia and restless mind', 'Hypertension and stress', 'Foot pain and plantar fasciitis', 'Connection to earth energy'], ARRAY['भूमिगत और केंद्रित ऊर्जा', 'अनिद्रा और अशांत मन', 'उच्च रक्तचाप और तनाव', 'पैर का दर्द और प्लांटर फेशिआइटिस', 'पृथ्वी ऊर्जा से जुड़ाव'],
  '1-2 minutes each foot', 'Light',
  'Beginner', 'Extra',
  5, 'yongquan_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'jingming', 'BL1', 'Jingming - Bright Eyes', 'जिंगमिंग - उज्ज्वल नेत्र',
  'Located in the inner corner of the eye, beside the tear duct.', 'आंख के भीतरी कोने में, आंसू नली के पास स्थित।',
  'Use fingertips to apply very light pressure for 10-30 seconds. Perfect for computer workers during breaks.', 'उंगलियों की नोक से 10-30 सेकंड तक बहुत हल्का दबाव डालें। कंप्यूटर वर्करों के लिए ब्रेक के दौरान बेहतरीन।',
  'Use extremely gentle pressure. Avoid if you have eye infections or injuries.', 'अत्यंत हल्का दबाव डालें। आंखों के संक्रमण या चोट हो तो बचें।',
  '睛明',
  'Jīngmíng',
  'Bladder', 'मूत्राशय',
  'BL',
  'Water',
  'Yang',
  ARRAY['eye'], ARRAY['eye strain', 'dry eyes', 'blurry vision', 'computer vision syndrome', 'eye fatigue', 'screen fatigue'],
  ARRAY['Eye strain from computer work', 'Tired and dry eyes', 'Blurry vision from fatigue', 'Headaches from eye strain', 'Screen-related eye fatigue'], ARRAY['कंप्यूटर काम से आंखों का तनाव', 'थकी और सूखी आंखें', 'थकान से धुंधली दृष्टि', 'आंखों के तनाव से सिरदर्द', 'स्क्रीन से होने वाली आंखों की थकान'],
  '10-30 seconds', 'Light',
  'Beginner', 'Extra',
  5, 'jingming_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'ren17', 'REN17', 'Conception Vessel 17 - Danzhong', 'कॉन्सेप्शन वेसल 17 - दानझोंग',
  'Located at the center of the chest, level with the 4th intercostal space, between the nipples.', 'छाती के केंद्र में स्थित, चौथी इंटरकॉस्टल स्पेस के स्तर पर, निप्पल्स के बीच।',
  'Place your palm flat on the chest and apply gentle circular pressure for 2-3 minutes. Breathe deeply and slowly.', 'अपनी हथेली को छाती पर सपाट रखें और 2-3 मिनट तक हल्का गोलाकार दबाव डालें। गहरी और धीमी सांस लें।',
  'Use gentle pressure only. Avoid deep pressure over the heart area.', 'केवल हल्का दबाव डालें। हृदय क्षेत्र पर गहरा दबाव न डालें।',
  '膻中',
  'Dànzhōng',
  'Conception Vessel', 'कॉन्सेप्शन वेसल',
  'REN',
  NULL,
  'Yin',
  ARRAY['chest'], ARRAY['breathing difficulties', 'chest congestion', 'anxiety', 'palpitations'],
  ARRAY['Breathing difficulties and asthma', 'Chest tightness and congestion', 'Emotional stress and anxiety', 'Heart palpitations'], ARRAY['सांस की तकलीफ और दमा', 'छाती में जकड़न और कफ', 'भावनात्मक तनाव और चिंता', 'दिल की धड़कन'],
  '2-3 minutes', 'Light',
  'Beginner', 'Classical',
  4, 'ren17_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'gb14', 'GB14', 'Gallbladder 14 - Yangbai', 'गॉल ब्लैडर 14 - यांगबाई',
  'Located above the eyebrow, directly above the pupil when looking straight ahead.', 'भौं के ऊपर स्थित, सीधे देखते समय पुतली के ठीक ऊपर।',
  'Use your index finger to apply gentle upward pressure for 1-2 minutes on both sides.', 'अपनी तर्जनी से दोनों तरफ 1-2 मिनट तक हल्का ऊपर की ओर दबाव डालें।',
  'Use gentle pressure. Avoid if you have severe eye conditions.', 'हल्का दबाव डालें। गंभीर आंखों की समस्याओं में बचें।',
  '陽白',
  'Yángbái',
  'Gallbladder', 'गॉल ब्लैडर',
  'GB',
  'Wood',
  'Yang',
  ARRAY['face'], ARRAY['frontal headache', 'eye strain', 'sinus pressure', 'mental fatigue'],
  ARRAY['Frontal headaches', 'Eye strain and fatigue', 'Sinus pressure', 'Mental fatigue'], ARRAY['माथे का दर्द', 'आंखों का तनाव और थकान', 'साइनस का दबाव', 'मानसिक थकान'],
  '1-2 minutes', 'Light',
  'Beginner', 'Classical',
  3, 'gb14_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'sp9', 'SP9', 'Spleen 9 - Yinlingquan', 'स्प्लीन 9 - यिनलिंगक्वान',
  'Located below the knee, in the depression below and behind the medial condyle of the tibia.', 'घुटने के नीचे, टिबिया की मध्यवर्ती कंडाइल के नीचे और पीछे के अवसाद में स्थित।',
  'Apply firm pressure with your thumb while bending the knee slightly. Hold for 2-3 minutes.', 'घुटने को थोड़ा मोड़ते हुए अंगूठे से मजबूत दबाव डालें। 2-3 मिनट तक दबाए रखें।',
  'Avoid during pregnancy. Use moderate pressure.', 'गर्भावस्था के दौरान बचें। मध्यम दबाव का प्रयोग करें।',
  '陰陵泉',
  'Yīnlíngquán',
  'Spleen', 'स्प्लीन',
  'SP',
  'Earth',
  'Yin',
  ARRAY['leg'], ARRAY['water retention', 'digestive issues', 'urinary problems', 'knee pain'],
  ARRAY['Water retention and swelling', 'Digestive issues', 'Urinary problems', 'Knee pain'], ARRAY['पानी की रुकावट और सूजन', 'पाचन संबंधी समस्याएं', 'मूत्र संबंधी समस्याएं', 'घुटने का दर्द'],
  '2-3 minutes', 'Firm',
  'Intermediate', 'Classical',
  3, 'sp9_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'bl13', 'BL13', 'Bladder 13 - Feishu', 'ब्लैडर 13 - फेइशु',
  'Located 1.5 fingers width lateral to the 3rd thoracic vertebra, level with the inner edge of the shoulder blade.', 'तीसरी थोरैसिक कशेरुका से 1.5 अंगुल की चौड़ाई बाहर की ओर, कंधे की हड्डी के अंदरूनी किनारे के स्तर पर स्थित।',
  'Have someone apply firm pressure with thumbs on both sides simultaneously for 2-3 minutes.', 'किसी से कहें कि वे दोनों तरफ एक साथ अंगूठों से 2-3 मिनट तक मजबूत दबाव डालें।',
  'Better to have someone else apply pressure. Avoid if you have severe respiratory conditions.', 'किसी अन्य व्यक्ति से दबाव दिलवाना बेहतर है। गंभीर सांस की समस्याओं में बचें।',
  '肺俞',
  'Fèishū',
  'Bladder', 'ब्लैडर',
  'BL',
  'Water',
  'Yang',
  ARRAY['back'], ARRAY['respiratory problems', 'cough', 'asthma', 'upper back tension'],
  ARRAY['Respiratory problems and cough', 'Asthma and bronchitis', 'Upper back tension', 'Lung qi deficiency'], ARRAY['सांस की समस्याएं और खांसी', 'दमा और ब्रोंकाइटिस', 'ऊपरी पीठ का तनाव', 'फेफड़ों की क्यूई की कमी'],
  '2-3 minutes', 'Firm',
  'Advanced', 'Classical',
  3, 'bl13_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'st8', 'ST8', 'Stomach 8 - Touwei', 'स्टमक 8 - तौवेई',
  'Located at the corner of the forehead, 0.5 finger width within the anterior hairline.', 'माथे के कोने पर स्थित, बालों की रेखा के अंदर 0.5 अंगुल की चौड़ाई पर।',
  'Use fingertips to apply gentle circular pressure for 1-2 minutes on both sides.', 'उंगलियों के सिरों से दोनों तरफ 1-2 मिनट तक हल्का गोलाकार दबाव डालें।',
  'Use very gentle pressure. Avoid in case of head injuries.', 'बहुत हल्का दबाव डालें। सिर की चोट के मामले में बचें।',
  '頭維',
  'Tóuwéi',
  'Stomach', 'स्टमक',
  'ST',
  'Earth',
  'Yang',
  ARRAY['head'], ARRAY['temporal headache', 'eye disorders', 'facial paralysis', 'mental stress'],
  ARRAY['Temporal headaches', 'Eye disorders', 'Facial paralysis', 'Mental stress'], ARRAY['कनपटी का दर्द', 'आंखों की समस्याएं', 'चेहरे का लकवा', 'मानसिक तनाव'],
  '1-2 minutes', 'Light',
  'Beginner', 'Classical',
  2, 'st8_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'ki1_enhanced', 'KI1', 'Kidney 1 - Yongquan (Bubbling Spring)', 'किडनी 1 - योंगक्वान (बुदबुदाता झरना)',
  'Located on the sole of the foot, in the depression when the toes are curled, about 1/3 from the toes.', 'पैर के तलवे पर स्थित, जब पैर की उंगलियां मुड़ी हों तो बने अवसाद में, उंगलियों से लगभग 1/3 दूरी पर।',
  'Use your thumb to apply firm pressure in circular motions for 2-3 minutes before sleep.', 'सोने से पहले अंगूठे से 2-3 मिनट तक गोलाकार गति में मजबूत दबाव डालें।',
  'Avoid during pregnancy. Use gentle pressure for elderly people.', 'गर्भावस्था के दौरान बचें। बुजुर्गों के लिए हल्का दबाव डालें।',
  '湧泉',
  'Yǒngquán',
  'Kidney', 'किडनी',
  'KI',
  'Water',
  'Yin',
  ARRAY['foot'], ARRAY['insomnia', 'high blood pressure', 'anxiety', 'foot pain'],
  ARRAY['Insomnia and sleep disorders', 'High blood pressure', 'Anxiety and restlessness', 'Foot pain and fatigue'], ARRAY['अनिद्रा और नींद की समस्याएं', 'उच्च रक्तचाप', 'चिंता और बेचैनी', 'पैर का दर्द और थकान'],
  '2-3 minutes', 'Firm',
  'Beginner', 'Classical',
  4, '@assets/acupressure_points/KI1_Yongquan_foot_acupressure_point_1cc77209.png'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'li15', 'LI15', 'Large Intestine 15 - Jianyu', 'बड़ी आंत 15 - जियानयू',
  'Located at the shoulder, in the depression below the acromion when the arm is raised.', 'कंधे पर स्थित, जब बांह उठाई जाए तो एक्रोमियन के नीचे के अवसाद में।',
  'Apply firm pressure with opposite hand while gently moving the shoulder. Hold for 2-3 minutes.', 'विपरीत हाथ से मजबूत दबाव डालें और कंधे को धीरे से हिलाएं। 2-3 मिनट तक दबाए रखें।',
  'Avoid if there is acute shoulder injury. Use moderate pressure.', 'तीव्र कंधे की चोट में बचें। मध्यम दबाव का प्रयोग करें।',
  '肩髃',
  'Jiānyú',
  'Large Intestine', 'बड़ी आंत',
  'LI',
  'Metal',
  'Yang',
  ARRAY['shoulder'], ARRAY['shoulder pain', 'arm weakness', 'frozen shoulder', 'upper body tension'],
  ARRAY['Shoulder pain and stiffness', 'Arm weakness', 'Frozen shoulder', 'Upper body tension'], ARRAY['कंधे का दर्द और अकड़न', 'बांह की कमजोरी', 'जमे हुए कंधे', 'शरीर के ऊपरी हिस्से का तनाव'],
  '2-3 minutes', 'Firm',
  'Intermediate', 'Classical',
  3, 'li15_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'gv24', 'GV24', 'Governing Vessel 24 - Shenting', 'गवर्निंग वेसल 24 - शेंटिंग',
  'Located at the center of the forehead, 0.5 finger width above the anterior hairline.', 'माथे के केंद्र में स्थित, बालों की अगली रेखा से 0.5 अंगुल ऊपर।',
  'Use your middle finger to apply gentle pressure with small circular motions for 1-2 minutes.', 'अपनी बीच की उंगली से 1-2 मिनट तक छोटी गोलाकार गति में हल्का दबाव डालें।',
  'Use very gentle pressure. Avoid deep pressure on the head.', 'बहुत हल्का दबाव डालें। सिर पर गहरा दबाव न डालें।',
  '神庭',
  'Shéntíng',
  'Governing Vessel', 'गवर्निंग वेसल',
  'GV',
  NULL,
  'Yang',
  ARRAY['head'], ARRAY['anxiety', 'frontal headache', 'poor concentration', 'dizziness'],
  ARRAY['Mental disorders and anxiety', 'Frontal headaches', 'Poor concentration', 'Dizziness'], ARRAY['मानसिक विकार और चिंता', 'माथे का दर्द', 'एकाग्रता की कमी', 'चक्कर आना'],
  '1-2 minutes', 'Light',
  'Beginner', 'Classical',
  3, 'gv24_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'taiyang', 'EX-HN5', 'Extra Point - Taiyang (Temple)', 'अतिरिक्त बिंदु - ताइयांग (मंदिर)',
  'Located at the temple, in the depression behind the outer corner of the eye and eyebrow.', 'मंदिर पर स्थित, आंख और भौं के बाहरी कोने के पीछे के अवसाद में।',
  'Use your index and middle fingers to apply gentle circular pressure for 2-3 minutes on both temples.', 'अपनी तर्जनी और बीच की उंगली से दोनों कनपटियों पर 2-3 मिनट तक हल्का गोलाकार दबाव डालें।',
  'Use gentle pressure. Avoid if you have severe eye conditions or recent head trauma.', 'हल्का दबाव डालें। गंभीर आंखों की समस्याओं या हाल की सिर की चोट में बचें।',
  '太陽',
  'Tàiyáng',
  'Extra Point', 'अतिरिक्त बिंदु',
  'EX',
  NULL,
  NULL,
  ARRAY['face'], ARRAY['temporal headache', 'migraine', 'eye fatigue', 'facial neuralgia'],
  ARRAY['Temporal headaches and migraines', 'Eye fatigue and strain', 'Facial neuralgia', 'Stress and tension'], ARRAY['कनपटी का दर्द और माइग्रेन', 'आंखों की थकान और खिंचाव', 'चेहरे की न्यूरेल्जिया', 'तनाव और चिंता'],
  '2-3 minutes', 'Light',
  'Beginner', 'Extra',
  5, 'taiyang_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'st12', 'ST12', 'Stomach 12 - Empty Basin', 'स्टमक 12 - क्वेपेन',
  'Located in the supraclavicular fossa, above the collarbone, lateral to the throat.', 'हंसली के ऊपर, गले के बगल में, सुप्राक्लेविकुलर फोसा में स्थित।',
  'Use fingertips to apply gentle circular pressure for 30-60 seconds on both sides.', 'अंगुली के सिरों से दोनों तरफ 30-60 सेकंड तक हल्का गोलाकार दबाव डालें।',
  'Use very gentle pressure. Avoid with severe respiratory distress.', 'बहुत हल्का दबाव का उपयोग करें। गंभीर श्वसन संकट में बचें।',
  '缺盆',
  'Quēpén',
  'Stomach', 'स्टमक',
  'ST',
  'Earth',
  'Yang',
  ARRAY['chest', 'neck'], ARRAY['respiratory congestion', 'throat pain', 'shoulder tension', 'lymph congestion'],
  ARRAY['Respiratory congestion', 'Throat inflammation', 'Shoulder tension', 'Lymphatic congestion'], ARRAY['श्वसन संकुलन', 'गले की सूजन', 'कंधे का तनाव', 'लसीका संकुलन'],
  '30-60 seconds', 'Light',
  'Intermediate', 'Classical',
  3, 'st12_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'lu7', 'LU7', 'Lung 7 - Broken Sequence', 'लंग 7 - लीक्यू',
  'Located on the thumb side of the forearm, about 1.5 finger widths above the wrist crease.', 'हाथ के अंगूठे की तरफ, कलाई की रेखा से लगभग 1.5 उंगली चौड़ाई ऊपर स्थित।',
  'Apply moderate pressure with thumb while supporting the arm, hold for 1-2 minutes.', 'हाथ को सहारा देते हुए अंगूठे से मध्यम दबाव डालें, 1-2 मिनट तक रोकें।',
  'Avoid during pregnancy. Use gentle pressure for sensitive individuals.', 'गर्भावस्था के दौरान बचें। संवेदनशील व्यक्तियों के लिए हल्का दबाव का उपयोग करें।',
  '列缺',
  'Lièquē',
  'Lung', 'लंग',
  'LU',
  'Metal',
  'Yin',
  ARRAY['arm', 'wrist'], ARRAY['asthma', 'bronchitis', 'wrist pain', 'skin problems'],
  ARRAY['Asthma', 'Bronchitis', 'Wrist pain', 'Skin disorders'], ARRAY['दमा', 'ब्रोंकाइटिस', 'कलाई का दर्द', 'त्वचा विकार'],
  '1-2 minutes', 'Moderate',
  'Beginner', 'Classical',
  4, 'lu7_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'lv8', 'LV8', 'Liver 8 - Crooked Spring', 'लिवर 8 - क्वक्वान',
  'Located on the inner side of the knee, at the end of the knee crease when knee is bent.', 'घुटने के अंदरूनी हिस्से पर, घुटना मोड़ने पर घुटने की सिलवट के अंत में स्थित।',
  'Apply moderate pressure with thumb while knee is slightly bent, hold for 1-2 minutes.', 'घुटना थोड़ा मोड़कर अंगूठे से मध्यम दबाव डालें, 1-2 मिनट तक रोकें।',
  'Avoid during early pregnancy. Use gentle pressure for knee injuries.', 'गर्भावस्था की शुरुआत में बचें। घुटने की चोट के लिए हल्का दबाव का उपयोग करें।',
  '曲泉',
  'Qūquán',
  'Liver', 'लिवर',
  'LV',
  'Wood',
  'Yin',
  ARRAY['knee', 'leg'], ARRAY['menstrual problems', 'knee pain', 'urinary issues', 'stress'],
  ARRAY['Menstrual irregularities', 'Knee pain', 'Urinary problems', 'Emotional stress'], ARRAY['मासिक धर्म की अनियमितता', 'घुटने का दर्द', 'मूत्र संबंधी समस्याएं', 'भावनात्मक तनाव'],
  '1-2 minutes', 'Moderate',
  'Intermediate', 'Classical',
  3, 'lv8_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'bl15', 'BL15', 'Bladder 15 - Heart Shu', 'ब्लैडर 15 - हार्ट शू',
  'Located on the back, 1.5 finger widths lateral to the spine, level with the 5th thoracic vertebra.', 'पीठ पर, रीढ़ की हड्डी से 1.5 उंगली चौड़ाई बगल में, 5वीं वक्षीय कशेरुका के स्तर पर स्थित।',
  'Apply gentle pressure with thumbs for 1-2 minutes while lying face down.', 'मुंह के बल लेटकर अंगूठों से 1-2 मिनट तक हल्का दबाव डालें।',
  'Avoid with severe heart conditions. Professional guidance recommended.', 'गंभीर हृदय रोगों में बचें। पेशेवर मार्गदर्शन की सिफारिश की जाती है।',
  '心俞',
  'Xīnshū',
  'Bladder', 'ब्लैडर',
  'BL',
  'Water',
  'Yang',
  ARRAY['back'], ARRAY['heart palpitations', 'anxiety', 'insomnia', 'memory issues'],
  ARRAY['Heart palpitations', 'Anxiety disorders', 'Insomnia', 'Memory problems'], ARRAY['दिल की धड़कन', 'चिंता विकार', 'अनिद्रा', 'स्मृति समस्याएं'],
  '1-2 minutes', 'Light',
  'Advanced', 'Classical',
  3, 'bl15_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'sp2', 'SP2', 'Spleen 2 - Great Metropolis', 'स्प्लीन 2 - दादू',
  'Located on the inner edge of the foot, in the depression distal to the big toe joint.', 'पैर के अंदरूनी किनारे पर, अंगूठे की जोड़ के आगे के गड्ढे में स्थित।',
  'Apply moderate pressure with thumb for 1-2 minutes while supporting the foot.', 'पैर को सहारा देते हुए अंगूठे से 1-2 मिनट तक मध्यम दबाव डालें।',
  'Avoid with severe digestive bleeding. Use gentle pressure.', 'गंभीर पाचन रक्तस्राव में बचें। हल्का दबाव का प्रयोग करें।',
  '大都',
  'Dàdū',
  'Spleen', 'स्प्लीन',
  'SP',
  'Earth',
  'Yin',
  ARRAY['foot'], ARRAY['digestive problems', 'diarrhea', 'stomach heat', 'foot pain'],
  ARRAY['Digestive disorders', 'Diarrhea', 'Stomach heat', 'Foot pain'], ARRAY['पाचन विकार', 'दस्त', 'पेट की गर्मी', 'पैर का दर्द'],
  '1-2 minutes', 'Moderate',
  'Beginner', 'Classical',
  3, 'sp2_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'th21', 'TH21', 'Triple Heater 21 - Ear Gate', 'ट्रिपल हीटर 21 - इरमेन',
  'Located in front of the ear, in the depression above the ear canal opening.', 'कान के सामने, कान की नली के मुंह के ऊपर के गड्ढे में स्थित।',
  'Apply very gentle circular pressure with fingertip for 30-60 seconds.', 'अंगुली के सिरे से 30-60 सेकंड तक बहुत हल्का गोलाकार दबाव डालें।',
  'Avoid with perforated eardrum. Use very gentle pressure.', 'छिद्रित कान के पर्दे में बचें। बहुत हल्का दबाव का उपयोग करें।',
  '耳門',
  'Ěrmén',
  'Triple Heater', 'ट्रिपल हीटर',
  'TH',
  'Fire',
  'Yang',
  ARRAY['ear'], ARRAY['hearing loss', 'tinnitus', 'ear infections', 'TMJ disorders'],
  ARRAY['Hearing loss', 'Tinnitus', 'Ear infections', 'TMJ disorders'], ARRAY['सुनने की हानि', 'कान में भनभनाहट', 'कान के संक्रमण', 'टीएमजे विकार'],
  '30-60 seconds', 'Light',
  'Intermediate', 'Classical',
  3, 'th21_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'ki16', 'KI16', 'Kidney 16 - Vital Shu', 'किडनी 16 - हुआंगशू',
  'Located on the abdomen, 0.5 finger width lateral to the navel.', 'पेट पर, नाभि से 0.5 उंगली चौड़ाई बगल में स्थित।',
  'Apply gentle circular pressure with fingertips for 1-2 minutes.', 'अंगुली के सिरों से 1-2 मिनट तक हल्का गोलाकार दबाव डालें।',
  'Avoid during pregnancy. Use gentle pressure after meals.', 'गर्भावस्था के दौरान बचें। भोजन के बाद हल्का दबाव का प्रयोग करें।',
  '肓俞',
  'Huāngshū',
  'Kidney', 'किडनी',
  'KI',
  'Water',
  'Yin',
  ARRAY['abdomen'], ARRAY['abdominal pain', 'digestive issues', 'constipation', 'reproductive problems'],
  ARRAY['Abdominal pain', 'Digestive issues', 'Constipation', 'Reproductive disorders'], ARRAY['पेट दर्द', 'पाचन संबंधी समस्याएं', 'कब्ज', 'प्रजनन विकार'],
  '1-2 minutes', 'Light',
  'Beginner', 'Classical',
  3, 'ki16_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'si8', 'SI8', 'Small Intestine 8 - Small Sea', 'स्मॉल इंटेस्टाइन 8 - शियाओहाई',
  'Located on the inner side of the elbow, in the groove between the ulna bone and olecranon.', 'कोहनी के अंदरूनी हिस्से पर, अल्ना हड्डी और ओलेक्रानॉन के बीच के नाली में स्थित।',
  'Apply moderate pressure with thumb while arm is slightly bent for 1-2 minutes.', 'हाथ थोड़ा मोड़कर अंगूठे से 1-2 मिनट तक मध्यम दबाव डालें।',
  'Avoid with elbow fractures. Use gentle pressure for inflammation.', 'कोहनी के फ्रैक्चर में बचें। सूजन के लिए हल्का दबाव का उपयोग करें।',
  '小海',
  'Xiǎohǎi',
  'Small Intestine', 'स्मॉल इंटेस्टाइन',
  'SI',
  'Fire',
  'Yang',
  ARRAY['arm', 'elbow'], ARRAY['elbow pain', 'arm numbness', 'mental restlessness', 'shoulder stiffness'],
  ARRAY['Elbow pain', 'Arm numbness', 'Mental restlessness', 'Shoulder stiffness'], ARRAY['कोहनी का दर्द', 'हाथ की सुन्नता', 'मानसिक बेचैनी', 'कंधे की अकड़न'],
  '1-2 minutes', 'Moderate',
  'Intermediate', 'Classical',
  3, 'si8_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'cv22', 'CV22', 'Conception Vessel 22 - Heavenly Chimney', 'गर्भ वेसल 22 - स्वर्गीय चिमनी',
  'Located in the center of the suprasternal notch (hollow at the base of the throat).', 'गले के आधार पर सुप्रास्टर्नल नॉच के केंद्र में स्थित।',
  'Apply very gentle pressure with fingertip in small circular motions.', 'उंगली की नोक से छोटी गोलाकार गतियों में बहुत हल्का दबाव डालें।',
  'Avoid excessive pressure. Be gentle with this sensitive area.', 'अधिक दबाव से बचें। इस संवेदनशील क्षेत्र के साथ सावधान रहें।',
  '天突',
  'Tiāntū',
  'Conception Vessel', 'गर्भ वेसल',
  'CV',
  'Water',
  'Yin',
  ARRAY['throat', 'neck'], ARRAY['sore throat', 'dry cough', 'voice problems', 'throat pain', 'difficulty swallowing'],
  ARRAY['Sore throat', 'Dry cough', 'Difficulty swallowing', 'Throat congestion'], ARRAY['गले में खराश', 'सूखी खांसी', 'निगलने में कठिनाई', 'गले की भीड़'],
  '30 seconds to 1 minute', 'Light',
  'Beginner', 'Classical',
  4, 'cv22_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'bitong', 'EX-HN8', 'Extra Point - Bitong (Nasal Patency)', 'एक्स्ट्रा पॉइंट - बिटॉन्ग (नाक की रुकावट)',
  'Located on both sides of the nose, at the junction of the nasal bone and nasal cartilage.', 'नाक के दोनों किनारों पर, नासिका हड्डी और नासिका उपास्थि के जंक्शन पर स्थित।',
  'Apply gentle pressure with fingertips on both sides simultaneously.', 'दोनों तरफ एक साथ उंगलियों की नोक से हल्का दबाव डालें।',
  'Be gentle, avoid if nose is injured or very inflamed.', 'सावधान रहें, यदि नाक घायल है या बहुत सूजी है तो बचें।',
  '鼻通',
  'Bítōng',
  'Extra Point', 'एक्स्ट्रा पॉइंट',
  'EX',
  'Metal',
  'Yang',
  ARRAY['nose', 'face'], ARRAY['blocked nose', 'nasal congestion', 'rhinitis', 'loss of smell', 'stuffy nose'],
  ARRAY['Blocked nose', 'Nasal congestion', 'Rhinitis', 'Loss of smell'], ARRAY['बंद नाक', 'नाक की रुकावट', 'राइनाइटिस', 'गंध की हानि'],
  '1-2 minutes', 'Light',
  'Beginner', 'Extra',
  5, 'bitong_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'li18', 'LI18', 'Large Intestine 18 - Support and Rush Out', 'बड़ी आंत 18 - सहारा और बाहर निकलना',
  'Located on the lateral neck, at the anterior border of the sternocleidomastoid muscle.', 'गर्दन के बाजू में, स्टर्नोक्लीडोमास्टॉइड मांसपेशी की अगली सीमा पर स्थित।',
  'Apply gentle pressure with fingertip while swallowing to activate.', 'सक्रिय करने के लिए निगलते समय उंगली की नोक से हल्का दबाव डालें।',
  'Avoid during pregnancy. Be gentle with neck area.', 'गर्भावस्था के दौरान बचें। गर्दन के क्षेत्र के साथ सावधान रहें।',
  '扶突',
  'Fútū',
  'Large Intestine', 'बड़ी आंत',
  'LI',
  'Metal',
  'Yang',
  ARRAY['neck', 'throat'], ARRAY['productive cough', 'throat phlegm', 'voice hoarseness', 'lymph congestion', 'throat clearing'],
  ARRAY['Productive cough', 'Throat phlegm', 'Voice hoarseness', 'Neck lymph congestion'], ARRAY['कफ वाली खांसी', 'गले में कफ', 'आवाज में भारीपन', 'गर्दन की लसीका भीड़'],
  '1 minute', 'Light',
  'Intermediate', 'Classical',
  3, 'li18_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'st6_cold', 'ST6-C', 'Stomach 6 Enhanced - Jaw Vehicle (Cold Relief)', 'पेट 6 संवर्धित - जबड़ा वाहन (सर्दी राहत)',
  'Located on the jaw, one finger width in front of the ear, in the depression when jaw is clenched.', 'जबड़े पर, कान के सामने एक उंगली चौड़ाई में, जबड़ा भींचने पर गड्ढे में स्थित।',
  'Apply firm pressure while opening and closing mouth gently.', 'मुंह को धीरे से खोलते और बंद करते समय मजबूत दबाव डालें।',
  'Avoid if jaw is injured or if you have TMJ disorders.', 'यदि जबड़ा घायल है या TMJ विकार है तो बचें।',
  '頰車',
  'Jiáchē',
  'Stomach', 'पेट',
  'ST',
  'Earth',
  'Yang',
  ARRAY['jaw', 'face'], ARRAY['common cold', 'facial congestion', 'sinus pressure', 'jaw tension', 'cold symptoms'],
  ARRAY['Common cold symptoms', 'Facial congestion', 'Sinus pressure', 'Cold-induced jaw tension'], ARRAY['आम सर्दी के लक्षण', 'चेहरे की रुकावट', 'साइनस दबाव', 'सर्दी से प्रेरित जबड़े का तनाव'],
  '1-2 minutes', 'Firm',
  'Beginner', 'Classical',
  4, 'st6_cold_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'sp4_diarrhea', 'SP4-D', 'Spleen 4 Enhanced - Grandfather Grandson (Diarrhea Control)', 'प्लीहा 4 संवर्धित - दादा पोता (दस्त नियंत्रण)',
  'Located on the inner edge of the foot, in the depression behind the base of the big toe.', 'पैर के अंदरूनी किनारे पर, अंगूठे के आधार के पीछे गड्ढे में स्थित।',
  'Apply steady pressure while breathing deeply and relaxing abdomen.', 'गहरी सांस लेते हुए और पेट को आराम देते हुए स्थिर दबाव डालें।',
  'Avoid during pregnancy. Consult doctor for chronic conditions.', 'गर्भावस्था के दौरान बचें। पुरानी स्थितियों के लिए डॉक्टर से सलाह लें।',
  '公孫',
  'Gōngsūn',
  'Spleen', 'प्लीहा',
  'SP',
  'Earth',
  'Yin',
  ARRAY['foot', 'digestive'], ARRAY['loose motions', 'acute diarrhea', 'stomach upset', 'digestive weakness', 'watery stools'],
  ARRAY['Loose motions', 'Acute diarrhea', 'Stomach upset', 'Digestive weakness'], ARRAY['पतले दस्त', 'तीव्र दस्त', 'पेट खराब', 'पाचन कमजोरी'],
  '2-3 minutes', 'Moderate',
  'Beginner', 'Classical',
  5, 'sp4_diarrhea_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'li2', 'LI2', 'Large Intestine 2 - Second Interval', 'बड़ी आंत 2 - द्वितीय अंतराल',
  'Located on the radial side of the index finger, in front of the second metacarpophalangeal joint.', 'तर्जनी की रेडियल साइड पर, दूसरे मेटाकार्पोफैलेंजियल जॉइंट के सामने स्थित।',
  'Pinch and hold with opposite thumb and index finger.', 'विपरीत अंगूठे और तर्जनी से दबाकर पकड़ें।',
  'Avoid excessive pressure on finger joints.', 'उंगली के जोड़ों पर अधिक दबाव से बचें।',
  '二間',
  'Èrjiān',
  'Large Intestine', 'बड़ी आंत',
  'LI',
  'Metal',
  'Yang',
  ARRAY['finger', 'hand'], ARRAY['fever', 'sore throat', 'dry mouth', 'heat symptoms', 'throat inflammation'],
  ARRAY['Fever reduction', 'Sore throat', 'Dry mouth', 'Heat symptoms'], ARRAY['बुखार कम करना', 'गले में खराश', 'मुंह सूखना', 'गर्मी के लक्षण'],
  '30 seconds to 1 minute', 'Moderate',
  'Beginner', 'Classical',
  4, 'li2_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'sp1', 'SP1', 'Spleen 1 - Hidden White', 'स्प्लीन 1 - छुपा हुआ सफेद',
  'Located on the medial side of the big toe, about 0.1 inch from the corner of the nail.', 'बड़े पैर के अंगूठे के अंदरूनी किनारे पर, नाखून के कोने से लगभग 0.1 इंच की दूरी पर स्थित।',
  'Apply gentle pressure with fingertip for 30-60 seconds. Use pinching motion for stronger effect.', 'अंगुली के सिरे से 30-60 सेकंड तक हल्का दबाव डालें। मजबूत प्रभाव के लिए चुटकी लेने वाली गति का उपयोग करें।',
  'Use very gentle pressure. Avoid during early pregnancy.', 'बहुत हल्का दबाव का उपयोग करें। प्रारंभिक गर्भावस्था में बचें।',
  '隱白',
  'Yǐnbái',
  'Spleen', 'स्प्लीन',
  'SP',
  'Earth',
  'Yin',
  ARRAY['foot'], ARRAY['menstrual problems', 'heavy bleeding', 'digestive issues', 'bloating', 'mental fog'],
  ARRAY['Menstrual irregularities', 'Heavy menstrual bleeding', 'Digestive weakness', 'Mental confusion', 'Abdominal bloating'], ARRAY['मासिक धर्म की अनियमितताएं', 'अधिक मासिक धर्म स्राव', 'पाचन कमजोरी', 'मानसिक भ्रम', 'पेट फूलना'],
  '30-60 seconds', 'Light',
  'Beginner', 'Classical',
  3, 'sp1_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'lu11', 'LU11', 'Lung 11 - Lesser Merchant', 'फेफड़े 11 - छोटा व्यापारी',
  'Located on the radial side of the thumb, about 0.1 inch from the corner of the thumbnail.', 'अंगूठे के रेडियल साइड पर, अंगूठे के नाखून के कोने से लगभग 0.1 इंच की दूरी पर स्थित।',
  'Pinch gently with opposite thumb and index finger for 15-30 seconds. Repeat 2-3 times.', 'विपरीत अंगूठे और तर्जनी से धीरे से 15-30 सेकंड तक दबाएं। 2-3 बार दोहराएं।',
  'Use gentle pressure only. This is a sensitive point.', 'केवल हल्का दबाव का उपयोग करें। यह एक संवेदनशील बिंदु है।',
  '少商',
  'Shàoshāng',
  'Lung', 'फेफड़े',
  'LU',
  'Metal',
  'Yin',
  ARRAY['hand'], ARRAY['sore throat', 'bronchitis', 'fever', 'respiratory infection', 'low immunity'],
  ARRAY['Sore throat and throat pain', 'Acute bronchitis', 'Fever and chills', 'Respiratory infections', 'Immune system support'], ARRAY['गले में खराश और गले का दर्द', 'तीव्र ब्रोंकाइटिस', 'बुखार और ठंड लगना', 'श्वसन संक्रमण', 'प्रतिरक्षा प्रणाली समर्थन'],
  '15-30 seconds', 'Light',
  'Beginner', 'Classical',
  3, 'lu11_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'bl67', 'BL67', 'Bladder 67 - Reaching Yin', 'ब्लैडर 67 - यिन तक पहुंचना',
  'Located on the lateral side of the little toe, about 0.1 inch from the corner of the toenail.', 'छोटे पैर के अंगूठे के बाहरी किनारे पर, पैर के नाखून के कोने से लगभग 0.1 इंच की दूरी पर स्थित।',
  'Apply gentle pressure or light pinching for 30-60 seconds before bedtime for best results.', 'सर्वोत्तम परिणामों के लिए सोने से पहले 30-60 सेकंड तक हल्का दबाव या हल्की चुटकी लें।',
  'Use gentle pressure. Avoid strong stimulation during pregnancy.', 'हल्का दबाव का उपयोग करें। गर्भावस्था में मजबूत उत्तेजना से बचें।',
  '至陰',
  'Zhìyīn',
  'Bladder', 'ब्लैडर',
  'BL',
  'Water',
  'Yang',
  ARRAY['foot'], ARRAY['insomnia', 'anxiety', 'restlessness', 'headaches', 'eye strain'],
  ARRAY['Insomnia and sleep disorders', 'Anxiety and restlessness', 'Headaches and migraines', 'Difficult labor (pregnancy)', 'Eye strain and vision problems'], ARRAY['अनिद्रा और नींद संबंधी विकार', 'चिंता और बेचैनी', 'सिरदर्द और माइग्रेन', 'कठिन प्रसव (गर्भावस्था)', 'आंखों का तनाव और दृष्टि समस्याएं'],
  '30-60 seconds', 'Light',
  'Beginner', 'Classical',
  3, 'bl67_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'ht9', 'HT9', 'Heart 9 - Lesser Surge', 'हृदय 9 - छोटी लहर',
  'Located on the radial side of the little finger, about 0.1 inch from the corner of the fingernail.', 'छोटी उंगली के रेडियल साइड पर, उंगली के नाखून के कोने से लगभग 0.1 इंच की दूरी पर स्थित।',
  'Pinch very gently with opposite thumb and index finger for 15-30 seconds when feeling mentally foggy.', 'मानसिक धुंधलाहट महसूस करने पर विपरीत अंगूठे और तर्जनी से बहुत धीरे से 15-30 सेकंड तक दबाएं।',
  'Use very gentle pressure. This point is quite sensitive.', 'बहुत हल्का दबाव का उपयोग करें। यह बिंदु काफी संवेदनशील है।',
  '少衝',
  'Shàochōng',
  'Heart', 'हृदय',
  'HT',
  'Fire',
  'Yin',
  ARRAY['hand'], ARRAY['mental fog', 'heart palpitations', 'chest pain', 'emotional instability', 'faintness'],
  ARRAY['Mental clarity and focus', 'Heart palpitations', 'Chest pain and tightness', 'Emotional instability', 'Sudden faintness'], ARRAY['मानसिक स्पष्टता और फोकस', 'दिल की धड़कन', 'छाती दर्द और जकड़न', 'भावनात्मक अस्थिरता', 'अचानक बेहोशी'],
  '15-30 seconds', 'Light',
  'Intermediate', 'Classical',
  2, 'ht9_location.jpg'
);

INSERT INTO acupressure_points (
  id, code, name_en, name_hi, location_en, location_hi,
  technique_en, technique_hi, contraindications_en, contraindications_hi,
  chinese_traditional, chinese_pinyin,
  meridian_name_en, meridian_name_hi, meridian_code, meridian_element, meridian_polarity,
  body_parts, symptoms, indications_en, indications_hi,
  duration, pressure, difficulty, category, popularity, image_url
) VALUES (
  'si1', 'SI1', 'Small Intestine 1 - Lesser Marsh', 'स्मॉल इंटेस्टाइन 1 - छोटा दलदल',
  'Located on the ulnar side of the little finger, about 0.1 inch from the corner of the fingernail.', 'छोटी उंगली के उल्नार साइड पर, उंगली के नाखून के कोने से लगभग 0.1 इंच की दूरी पर स्थित।',
  'Pinch gently with opposite thumb and index finger for 30-60 seconds. Good for nursing mothers.', 'विपरीत अंगूठे और तर्जनी से धीरे से 30-60 सेकंड तक दबाएं। स्तनपान कराने वाली माताओं के लिए अच्छा।',
  'Use gentle pressure. Safe for breastfeeding mothers.', 'हल्का दबाव का उपयोग करें। स्तनपान कराने वाली माताओं के लिए सुरक्षित।',
  '少澤',
  'Shàozé',
  'Small Intestine', 'छोटी आंत',
  'SI',
  'Fire',
  'Yang',
  ARRAY['hand'], ARRAY['insufficient lactation', 'mental fog', 'sore throat', 'breast pain', 'fever'],
  ARRAY['Insufficient lactation', 'Mental alertness and clarity', 'Sore throat', 'Breast pain and swelling', 'Fever and headaches'], ARRAY['अपर्याप्त स्तनपान', 'मानसिक सतर्कता और स्पष्टता', 'गले में खराश', 'स्तन दर्द और सूजन', 'बुखार और सिरदर्द'],
  '30-60 seconds', 'Light',
  'Beginner', 'Classical',
  3, 'si1_location.jpg'
);

-- Verify import
SELECT COUNT(*) as total_points FROM acupressure_points;
SELECT code, name_en, difficulty FROM acupressure_points ORDER BY code LIMIT 10;
