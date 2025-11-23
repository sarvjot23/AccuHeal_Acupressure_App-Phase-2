-- Add favorites table
CREATE TABLE IF NOT EXISTS favorites (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  point_id TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, point_id)
);

-- Add session history table  
CREATE TABLE IF NOT EXISTS session_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  point_id TEXT NOT NULL,
  duration_seconds INTEGER,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add reminders table
CREATE TABLE IF NOT EXISTS reminders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  point_id TEXT NULL,  -- Can be NULL for general reminders
  title TEXT NOT NULL,
  message TEXT,
  scheduled_time TIMESTAMPTZ NOT NULL,
  is_active BOOLEAN DEFAULT TRUE,
  repeat_pattern TEXT CHECK (repeat_pattern IN ('daily', 'weekly', 'monthly') OR repeat_pattern IS NULL),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add indexes for performance
CREATE INDEX IF NOT EXISTS idx_favorites_user_id ON favorites(user_id);
CREATE INDEX IF NOT EXISTS idx_session_history_user_id ON session_history(user_id);
CREATE INDEX IF NOT EXISTS idx_session_history_created ON session_history(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_reminders_user_id ON reminders(user_id);
CREATE INDEX IF NOT EXISTS idx_reminders_scheduled ON reminders(scheduled_time);

-- Row Level Security Policies
ALTER TABLE favorites ENABLE ROW LEVEL SECURITY;
ALTER TABLE session_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE reminders ENABLE ROW LEVEL SECURITY;

-- Note: RLS policies disabled for development
-- In production, enable proper RLS policies using Supabase dashboard
