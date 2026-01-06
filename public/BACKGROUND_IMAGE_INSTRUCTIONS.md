# Background Image Instructions

## 📸 Add Your Background Image

Your website is now configured to display a fixed background image that stays in place as users scroll.

---

## Step 1: Prepare Your Background Image

### Image Specifications:
- **Format:** JPG, JPEG, or PNG
- **Recommended size:** 1920x1080 pixels or larger (Full HD or higher)
- **Aspect ratio:** 16:9 works best for most screens
- **File size:** Keep under 1MB for fast loading (compress if needed)
- **Content:** Choose an image that complements your professional brand

### Image Suggestions:
- Abstract tech patterns
- Subtle geometric designs
- Professional workspace
- Data visualization backgrounds
- Cybersecurity-themed imagery
- Gradient or minimalist designs

---

## Step 2: Add Your Background Image

1. **Rename your image file to:** `background.jpg`
   - Or `background.png` if PNG format

2. **Place it in this folder:**
   ```
   C:\Users\Imran\Desktop\my personal website\portfolio-website\public\
   ```

3. **If using PNG instead of JPG:**
   - Update the file reference in `src/App.css` line 27
   - Change `url('/background.jpg')` to `url('/background.png')`

---

## Step 3: Adjust the Overlay (Optional)

The background has a dark overlay to ensure text remains readable. You can adjust the opacity:

**In `src/App.css` line 44:**
```css
background: rgba(10, 10, 10, 0.85);
```

- **0.85** = 85% dark overlay (current setting)
- **0.90** = 90% dark overlay (darker, more readable)
- **0.75** = 75% dark overlay (lighter, more visible background)
- **0.95** = 95% dark overlay (very dark, subtle background)

---

## Step 4: Deploy

After adding your background image:

```powershell
cd "C:\Users\Imran\Desktop\my personal website\portfolio-website"
powershell -ExecutionPolicy Bypass -File deploy-portfolio.ps1
```

---

## 🎨 How It Works

### Fixed Background Effect:
- ✅ **`background-attachment: fixed`** - Image stays in place while content scrolls
- ✅ **`background-size: cover`** - Image covers entire viewport
- ✅ **`background-position: center`** - Image centered on screen
- ✅ **Dark overlay** - Ensures text readability

### User Experience:
- Background image remains stationary
- Content scrolls over the fixed background
- Creates a modern parallax-like effect
- Professional and visually appealing

---

## 💡 Tips for Best Results

### Choosing the Right Image:

1. **Contrast:** Choose images with good contrast for text readability
2. **Busy vs. Simple:** Simpler backgrounds work better with the overlay
3. **Professional:** Keep it professional and relevant to GRC/cybersecurity
4. **Color Scheme:** Consider images that complement your cyan accent color

### Image Optimization:

If your image is too large:
- Use online tools like TinyJPG, TinyPNG, or Squoosh
- Target file size: 300-800KB
- Maintain quality while reducing size
- Consider converting to WebP for better compression

### Testing:

1. **Desktop:** Check how it looks on large screens
2. **Mobile:** Verify it works well on mobile devices
3. **Scroll:** Test the fixed effect by scrolling through sections
4. **Readability:** Ensure all text is still readable

---

## 🔍 Preview Locally

Before deploying, preview locally:

```powershell
cd "C:\Users\Imran\Desktop\my personal website\portfolio-website"
npm run dev
```

Then open http://localhost:5173 in your browser and scroll to see the effect.

---

## 🎯 Alternative: Use a Pattern or Gradient

If you don't have a background image, you can use CSS patterns or gradients instead.

### Option 1: Gradient Background
In `src/App.css` line 27, replace with:
```css
background-image: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%);
```

### Option 2: Subtle Pattern
In `src/App.css` line 27, replace with:
```css
background-image: 
  repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0, 212, 255, 0.03) 35px, rgba(0, 212, 255, 0.03) 70px);
```

---

## ❓ Troubleshooting

### Background not showing?
1. Check file name is exactly `background.jpg`
2. Verify it's in the `public/` folder
3. Clear browser cache (Ctrl+Shift+R)
4. Check browser console for errors

### Background too bright/dark?
- Adjust the overlay opacity in `src/App.css` line 44
- Change the `0.85` value (0 = transparent, 1 = fully opaque)

### Background not fixed on mobile?
- Some mobile browsers don't support `background-attachment: fixed`
- This is normal behavior and the background will scroll on mobile

### Image looks stretched or cropped?
- Use `background-size: contain` instead of `cover` (line 28)
- Or adjust `background-position` to `top`, `bottom`, etc. (line 29)

---

## 📁 Current Location

Place your background image here:
```
C:\Users\Imran\Desktop\my personal website\portfolio-website\public\background.jpg
```

---

## 🌐 Example Background Sources

Free high-quality images:
- **Unsplash:** unsplash.com (search: technology, abstract, cybersecurity)
- **Pexels:** pexels.com (search: data, network, tech background)
- **Pixabay:** pixabay.com (search: digital, security, abstract)

Look for:
- Dark-themed images
- Tech/cybersecurity related
- Abstract patterns
- Professional workspace images

---

**Once you add your background image and deploy, it will create a stunning fixed background effect on https://inawaztech.com!** 🎨
