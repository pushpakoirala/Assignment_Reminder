# Installation & Setup Guide

## Quick Start (2 minutes)

### Prerequisites
- Node.js 16+ installed ([Download here](https://nodejs.org/))
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- Text editor (VS Code recommended)

### Installation Steps

```bash
# 1. Navigate to project folder
cd study-reminder-app

# 2. Install dependencies (only once)
npm install

# 3. Start development server
npm run dev
```

The app will automatically open in your browser at `http://localhost:5173`

---

## Development

### Running the App
```bash
npm run dev
```
- Opens browser automatically
- Hot reload enabled (changes update instantly)
- Press `q` or `Ctrl+C` to stop

### Building for Production
```bash
npm run build
```
- Creates optimized files in `dist/` folder
- Minifies CSS and JavaScript
- Ready for deployment

### Preview Production Build
```bash
npm run preview
```
- Tests the production build locally
- Verifies everything works before deployment

---

## Deployment

### Option 1: GitHub Pages (Free)

1. **Create GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Deploy**
   - Go to Settings > Pages
   - Select branch: `main`
   - Select folder: `/dist`
   - Click Save
   - Your app will be live at `https://yourusername.github.io/repo-name`

### Option 2: Netlify (Free)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder
   - Done! You'll get a URL like `https://random-name.netlify.app`

### Option 3: Vercel (Free)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   npm run build
   cd dist
   vercel
   ```

### Option 4: Local Server (Testing)

1. **Using Python**
   ```bash
   npm run build
   cd dist
   python -m http.server 8000
   ```
   Open `http://localhost:8000`

2. **Using Node.js**
   ```bash
   npm install -g http-server
   npm run build
   cd dist
   http-server
   ```

---

## File Structure

```
study-reminder-app/
├── public/               # Static files (copied to dist)
│   ├── service-worker.js
│   ├── icon-192.svg
│   └── icon-512.svg
├── dist/                 # Production build (generated)
│   ├── assets/
│   ├── index.html
│   ├── service-worker.js
│   └── *.svg icons
├── index.html            # Main HTML file
├── style.css             # Styles
├── app.js                # JavaScript logic
├── manifest.json         # PWA config
├── service-worker.js     # PWA offline support
├── icon-192.svg          # App icon (small)
├── icon-512.svg          # App icon (large)
├── package.json          # Dependencies
├── vite.config.js        # Build configuration
├── README.md             # Project overview
├── USAGE.md              # How to use the app
├── PROJECT_STRUCTURE.md  # Detailed documentation
└── INSTALLATION.md       # This file
```

---

## Customization

### Changing Colors

Edit `style.css` lines 13-22:
```css
:root {
    --primary-color: #2563eb;      /* Change this */
    --primary-hover: #1d4ed8;      /* And this */
    --danger-color: #dc2626;       /* Delete button */
    /* ... */
}
```

### Changing App Name

1. **In `index.html`** line 8:
   ```html
   <title>Your App Name</title>
   ```

2. **In `manifest.json`** lines 2-3:
   ```json
   "name": "Your App Name",
   "short_name": "YourApp"
   ```

### Adding New Reminder Types

Edit `index.html` lines 27-29:
```html
<select id="reminderType" required>
    <option value="class">Class Schedule</option>
    <option value="assignment">Assignment Deadline</option>
    <option value="exam">Exam</option>        <!-- Add this -->
    <option value="project">Project Due</option> <!-- Or this -->
</select>
```

Then update `style.css` to add colors for new types:
```css
.type-exam {
    background-color: #fee2e2;
    color: #991b1b;
}

.type-project {
    background-color: #d1fae5;
    color: #065f46;
}
```

---

## Troubleshooting

### Issue: `npm install` fails

**Solution 1:** Clear npm cache
```bash
npm cache clean --force
npm install
```

**Solution 2:** Delete and reinstall
```bash
rm -rf node_modules package-lock.json
npm install
```

**Solution 3:** Use different registry
```bash
npm install --registry=https://registry.npmjs.org/
```

### Issue: Port 5173 already in use

**Solution:** Specify different port
```bash
npm run dev -- --port 3000
```

### Issue: Changes not reflecting

**Solution:**
1. Clear browser cache (Ctrl+Shift+Delete)
2. Hard reload (Ctrl+Shift+R)
3. Stop and restart dev server

### Issue: PWA not installing

**Solution:**
1. Must use HTTPS (or localhost)
2. Check manifest.json loads correctly
3. Check service worker registers (see browser console)
4. Try incognito/private browsing mode

### Issue: Data not saving

**Solution:**
1. Check browser console for errors
2. Ensure localStorage is enabled
3. Check if in private browsing mode (localStorage disabled)
4. Try different browser

---

## Testing Checklist

### Functionality Testing
- [ ] Add class schedule
- [ ] Add assignment deadline
- [ ] View reminders list
- [ ] Delete reminder
- [ ] Refresh page (data persists)
- [ ] Form validation works

### Responsive Testing
- [ ] Mobile view (< 768px)
- [ ] Tablet view (768px - 1023px)
- [ ] Desktop view (>= 1024px)
- [ ] Rotate device orientation

### Browser Testing
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile browsers

### PWA Testing
- [ ] Can install on desktop
- [ ] Can install on mobile
- [ ] Works offline
- [ ] Icon appears correctly

---

## Development Tips

### Using VS Code

**Recommended Extensions:**
- Live Server (alternative to Vite)
- Prettier (code formatting)
- ES7+ React/Redux/React-Native snippets

**Open project:**
```bash
code .
```

### Browser DevTools

**Useful shortcuts:**
- `F12` - Open DevTools
- `Ctrl+Shift+C` - Inspect element
- `Ctrl+Shift+M` - Toggle device toolbar (test responsive)
- `F5` - Reload
- `Ctrl+Shift+R` - Hard reload

**Testing localStorage:**
1. Open DevTools
2. Go to Application tab
3. Storage > localStorage
4. See `studyReminders` key

**Testing PWA:**
1. Open DevTools
2. Go to Application tab
3. Manifest - Check manifest loads
4. Service Workers - Check registration

---

## Performance Optimization

Already optimized:
- ✅ No external dependencies
- ✅ Minified CSS/JS
- ✅ Gzip compression
- ✅ Service Worker caching
- ✅ Small bundle size (~10KB)

Optional improvements:
- Convert SVG icons to PNG for better compatibility
- Add loading states
- Implement lazy loading for large lists
- Add image optimization for future images

---

## Security Notes

Current security features:
- ✅ XSS prevention (HTML escaping)
- ✅ Form validation
- ✅ No external scripts
- ✅ Content Security ready

For production:
1. Always use HTTPS
2. Keep dependencies updated
3. Don't store sensitive data in localStorage
4. Validate on server if adding backend

---

## Support & Resources

### Documentation
- [README.md](README.md) - Project overview
- [USAGE.md](USAGE.md) - How to use the app
- [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) - Technical details

### External Resources
- [MDN Web Docs](https://developer.mozilla.org/) - Web technologies
- [Vite Documentation](https://vitejs.dev/) - Build tool
- [PWA Guide](https://web.dev/progressive-web-apps/) - PWA best practices

### Getting Help
1. Check browser console for errors
2. Read error messages carefully
3. Search error on Stack Overflow
4. Review documentation files

---

## Next Steps

After installation:
1. ✅ Run the app (`npm run dev`)
2. ✅ Test all features
3. ✅ Customize colors and text
4. ✅ Add your own features
5. ✅ Build for production (`npm run build`)
6. ✅ Deploy to hosting service
7. ✅ Test on mobile devices
8. ✅ Share with friends!

---

**Version:** 1.0.0
**Last Updated:** 2024
**Status:** Ready for Production
