-- Seed data for demo purposes
-- This file is automatically executed after migrations when running 'supabase db reset'

-- Clear existing data (if any)
DELETE FROM transactions;

-- Insert demo transactions
INSERT INTO transactions (title, amount, category, date, type, created_at) VALUES

-- =====================
-- INCOME (stable + slight variation)
-- =====================
('Salary', 4200.00, 'Income', '2024-05-01', 'income', NOW()),
('Salary', 4200.00, 'Income', '2024-06-01', 'income', NOW()),
('Salary', 4200.00, 'Income', '2024-07-01', 'income', NOW()),
('Salary', 4200.00, 'Income', '2024-08-01', 'income', NOW()),
('Salary', 4200.00, 'Income', '2024-09-01', 'income', NOW()),
('Salary', 4200.00, 'Income', '2024-10-01', 'income', NOW()),
('Salary', 4200.00, 'Income', '2024-11-01', 'income', NOW()),
('Salary', 4200.00, 'Income', '2024-12-01', 'income', NOW()),
('Salary', 4200.00, 'Income', '2025-01-01', 'income', NOW()),
('Salary', 4200.00, 'Income', '2025-02-01', 'income', NOW()),
('Salary', 4200.00, 'Income', '2025-03-01', 'income', NOW()),
('Salary', 4200.00, 'Income', '2025-04-01', 'income', NOW()),

-- Freelance boosts (adds visible spikes)
('Freelance Project', 900.00, 'Income', '2024-07-15', 'income', NOW()),
('Freelance Project', 1200.00, 'Income', '2024-10-20', 'income', NOW()),
('Freelance Project', 1500.00, 'Income', '2025-03-18', 'income', NOW()),

-- =====================
-- EXPENSES (varied, realistic, with spikes)
-- =====================

-- May 2024
('Rent', 1800.00, 'Housing', '2024-05-03', 'expense', NOW()),
('Groceries', 310.00, 'Food', '2024-05-10', 'expense', NOW()),
('Utilities', 145.00, 'Bills', '2024-05-12', 'expense', NOW()),
('Dining Out', 130.00, 'Food', '2024-05-18', 'expense', NOW()),

-- June 2024
('Rent', 1800.00, 'Housing', '2024-06-03', 'expense', NOW()),
('Groceries', 330.00, 'Food', '2024-06-10', 'expense', NOW()),
('Vacation Trip', 900.00, 'Travel', '2024-06-22', 'expense', NOW()),
('Utilities', 150.00, 'Bills', '2024-06-12', 'expense', NOW()),

-- July 2024
('Rent', 1800.00, 'Housing', '2024-07-03', 'expense', NOW()),
('Groceries', 300.00, 'Food', '2024-07-10', 'expense', NOW()),
('New Phone', 1100.00, 'Shopping', '2024-07-18', 'expense', NOW()),
('Utilities', 160.00, 'Bills', '2024-07-12', 'expense', NOW()),

-- August 2024
('Rent', 1800.00, 'Housing', '2024-08-03', 'expense', NOW()),
('Groceries', 320.00, 'Food', '2024-08-10', 'expense', NOW()),
('Entertainment', 200.00, 'Fun', '2024-08-20', 'expense', NOW()),
('Utilities', 155.00, 'Bills', '2024-08-12', 'expense', NOW()),

-- September 2024
('Rent', 1800.00, 'Housing', '2024-09-03', 'expense', NOW()),
('Groceries', 340.00, 'Food', '2024-09-10', 'expense', NOW()),
('Medical Checkup', 250.00, 'Health', '2024-09-14', 'expense', NOW()),
('Utilities', 150.00, 'Bills', '2024-09-12', 'expense', NOW()),

-- October 2024
('Rent', 1800.00, 'Housing', '2024-10-03', 'expense', NOW()),
('Groceries', 330.00, 'Food', '2024-10-10', 'expense', NOW()),
('Laptop Repair', 400.00, 'Tech', '2024-10-18', 'expense', NOW()),
('Utilities', 145.00, 'Bills', '2024-10-12', 'expense', NOW()),

-- November 2024
('Rent', 1800.00, 'Housing', '2024-11-03', 'expense', NOW()),
('Groceries', 350.00, 'Food', '2024-11-10', 'expense', NOW()),
('Black Friday Shopping', 700.00, 'Shopping', '2024-11-25', 'expense', NOW()),
('Utilities', 160.00, 'Bills', '2024-11-12', 'expense', NOW()),

-- December 2024
('Rent', 1800.00, 'Housing', '2024-12-03', 'expense', NOW()),
('Groceries', 360.00, 'Food', '2024-12-10', 'expense', NOW()),
('Holiday Gifts', 900.00, 'Shopping', '2024-12-20', 'expense', NOW()),
('Utilities', 170.00, 'Bills', '2024-12-12', 'expense', NOW()),

-- January 2025
('Rent', 1800.00, 'Housing', '2025-01-03', 'expense', NOW()),
('Groceries', 320.00, 'Food', '2025-01-10', 'expense', NOW()),
('Gym Membership', 50.00, 'Health', '2025-01-15', 'expense', NOW()),
('Utilities', 140.00, 'Bills', '2025-01-12', 'expense', NOW()),

-- February 2025
('Rent', 1800.00, 'Housing', '2025-02-03', 'expense', NOW()),
('Groceries', 340.00, 'Food', '2025-02-10', 'expense', NOW()),
('Vacation Booking', 800.00, 'Travel', '2025-02-20', 'expense', NOW()),
('Utilities', 150.00, 'Bills', '2025-02-12', 'expense', NOW()),

-- March 2025
('Rent', 1800.00, 'Housing', '2025-03-03', 'expense', NOW()),
('Groceries', 310.00, 'Food', '2025-03-10', 'expense', NOW()),
('New Laptop', 1200.00, 'Shopping', '2025-03-15', 'expense', NOW()),
('Utilities', 155.00, 'Bills', '2025-03-12', 'expense', NOW()),

-- April 2025
('Rent', 1800.00, 'Housing', '2025-04-03', 'expense', NOW()),
('Groceries', 340.00, 'Food', '2025-04-10', 'expense', NOW()),
('Concert', 200.00, 'Entertainment', '2025-04-18', 'expense', NOW()),
('Utilities', 150.00, 'Bills', '2025-04-12', 'expense', NOW());
