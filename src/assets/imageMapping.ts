// Static image mapping for acupressure points
// React Native Metro bundler requires static imports

// Import all generated medical illustrations  
const LI4_Hegu = require('../../assets/acupressure_points/LI4_Hegu_dorsal_hand_point_4753731a.png');
const GV20_Baihui = require('../../assets/acupressure_points/GV20_Baihui_crown_intersection_point_0794ad19.png');
const LV3_Taichong = require('../../assets/acupressure_points/LV3_Taichong_foot_acupressure_point_5548e99c.png');
const SP6_Sanyinjiao = require('../../assets/acupressure_points/SP6_Sanyinjiao_inner_ankle_point_a9e8f6df.png');
const PC6_Neiguan = require('../../assets/acupressure_points/PC6_Neiguan_between_tendons_point_0cad7f27.png');
const ST36_Zusanli = require('../../assets/acupressure_points/ST36_Zusanli_tibia_leg_point_d593dc9b.png');
const LI11_Quchi = require('../../assets/acupressure_points/LI11_Quchi_elbow_acupressure_point_b6ecb42b.png');
const BL2_Zanzhu = require('../../assets/acupressure_points/BL2_Zanzhu_eyebrow_acupressure_point_881d24ee.png');
const TE17_Yifeng = require('../../assets/acupressure_points/TE17_Yifeng_ear_acupressure_point_c48cdf2e.png');
const GV26_Renzhong = require('../../assets/acupressure_points/GV26_Renzhong_face_acupressure_point_5a31f098.png');
const HT7_Shenmen = require('../../assets/acupressure_points/HT7_Shenmen_wrist_acupressure_point_c660a59c.png');
const KI3_Taixi = require('../../assets/acupressure_points/KI3_Taixi_ankle_acupressure_point_f8e5a56f.png');
const GB20_Fengchi = require('../../assets/acupressure_points/GB20_Fengchi_skull_base_point_203a6a1d.png');
const BL23_Shenshu = require('../../assets/acupressure_points/BL23_Shenshu_lower_back_point_4a3f81a2.png');
const TE5_Waiguan = require('../../assets/acupressure_points/TE5_Waiguan_wrist_acupressure_point_6d3731a9.png');
const CV17_Danzhong = require('../../assets/acupressure_points/CV17_Danzhong_chest_acupressure_point_c3e55971.png');
const SI3_Houxi = require('../../assets/acupressure_points/SI3_Houxi_hand_acupressure_point_1ace32ce.png');
const GB34_Yanglingquan = require('../../assets/acupressure_points/GB34_Yanglingquan_knee_acupressure_point_02064cf1.png');
const PC8_Laogong = require('../../assets/acupressure_points/PC8_Laogong_palm_acupressure_point_20499451.png');
const LI20_Yingxiang = require('../../assets/acupressure_points/LI20_Yingxiang_nasolabial_groove_point_847df89e.png');
const ST25_Tianshu = require('../../assets/acupressure_points/ST25_Tianshu_abdomen_acupressure_point_66670710.png');
const KI1_Yongquan = require('../../assets/acupressure_points/KI1_Yongquan_foot_acupressure_point_1cc77209.png');
const GB21_Jianjing = require('../../assets/acupressure_points/GB21_Jianjing_shoulder_acupressure_point_873be72c.png');
const CV4_Guanyuan = require('../../assets/acupressure_points/CV4_Guanyuan_abdomen_acupressure_point_3e177c1d.png');
const Taiyang_temple = require('../../assets/acupressure_points/Taiyang_temple_acupressure_point_31a4ee19.png');
const Yintang_forehead = require('../../assets/acupressure_points/Yintang_forehead_acupressure_point_2e369548.png');

// Newly added corrected images
const Anmian_EX_HN16 = require('../../assets/acupressure_points/Anmian_EX-HN16_Peaceful_Sleep.jpg');
const GV20_Baihui_corrected = require('../../assets/acupressure_points/GV20_Baihui_corrected.jpg');
const SI19_Tinggong = require('../../assets/acupressure_points/SI19_Tinggong_corrected.jpg');

// Export mapping object for acupressure point images
export const acupressurePointImages: Record<string, any> = {
  // Main acupressure points
  'li4': LI4_Hegu,
  'gv20': GV20_Baihui_corrected,  // Updated to corrected image
  'lv3': LV3_Taichong,
  'sp6': SP6_Sanyinjiao,
  'pc6': PC6_Neiguan,
  'st36': ST36_Zusanli,
  'li11': LI11_Quchi,
  'bl2': BL2_Zanzhu,
  'te17': TE17_Yifeng,
  'gv26': GV26_Renzhong,
  'ht7': HT7_Shenmen,
  'ki3': KI3_Taixi,
  'gb20': GB20_Fengchi,
  'bl23': BL23_Shenshu,
  'te5': TE5_Waiguan,
  'cv17': CV17_Danzhong,
  'si3': SI3_Houxi,
  'gb34': GB34_Yanglingquan,
  'pc8': PC8_Laogong,
  'li20': LI20_Yingxiang,
  'st25': ST25_Tianshu,
  'ki1': KI1_Yongquan,
  'gb21': GB21_Jianjing,
  'cv4': CV4_Guanyuan,
  'taiyang': Taiyang_temple,
  'yintang': Yintang_forehead,

  // Newly added corrected images
  'anmian': Anmian_EX_HN16,
  'si19': SI19_Tinggong,
};

// Helper function to get image for a point
export const getPointImage = (pointId: string): any => {
  return acupressurePointImages[pointId] || null;
};