-- Enable Realtime for users table
-- This allows the SubscriptionContext to receive real-time updates
-- when user subscription status changes (e.g., after payment)

-- Enable replica identity for realtime to work
ALTER TABLE users REPLICA IDENTITY FULL;

-- Add table to realtime publication
-- Note: In Supabase dashboard, you also need to enable Realtime for the 'users' table
-- Go to Database > Replication > enable 'users' table

-- Grant necessary permissions for realtime
GRANT SELECT ON users TO authenticated;
GRANT SELECT ON users TO anon;
