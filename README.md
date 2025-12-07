# TravelXplore - Tour Booking Platform

A modern, full-stack tour booking application built with Next.js 16, TypeScript, MongoDB Atlas, and Tailwind CSS.

## 🚀 Features Implemented

- ✅ **Home Page** - Hero section with statistics and CTAs
- ✅ **Tours Listing** - Browse tours with filters (difficulty, price, duration)
- ✅ **Tour Details** - Detailed pages with image galleries and booking forms
- ✅ **About Page** - Company information
- ✅ **User Authentication** - Registration, Login, Logout with JWT
- ✅ **MongoDB Integration** - User data persistence with Atlas
- ✅ **Responsive Design** - Mobile-friendly UI
- ✅ **Protected Routes** - Middleware-based authentication
- ✅ **Dynamic Navbar** - Shows user state (logged in/out)

## 🛠️ Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript 5
- **Styling**: Tailwind CSS 4
- **Database**: MongoDB Atlas with Mongoose
- **Authentication**: JWT, bcrypt
- **Deployment Ready**: Vercel-optimized

## ⚙️ Installation

1. Clone and install:

```bash
git clone <your-repo-url>
cd tours-next
npm install
```

2. Create `.env.local`:

```env
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_super_secret_key
JWT_EXPIRES_IN=7d
```

3. Run development:

```bash
npm run dev
```

## 🚀 Deploy to Vercel

1. Push code to GitHub
2. Import to [Vercel](https://vercel.com)
3. Add environment variables (MONGODB_URI, JWT_SECRET, JWT_EXPIRES_IN)
4. Deploy!

## 📁 Key Files

- `/app` - Pages and API routes
- `/components` - Reusable components (Navbar, Footer, TourCard, etc.)
- `/models/User.ts` - MongoDB User schema
- `/lib/mongodb.ts` - Database connection
- `/middleware.ts` - Route protection

## 🔐 Security

- Bcrypt password hashing
- HTTP-only JWT cookies
- Input validation
- Protected API routes

## 🔜 Roadmap

- Payment integration (Stripe)
- User dashboard
- Booking management with database
- Admin panel
- Reviews & ratings

---

**Status**: ✅ MVP Ready for Deployment | 🚧 Active Development

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
