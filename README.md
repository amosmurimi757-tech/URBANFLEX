# UrbanFlex Wear - Premium E-Commerce Fashion Website

A modern, responsive e-commerce website for selling sweatpants and sweat shorts in Kenya. Fully static and ready for GitHub Pages, Netlify, or Vercel hosting.

## 📋 Overview

**Website:** UrbanFlex Wear  
**Business Focus:** Sweatpants & Sweat Shorts (Kenya)  
**Currency:** KSh (Kenyan Shilling)  
**Phone:** 0740 388 717  
**WhatsApp:** +254 740 388 717

## 🎨 Features

### Design & UX
- ✅ Modern black and gold streetwear aesthetic
- ✅ Fully responsive mobile-first design
- ✅ Smooth animations and hover effects
- ✅ Sticky navigation bar
- ✅ Dark theme optimization for faster loading
- ✅ Premium fashion brand appearance

### Pages
- **Home Page** - Hero banner, featured products, reviews, newsletter
- **Shop Page** - Product catalog with filters, sorting, and search
- **Cart Page** - Persistent cart with localStorage
- **Checkout Page** - Complete order form with M-Pesa integration
- **Contact Page** - Contact form, business hours, FAQ
- **Product Categories** - Sweatpants & Sweat Shorts

### Core Functionality
- 🛍️ **Product Catalog** - 20 sweatpants + dynamic shorts images
- 🔍 **Search & Filter** - Search by name, filter by category/size/price
- 🛒 **Shopping Cart** - Add/remove items, quantity control
- 💾 **localStorage** - Cart persists across page refreshes
- 💳 **M-Pesa Payment** - Manual payment flow with confirmation codes
- 📱 **WhatsApp Integration** - Automatic order messages to WhatsApp
- 📞 **Floating Buttons** - Quick call and WhatsApp chat access
- 📧 **Newsletter** - Email subscription (localStorage-based)
- 📍 **Delivery Zones** - Nairobi and Kenya-wide delivery options

### SEO & Performance
- ✅ Meta tags & OpenGraph tags
- ✅ Schema markup for products & organization
- ✅ Semantic HTML5
- ✅ Optimized images with lazy loading
- ✅ Gzip compression ready
- ✅ Browser caching configured
- ✅ robots.txt & sitemap.xml
- ✅ Canonical URLs
- ✅ Fast page load optimization

## 📁 Project Structure

```
sweat pants/
├── index.html              # Home page
├── shop.html               # Shop catalog
├── cart.html               # Shopping cart
├── checkout.html           # Checkout process
├── contact.html            # Contact & support
├── sitemap.xml             # SEO sitemap
├── robots.txt              # Search engine directives
├── .htaccess               # Server configuration
├── assets/
│   ├── css/
│   │   └── main.css        # Complete stylesheet
│   ├── js/
│   │   ├── app.js          # Main app logic
│   │   ├── shop.js         # Shop page filters
│   │   ├── cart.js         # Cart management
│   │   └── checkout.js     # Checkout process
│   └── images/             # Product images (sweat1-20.jpg, short1-15.jpg)
└── README.md               # This file
```

## 🚀 Installation & Setup

### Option 1: Local Testing

1. **Download/Clone the files**
   ```bash
   git clone https://github.com/yourusername/urbanflexwear.git
   cd urbanflexwear
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js
   npx http-server
   ```

3. **Access the site**
   - Open `http://localhost:8000` in your browser

### Option 2: GitHub Pages Deployment

1. **Create a GitHub repository**
   - Go to https://github.com/new
   - Repository name: `urbanflexwear` (or similar)
   - Make it public

2. **Upload files**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - UrbanFlex Wear website"
   git branch -M main
   git remote add origin https://github.com/yourusername/urbanflexwear.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "GitHub Pages"
   - Source: Select `main` branch
   - Click Save
   - Site will be available at: `https://yourusername.github.io/urbanflexwear`

### Option 3: Netlify Deployment

1. **Create Netlify account** - https://netlify.com

2. **Connect repository or drag & drop**
   - Option A: Connect GitHub repo
   - Option B: Drag and drop the folder

3. **Configure**
   - Build command: (leave empty - static site)
   - Publish directory: (leave empty - root)

4. **Deploy** - Automatic!

### Option 4: Vercel Deployment

1. **Create Vercel account** - https://vercel.com

2. **Import project**
   - Click "New Project"
   - Select GitHub repo or upload files
   - Click Deploy

3. **Site goes live automatically!**

## 💳 M-Pesa Integration

### Payment Flow

1. **At Checkout:**
   - Customer enters M-Pesa confirmation code
   - System stores order with "pending" status

2. **Manual Process:**
   - Customer receives order summary via WhatsApp
   - Contains till number: `254740388717`
   - Customer pays via M-Pesa
   - Customer sends confirmation code

3. **Automatic WhatsApp Message:**
   - Order details automatically sent to WhatsApp
   - Includes items, sizes, delivery info, total amount
   - Customer confirmation code recorded

## 🖼️ Product Images

### Adding Images

1. **Sweatpants:** Place images in `assets/images/`
   - File names: `sweat1.jpg`, `sweat2.jpg`, ..., `sweat20.jpg`
   - Recommended size: 600x600px (square)
   - Format: JPG or PNG

2. **Shorts:** Place images in `assets/images/`
   - File names: `short1.jpg`, `short2.jpg`, ..., `short15.jpg`
   - Recommended size: 600x600px (square)
   - Format: JPG or PNG

### Image Optimization

```bash
# Using ImageMagick
mogrify -resize 600x600 -quality 85 *.jpg

# Using ffmpeg
ffmpeg -i input.jpg -vf scale=600:600 output.jpg
```

## 🔐 Security

- No backend server (completely static)
- No sensitive data stored on server
- M-Pesa payments handled manually
- localStorage only (client-side)
- No API keys exposed
- HTTPS recommended

## 📊 Analytics

### Google Search Console
1. Go to https://search.google.com/search-console
2. Add your domain
3. Verify ownership
4. Submit sitemap.xml

### Google Analytics
Add to `<head>` of HTML pages:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_ID');
</script>
```

## 📱 Mobile Optimization

- Fully responsive on all devices
- Touch-friendly buttons (44px minimum)
- Hamburger menu for mobile navigation
- Optimized font sizes for readability
- Fast loading on slower connections

## 🎯 SEO Best Practices

### Meta Tags
- ✅ Title tags (50-60 characters)
- ✅ Meta descriptions (150-160 characters)
- ✅ Keywords targeting local searches
- ✅ Open Graph tags for social sharing

### Technical SEO
- ✅ Semantic HTML5
- ✅ Fast page load (<3s)
- ✅ Mobile-friendly
- ✅ Structured data (JSON-LD)
- ✅ Canonical URLs

### Content
- ✅ Unique product descriptions
- ✅ Alt text for all images
- ✅ Internal linking
- ✅ Keyword optimization

## 💰 Pricing

Products are randomly priced at:
- KSh 349
- KSh 369
- KSh 399
- KSh 449

Customize in `assets/js/app.js`:
```javascript
const prices = [349, 369, 399, 449];
```

## 🎨 Customization

### Colors
Edit CSS variables in `assets/css/main.css`:
```css
:root {
    --primary-black: #1a1a1a;
    --accent-gold: #d4af37;
    /* ... more colors ... */
}
```

### Business Info
Update in all HTML files:
- Phone: `0740388717`
- WhatsApp: `254740388717`
- Store name: `UrbanFlex Wear`

### Products
Edit in `assets/js/app.js`:
```javascript
function loadProducts() {
  // Customize product names, descriptions, prices
}
```

## 🚀 Performance Tips

1. **Optimize Images**
   - Use WebP format
   - Compress JPGs to 85% quality
   - Use CDN for serving images

2. **Enable Caching**
   - Cache expiry for images: 1 year
   - Cache expiry for HTML: 1 hour
   - Browser caching enabled

3. **Minimize CSS/JS**
   - Already included in main.css
   - Minify for production

4. **Lazy Loading**
   - Product images use lazy loading
   - Faster initial page load

## 📞 Support

**Phone:** 0740 388 717  
**WhatsApp:** https://wa.me/254740388717  
**Email:** info@urbanflexwear.com

## 📄 License

© 2026 UrbanFlex Wear. All rights reserved.

## 🤝 Contributing

To update the website:
1. Make changes locally
2. Test thoroughly
3. Commit changes
4. Push to GitHub/Netlify/Vercel

## ✅ Checklist for Launch

- [ ] Add product images (sweat1-20.jpg, short1-15.jpg)
- [ ] Update business contact info
- [ ] Test on mobile devices
- [ ] Test cart functionality
- [ ] Test checkout process
- [ ] Submit to Google Search Console
- [ ] Setup Google Analytics
- [ ] Configure domain name
- [ ] Enable HTTPS
- [ ] Test all links and forms
- [ ] Get WhatsApp integration working
- [ ] Monitor orders in localStorage

## 🎉 You're Ready!

Your UrbanFlex Wear website is ready to launch. Start selling stylish sweatpants and shorts today!

For questions or updates, contact: 0740 388 717
