// Static image mapping for acupressure points
// React Native Metro bundler requires static imports

// Import all generated medical illustrations
import LI4_Hegu from '../../assets/acupressure_points/LI4_Hegu_hand_acupressure_point_b8a97496.png';
import GV20_Baihui from '../../assets/acupressure_points/GV20_Baihui_crown_intersection_point_0794ad19.png';
import LV3_Taichong from '../../assets/acupressure_points/LV3_Taichong_foot_acupressure_point_5548e99c.png';
import SP6_Sanyinjiao from '../../assets/acupressure_points/SP6_Sanyinjiao_inner_ankle_point_a9e8f6df.png';
import PC6_Neiguan from '../../assets/acupressure_points/PC6_Neiguan_between_tendons_point_0cad7f27.png';
import ST36_Zusanli from '../../assets/acupressure_points/ST36_Zusanli_tibia_leg_point_d593dc9b.png';
import LI11_Quchi from '../../assets/acupressure_points/LI11_Quchi_elbow_acupressure_point_b6ecb42b.png';
import BL2_Zanzhu from '../../assets/acupressure_points/BL2_Zanzhu_eyebrow_acupressure_point_881d24ee.png';
import TE17_Yifeng from '../../assets/acupressure_points/TE17_Yifeng_ear_acupressure_point_c48cdf2e.png';
import GV26_Renzhong from '../../assets/acupressure_points/GV26_Renzhong_face_acupressure_point_5a31f098.png';
import HT7_Shenmen from '../../assets/acupressure_points/HT7_Shenmen_wrist_acupressure_point_c660a59c.png';
import KI3_Taixi from '../../assets/acupressure_points/KI3_Taixi_ankle_acupressure_point_f8e5a56f.png';
import GB20_Fengchi from '../../assets/acupressure_points/GB20_Fengchi_skull_base_point_203a6a1d.png';
import BL23_Shenshu from '../../assets/acupressure_points/BL23_Shenshu_lower_back_point_4a3f81a2.png';
import TE5_Waiguan from '../../assets/acupressure_points/TE5_Waiguan_wrist_acupressure_point_6d3731a9.png';
import CV17_Danzhong from '../../assets/acupressure_points/CV17_Danzhong_chest_acupressure_point_c3e55971.png';
import SI3_Houxi from '../../assets/acupressure_points/SI3_Houxi_hand_acupressure_point_1ace32ce.png';
import GB34_Yanglingquan from '../../assets/acupressure_points/GB34_Yanglingquan_knee_acupressure_point_02064cf1.png';
import PC8_Laogong from '../../assets/acupressure_points/PC8_Laogong_palm_acupressure_point_20499451.png';
import LI20_Yingxiang from '../../assets/acupressure_points/LI20_Yingxiang_nasolabial_groove_point_847df89e.png';
import ST25_Tianshu from '../../assets/acupressure_points/ST25_Tianshu_abdomen_acupressure_point_66670710.png';
import KI1_Yongquan from '../../assets/acupressure_points/KI1_Yongquan_foot_acupressure_point_1cc77209.png';
import GB21_Jianjing from '../../assets/acupressure_points/GB21_Jianjing_shoulder_acupressure_point_873be72c.png';
import CV4_Guanyuan from '../../assets/acupressure_points/CV4_Guanyuan_abdomen_acupressure_point_3e177c1d.png';
import Taiyang_temple from '../../assets/acupressure_points/Taiyang_temple_acupressure_point_31a4ee19.png';
import Yintang_forehead from '../../assets/acupressure_points/Yintang_forehead_acupressure_point_2e369548.png';

// Export mapping object for acupressure point images
export const acupressurePointImages: Record<string, any> = {
  // Main acupressure points
  'li4': LI4_Hegu,
  'gv20': GV20_Baihui,
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
};

// Helper function to get image for a point
export const getPointImage = (pointId: string): any => {
  return acupressurePointImages[pointId] || null;
};