// Menu Dataset with Category Tags and Images
const menuData = [
    // CHIPS CHAAT
    { title: "Regular Chips Chaat", category: "chaat", price: "Rs. 200", desc: "Crispy chips topped with signature tangy sauces, chickpeas, and fresh spices.", img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=500&q=80" },
    { title: "Regular in a Plate", category: "chaat", price: "Rs. 250", desc: "Generous plate of spiced chips chaat with loaded garnishing.", img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=500&q=80" },
    { title: "2 Extra Toppings", category: "chaat", price: "Rs. 300", desc: "Chips chaat with your choice of 2 extra toppings & extra cheese sauce.", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80" },
    { title: "2 Extra Toppings on a Plate", category: "chaat", price: "Rs. 350", desc: "Loaded chips chaat plate served with extra toppings and sauces.", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80" },
    { title: "Special Chips Chaat", category: "chaat", price: "Rs. 500", desc: "Ultimate loaded Fruit Punch special chips chaat with all premium toppings.", img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=500&q=80" },

    // INSTANT RAMEN / NOODLES
    { title: "Ramen with Boiled Egg", category: "ramen", price: "Rs. 450", desc: "Hot spicy instant ramen noodles served with a perfectly boiled egg.", img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=500&q=80" },
    { title: "Ramen with Boiled Egg & Chicken", category: "ramen", price: "Rs. 500", desc: "Spicy ramen noodles served with shredded chicken and a boiled egg.", img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=500&q=80" },
    { title: "Ramen with Fried Egg", category: "ramen", price: "Rs. 450", desc: "Flavorful instant noodles topped with a crispy fried egg.", img: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&w=500&q=80" },
    { title: "Ramen with Fried Egg & Chicken", category: "ramen", price: "Rs. 500", desc: "Loaded ramen noodles with juicy chicken and a fried egg.", img: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&w=500&q=80" },
    { title: "Special Loaded Ramen", category: "ramen", price: "Rs. 600", desc: "Chef's special loaded ramen bowl with double toppings, egg & chicken.", img: "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?auto=format&fit=crop&w=500&q=80" },

    // ICE SHAKES
    { title: "Vanilla Ice Shake", category: "shakes", price: "Rs. 300", desc: "Classic creamy vanilla ice shake blended to chilled perfection.", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80" },
    { title: "Chocolate Ice Shake", category: "shakes", price: "Rs. 300", desc: "Rich chocolate ice shake topped with chocolate drizzle.", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80" },
    { title: "Oreo Ice Shake", category: "shakes", price: "Rs. 300", desc: "Thick ice shake blended with real Oreo cookies and cream.", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80" },
    { title: "Coffee Ice Shake", category: "shakes", price: "Rs. 300", desc: "Chilled espresso-infused creamy coffee ice shake.", img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=500&q=80" },
    { title: "Mango Ice Shake", category: "shakes", price: "Rs. 300", desc: "Fresh sweet mango blended with thick ice cream.", img: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=500&q=80" },
    { title: "Dhood Soda", category: "shakes", price: "Rs. 300", desc: "Traditional Pakistani chilled milk soda refreshment.", img: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=500&q=80" },
    { title: "Mint Margarita Shake", category: "shakes", price: "Rs. 300", desc: "Tangy mint lime margarita with crushed ice shake fusion.", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80" },

    // DRINKS
    { title: "Mint Mojito", category: "drinks", price: "Rs. 150", desc: "Refreshing mint, lime, and chilled soda refresher.", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80" },
    { title: "Mango Mojito", category: "drinks", price: "Rs. 150", desc: "Sweet tropical mango syrup muddled with mint and soda.", img: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=500&q=80" },
    { title: "Hot Coffee", category: "drinks", price: "Rs. 200", desc: "Freshly brewed hot frothy coffee.", img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=500&q=80" },
    { title: "Chai (Regular / Special)", category: "drinks", price: "Rs. 70/80", desc: "Traditional doodh patti tea brewed fresh.", img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=500&q=80" },
    { title: "Mineral Water", category: "drinks", price: "Rs. 70", desc: "Chilled pure mineral water bottle.", img: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=500&q=80" },
    { title: "Bottle Drink", category: "drinks", price: "Rs. 100", desc: "Assorted cold carbonated soft drinks.", img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=500&q=80" },

    // SNACKS & OTHERS
    { title: "Loaded Fries", category: "others", price: "Rs. 400", desc: "Crispy potato fries loaded with melted cheese and sauces.", img: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=500&q=80" },
    { title: "Korean Loaded Fries", category: "others", price: "Rs. 450", desc: "Korean spicy sweet sauce drizzled over crispy loaded fries.", img: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=500&q=80" },
    { title: "Chicken Tikka Salad", category: "others", price: "Rs. 200", desc: "Fresh garden salad topped with grilled chicken tikka chunks.", img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80" },
    { title: "Chicken Momos", category: "others", price: "Rs. 500", desc: "Steamed chicken dumplings served with spicy dip.", img: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&w=500&q=80" },
    { title: "Shawarma Platter", category: "others", price: "Rs. 250", desc: "Deconstructed shawarma meat served with pita & garlic sauce.", img: "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=500&q=80" },
    { title: "Shawarma Pizza", category: "others", price: "Rs. 300", desc: "Mini pizza loaded with shawarma chicken and cheese.", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80" },
    { title: "Lavashak Sour (Small / Medium / Large)", category: "others", price: "Rs. 200/500/1000", desc: "Persian fruit leather snack with sour pomegranate syrup.", img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=500&q=80" },
    { title: "Mini Pancakes (Sweet)", category: "others", price: "Rs. 300", desc: "Fluffy bite-sized pancakes drizzled with Nutella chocolate syrup.", img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=500&q=80" }
];

// Tab Switcher Function
function switchTab(tabId) {
    const pages = document.querySelectorAll('.page-view');
    pages.forEach(p => p.classList.remove('active'));
    
    const targetPage = document.getElementById(tabId + '-view');
    if (targetPage) targetPage.classList.add('active');

    const links = document.querySelectorAll('.nav-link');
    links.forEach(l => l.classList.remove('active'));

    const navMenu = document.getElementById('navMenu');
    if (navMenu) navMenu.classList.remove('mobile-open');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Toggle Burger Menu for Mobile View
function toggleBurger() {
    const navMenu = document.getElementById('navMenu');
    if (navMenu) navMenu.classList.toggle('mobile-open');
}

// Render Menu Grid
function renderMenu(items) {
    const grid = document.getElementById('menuGrid');
    if (!grid) return;
    grid.innerHTML = '';

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-card';
        card.onclick = () => openModal(item.title, item.price, item.desc, item.category, item.img);

        card.innerHTML = `
            <div class="menu-card-img-wrapper">
                <img src="${item.img}" alt="${item.title}" class="menu-card-img" onerror="this.src='https://placehold.co/500x300/FFD700/8B4513?text=${encodeURIComponent(item.title)}'">
                <span class="menu-card-category">${item.category.toUpperCase()}</span>
            </div>
            <div class="menu-card-body">
                <div>
                    <h3 class="menu-card-title">${item.title}</h3>
                    <p style="font-size: 0.85rem; color: #666; line-height: 1.4;">${item.desc}</p>
                </div>
                <div class="menu-card-footer">
                    <span class="menu-card-price">${item.price}</span>
                    <button class="btn-add">Tap to Order</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Filter Menu Categories
function filterMenu(category, btnElem) {
    if (btnElem) {
        const buttons = document.querySelectorAll('.filter-btn');
        buttons.forEach(b => b.classList.remove('active'));
        btnElem.classList.add('active');
    }

    if (category === 'all') {
        renderMenu(menuData);
    } else {
        const filtered = menuData.filter(i => i.category === category);
        renderMenu(filtered);
    }
}

// Select Category From Homepage
function selectCategoryFromHome(category) {
    switchTab('menu');
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(`'${category}'`)) {
            btn.click();
        }
    });
}

// Search Input Filter
function filterBySearchText(query) {
    const q = query.toLowerCase();
    const filtered = menuData.filter(i => 
        i.title.toLowerCase().includes(q) || 
        i.desc.toLowerCase().includes(q) ||
        i.category.toLowerCase().includes(q)
    );
    renderMenu(filtered);
}

function handleHomeSearch(query) {
    switchTab('menu');
    const searchInput = document.getElementById('menuSearchInput');
    if (searchInput) {
        searchInput.value = query;
        filterBySearchText(query);
    }
}

// Scroll to Timing and Location Section
function scrollToLocation() {
    switchTab('home');
    setTimeout(() => {
        const sec = document.getElementById('timing-location');
        if (sec) sec.scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

// Modal Controllers
function openModal(title, price, desc, category, img) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalPrice').innerText = price;
    document.getElementById('modalDesc').innerText = desc;
    document.getElementById('modalCategory').innerText = (category || 'Item').toUpperCase();
    document.getElementById('modalImg').src = img || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80';
    
    const encodedText = encodeURIComponent(`Hi Fruit Punch! I would like to order: ${title} (${price})`);
    document.getElementById('modalWhatsappBtn').href = `https://wa.me/923000000000?text=${encodedText}`;
    
    document.getElementById('itemModal').classList.add('active');
}

function openDealModal(dealName, price, itemsList) {
    openModal(dealName, price, `Combo Includes: ${itemsList}`, 'Value Deal', 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=500&q=80');
}

function closeModal() {
    document.getElementById('itemModal').classList.remove('active');
}

// Form Submit Handler for #contactForm with asynchronous backend submission
async function handleFormSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('formName') ? document.getElementById('formName').value : '';
    const phone = document.getElementById('formPhone') ? document.getElementById('formPhone').value : '';
    const message = document.getElementById('formMessage') ? document.getElementById('formMessage').value : '';

    try {
        // Send payload to Node.js / Express backend endpoint
        const response = await fetch('http://localhost:3000/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, phone, message })
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Backend response:', data);
        } else {
            console.error('Server returned non-OK status:', response.status);
        }
    } catch (error) {
        console.error('Could not reach backend server:', error);
    } finally {
        // Reset inputs and pop open success feedback modal
        document.getElementById('contactForm').reset();
        document.getElementById('successModal').classList.add('active');
    }
}

function closeSuccessModal() {
    document.getElementById('successModal').classList.remove('active');
}

// Initial Load
window.onload = function() {
    renderMenu(menuData);
};