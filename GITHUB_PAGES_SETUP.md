# GitHub Pages Setup Checklist

## Required Steps to Activate GitHub Pages

1. **Go to Repository Settings**
   - Navigate to: https://github.com/4ntonoff/Portfolio/settings

2. **Configure Pages Settings**
   - Scroll down to "GitHub Pages" section
   - Under "Build and deployment":
     - **Source**: Select "GitHub Actions"
     - Do NOT select "Deploy from a branch"

3. **Wait for Deployment**
   - Go to Actions tab: https://github.com/4ntonoff/Portfolio/actions
   - Wait for "Deploy to GitHub Pages" workflow to complete
   - Status should show ✅ green checkmark

4. **Access Your Site**
   - Your site should be live at: https://4ntonoff.github.io/Portfolio/
   - All CSS, JS, and favicon should load correctly

## Troubleshooting

If styles and scripts don't load:

1. Open browser DevTools (F12)
2. Check Network tab for failed requests
3. Check Console tab for error messages
4. Verify asset paths start with `/Portfolio/`

If "GitHub Actions" option not visible in Pages settings:
- Check repository is public
- Check GitHub Actions is enabled in Settings

## Expected Asset Paths

- CSS: `/Portfolio/_next/static/chunks/67da3797540a6152.css`
- JS: `/Portfolio/_next/static/chunks/3aace7e78bb9d154.js`
- Favicon: `/og.png` (served from root)
- Manifest: `/manifest.json` (served from root)

