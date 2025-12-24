-- Add is_free column to acupressure_points table for freemium model
ALTER TABLE acupressure_points
ADD COLUMN IF NOT EXISTS is_free BOOLEAN DEFAULT FALSE;

-- Create index for faster FREE tier queries
CREATE INDEX IF NOT EXISTS idx_points_is_free ON acupressure_points(is_free) WHERE is_free = TRUE;

-- Add comment to document the column
COMMENT ON COLUMN acupressure_points.is_free IS 'TRUE if this point is available in the free tier, FALSE if premium-only';
