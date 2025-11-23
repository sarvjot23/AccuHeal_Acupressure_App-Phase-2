-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS pg_trgm;  -- Trigram similarity for fuzzy search
CREATE EXTENSION IF NOT EXISTS unaccent; -- Remove accents for better matching

-- Create combined search columns for English and Hindi
-- Note: Using regular columns with triggers instead of GENERATED columns
-- because array_to_string is not immutable in PostgreSQL

ALTER TABLE acupressure_points
ADD COLUMN IF NOT EXISTS search_vector_en tsvector;

ALTER TABLE acupressure_points
ADD COLUMN IF NOT EXISTS search_vector_hi tsvector;

-- Create function to update search vectors
CREATE OR REPLACE FUNCTION update_acupressure_points_search_vectors()
RETURNS TRIGGER AS $$
BEGIN
  -- Update English search vector
  NEW.search_vector_en :=
    setweight(to_tsvector('english', coalesce(NEW.name_en, '')), 'A') ||
    setweight(to_tsvector('english', coalesce(NEW.code, '')), 'A') ||
    setweight(to_tsvector('english', coalesce(NEW.location_en, '')), 'B') ||
    setweight(to_tsvector('english', coalesce(array_to_string(NEW.symptoms, ' '), '')), 'B') ||
    setweight(to_tsvector('english', coalesce(array_to_string(NEW.indications_en, ' '), '')), 'C');

  -- Update Hindi search vector
  NEW.search_vector_hi :=
    setweight(to_tsvector('simple', coalesce(NEW.name_hi, '')), 'A') ||
    setweight(to_tsvector('simple', coalesce(NEW.location_hi, '')), 'B') ||
    setweight(to_tsvector('simple', coalesce(array_to_string(NEW.indications_hi, ' '), '')), 'C');

  RETURN NEW;
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- Create trigger to automatically update search vectors on INSERT or UPDATE
DROP TRIGGER IF EXISTS trigger_update_search_vectors ON acupressure_points;
CREATE TRIGGER trigger_update_search_vectors
  BEFORE INSERT OR UPDATE ON acupressure_points
  FOR EACH ROW
  EXECUTE FUNCTION update_acupressure_points_search_vectors();

-- Update existing rows with search vectors
UPDATE acupressure_points SET search_vector_en = (
  setweight(to_tsvector('english', coalesce(name_en, '')), 'A') ||
  setweight(to_tsvector('english', coalesce(code, '')), 'A') ||
  setweight(to_tsvector('english', coalesce(location_en, '')), 'B') ||
  setweight(to_tsvector('english', coalesce(array_to_string(symptoms, ' '), '')), 'B') ||
  setweight(to_tsvector('english', coalesce(array_to_string(indications_en, ' '), '')), 'C')
);

UPDATE acupressure_points SET search_vector_hi = (
  setweight(to_tsvector('simple', coalesce(name_hi, '')), 'A') ||
  setweight(to_tsvector('simple', coalesce(location_hi, '')), 'B') ||
  setweight(to_tsvector('simple', coalesce(array_to_string(indications_hi, ' '), '')), 'C')
);

-- Create GIN indexes for fast search
CREATE INDEX IF NOT EXISTS idx_points_search_en ON acupressure_points USING gin(search_vector_en);
CREATE INDEX IF NOT EXISTS idx_points_search_hi ON acupressure_points USING gin(search_vector_hi);

-- Create trigram indexes for fuzzy/typo-tolerant search
CREATE INDEX IF NOT EXISTS idx_points_name_en_trgm ON acupressure_points USING gin(name_en gin_trgm_ops);
CREATE INDEX IF NOT EXISTS idx_points_name_hi_trgm ON acupressure_points USING gin(name_hi gin_trgm_ops);

-- Create composite index for filters
CREATE INDEX IF NOT EXISTS idx_points_filters ON acupressure_points(difficulty, category);
CREATE INDEX IF NOT EXISTS idx_points_body_parts ON acupressure_points USING gin(body_parts);

-- Add comments
COMMENT ON COLUMN acupressure_points.search_vector_en IS 'Full-text search vector for English content';
COMMENT ON COLUMN acupressure_points.search_vector_hi IS 'Full-text search vector for Hindi content';
