export interface AcupressurePoint {
  id: string;
  code: string; // "LI4", "ST36", "GV20", etc.
  name: LocalizedText;
  chineseName?: {
    traditional: string;
    pinyin: string;
  };
  alternateNames?: {
    en: string[];
    hi: string[];
  };
  location: LocalizedText;
  meridian: {
    name: LocalizedText;
    code: string; // "LI", "ST", "GV", etc.
    element?: 'Wood' | 'Fire' | 'Earth' | 'Metal' | 'Water';
    polarity?: 'Yin' | 'Yang';
  };
  indications: LocalizedText[];
  contraindications: LocalizedText;
  technique: LocalizedText;
  duration: string; // "1-3 minutes", "30 seconds-2 minutes"
  pressure: 'Light' | 'Moderate' | 'Firm';
  bodyPart: string[]; // ["hand", "arm", "head", "leg", "foot", "torso", "face", "neck"]
  symptoms: string[]; // For Algolia search indexing
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: 'Classical' | 'Extra' | 'Auricular' | 'Modern' | 'Pediatric';
  popularity?: number; // 1-5 rating for featuring popular points
  imageUrl?: string; // Leave null for now, implement in later phase
  precautions?: LocalizedText[];
  
  // Legacy fields for backward compatibility
  method?: LocalizedText; // Maps to technique
  conditions?: string[]; // Maps to symptoms
  images?: string[]; // Maps to imageUrl
}

export interface LocalizedText {
  en: string;
  hi: string;
}

export interface SearchResult {
  id: string;
  title: string;
  subtitle: string;
  type: 'point' | 'condition' | 'bodypart';
  relevanceScore: number;
}

export interface QuestionnaireStep {
  id: string;
  question: LocalizedText;
  type: 'single' | 'multiple' | 'scale';
  options?: QuestionOption[];
  required: boolean;
}

export interface QuestionOption {
  id: string;
  label: LocalizedText;
  value: string;
}

export interface QuestionnaireResponse {
  stepId: string;
  value: string | string[];
}

export interface Recommendation {
  points: string[]; // point IDs
  sessionType: 'quick' | 'full';
  duration: number;
  instructions: LocalizedText;
}

export interface User {
  id: string;
  preferredLanguage: 'en' | 'hi';
  completedSessions: string[];
  favorites: string[];
  createdAt: Date;
}

export type RootStackParamList = {
  Main: undefined;
  PointDetail: { pointId: string };
  Questionnaire: undefined;
  Search: { initialQuery?: string };
  Settings: undefined;
  TypesenseTest: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  Guide: undefined;
  Settings: undefined;
};