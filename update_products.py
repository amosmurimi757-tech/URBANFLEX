#!/usr/bin/env python3
# Update app.js with new products

with open('assets/js/app.js', 'r') as f:
    content = f.read()

# Replace the old loadProducts function
old_load = """function loadProducts() {
  // Load sweatpants
  for (let i = 1; i <= 17; i++) {
    const imagePath = `assets/images/sweats${i}.jpg`;
    products.sweatpants.push({
      id: `sweat-${i}`,
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

  // Load shorts - dynamically detect available images
  loadDynamicShorts();
}"""

new_load = """function loadProducts() {
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

  loadDynamicShorts();
}"""

content = content.replace(old_load, new_load)

# Update loadDynamicShorts to be empty
old_dynamic = """function loadDynamicShorts() {
  // Try to load shorts until we get a 404
  let i = 1;
  let loadedCount = 0;
  
  function tryLoadShort(index) {
    const imagePath = `assets/images/shorts${index}.jpg`;
    
    // Add the product anyway (in real production, you'd check if file exists)
    // For static sites, we'll load up to a reasonable number
    if (i <= 7) {
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
      i++;
    }
  }
  
  // Load shorts
  for (let j = 1; j <= 7; j++) {
    tryLoadShort(j);
  }
}"""

new_dynamic = """function loadDynamicShorts() {
  // Shorts are now loaded directly in loadProducts()
}"""

content = content.replace(old_dynamic, new_dynamic)

with open('assets/js/app.js', 'w') as f:
    f.write(content)

print("✅ Updated app.js with new products")
