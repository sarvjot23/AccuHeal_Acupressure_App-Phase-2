import { AcupressurePoint, LocalizedText } from '@types';

// Valid meridian codes for validation
const VALID_MERIDIAN_CODES = [
  'LU', 'LI', 'ST', 'SP', 'HT', 'SI', 'BL', 'KI', 'PC', 'TH', 'GB', 'LV', // Main meridians
  'GV', 'CV', 'REN', 'DU', // Extra meridians
  'EX', 'M', 'N' // Extra points, miscellaneous
];

const VALID_ELEMENTS = ['Wood', 'Fire', 'Earth', 'Metal', 'Water'];
const VALID_POLARITIES = ['Yin', 'Yang'];
const VALID_PRESSURES = ['Light', 'Moderate', 'Firm'];
const VALID_DIFFICULTIES = ['Beginner', 'Intermediate', 'Advanced'];
const VALID_CATEGORIES = ['Classical', 'Extra', 'Auricular', 'Modern', 'Pediatric'];
const VALID_BODY_PARTS = [
  'hand', 'arm', 'head', 'leg', 'foot', 'torso', 'face', 'neck', 
  'shoulder', 'chest', 'back', 'hip', 'thigh', 'ankle', 'wrist', 'abdomen'
];

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

export function validateLocalizedText(text: LocalizedText, fieldName: string): string[] {
  const errors: string[] = [];
  
  if (!text.en || typeof text.en !== 'string' || text.en.trim().length === 0) {
    errors.push(`${fieldName}: English text is required and cannot be empty`);
  }
  
  if (!text.hi || typeof text.hi !== 'string' || text.hi.trim().length === 0) {
    errors.push(`${fieldName}: Hindi text is required and cannot be empty`);
  }
  
  return errors;
}

export function validatePointCode(code: string): string[] {
  const errors: string[] = [];
  
  if (!code || typeof code !== 'string') {
    errors.push('Point code is required');
    return errors;
  }
  
  // Extract meridian code from point code (e.g., "LI4" -> "LI")
  const meridianMatch = code.match(/^([A-Z]+)/);
  if (!meridianMatch) {
    errors.push(`Invalid point code format: ${code}`);
    return errors;
  }
  
  const meridianCode = meridianMatch[1];
  if (!VALID_MERIDIAN_CODES.includes(meridianCode)) {
    errors.push(`Invalid meridian code in point code: ${meridianCode}`);
  }
  
  // Validate point number format
  const numberMatch = code.match(/([0-9]+)$/);
  if (!numberMatch) {
    errors.push(`Point code must end with a number: ${code}`);
  }
  
  return errors;
}

export function validateMeridian(meridian: AcupressurePoint['meridian'], pointCode: string): string[] {
  const errors: string[] = [];
  
  if (!meridian) {
    errors.push('Meridian information is required');
    return errors;
  }
  
  // Validate meridian code
  if (!meridian.code || !VALID_MERIDIAN_CODES.includes(meridian.code)) {
    errors.push(`Invalid meridian code: ${meridian.code}`);
  }
  
  // Check if meridian code matches point code
  if (pointCode && !pointCode.startsWith(meridian.code)) {
    errors.push(`Meridian code ${meridian.code} doesn't match point code ${pointCode}`);
  }
  
  // Validate meridian name
  errors.push(...validateLocalizedText(meridian.name, 'meridian.name'));
  
  // Validate element (optional)
  if (meridian.element && !VALID_ELEMENTS.includes(meridian.element)) {
    errors.push(`Invalid element: ${meridian.element}`);
  }
  
  // Validate polarity (optional)
  if (meridian.polarity && !VALID_POLARITIES.includes(meridian.polarity)) {
    errors.push(`Invalid polarity: ${meridian.polarity}`);
  }
  
  return errors;
}

export function validateAcupressurePoint(point: AcupressurePoint): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  
  try {
    // Required fields validation
    if (!point.id || typeof point.id !== 'string' || point.id.trim().length === 0) {
      errors.push('Point ID is required');
    }
    
    // Validate point code
    errors.push(...validatePointCode(point.code));
    
    // Validate name
    errors.push(...validateLocalizedText(point.name, 'name'));
    
    // Validate location
    errors.push(...validateLocalizedText(point.location, 'location'));
    
    // Validate meridian
    errors.push(...validateMeridian(point.meridian, point.code));
    
    // Validate technique
    errors.push(...validateLocalizedText(point.technique, 'technique'));
    
    // Validate contraindications
    errors.push(...validateLocalizedText(point.contraindications, 'contraindications'));
    
    // Validate indications
    if (!point.indications || point.indications.length === 0) {
      errors.push('At least one indication is required');
    } else {
      point.indications.forEach((indication, index) => {
        errors.push(...validateLocalizedText(indication, `indications[${index}]`));
      });
    }
    
    // Validate duration
    if (!point.duration || typeof point.duration !== 'string') {
      errors.push('Duration is required');
    } else if (!/^\d+(-\d+)?\s*(second|minute|hour)s?$/i.test(point.duration)) {
      warnings.push(`Duration format may be inconsistent: ${point.duration}`);
    }
    
    // Validate pressure
    if (!VALID_PRESSURES.includes(point.pressure)) {
      errors.push(`Invalid pressure level: ${point.pressure}`);
    }
    
    // Validate difficulty
    if (!VALID_DIFFICULTIES.includes(point.difficulty)) {
      errors.push(`Invalid difficulty level: ${point.difficulty}`);
    }
    
    // Validate category
    if (!VALID_CATEGORIES.includes(point.category)) {
      errors.push(`Invalid category: ${point.category}`);
    }
    
    // Validate body parts
    if (!point.bodyPart || point.bodyPart.length === 0) {
      errors.push('At least one body part is required');
    } else {
      const invalidBodyParts = point.bodyPart.filter(bp => !VALID_BODY_PARTS.includes(bp));
      if (invalidBodyParts.length > 0) {
        errors.push(`Invalid body parts: ${invalidBodyParts.join(', ')}`);
      }
    }
    
    // Validate symptoms
    if (!point.symptoms || point.symptoms.length === 0) {
      warnings.push('No symptoms specified - may affect search functionality');
    }
    
    // Validate popularity (optional)
    if (point.popularity !== undefined) {
      if (typeof point.popularity !== 'number' || point.popularity < 1 || point.popularity > 5) {
        errors.push('Popularity must be a number between 1 and 5');
      }
    }
    
    // Validate Chinese name (optional)
    if (point.chineseName) {
      if (!point.chineseName.traditional || !point.chineseName.pinyin) {
        errors.push('Chinese name must include both traditional and pinyin');
      }
    }
    
    // Validate precautions (optional)
    if (point.precautions) {
      point.precautions.forEach((precaution, index) => {
        errors.push(...validateLocalizedText(precaution, `precautions[${index}]`));
      });
    }
    
    // Validate alternate names (optional)
    if (point.alternateNames) {
      if (!Array.isArray(point.alternateNames.en) || !Array.isArray(point.alternateNames.hi)) {
        errors.push('Alternate names must be arrays for both languages');
      }
    }
    
  } catch (error) {
    errors.push(`Validation error: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
  
  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
}

export function validatePointsArray(points: AcupressurePoint[]): ValidationResult {
  const allErrors: string[] = [];
  const allWarnings: string[] = [];
  const seenIds = new Set<string>();
  const seenCodes = new Set<string>();
  
  points.forEach((point, index) => {
    const result = validateAcupressurePoint(point);
    
    // Add point index to error messages for clarity
    result.errors.forEach(error => {
      allErrors.push(`Point ${index + 1} (${point.id || 'unknown'}): ${error}`);
    });
    
    result.warnings.forEach(warning => {
      allWarnings.push(`Point ${index + 1} (${point.id || 'unknown'}): ${warning}`);
    });
    
    // Check for duplicate IDs
    if (point.id) {
      if (seenIds.has(point.id)) {
        allErrors.push(`Duplicate point ID: ${point.id}`);
      } else {
        seenIds.add(point.id);
      }
    }
    
    // Check for duplicate codes
    if (point.code) {
      if (seenCodes.has(point.code)) {
        allErrors.push(`Duplicate point code: ${point.code}`);
      } else {
        seenCodes.add(point.code);
      }
    }
  });
  
  return {
    isValid: allErrors.length === 0,
    errors: allErrors,
    warnings: allWarnings
  };
}

// Helper function to migrate legacy point format to new format
export function migrateLegacyPoint(legacyPoint: any): Partial<AcupressurePoint> {
  const migratedPoint: Partial<AcupressurePoint> = {
    ...legacyPoint,
    technique: legacyPoint.method,
    symptoms: legacyPoint.conditions || [],
    bodyPart: Array.isArray(legacyPoint.bodyPart) ? legacyPoint.bodyPart : [legacyPoint.bodyPart],
    indications: legacyPoint.conditions ? legacyPoint.conditions.map((c: string) => ({
      en: c,
      hi: c // This would need proper translation
    })) : [],
    difficulty: legacyPoint.difficulty?.charAt(0).toUpperCase() + legacyPoint.difficulty?.slice(1),
    pressure: legacyPoint.pressure?.charAt(0).toUpperCase() + legacyPoint.pressure?.slice(1),
    duration: typeof legacyPoint.duration === 'number' ? `${legacyPoint.duration} minutes` : legacyPoint.duration,
    category: 'Classical' as const
  };
  
  return migratedPoint;
}