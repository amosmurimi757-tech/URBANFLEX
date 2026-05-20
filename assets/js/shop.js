// ====================================
// Shop Page Functionality
// ====================================

let allProducts = [];
let filteredProducts = [];
let currentSort = 'newest';

document.addEventListener('DOMContentLoaded', () => {
  loadShopProducts();
  setupFilters();
  
  // Handle URL parameters for category filtering
  const urlParams = new URLSearchParams(window.location.search);
  const categoryParam = urlParams.get('category');
  if (categoryParam) {
    const categoryRadio = document.querySelector(`input[name="category"][value="${categoryParam}"]`);
    if (categoryRadio) {
      categoryRadio.checked = true;
      applyFilters();
    }
  } else {
    displayShop();
  }
});

function loadShopProducts() {
  allProducts = [...UrbanFlex.products.sweatpants, ...UrbanFlex.products.shorts];
  filteredProducts = [...allProducts];
}

function setupFilters() {
  // Category filters
  document.querySelectorAll('input[name="category"]').forEach(radio => {
    radio.addEventListener('change', applyFilters);
  });

  // Price filters
  document.querySelectorAll('input[name="price"]').forEach(checkbox => {
    checkbox.addEventListener('change', applyFilters);
  });

  // Size filters
  document.querySelectorAll('input[name="size"]').forEach(checkbox => {
    checkbox.addEventListener('change', applyFilters);
  });

  // Stock filter
  document.querySelectorAll('input[name="stock"]').forEach(checkbox => {
    checkbox.addEventListener('change', applyFilters);
  });

  // Discount filter
  document.querySelectorAll('input[name="discount"]').forEach(checkbox => {
    checkbox.addEventListener('change', applyFilters);
  });
}

function applyFilters() {
  filteredProducts = [...allProducts];

  // Category filter
  const categoryRadio = document.querySelector('input[name="category"]:checked');
  if (categoryRadio && categoryRadio.value !== 'all') {
    const category = categoryRadio.value === 'sweatpants' ? 'Sweatpants' : 'Sweat Shorts';
    filteredProducts = filteredProducts.filter(p => p.category === category);
  }

  // Price filters
  const selectedPrices = Array.from(document.querySelectorAll('input[name="price"]:checked')).map(cb => cb.value);
  if (selectedPrices.length > 0) {
    filteredProducts = filteredProducts.filter(p => {
      return selectedPrices.some(priceRange => {
        if (priceRange === '300-399') return p.price >= 300 && p.price <= 399;
        if (priceRange === '400-499') return p.price >= 400 && p.price <= 499;
        if (priceRange === '500+') return p.price >= 500;
        return true;
      });
    });
  }

  // Size filters - only show products that have the selected sizes
  const selectedSizes = Array.from(document.querySelectorAll('input[name="size"]:checked')).map(cb => cb.value);
  if (selectedSizes.length > 0) {
    filteredProducts = filteredProducts.filter(p => {
      return selectedSizes.some(size => p.sizes.includes(size));
    });
  }

  // Stock filter
  const stockFilter = document.querySelector('input[name="stock"]:checked');
  if (stockFilter && stockFilter.value === 'in-stock') {
    filteredProducts = filteredProducts.filter(p => p.inStock);
  }

  // Discount filter
  const discountFilter = document.querySelector('input[name="discount"]:checked');
  if (discountFilter) {
    filteredProducts = filteredProducts.filter(p => p.discount > 0);
  }

  // Apply current sort
  sortFilteredProducts();
  displayShop();
}

function sortProducts(sortType) {
  currentSort = sortType;
  sortFilteredProducts();
  displayShop();
}

function sortFilteredProducts() {
  switch (currentSort) {
    case 'price-low':
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case 'popular':
      filteredProducts.sort((a, b) => b.reviews - a.reviews);
      break;
    case 'rating':
      filteredProducts.sort((a, b) => b.rating - a.rating);
      break;
    case 'newest':
    default:
      // Keep original order (newest first)
      filteredProducts.sort((a, b) => {
        const idA = parseInt(a.id.split('-')[1]);
        const idB = parseInt(b.id.split('-')[1]);
        return idB - idA;
      });
  }
}

function displayShop() {
  UrbanFlex.displayProducts(filteredProducts, 'products-grid');
  updateProductCount();
}

function updateProductCount() {
  const countEl = document.getElementById('product-count');
  if (countEl) {
    countEl.textContent = `Showing ${filteredProducts.length} product${filteredProducts.length !== 1 ? 's' : ''}`;
  }
}

function resetFilters() {
  // Reset all radio buttons and checkboxes
  document.querySelectorAll('input[type="radio"], input[type="checkbox"]').forEach(input => {
    if (input.name === 'category' && input.value === 'all') {
      input.checked = true;
    } else if (input.name === 'stock' && input.value === 'in-stock') {
      input.checked = true;
    } else {
      input.checked = false;
    }
  });

  filteredProducts = [...allProducts];
  displayShop();
  UrbanFlex.showNotification('Filters reset', 'success');
}

function handleNewsletterShop(e) {
  e.preventDefault();
  const email = e.target.querySelector('input[type="email"]').value;
  localStorage.setItem('newsletter_' + email, 'subscribed');
  UrbanFlex.showNotification('Successfully subscribed!', 'success');
  e.target.reset();
}
