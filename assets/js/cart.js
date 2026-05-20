// ====================================
// Cart Page Functionality
// ====================================

document.addEventListener('DOMContentLoaded', () => {
  displayCartItems();
  setupCartEventListeners();
  updateCartSummary();
});

function displayCartItems() {
  const cart = UrbanFlex.getCart();
  const cartContainer = document.getElementById('cart-items');

  if (!cartContainer) return;

  if (cart.length === 0) {
    cartContainer.innerHTML = `
      <div class="empty-cart">
        <div class="empty-cart-icon">🛒</div>
        <h3>Your cart is empty</h3>
        <p>Start shopping to add items to your cart!</p>
        <a href="shop.html" class="btn btn-primary mt-lg">Continue Shopping</a>
      </div>
    `;
    return;
  }

  cartContainer.innerHTML = cart.map((item, index) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-image">
      <div class="cart-item-details">
        <h4>${item.name}</h4>
        <p style="color: var(--medium-grey);">Size: <strong>${item.size}</strong></p>
        <p class="cart-item-price">${UrbanFlex.formatPrice(item.price)}</p>
      </div>
      <div class="cart-item-controls">
        <button onclick="decreaseQuantity(${index})">−</button>
        <input type="number" value="${item.quantity}" class="quantity-input" readonly style="width: 50px; text-align: center; border: none; background: none;">
        <button onclick="increaseQuantity(${index})">+</button>
        <button onclick="removeItem(${index})" style="margin-left: 10px; background-color: var(--error-red); color: white;">🗑️</button>
      </div>
    </div>
  `).join('');
}

function increaseQuantity(index) {
  const cart = UrbanFlex.getCart();
  if (cart[index]) {
    cart[index].quantity += 1;
    UrbanFlex.saveCart(cart);
    displayCartItems();
    updateCartSummary();
  }
}

function decreaseQuantity(index) {
  const cart = UrbanFlex.getCart();
  if (cart[index] && cart[index].quantity > 1) {
    cart[index].quantity -= 1;
    UrbanFlex.saveCart(cart);
    displayCartItems();
    updateCartSummary();
  }
}

function removeItem(index) {
  const cart = UrbanFlex.getCart();
  cart.splice(index, 1);
  UrbanFlex.saveCart(cart);
  displayCartItems();
  updateCartSummary();
  UrbanFlex.showNotification('Item removed from cart', 'success');
}

function updateCartSummary() {
  const cart = UrbanFlex.getCart();
  const subtotal = UrbanFlex.calculateTotal(cart);
  const deliveryFee = 200;
  const total = subtotal + deliveryFee;

  const subtotalEl = document.getElementById('subtotal');
  const deliveryEl = document.getElementById('delivery-fee');
  const totalEl = document.getElementById('total');

  if (subtotalEl) subtotalEl.textContent = `KSh ${subtotal.toLocaleString()}`;
  if (deliveryEl) deliveryEl.textContent = `KSh ${deliveryFee.toLocaleString()}`;
  if (totalEl) totalEl.textContent = `KSh ${total.toLocaleString()}`;

  // Save for checkout
  sessionStorage.setItem('cartSummary', JSON.stringify({
    subtotal,
    deliveryFee,
    total
  }));
}

function setupCartEventListeners() {
  const checkoutBtn = document.getElementById('checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      const cart = UrbanFlex.getCart();
      if (cart.length > 0) {
        window.location.href = 'checkout.html';
      } else {
        UrbanFlex.showNotification('Please add items to your cart first', 'error');
      }
    });
  }

  const continueShopping = document.getElementById('continue-shopping');
  if (continueShopping) {
    continueShopping.addEventListener('click', () => {
      window.location.href = 'shop.html';
    });
  }
}
