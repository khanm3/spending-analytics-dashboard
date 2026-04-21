-- Create transactions table
CREATE TABLE transactions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  category TEXT NOT NULL,
  date DATE NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('income', 'expense')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on created_at for ordering
CREATE INDEX idx_transactions_created_at ON transactions(created_at DESC);

-- Create index on category for filtering
CREATE INDEX idx_transactions_category ON transactions(category);

-- Create index on type for filtering
CREATE INDEX idx_transactions_type ON transactions(type);
