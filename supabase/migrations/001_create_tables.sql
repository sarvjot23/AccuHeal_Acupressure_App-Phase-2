-- Create acupressure_points table
CREATE TABLE IF NOT EXISTS acupressure_points (
  id TEXT PRIMARY KEY,
  code TEXT NOT NULL UNIQUE,
  
  -- Multilingual names
  name_en TEXT NOT NULL,
  name_hi TEXT NOT NULL,
  chinese_traditional TEXT,
  chinese_pinyin TEXT,
  alternate_names_en TEXT[],
  alternate_names_hi TEXT[],
  
  -- Location descriptions
  location_en TEXT NOT NULL,
  location_hi TEXT NOT NULL,
  
  -- Meridian information
  meridian_name_en TEXT NOT NULL,
  meridian_name_hi TEXT NOT NULL,
  meridian_code TEXT NOT NULL,
  meridian_element TEXT,
  meridian_polarity TEXT,
  
  -- Classification and body parts
  body_parts TEXT[] NOT NULL,
  difficulty TEXT NOT NULL CHECK (difficulty IN ('Beginner', 'Intermediate', 'Advanced')),
  pressure TEXT NOT NULL,
  duration TEXT NOT NULL,
  category TEXT NOT NULL,
  popularity INTEGER DEFAULT 3 CHECK (popularity >= 1 AND popularity <= 5),
  
  -- Therapeutic information
  symptoms TEXT[] NOT NULL DEFAULT '{}',
  indications_en TEXT[] NOT NULL DEFAULT '{}',
  indications_hi TEXT[] NOT NULL DEFAULT '{}',
  contraindications_en TEXT NOT NULL DEFAULT '',
  contraindications_hi TEXT NOT NULL DEFAULT '',
  
  -- Technique instructions
  technique_en TEXT NOT NULL,
  technique_hi TEXT NOT NULL,
  
  -- Image storage
  image_url TEXT,
  
  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  clerk_user_id TEXT NOT NULL UNIQUE,
  email TEXT,
  
  -- Subscription information
  is_premium BOOLEAN DEFAULT FALSE,
  subscription_status TEXT DEFAULT 'none' CHECK (
    subscription_status IN ('active', 'canceled', 'past_due', 'trialing', 'none')
  ),
  subscription_expires_at TIMESTAMPTZ,
  
  -- Stripe integration
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT,
  
  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX idx_points_code ON acupressure_points(code);
CREATE INDEX idx_points_difficulty ON acupressure_points(difficulty);
CREATE INDEX idx_points_body_parts ON acupressure_points USING GIN(body_parts);
CREATE INDEX idx_points_symptoms ON acupressure_points USING GIN(symptoms);
CREATE INDEX idx_points_meridian_code ON acupressure_points(meridian_code);
CREATE INDEX idx_points_category ON acupressure_points(category);
CREATE INDEX idx_points_popularity ON acupressure_points(popularity DESC);

CREATE INDEX idx_users_clerk_id ON users(clerk_user_id);
CREATE INDEX idx_users_subscription_status ON users(subscription_status);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic updated_at updates
CREATE TRIGGER update_acupressure_points_updated_at
  BEFORE UPDATE ON acupressure_points
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_users_updated_at
  BEFORE UPDATE ON users
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security
ALTER TABLE acupressure_points ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Acupressure points policies (public read, authenticated write)
CREATE POLICY "Acupressure points are viewable by everyone"
  ON acupressure_points FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can insert acupressure points"
  ON acupressure_points FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update acupressure points"
  ON acupressure_points FOR UPDATE
  USING (auth.role() = 'authenticated');

-- Users policies (users can only read/update their own data)
CREATE POLICY "Users can view their own data"
  ON users FOR SELECT
  USING (clerk_user_id = auth.jwt() ->> 'sub');

CREATE POLICY "Users can insert their own data"
  ON users FOR INSERT
  WITH CHECK (clerk_user_id = auth.jwt() ->> 'sub');

CREATE POLICY "Users can update their own data"
  ON users FOR UPDATE
  USING (clerk_user_id = auth.jwt() ->> 'sub');

-- Create storage bucket for acupressure point images
INSERT INTO storage.buckets (id, name, public)
VALUES ('acupressure-images', 'acupressure-images', true)
ON CONFLICT DO NOTHING;

-- Storage policies for acupressure images (public read, authenticated write)
CREATE POLICY "Acupressure images are publicly accessible"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'acupressure-images');

CREATE POLICY "Authenticated users can upload acupressure images"
  ON storage.objects FOR INSERT
  WITH CHECK (
    bucket_id = 'acupressure-images' AND
    auth.role() = 'authenticated'
  );

CREATE POLICY "Authenticated users can update acupressure images"
  ON storage.objects FOR UPDATE
  USING (
    bucket_id = 'acupressure-images' AND
    auth.role() = 'authenticated'
  );
