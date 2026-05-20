# UrbanFlex Wear - Website Architecture & Sitemap

```
HOME PAGE (index.html)
│
├─ Navigation Bar (Sticky)
│  ├─ Logo
│  ├─ Nav Links → Home, Shop, Sweatpants, Shorts, Contact
│  ├─ Search Bar
│  ├─ Cart Icon (with counter badge)
│  ├─ Wishlist Icon
│  └─ Account Icon
│
├─ Hero Section
│  ├─ Title & Tagline
│  └─ Buttons → Shop Now, Explore Collection
│
├─ Featured Sweatpants Section (4 products)
│  └─ Product Cards
│     ├─ Image (with lazy loading)
│     ├─ Badge (In Stock/Discount)
│     ├─ Name & Category
│     ├─ Price (original & current)
│     ├─ Rating (stars)
│     ├─ Size Selector
│     ├─ Description
│     └─ Buttons → Add Cart, Buy Now
│
├─ Trending Sweat Shorts Section (4 products)
│  └─ Product Cards (same as above)
│
├─ Best Sellers Section (4 products)
│  └─ Featured Banner + Product Cards
│
├─ New Arrivals Section (4 products)
│  └─ Product Cards
│
├─ Customer Reviews Section
│  └─ 3 Review Cards with testimonials
│
├─ Why Choose Us Section (6 benefits)
│  ├─ Fast Delivery 🚚
│  ├─ Affordable Prices 💰
│  ├─ Trendy Styles ✨
│  ├─ Easy Payment 💳
│  ├─ WhatsApp Support 📱
│  └─ Quality Guaranteed 👕
│
├─ Newsletter Section
│  └─ Email Input + Subscribe Button
│
├─ Promo Banner
│  └─ Limited Time Offer (with CTA)
│
├─ Footer
│  ├─ About UrbanFlex
│  ├─ Social Links
│  ├─ Quick Links
│  ├─ Support Links
│  └─ Contact Info
│
└─ Floating Buttons
   ├─ WhatsApp Chat 💬
   └─ Call Now 📞
```

---

```
SHOP PAGE (shop.html)
│
├─ Navigation Bar (same as home)
│
├─ Page Header
│  └─ Title & Subheading
│
├─ Shop Content Grid
│  │
│  ├─ FILTERS SIDEBAR (sticky)
│  │  ├─ Category Filter
│  │  │  ├─ All Products
│  │  │  ├─ Sweatpants
│  │  │  └─ Sweat Shorts
│  │  │
│  │  ├─ Price Filter
│  │  │  ├─ KSh 300-399
│  │  │  ├─ KSh 400-499
│  │  │  └─ KSh 500+
│  │  │
│  │  ├─ Size Filter
│  │  │  ├─ S (Small)
│  │  │  ├─ M (Medium)
│  │  │  ├─ L (Large)
│  │  │  └─ XL (Extra Large)
│  │  │
│  │  ├─ Stock Filter
│  │  │  └─ In Stock Only
│  │  │
│  │  ├─ Discount Filter
│  │  │  └─ Discounted Items
│  │  │
│  │  └─ Reset Filters Button
│  │
│  └─ PRODUCTS GRID (dynamic)
│     ├─ Sort Dropdown (Newest, Price Low-High, Price High-Low, Popular, Top Rated)
│     ├─ Product Count Display
│     └─ Product Cards Grid (responsive 2-4 columns)
│        └─ Product Cards (same structure as home page)
│
├─ Newsletter Section
│
├─ Footer
│
└─ Floating Buttons
```

---

```
CART PAGE (cart.html)
│
├─ Navigation Bar
│
├─ Page Header
│
├─ Cart Container (2 column layout)
│  │
│  ├─ CART ITEMS SECTION (left)
│  │  │
│  │  └─ IF ITEMS IN CART:
│  │     └─ Cart Item (repeating)
│  │        ├─ Product Image
│  │        ├─ Product Details
│  │        │  ├─ Name
│  │        │  ├─ Size
│  │        │  └─ Price
│  │        └─ Quantity Controls
│  │           ├─ Minus Button
│  │           ├─ Quantity Input
│  │           ├─ Plus Button
│  │           └─ Delete Button
│  │
│  │  OR IF EMPTY CART:
│  │     ├─ Empty Cart Icon
│  │     ├─ "Your cart is empty" message
│  │     └─ "Continue Shopping" Button
│  │
│  └─ ORDER SUMMARY SIDEBAR (right, sticky)
│     ├─ Subtotal (KSh)
│     ├─ Tax 16% (KSh)
│     ├─ Delivery Fee (KSh 200)
│     ├─ TOTAL (KSh) - highlighted
│     ├─ Proceed to Checkout Button
│     ├─ Continue Shopping Button
│     └─ Info Box (Free delivery info, SSL badge)
│
├─ Footer
│
└─ Floating Buttons
```

---

```
CHECKOUT PAGE (checkout.html)
│
├─ Navigation Bar
│
├─ Page Header
│
├─ Checkout Container (2 column layout)
│  │
│  ├─ CHECKOUT FORM SECTION (left)
│  │  │
│  │  ├─ CUSTOMER INFORMATION SECTION
│  │  │  ├─ Full Name *
│  │  │  ├─ Email Address *
│  │  │  └─ Phone Number *
│  │  │
│  │  ├─ DELIVERY INFORMATION SECTION
│  │  │  ├─ Delivery Location * (Dropdown)
│  │  │  │  ├─ CBD - Nairobi (KSh 200)
│  │  │  │  ├─ Westlands (KSh 300)
│  │  │  │  ├─ Karen (KSh 400)
│  │  │  │  ├─ Thika Road (KSh 500)
│  │  │  │  ├─ Machakos (KSh 600)
│  │  │  │  ├─ Mombasa (KSh 500)
│  │  │  │  ├─ Kisumu (KSh 600)
│  │  │  │  └─ Other (Contact us)
│  │  │  ├─ Delivery Address *
│  │  │  └─ Delivery Instructions (optional)
│  │  │
│  │  ├─ MAP DISPLAY SECTION
│  │  │  └─ Map Placeholder with instructions
│  │  │
│  │  ├─ PAYMENT METHOD SECTION
│  │  │  ├─ M-Pesa (Recommended) Radio
│  │  │  │
│  │  │  └─ M-PESA INSTRUCTIONS SECTION
│  │  │     ├─ Till Number: 254740388717
│  │  │     ├─ Step-by-step instructions
│  │  │     └─ Confirmation Code Input *
│  │  │
│  │  ├─ TERMS & CONDITIONS SECTION
│  │  │  └─ Checkbox to agree
│  │  │
│  │  └─ Place Order Button
│  │
│  └─ ORDER SUMMARY SIDEBAR (right, sticky)
│     ├─ Items List (product name, size, qty, price)
│     ├─ Subtotal
│     ├─ Tax (16%)
│     ├─ Delivery Fee
│     ├─ TOTAL (highlighted in gold)
│     ├─ Security Info Box
│     ├─ Support Info Box
│     └─ Back to Cart Link
│
├─ Footer
│
└─ Floating Buttons
```

---

```
CONTACT PAGE (contact.html)
│
├─ Navigation Bar
│
├─ Page Header
│
├─ Contact Container (2 column layout)
│  │
│  ├─ CONTACT INFORMATION SECTION (left)
│  │  ├─ Introduction text
│  │  │
│  │  ├─ Phone Card
│  │  │  ├─ Phone Icon
│  │  │  ├─ +254 740 388 717 (clickable link)
│  │  │  └─ Hours: Mon-Sun, 8 AM - 8 PM
│  │  │
│  │  ├─ WhatsApp Card
│  │  │  ├─ WhatsApp Icon
│  │  │  ├─ +254 740 388 717 (WhatsApp link)
│  │  │  └─ "Chat with us instantly"
│  │  │
│  │  ├─ Email Card
│  │  │  ├─ Email Icon
│  │  │  ├─ info@urbanflexwear.com (mailto link)
│  │  │  └─ "Respond within 24 hours"
│  │  │
│  │  ├─ Location Card
│  │  │  ├─ Location Icon
│  │  │  ├─ "Nairobi, Kenya"
│  │  │  └─ "Serving all of Kenya"
│  │  │
│  │  ├─ Quick Actions
│  │  │  ├─ Message on WhatsApp Button
│  │  │  └─ Call Now Button
│  │  │
│  │  └─ Support Hours Table
│  │     └─ Mon-Fri, Sat, Sun times
│  │
│  └─ CONTACT FORM SECTION (right)
│     ├─ Form Introduction
│     ├─ Full Name * (input)
│     ├─ Email Address * (input)
│     ├─ Phone Number (input)
│     ├─ Subject * (dropdown)
│     │  ├─ Product Inquiry
│     │  ├─ Order Tracking
│     │  ├─ Delivery Issue
│     │  ├─ Return/Refund
│     │  ├─ Business Partnership
│     │  ├─ Feedback
│     │  └─ Other
│     ├─ Message * (textarea)
│     ├─ Agree to contact checkbox
│     ├─ Send Message Button
│     ├─ Response time note
│     └─ Support Hours Table
│
├─ FAQ SECTION
│  ├─ Section Title
│  └─ FAQ Items (expandable)
│     ├─ "What are your delivery timeframes?"
│     ├─ "Do you accept returns?"
│     ├─ "How do I track my order?"
│     ├─ "What payment methods do you accept?"
│     └─ "What's your size policy?"
│
├─ Footer
│
└─ Floating Buttons
```

---

```
RESPONSIVE BREAKPOINTS

Desktop (1024px+)
├─ Full navigation
├─ Side-by-side layouts
├─ 4-column product grid
└─ All features visible

Tablet (768px - 1023px)
├─ Hamburger menu appears
├─ 2-column product grid
├─ Stacked layouts
└─ Touch-optimized

Mobile (480px - 767px)
├─ Full hamburger menu
├─ 2-column product grid
├─ Full-width forms
└─ Simplified layouts

Small Mobile (< 480px)
├─ Hamburger menu only
├─ 2-column product grid
├─ Large touch targets
└─ Minimal content
```

---

```
DATA FLOW ARCHITECTURE

1. PRODUCT SYSTEM
   assets/js/app.js
   ├─ loadProducts()
   │  ├─ Creates 20 sweatpants
   │  └─ Creates 15 shorts
   └─ displayProducts(productList, containerId)

2. CART SYSTEM
   localStorage
   ├─ Cart array
   ├─ Each item: {id, quantity, size, price, name, image}
   └─ Updates on every change

3. CHECKOUT SYSTEM
   localStorage → sessionStorage
   ├─ Stores order data
   ├─ Calculates totals
   ├─ Generates WhatsApp message
   └─ Saves to orders array

4. WHATSAPP INTEGRATION
   ├─ Formats order message
   ├─ Encodes special characters
   ├─ Opens: https://wa.me/254740388717?text=MESSAGE
   └─ Sends to: +254 740 388 717

5. SEARCH & FILTER
   ├─ Filters applied in real-time
   ├─ Multiple filter combination
   ├─ Sort options applied
   └─ Results displayed dynamically
```

---

```
FOLDER STRUCTURE

sweat pants/
│
├── 📄 HTML FILES
│   ├── index.html (Home)
│   ├── shop.html (Shop)
│   ├── cart.html (Cart)
│   ├── checkout.html (Checkout)
│   └── contact.html (Contact)
│
├── 📁 ASSETS FOLDER
│   ├── css/
│   │   └── main.css (All styling)
│   ├── js/
│   │   ├── app.js (Core logic)
│   │   ├── shop.js (Shop features)
│   │   ├── cart.js (Cart ops)
│   │   └── checkout.js (Checkout)
│   └── images/
│       ├── sweat1.jpg to sweat20.jpg
│       └── short1.jpg to short7.jpg
│
├── 🔍 SEO FILES
│   ├── sitemap.xml (Google indexing)
│   ├── robots.txt (Crawler rules)
│   └── .htaccess (Server config)
│
└── 📚 DOCUMENTATION
    ├── README.md
    ├── QUICK_START.md
    ├── DEPLOYMENT.md
    ├── SETUP_COMPLETE.md
    └── 00_READ_ME_FIRST.md
```

---

## 🎯 Navigation Flow

```
HOME → SHOP → PRODUCT DETAILS → CART → CHECKOUT → SUCCESS
  ↓      ↓                        ↓
CONTACT FOOTER LINKS      CONTINUE SHOPPING
```

---

## 💾 Data Storage Flow

```
BROWSER
  ↓
localStorage
  ├─ cart (array of items)
  ├─ orders (array of orders)
  ├─ newsletter_emails
  ├─ contacts (form submissions)
  └─ user preferences
  
  ↓
sessionStorage (temporary)
  ├─ cartSummary
  └─ searchResults
  
  ↓
WhatsApp Message
  ├─ Order details
  ├─ Customer info
  ├─ Delivery location
  └─ Payment confirmation
```

---

## 🔄 User Journey

```
1. DISCOVERY
   Search Google → Click link → Land on Home

2. BROWSING
   View featured products → Click Shop → Browse catalog → Filter products

3. SELECTION
   Click product → View details → Select size → Click Buy/Add Cart

4. CART
   View items → Update quantities → See total → Proceed to Checkout

5. CHECKOUT
   Enter info → Select delivery → Enter M-Pesa code → Place Order

6. CONFIRMATION
   See order confirmation → WhatsApp message received → Manual fulfillment

7. DELIVERY
   Customer receives package → Leaves review → Becomes repeat customer
```

---

This sitemap shows the complete website architecture, all pages, components, data flow, and user journey for UrbanFlex Wear!
