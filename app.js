// 1. The data: one object per fruit
const PRODUCTS = [
  { id: 1,  name: "Dragon fruit",           category: "Tropical", price: 450,  emoji: "🐉" },
  { id: 2,  name: "Starfruit",              category: "Tropical", price: 300,  emoji: "⭐" },
  { id: 3,  name: "Soursop",                category: "Tropical", price: 900,  emoji: "🍈" },
  { id: 4,  name: "Tamarillo (tree tomato)", category: "Tropical", price: 550,  emoji: "🍅" },
  { id: 5,  name: "Passion fruit (6)",      category: "Tropical", price: 400,  emoji: "🍇" },
  { id: 6,  name: "Rambutan 500g",          category: "Asian",    price: 650,  emoji: "🔴" },
  { id: 7,  name: "Mangosteen 500g",        category: "Asian",    price: 1200, emoji: "🟣" },
  { id: 8,  name: "Lychee 500g",            category: "Asian",    price: 700,  emoji: "🍒" },
  { id: 9,  name: "Durian (whole)",         category: "Asian",    price: 2500, emoji: "🌵" },
  { id: 10, name: "Golden berries 250g",    category: "Berries",  price: 800,  emoji: "🫐" },
  { id: 11, name: "Pomelo",                 category: "Citrus",   price: 500,  emoji: "🍋" },
  { id: 12, name: "Blood oranges (4)",      category: "Citrus",   price: 350,  emoji: "🍊" }
];

// 2. A helper to format money
const formatKES = n => "KES " + n.toLocaleString("en-KE");

// 3. Turn the data into cards on the page
function renderProducts(list) {
  const box = document.getElementById("products");
  box.innerHTML = list.map(p => `
    <div class="card">
      <div class="pic">${p.emoji}</div>
      <h3>${p.name}</h3>
      <span class="cat">${p.category}</span>
      <span class="price">${formatKES(p.price)}</span>
      <button class="add" data-id="${p.id}">Add to cart</button>
    </div>
  `).join("");
}

// 4. Run it when the page loads
renderProducts(PRODUCTS);