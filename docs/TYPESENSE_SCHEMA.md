# Typesense Schema Design for AccuHeal Acupressure Points

## Collection Schema

```javascript
{
  "name": "acupressure_points",
  "fields": [
    // Primary identifiers
    {"name": "id", "type": "string"},
    {"name": "code", "type": "string", "facet": true},
    
    // Multilingual names
    {"name": "name_en", "type": "string"},
    {"name": "name_hi", "type": "string"},
    
    // Chinese names for enhanced search
    {"name": "chinese_traditional", "type": "string", "optional": true},
    {"name": "chinese_pinyin", "type": "string", "optional": true},
    {"name": "alternate_names", "type": "string[]", "optional": true},
    
    // Location descriptions
    {"name": "location_en", "type": "string"},
    {"name": "location_hi", "type": "string"},
    
    // Meridian information
    {"name": "meridian_name_en", "type": "string", "facet": true},
    {"name": "meridian_name_hi", "type": "string", "facet": true},
    {"name": "meridian_code", "type": "string", "facet": true},
    {"name": "meridian_element", "type": "string", "facet": true, "optional": true},
    {"name": "meridian_polarity", "type": "string", "facet": true, "optional": true},
    
    // Therapeutic information
    {"name": "symptoms", "type": "string[]"},
    {"name": "indications_en", "type": "string[]"},
    {"name": "indications_hi", "type": "string[]"},
    {"name": "contraindications_en", "type": "string"},
    {"name": "contraindications_hi", "type": "string"},
    
    // Application details
    {"name": "technique_en", "type": "string"},
    {"name": "technique_hi", "type": "string"},
    {"name": "duration", "type": "string"},
    {"name": "pressure", "type": "string", "facet": true},
    
    // Classification
    {"name": "body_parts", "type": "string[]", "facet": true},
    {"name": "difficulty", "type": "string", "facet": true},
    {"name": "category", "type": "string", "facet": true},
    {"name": "popularity", "type": "int32", "optional": true},
    
    // Searchable combined fields for better relevance
    {"name": "all_names", "type": "string"},
    {"name": "all_symptoms", "type": "string"},
    {"name": "all_indications", "type": "string"}
  ],
  "default_sorting_field": "popularity"
}
```

## Key Benefits of This Schema:

### **1. Enhanced Multilingual Search**
- Separate fields for English/Hindi content
- Better relevance scoring per language
- Chinese names searchable via pinyin

### **2. Advanced Faceting**
- Filter by meridian, body part, difficulty
- Filter by element (Wood, Fire, Earth, Metal, Water)
- Filter by pressure level and category

### **3. Optimized Performance**
- Combined search fields reduce query complexity
- Faceted fields enable instant filtering
- Popularity-based default sorting

### **4. Medical Precision**
- Separate symptom and indication arrays
- Structured contraindication text
- WHO-standard point codes as facets

## Search Query Examples:

```javascript
// Basic search with typo tolerance
{
  "q": "headach", // Finds "headache" despite typo
  "query_by": "all_names,all_symptoms,all_indications"
}

// Advanced faceted search
{
  "q": "pain",
  "query_by": "all_symptoms,all_indications",
  "filter_by": "difficulty:Beginner && body_parts:hand"
}

// Meridian-based search
{
  "q": "*",
  "filter_by": "meridian_element:Metal && meridian_polarity:Yang"
}
```

This schema is optimized for AccuHeal's specific needs while maintaining flexibility for future expansion to 361+ points.