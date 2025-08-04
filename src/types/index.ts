export interface AcupressurePoint {
  id: string;
  code: string;
  name: LocalizedText;
  location: LocalizedText;
  method: LocalizedText;
  conditions: string[];
  contraindications: LocalizedText;
  bodyPart: string;
  images: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: number; // in minutes
  pressure: 'light' | 'medium' | 'firm';
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
};

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  Guide: undefined;
  Settings: undefined;
};