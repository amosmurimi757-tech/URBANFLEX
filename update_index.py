#!/usr/bin/env python3
# Update index.html with hoodies section and sweati5 image

with open('index.html', 'r') as f:
    content = f.read()

# Update og:image to sweati5
content = content.replace(
    'og:image" content="assets/images/sweats2.jpg"',
    'og:image" content="assets/images/sweati5.jpeg"'
)

# Add hoodies section before Customer Reviews
hoodies_section = '''    <!-- Hoodies Section -->
    <section class="section" style="background-color: var(--light-grey);">
        <div class="container">
            <div class="section-title">
                <h2>Premium Hoodies</h2>
            </div>
            <div id="hoodies" class="grid grid-4"></div>
        </div>
    </section>

'''

content = content.replace(
    '    <!-- Customer Reviews Section -->',
    hoodies_section + '    <!-- Customer Reviews Section -->'
)

# Update the script to include hoodies
old_script = '''            // New arrivals
            const newArrivals = [
                ...UrbanFlex.products.sweatpants.slice(6, 8),
                ...UrbanFlex.products.shorts.slice(6, 8)
            ];
            UrbanFlex.displayProducts(newArrivals, 'new-arrivals');'''

new_script = '''            // New arrivals
            const newArrivals = [
                ...UrbanFlex.products.sweatpants.slice(6, 8),
                ...UrbanFlex.products.shorts.slice(6, 8)
            ];
            UrbanFlex.displayProducts(newArrivals, 'new-arrivals');

            // Hoodies
            const hoodies = UrbanFlex.products.hoodies;
            UrbanFlex.displayProducts(hoodies, 'hoodies');'''

content = content.replace(old_script, new_script)

# Write back
with open('index.html', 'w') as f:
    f.write(content)

print('✅ Updated index.html with hoodies section and sweati5 og:image')
