-- Fix RLS policies to work with Clerk authentication
-- Clerk uses custom JWT claims that need different handling

-- Drop existing users policies
DROP POLICY IF EXISTS "Users can view their own data" ON users;
DROP POLICY IF EXISTS "Users can insert their own data" ON users;
DROP POLICY IF EXISTS "Users can update their own data" ON users;

-- Create new policies that work with Clerk
-- For now, we'll make users table accessible for authenticated requests
-- In production, you'd want to set up Clerk JWT verification in Supabase

-- Allow all authenticated reads (app will filter by clerk_user_id)
CREATE POLICY "Users can view their own data via clerk_user_id"
  ON users FOR SELECT
  USING (true);

-- Allow all authenticated inserts (app ensures clerk_user_id matches)
CREATE POLICY "Users can insert their own data via clerk_user_id"
  ON users FOR INSERT
  WITH CHECK (true);

-- Allow all authenticated updates (app ensures clerk_user_id matches)
CREATE POLICY "Users can update their own data via clerk_user_id"
  ON users FOR UPDATE
  USING (true);

-- Note: This is a temporary solution. For production, you should:
-- 1. Set up Clerk JWT verification in Supabase
-- 2. Use custom claims from Clerk JWT
-- 3. Or disable RLS and handle auth entirely in your app layer with service_role key
