# Spending Analytics Dashboard

A full-stack web application for tracking, managing, and analyzing personal spending. Built with Next.js, React, TypeScript, Tailwind CSS, and Supabase.

## Demo

![Spending Analytics Dashboard Screenshot](public/screenshot.png)

## Features

- Create, read, update, and delete transactions
- Real-time UI updates after creating, editing, and deleting entries
- Edit transactions via modal interface
- API routes using Next.js App Router
- Supabase integration with PostgreSQL
- Row Level Security (RLS) for secure data access

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Supabase (PostgreSQL)

## Project Structure

src/app/api/transactions/route.ts → GET, POST  
src/app/api/transactions/[id]/route.ts → PUT, DELETE  
src/app/transactions/page.tsx → Main dashboard page  

src/components/ → UI components  
src/lib/supabase.ts → Supabase client  

## API Endpoints

- GET `/api/transactions` → Fetch all transactions  
- POST `/api/transactions` → Create a transaction  
- PUT `/api/transactions/[id]` → Update a transaction  
- DELETE `/api/transactions/[id]` → Delete a transaction  

## Environment Variables

Create a `.env.local` file:

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url  
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key  

## Getting Started

npm install  
npm run dev  

Then open: http://localhost:3000/transactions

## Current Progress

- Transaction creation and deletion  
- Transaction editing via modal  
- Full CRUD API implementation  
- Supabase database integration  
- UI updates synced with backend  

## Planned Features

- Data visualization (charts and analytics)  
- Category-based insights  
- Authentication  
- Improved UI/UX  
- Deployment (Vercel)  

## What I Learned

- Building full-stack apps with Next.js App Router  
- Designing RESTful APIs  
- Working with Supabase and PostgreSQL  
- Handling real-world debugging (RLS, API mismatches)  
- Managing state between frontend and backend  

## License

This project is for educational and portfolio purposes.

## Local Development Setup

This project supports both production and local development environments.

### Option 1: Production Environment (Default)

Use your production Supabase instance by setting environment variables in `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=your_production_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_production_supabase_anon_key
```

### Option 2: Local Development with Docker

For local development, you can run Supabase locally using Docker:

1. **Install Supabase CLI** (already included in devDependencies)

2. **Start local Supabase instance:**
   ```bash
   npm run supabase:start
   ```

3. **Apply database migrations:**
   ```bash
   npm run supabase:reset
   ```

4. **Access Supabase Studio:**
   Open http://localhost:54323 in your browser

5. **Run the development server:**
   ```bash
   npm run dev
   ```

6. **Stop local Supabase when done:**
   ```bash
   npm run supabase:stop
   ```

**Note:** When running locally, the app will automatically use the local Supabase URLs if no environment variables are set.

### Database Schema

The `transactions` table includes:
- `id` (UUID, Primary Key)
- `title` (TEXT, NOT NULL)
- `amount` (DECIMAL, NOT NULL)
- `category` (TEXT, NOT NULL)
- `date` (DATE, NOT NULL)
- `type` (TEXT, NOT NULL) - 'income' or 'expense'
- `created_at` (TIMESTAMP, auto-generated)

### Database Seeding

To populate the database with demo data for showcasing the application:

```bash
npm run supabase:reset
```

This automatically applies the SQL seed file at `supabase/seed.sql`, which populates the database with:
- 22 demo transactions across 9 categories
- Sample income and expense entries with realistic dates
- Data categorized by type for dashboard demonstrations

The demo data includes:
- **Income**: Salary, freelance projects, bonuses
- **Housing**: Rent payments
- **Utilities**: Bills (electricity, internet, phone, water)
- **Food**: Groceries, coffee, restaurant meals
- **Transport**: Gas, ride sharing
- **Entertainment**: Subscriptions, movies, concerts
- **Health**: Gym, doctor visits, pharmacy
- **Shopping**: Electronics, books, clothing

**Prerequisites for Local Development:**
- Docker must be installed and running
- On Linux, start Docker service: `sudo systemctl start docker`

If Docker is not available, you can still develop using the production Supabase instance.
