-- Seed data for demo purposes
-- This file is automatically executed after migrations when running 'supabase db reset'

-- Clear existing data (if any)
DELETE FROM transactions;

-- Insert demo transactions
INSERT INTO transactions (id, title, amount, category, date, type, created_at) VALUES
  ('550e8400-e29b-41d4-a716-446655440001', 'Monthly Salary', 5000, 'Income', '2026-04-21', 'income', NOW()),
  ('550e8400-e29b-41d4-a716-446655440002', 'Freelance Project', 1200, 'Income', '2026-04-20', 'income', NOW() - INTERVAL '1 day'),
  ('550e8400-e29b-41d4-a716-446655440003', 'Bonus Payment', 800, 'Income', '2026-04-19', 'income', NOW() - INTERVAL '2 days'),
  
  ('550e8400-e29b-41d4-a716-446655440010', 'Rent Payment', 1500, 'Housing', '2026-04-15', 'expense', NOW() - INTERVAL '6 days'),
  ('550e8400-e29b-41d4-a716-446655440011', 'Electricity Bill', 120, 'Utilities', '2026-04-18', 'expense', NOW() - INTERVAL '3 days'),
  ('550e8400-e29b-41d4-a716-446655440012', 'Internet Bill', 60, 'Utilities', '2026-04-18', 'expense', NOW() - INTERVAL '3 days'),
  ('550e8400-e29b-41d4-a716-446655440013', 'Grocery Shopping', 145.75, 'Food', '2026-04-21', 'expense', NOW()),
  ('550e8400-e29b-41d4-a716-446655440014', 'Coffee & Lunch', 28.50, 'Food', '2026-04-21', 'expense', NOW()),
  ('550e8400-e29b-41d4-a716-446655440015', 'Gas', 65.00, 'Transport', '2026-04-20', 'expense', NOW() - INTERVAL '1 day'),
  ('550e8400-e29b-41d4-a716-446655440016', 'Uber Ride', 18.75, 'Transport', '2026-04-19', 'expense', NOW() - INTERVAL '2 days'),
  
  ('550e8400-e29b-41d4-a716-446655440020', 'Netflix Subscription', 15.99, 'Entertainment', '2026-04-01', 'expense', NOW() - INTERVAL '20 days'),
  ('550e8400-e29b-41d4-a716-446655440021', 'Movie Tickets', 35.00, 'Entertainment', '2026-04-17', 'expense', NOW() - INTERVAL '4 days'),
  ('550e8400-e29b-41d4-a716-446655440022', 'Concert Tickets', 120.00, 'Entertainment', '2026-04-16', 'expense', NOW() - INTERVAL '5 days'),
  
  ('550e8400-e29b-41d4-a716-446655440030', 'Gym Membership', 50, 'Health', '2026-04-01', 'expense', NOW() - INTERVAL '20 days'),
  ('550e8400-e29b-41d4-a716-446655440031', 'Doctor Visit', 150, 'Health', '2026-04-14', 'expense', NOW() - INTERVAL '7 days'),
  ('550e8400-e29b-41d4-a716-446655440032', 'Pharmacy', 45.25, 'Health', '2026-04-12', 'expense', NOW() - INTERVAL '9 days'),
  
  ('550e8400-e29b-41d4-a716-446655440040', 'New Laptop', 1200, 'Shopping', '2026-04-10', 'expense', NOW() - INTERVAL '11 days'),
  ('550e8400-e29b-41d4-a716-446655440041', 'Book Purchase', 35.00, 'Shopping', '2026-04-18', 'expense', NOW() - INTERVAL '3 days'),
  ('550e8400-e29b-41d4-a716-446655440042', 'Clothing', 89.99, 'Shopping', '2026-04-21', 'expense', NOW()),
  
  ('550e8400-e29b-41d4-a716-446655440050', 'Phone Bill', 75, 'Utilities', '2026-04-15', 'expense', NOW() - INTERVAL '6 days'),
  ('550e8400-e29b-41d4-a716-446655440051', 'Water Bill', 45, 'Utilities', '2026-04-16', 'expense', NOW() - INTERVAL '5 days');
