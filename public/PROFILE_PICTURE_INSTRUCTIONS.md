# Profile Picture Instructions

## 📸 Add Your Profile Picture

To add your profile picture to the website:

### Step 1: Prepare Your Image

1. **Choose a professional photo:**
   - Headshot or professional portrait
   - Clear, well-lit image
   - Professional attire recommended
   - Neutral or professional background

2. **Image specifications:**
   - **Format:** JPG, JPEG, or PNG
   - **Recommended size:** At least 600x600 pixels (square)
   - **File size:** Keep under 500KB for fast loading
   - **Aspect ratio:** Square (1:1) works best

### Step 2: Name and Place Your Image

1. **Rename your image file to:** `profile-picture.jpg`
   - Or `profile-picture.png` if PNG format

2. **Place it in this folder:**
   ```
   C:\Users\Imran\Desktop\my personal website\portfolio-website\public\
   ```

3. **If using PNG instead of JPG:**
   - Update the file reference in `src/App.jsx` line 85
   - Change `/profile-picture.jpg` to `/profile-picture.png`

### Step 3: Deploy

After adding your image, deploy the update:

```powershell
cd "C:\Users\Imran\Desktop\my personal website\portfolio-website"
powershell -ExecutionPolicy Bypass -File deploy-portfolio.ps1
```

---

## 🎨 Layout Details

Your profile picture will appear:
- **Desktop:** On the LEFT side of the hero section
- **Mobile:** ABOVE your name (centered)

### Styling:
- ✅ Circular shape (300px diameter on desktop, 200px on mobile)
- ✅ Cyan border matching your site theme
- ✅ Subtle shadow effect
- ✅ Hover animation (slight zoom)

---

## 💡 Tips for Best Results

### Photo Quality:
- Use a high-resolution image
- Ensure good lighting
- Face should be clearly visible
- Professional expression

### Editing (Optional):
- Crop to square format before uploading
- Adjust brightness/contrast if needed
- Remove distracting backgrounds
- Consider using a solid color background

### File Optimization:
If your image is too large, you can compress it:
- Use online tools like TinyPNG or Squoosh
- Target file size: 100-300KB
- Maintain quality while reducing size

---

## 🔍 Preview Locally

Before deploying, you can preview locally:

```powershell
cd "C:\Users\Imran\Desktop\my personal website\portfolio-website"
npm run dev
```

Then open http://localhost:5173 in your browser.

---

## ❓ Troubleshooting

### Image not showing?
1. Check file name is exactly `profile-picture.jpg`
2. Verify it's in the `public/` folder
3. Clear browser cache (Ctrl+Shift+R)
4. Check browser console for errors

### Image looks distorted?
- Use a square image (same width and height)
- The CSS will crop it to a circle automatically

### Image too large/small?
- Adjust the size in `src/App.css` lines 147-148
- Change `width` and `height` values

---

## 📁 Current Location

Place your image here:
```
C:\Users\Imran\Desktop\my personal website\portfolio-website\public\profile-picture.jpg
```

---

**Once you add your image and deploy, it will appear on your live site at https://inawaztech.com!** 📸
