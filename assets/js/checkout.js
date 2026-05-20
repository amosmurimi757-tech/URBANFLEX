// ====================================
// Checkout Page Functionality
// ====================================

let map, userMarker, deliveryLocation;

document.addEventListener('DOMContentLoaded', () => {
  displayCheckoutSummary();
  setupCheckoutForm();
  initializeMap();
});

function displayCheckoutSummary() {
  const cart = UrbanFlex.getCart();
  const summaryContainer = document.getElementById('checkout-summary');

  if (!summaryContainer || cart.length === 0) return;

  const itemsHTML = cart.map(item => `
    <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
      <span>${item.name} (${item.size}) x${item.quantity}</span>
      <span>KSh ${(item.price * item.quantity).toLocaleString()}</span>
    </div>
  `).join('');

  summaryContainer.innerHTML = itemsHTML;

  const summary = JSON.parse(sessionStorage.getItem('cartSummary') || '{}');
  
  const totalSection = document.getElementById('checkout-total');
  if (totalSection) {
    totalSection.innerHTML = `
      <div style="border-top: 2px solid var(--light-grey); padding-top: 15px; margin-top: 15px;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
          <span>Subtotal:</span>
          <span>KSh ${summary.subtotal?.toLocaleString() || 0}</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 15px;">
          <span>Delivery Fee:</span>
          <span>KSh ${summary.deliveryFee?.toLocaleString() || 200}</span>
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 1.25rem; font-weight: 700;">
          <span>Total:</span>
          <span class="text-gold">KSh ${summary.total?.toLocaleString() || 0}</span>
        </div>
      </div>
    `;
  }
}

function initializeMap() {
  const mapContainer = document.getElementById('delivery-map');
  if (!mapContainer) return;

  // Using Leaflet.js for map - basic setup
  // For production, integrate actual Google Maps API
  mapContainer.innerHTML = `
    <div style="width: 100%; height: 400px; background: linear-gradient(135deg, #1a1a1a, #2d2d2d); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; text-align: center;">
      <div>
        <h3>📍 Location Selection</h3>
        <p>In checkout: Drop a pin on the map to set your delivery location</p>
        <p style="margin-top: 15px; font-size: 0.9rem; color: #d0d0d0;">For demo, enter location details below</p>
      </div>
    </div>
  `;

  // Store location from form
  const locationInput = document.getElementById('delivery-location');
  if (locationInput) {
    locationInput.addEventListener('change', () => {
      updateDeliveryFee();
    });
  }
}

function updateDeliveryFee() {
  // Calculate based on area
  const locationInput = document.getElementById('delivery-location');
  if (!locationInput) return;

  let fee = 200;
  const location = locationInput.value.toLowerCase();

  // Nairobi zones
  if (location.includes('westlands') || location.includes('park road')) fee = 300;
  if (location.includes('karen') || location.includes('langata')) fee = 400;
  if (location.includes('thika') || location.includes('kiambu')) fee = 500;
  if (location.includes('machakos')) fee = 600;

  const summary = JSON.parse(sessionStorage.getItem('cartSummary') || '{}');
  summary.deliveryFee = fee;
  summary.total = (summary.subtotal || 0) + fee;
  sessionStorage.setItem('cartSummary', JSON.stringify(summary));

  displayCheckoutSummary();
}

function setupCheckoutForm() {
  const form = document.getElementById('checkout-form');
  const paymentMethod = document.getElementById('payment-method');
  const mpesaSection = document.getElementById('mpesa-section');

  if (paymentMethod) {
    paymentMethod.addEventListener('change', (e) => {
      if (mpesaSection) {
        mpesaSection.style.display = e.target.value === 'mpesa' ? 'block' : 'none';
      }
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      processCheckout();
    });
  }
}

function processCheckout() {
  const cart = UrbanFlex.getCart();
  const summary = JSON.parse(sessionStorage.getItem('cartSummary') || '{}');

  // Get form data
  const formData = new FormData(document.getElementById('checkout-form'));
  const checkoutData = Object.fromEntries(formData);

  // Validate M-Pesa confirmation
  if (!checkoutData.mpesa_code) {
    UrbanFlex.showNotification('Please enter M-Pesa confirmation code', 'error');
    return;
  }

  // Save order
  const order = {
    orderId: 'ORD-' + Date.now(),
    timestamp: new Date().toISOString(),
    customer: {
      name: checkoutData.full_name,
      email: checkoutData.email,
      phone: checkoutData.phone
    },
    delivery: {
      location: checkoutData.delivery_location,
      address: checkoutData.delivery_address,
      instructions: checkoutData.delivery_instructions
    },
    items: cart,
    summary: summary,
    mpesaCode: checkoutData.mpesa_code,
    status: 'pending'
  };

  // Save to localStorage
  let orders = JSON.parse(localStorage.getItem('orders') || '[]');
  orders.push(order);
  localStorage.setItem('orders', JSON.stringify(orders));

  // Clear cart
  UrbanFlex.saveCart([]);
  sessionStorage.removeItem('cartSummary');

  // Generate WhatsApp message
  sendOrderViaWhatsApp(order);
}

function sendOrderViaWhatsApp(order) {
  const message = formatOrderMessage(order);
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/254740388717?text=${encodedMessage}`;

  // Open WhatsApp
  window.open(whatsappURL, '_blank');

  UrbanFlex.showNotification('Opening WhatsApp for order confirmation...', 'success');
}

function formatOrderMessage(order) {
  let message = `🎉 *UrbanFlex Wear Order* 🎉\n\n`;
  message += `📦 *Order ID:* ${order.orderId}\n`;
  message += `👤 *Name:* ${order.customer.name}\n`;
  message += `📞 *Phone:* ${order.customer.phone}\n`;
  message += `📧 *Email:* ${order.customer.email}\n\n`;
  
  message += `📦 *Items Ordered:*\n`;
  order.items.forEach((item, i) => {
    message += `${i + 1}. ${item.name} (Size: ${item.size})\n   Qty: ${item.quantity} × KSh ${item.price}\n`;
  });

  message += `\n📍 *Delivery Address:*\n`;
  message += `${order.delivery.location}\n`;
  message += `${order.delivery.address}\n`;
  if (order.delivery.instructions) {
    message += `Notes: ${order.delivery.instructions}\n`;
  }

  message += `\n💰 *Order Summary:*\n`;
  message += `Subtotal: KSh ${order.summary.subtotal}\n`;
  message += `Delivery: KSh ${order.summary.deliveryFee}\n`;
  message += `*Total: KSh ${order.summary.total}*\n\n`;
  
  message += `💳 *M-Pesa Confirmation:* ${order.mpesaCode}\n`;
  message += `⏰ *Time:* ${new Date(order.timestamp).toLocaleString()}\n\n`;
  
  message += `Thank you for your order! 🙏`;

  return message;
}

// ====================================
// Delivery Location Page
// ====================================

function setupDeliveryMap() {
  const mapElement = document.getElementById('map');
  if (!mapElement) return;

  // Setup basic map display with instructions
  mapElement.innerHTML = `
    <div style="width: 100%; height: 500px; background: linear-gradient(135deg, #f0f0f0, #e0e0e0); border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-direction: column;">
      <div style="text-align: center;">
        <h2 style="font-size: 2rem;">🗺️</h2>
        <h3>Select Delivery Location</h3>
        <p>In production, this would show an interactive Google Map where you can drop a pin for your delivery location.</p>
        <p style="margin-top: 15px; font-weight: 600;">For now, use the location dropdown to select your area.</p>
      </div>
    </div>
  `;
}
