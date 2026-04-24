# Spending Analytics Dashboard

A full-stack web application for tracking, managing, and analyzing personal finances. Features an interactive analytics dashboard with income vs spending views, category-based insights, and monthly financial trend visualization with real-time data updates.

Built with Next.js, React, TypeScript, Tailwind CSS, and Supabase (PostgreSQL).

## Demo

![Spending Analytics Dashboard Screenshot](public/screenshot.png)

## Features

- Full CRUD for transactions
- Real-time UI updates after create, edit, and delete
- Edit transactions via modal interface
- Dashboard with financial summary cards (income, expenses, net)
- Toggleable income vs spending views for focused analysis
- Category-based spending breakdown (pie chart visualization)
- Monthly income vs expense trend chart (time-series analytics)
- RESTful API routes using Next.js App Router
- Supabase integration with PostgreSQL

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Supabase (PostgreSQL)

## Project Structure

| Path | Purpose |
|------|--------|
| src/app/api/transactions/route.ts | GET, POST |
| src/app/api/transactions/[id]/route.ts | PUT, DELETE |
| src/app/transactions/page.tsx | Dashboard page |
| src/components/ | UI components |
| src/lib/supabase.ts | Supabase client |

## API Endpoints

- GET `/api/transactions`
- POST `/api/transactions`
- PUT `/api/transactions/[id]`
- DELETE `/api/transactions/[id]`

## Getting Started

```bash
npm install
npm run dev
```

Then open: [http://localhost:3000/transactions](http://localhost:3000/transactions)

## Environment Setup

This project supports both **production** and **local development** with Supabase.

### Option 1: Production Supabase (default)

Create a `.env.local` file:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Option 2: Local Supabase (Docker)

If environment variables are not set, the app will attempt to use a local Supabase instance.

1. Start local Supabase:

   ```bash
   npm run supabase:start
   ```

2. Apply schema and seed data:

   ```bash
   npm run supabase:reset
   ```

3. Run the app:

   ```bash
   npm run dev
   ```

**Note:** Requires Docker to be installed and running.

## Database Schema

The `transactions` table includes:

* `id` (UUID, Primary Key)
* `title` (TEXT)
* `amount` (DECIMAL)
* `category` (TEXT)
* `date` (DATE)
* `type` (TEXT) — 'income' or 'expense'
* `created_at` (TIMESTAMP)

## Planned Features

* Category filtering for transactions
* User authentication
* Deployment (Vercel)
* Improved mobile responsiveness and UI polish

## License

This project is for educational and portfolio purposes.
