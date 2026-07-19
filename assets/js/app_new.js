// ====================================
// UrbanFlex Wear - Main App JavaScript
// ====================================

// Product Database
const products = {
  sweatpants: [],
  shorts: [],
  hoodies: []
};

// Prices array
const prices = [349, 369, 399, 449];
const sizes = ['S', 'M', 'L', 'XL'];

// Initialize app on page load
document.addEventListener('DOMContentLoaded', () => {
  loadProducts();
  setupNavigation();
  setupFloatingButtons();
  setupMobileMenu();
  setupEventListeners();
  updateCartBadge();
});

// ====================================
// Product Loading System
// ====================================

function loadProducts() {
  // Load new sweatpants (sweati1-12)
  for (let i = 1; i <= 12; i++) {
    const imagePath = `assets/images/sweati${i}.jpeg`;
    products.sweatpants.push({
      id: `sweati-${i}`,
      name: `Urban Sweatpants ${String.fromCharCode(64 + ((i - 1) % 26) + 1)}`,
      category: 'Sweatpants',
      price: prices[Math.floor(Math.random() * prices.length)],
      originalPrice: prices[Math.floor(Math.random() * prices.length)] + 50,
      image: imagePath,
      description: `Premium comfort sweatpants with modern streetwear design. Perfect for casual wear, relaxation, and everyday style.`,
      sizes: sizes,
      inStock: Math.random() > 0.2,
      discount: Math.random() > 0.7 ? Math.floor(Math.random() * 30) + 10 : 0,
      rating: Math.floor(Math.random() * 2) + 4,
      reviews: Math.floor(Math.random() * 100) + 20
    });
  }

  // Load new shorts (1-5)
  for (let i = 1; i <= 5; i++) {
    const imagePath = `assets/images/shorts${i}.jpeg`;
    products.shorts.push({
      id: `short-${i}`,
      name: `Urban Shorts ${String.fromCharCode(64 + ((i - 1) % 26) + 1)}`,
      category: 'Sweat Shorts',
      price: 299,
      originalPrice: 349,
      image: imagePath,
      description: `Comfortable sweat shorts with premium fabric. Great for workouts, casual outings, and warm weather.`,
      sizes: sizes.slice(0, 3),
      inStock: Math.random() > 0.15,
      discount: Math.random() > 0.8 ? Math.floor(Math.random() * 25) + 5 : 0,
      rating: Math.floor(Math.random() * 2) + 4,
      reviews: Math.floor(Math.random() * 80) + 15
    });
  }

  // Load hoodies (1-3) - priced at 359
  for (let i = 1; i <= 3; i++) {
    const imagePath = `assets/images/hoodie${i}.jpeg`;
    products.hoodies.push({
      id: `hoodie-${i}`,
      name: `Urban Hoodie ${String.fromCharCode(64 + ((i - 1) % 26) + 1)}`,
      category: 'Hoodies',
      price: 359,
      originalPrice: 429,
      image: imagePath,
      description: `Stylish and comfortable hoodie perfect for layering. Premium fabric with modern design for everyday wear.`,
      sizes: sizes,
      inStock: Math.random() > 0.2,
      discount: Math.random() > 0.7 ? Math.floor(Math.random() * 30) + 10 : 0,
      rating: Math.floor(Math.random() * 2) + 4,
      reviews: Math.floor(Math.random() * 100) + 20
    });
  }
}

// ====================================
// Navigation Setup
// ====================================

function setupNavigation() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      if (navLinks) {
        navLinks.classList.toggle('active');
      }
    });
  }

  // Close menu when link is clicked
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger?.classList.remove('active');
      navLinks?.classList.remove('active');
    });
  });

  // Active link indicator
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPage || 
        (currentPage === '' && link.getAttribute('href') === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ====================================
// Floating Buttons
// ====================================

function setupFloatingButtons() {
  const whatsappBtn = document.querySelector('.floating-btn-whatsapp');
  const callBtn = document.querySelector('.floating-btn-call');

  if (whatsappBtn) {
    whatsappBtn.href = 'https://wa.me/254740388717?text=Hi UrbanFlex Wear!';
  }

  if (callBtn) {
    callBtn.href = 'tel:+254740388717';
  }
}

// ====================================
// Mobile Menu
// ====================================

function setupMobileMenu() {
  const navLinks = document.querySelector('.nav-links');
  
  if (!navLinks) return;

  if (!navLinks.classList.contains('mobile-menu')) {
    navLinks.classList.add('mobile-menu');
  }
}

// ====================================
// Event Listeners Setup
// ====================================

function setupEventListeners() {
  const searchInput = document.querySelector('.search-bar input');
  if (searchInput) {
    searchInput.addEventListener('input', handleSearch);
  }

  const cartIcon = document.querySelector('.cart-icon');
  if (cartIcon) {
    cartIcon.addEventListener('click', () => {
      window.location.href = 'cart.html';
    });
  }
}

// ====================================
// Cart Management
// ====================================

function getCart() {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(productId, quantity = 1, size = 'M') {
  const cart = getCart();
  const existingItem = cart.find(item => item.id === productId && item.size === size);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    const product = findProduct(productId);
    if (product) {
      cart.push({
        id: productId,
        quantity: quantity,
        size: size,
        price: product.price,
        name: product.name,
        image: product.image
      });
    }
  }

  saveCart(cart);
  showNotification('Added to cart!', 'success');
}

function removeFromCart(productId, size) {
  let cart = getCart();
  cart = cart.filter(item => !(item.id === productId && item.size === size));
  saveCart(cart);
}

function updateCartBadge() {
  const badge = document.querySelector('.nav-badge');
  if (!badge) return;

  const cart = getCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (totalItems > 0) {
    badge.textContent = totalItems;
    badge.style.display = 'flex';
  } else {
    badge.style.display = 'none';
  }
}

function findProduct(productId) {
  const allProducts = [...products.sweatpants, ...products.shorts, ...products.hoodies];
  return allProducts.find(p => p.id === productId);
}

// ====================================
// Product Display
// ====================================

function displayProducts(productList, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = productList.map(product => createProductCard(product)).join('');

  container.querySelectorAll('.btn-add-cart').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const productId = btn.dataset.productId;
      const sizeSelect = btn.closest('.product-card').querySelector('.size-select');
      const size = sizeSelect ? sizeSelect.value : 'M';
      addToCart(productId, 1, size);
    });
  });

  container.querySelectorAll('.btn-buy-now').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const productId = btn.dataset.productId;
      const sizeSelect = btn.closest('.product-card').querySelector('.size-select');
      const size = sizeSelect ? sizeSelect.value : 'M';
      addToCart(productId, 1, size);
      window.location.href = 'cart.html';
    });
  });
}

function createProductCard(product) {
  const discountPercent = product.discount > 0 ? `${product.discount}% OFF` : '';
  const stars = '⭐'.repeat(product.rating) + '☆'.repeat(5 - product.rating);

  return `
    <div class="product-card">
      <div class="product-image-container">
        <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
        ${product.discount > 0 ? `<div class="product-badge discount">${discountPercent}</div>` : '<div class="product-badge in-stock">IN STOCK</div>'}
      </div>
      <div class="product-info">
        <p class="product-category">${product.category}</p>
        <h3 class="product-name">${product.name}</h3>
        <div class="product-price">
          ${product.discount > 0 ? `<span class="original">KSh ${product.originalPrice}</span>` : ''}
          KSh ${product.price}
        </div>
        <div class="product-rating">
          <span class="star">${stars}</span>
          <span style="color: var(--medium-grey); font-size: 0.875rem;">(${product.reviews})</span>
        </div>
        <div class="form-group">
          <label>Size</label>
          <select class="size-select">
            ${product.sizes.map(size => `<option value="${size}">${size}</option>`).join('')}
          </select>
        </div>
        <p style="color: var(--medium-grey); font-size: 0.875rem;">${product.description}</p>
        <div class="product-actions">
          <button class="btn btn-add-cart btn-small" data-product-id="${product.id}">Add Cart</button>
          <button class="btn btn-primary btn-small btn-buy-now" data-product-id="${product.id}">Buy Now</button>
        </div>
      </div>
    </div>
  `;
}

// ====================================
// Search Functionality
// ====================================

function handleSearch(e) {
  const searchTerm = e.target.value.toLowerCase();
  const allProducts = [...products.sweatpants, ...products.shorts, ...products.hoodies];
  const results = allProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm)
  );

  sessionStorage.setItem('searchResults', JSON.stringify(results));
  if (searchTerm.length > 0) {
    window.location.href = `shop.html?search=${encodeURIComponent(searchTerm)}`;
  }
}

// ====================================
// Notifications
// ====================================

function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 16px 20px;
    background-color: ${type === 'success' ? '#2ecc71' : '#3498db'};
    color: white;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 1000;
    animation: slideInRight 0.3s ease-out;
    font-weight: 600;
  `;
  notification.textContent = message;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = 'slideInRight 0.3s ease-out reverse';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// ====================================
// Utility Functions
// ====================================

function formatPrice(price) {
  return `KSh ${price.toLocaleString()}`;
}

function calculateTotal(cart) {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function calculateDeliveryFee(distance = 5) {
  if (distance <= 5) return 200;
  if (distance <= 10) return 300;
  if (distance <= 20) return 400;
  if (distance <= 50) return 500;
  return 600;
}

// ====================================
// Export for other pages
// ====================================

window.UrbanFlex = {
  products,
  getCart,
  saveCart,
  addToCart,
  removeFromCart,
  updateCartBadge,
  findProduct,
  displayProducts,
  createProductCard,
  showNotification,
  formatPrice,
  calculateTotal,
  calculateDeliveryFee,
  prices,
  sizes
};
