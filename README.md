## Jupeater

Jupeater is a Next.js website for discovering dining options in Jupiter, Florida.
The current implementation includes:

- Homepage with featured restaurants
- Filterable restaurant directory
- Dynamic restaurant detail pages
- Map overview page
- Owner listing submission flow (moderated)
- User reviews flow (moderated)
- Newsletter opt-in capture

## Stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS
- Supabase (Postgres + RLS)

## Local Development

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Supabase Setup

1. Create a Supabase project.
2. Copy `.env.example` to `.env.local` and set:

```bash
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
ADMIN_DASHBOARD_PASSWORD=choose-a-strong-password
ADMIN_SESSION_SALT=long-random-string
```

3. Run SQL in your Supabase SQL editor from:

- `supabase/schema.sql`

This creates tables and baseline RLS policies for:

- `owner_submissions`
- `newsletter_subscribers`
- `restaurant_reviews`

## Moderation Notes

- Owner submissions are inserted with `pending` status.
- Reviews are inserted with `pending` status.
- Only `approved` reviews are displayed publicly.
- Use `/admin` to review and approve/reject pending records.
- The admin dashboard requires `ADMIN_DASHBOARD_PASSWORD` and `ADMIN_SESSION_SALT`.
- The dashboard uses `SUPABASE_SERVICE_ROLE_KEY` on server actions for moderation updates.

## Deploy on Vercel

1. Push this repository to GitHub.
2. Import the project in Vercel.
3. Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in Vercel project settings.
4. Deploy.

## Next Build Steps

- Add authentication for review submissions
- Build admin moderation dashboard
- Expand seed data to 25-50 verified Jupiter listings
- Add structured data and sitemap automation

