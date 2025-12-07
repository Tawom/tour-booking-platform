# Deployment Checklist for TravelXplore

## ✅ Pre-Deployment Checklist

### 1. Environment Variables

- [ ] Create production MongoDB Atlas cluster
- [ ] Generate strong JWT_SECRET (use: `openssl rand -base64 32`)
- [ ] Set JWT_EXPIRES_IN to appropriate value

### 2. Code Review

- [x] Remove console.logs from production code
- [x] Verify all API routes have error handling
- [x] Check all sensitive data is in .env.local (not hardcoded)
- [x] Verify .env.local is in .gitignore

### 3. MongoDB Atlas Setup

- [ ] Create production database cluster
- [ ] Whitelist deployment server IP (or use 0.0.0.0/0 for Vercel)
- [ ] Create database user with appropriate permissions
- [ ] Test connection string

## 🚀 Vercel Deployment Steps

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Ready for deployment - MVP with auth"
git push origin main
```

### Step 2: Import to Vercel

1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Select `tours-next` project

### Step 3: Configure Environment Variables

Add these in Vercel dashboard:

```
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/dbname
JWT_SECRET=your-generated-secret-key
JWT_EXPIRES_IN=7d
```

### Step 4: Deploy

- Click "Deploy"
- Wait for build to complete
- Test the deployed site

## 🧪 Post-Deployment Testing

- [ ] Test home page loads
- [ ] Test tours listing page
- [ ] Test tour detail pages
- [ ] Test user registration
- [ ] Test user login
- [ ] Test logout functionality
- [ ] Test protected routes redirect
- [ ] Test mobile responsiveness

## 📝 For Upwork Portfolio

### Project Description

"Full-stack tour booking platform with user authentication, built with Next.js, TypeScript, MongoDB Atlas, and Tailwind CSS. Features include tour browsing, detailed tour pages, user registration/login with JWT authentication, and responsive design."

### Tech Stack to Highlight

- Next.js 16 (React 19)
- TypeScript
- MongoDB Atlas
- JWT Authentication
- Tailwind CSS
- Responsive Design

### Key Features to Showcase

1. ✅ Modern, responsive UI
2. ✅ Secure user authentication
3. ✅ Database integration
4. ✅ RESTful API design
5. ✅ Protected routes
6. ✅ Form validation

### Screenshots to Take

- Home page
- Tours listing
- Tour detail page
- Registration form
- Login page
- Mobile view

## 🔄 Continue Development

After deployment, you can continue working on:

- Booking database integration
- Payment processing (Stripe)
- User dashboard
- Admin panel
- Email notifications
- Reviews system

### Development Workflow

1. Work on local branch
2. Test locally
3. Push to GitHub
4. Vercel auto-deploys from main branch
5. Test production site

## 🎯 Production URLs

- Live Site: https://your-project.vercel.app
- MongoDB Atlas: https://cloud.mongodb.com
- Vercel Dashboard: https://vercel.com/dashboard

---

**Remember**: Keep `.env.local` secret! Never commit to GitHub.
