# GitHub Pages Deployment Guide

## Automated Deployment Setup Complete

Your Next.js portfolio is now configured for automatic deployment to GitHub Pages.

## What Was Configured

### 1. GitHub Actions Workflow
- File: `.github/workflows/deploy.yml`
- Triggers on every push to `main` branch
- Uses pnpm for package management
- Caches dependencies for faster builds
- Builds and exports static site
- Deploys to GitHub Pages automatically

### 2. Next.js Configuration
- File: `next.config.ts`
- Configured for static export (`output: 'export'`)
- Images optimization disabled for static build
- Base path configured for GitHub Pages subdirectory

### 3. Package Scripts
- `pnpm run dev` - Development server
- `pnpm run build` - Production build
- `pnpm run export` - Build and export static site

## Setup in GitHub Repository

### Step 1: Update Repository Name
Edit `next.config.ts` line 4:
```typescript
const repoName = 'portfolio-main';
```
Change `'portfolio-main'` to match your actual GitHub repository name.

### Step 2: Enable GitHub Pages
1. Push your code to GitHub
2. Go to repository Settings
3. Navigate to "Pages" section (left sidebar)
4. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
5. Save changes

### Step 3: Push to Main Branch
```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```

### Step 4: Monitor Deployment
1. Go to "Actions" tab in your repository
2. Watch the deployment workflow run
3. Wait for green checkmark (success)
4. Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## Automatic Updates

After initial setup, every push to `main` branch will automatically:
1. Trigger GitHub Actions workflow
2. Install dependencies with pnpm
3. Build static site
4. Deploy to GitHub Pages
5. Site updates in 1-3 minutes

## Manual Deployment

You can manually trigger deployment:
1. Go to "Actions" tab
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow" button
4. Select branch and click "Run workflow"

## Local Testing

Test production build locally:
```bash
pnpm run export
```

This creates `out/` directory with static files.

## Troubleshooting

### Build Fails
- Check Actions tab for error logs
- Verify all dependencies in package.json
- Ensure no API routes use dynamic features

### 404 on Assets
- Verify `repoName` in next.config.ts matches repository name
- Check basePath configuration

### Site Not Updating
- Wait 2-3 minutes after successful deployment
- Clear browser cache
- Check GitHub Actions completed successfully

## Important Notes

- API routes are pre-rendered at build time
- Images are unoptimized for static export
- No server-side features available
- All data is bundled at build time


