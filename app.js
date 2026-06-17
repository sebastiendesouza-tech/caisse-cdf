const DEFAULT_CONFIG = {
  eventName: 'Manifestation',
  products: [
    // 16 boutons boissons. Les lignes vides restent affichées pour être paramétrées plus tard.
    { category: 'Boissons sans alcool', name: 'Eau', price: 1.00 },
    { category: 'Boissons sans alcool', name: 'Soda', price: 2.00 },
    { category: 'Boissons sans alcool', name: 'Jus de fruit', price: 2.00 },
    { category: 'Boissons sans alcool', name: '', price: 0 },
    { category: 'Boissons sans alcool', name: '', price: 0 },
    { category: 'Boissons sans alcool', name: '', price: 0 },
    { category: 'Boissons avec alcool', name: 'Bière', price: 3.00 },
    { category: 'Boissons avec alcool', name: 'Vin', price: 2.50 },
    { category: 'Boissons avec alcool', name: '', price: 0 },
    { category: 'Boissons avec alcool', name: '', price: 0 },
    { category: 'Boissons avec alcool', name: '', price: 0 },
    { category: 'Boissons chaudes', name: 'Café', price: 1.00 },
    { category: 'Boissons chaudes', name: 'Thé', price: 1.00 },
    { category: 'Boissons chaudes', name: 'Chocolat', price: 1.50 },
    { category: 'Boissons chaudes', name: '', price: 0 },
    { category: 'Boissons chaudes', name: '', price: 0 },

    // 12 boutons restauration.
    { category: 'Restauration', name: 'Entrée', price: 4.00 },
    { category: 'Restauration', name: 'Plat', price: 10.00 },
    { category: 'Restauration', name: 'Fromage', price: 3.00 },
    { category: 'Restauration', name: 'Dessert', price: 3.00 },
    { category: 'Restauration', name: '', price: 0 },
    { category: 'Restauration', name: '', price: 0 },
    { category: 'Restauration', name: '', price: 0 },
    { category: 'Restauration', name: '', price: 0 },
    { category: 'Restauration', name: '', price: 0 },
    { category: 'Restauration', name: '', price: 0 },
    { category: 'Restauration', name: '', price: 0 },
    { category: 'Restauration', name: '', price: 0 },

    // 2 boutons consignes.
    { category: 'Consignes', name: 'Consigne gobelet', price: 1.00 },
    { category: 'Consignes', name: 'Retour gobelet', price: -1.00 }
  ]
};

const GROUP_ORDER = ['Boissons', 'Restauration', 'Consignes'];

let config = JSON.parse(localStorage.getItem('caisse_config') || 'null') || DEFAULT_CONFIG;
let cart = [];
let paymentMethod = 'Espèces';
let paidCents = 0;
let orderNumber = Number(localStorage.getItem('caisse_order_number') || '1');
let sales = JSON.parse(localStorage.getItem('caisse_sales') || '[]');

const fmt = n => new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(n || 0);
const total = () => cart.reduce((sum, item) => sum + item.price * item.qty, 0);
const paidAmount = () => paidCents / 100;

function saveConfig() { localStorage.setItem('caisse_config', JSON.stringify(config)); }
function saveSales() { localStorage.setItem('caisse_sales', JSON.stringify(sales)); }
function saveOrderNumber() { localStorage.setItem('caisse_order_number', String(orderNumber)); }

function categoryClass(cat) {
  return 'cat-' + String(cat).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function displayGroup(cat) {
  if (String(cat).startsWith('Boissons')) return 'Boissons';
  if (String(cat).startsWith('Consigne')) return 'Consignes';
  return 'Restauration';
}

function groupClass(group) {
  return 'group-' + String(group).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function renderProducts() {
  document.getElementById('eventName').textContent = config.eventName;
  const wrap = document.getElementById('categories');
  const groups = {};
  config.products.forEach(p => (groups[displayGroup(p.category)] ||= []).push(p));
  const entries = Object.entries(groups).sort(([a], [b]) => GROUP_ORDER.indexOf(a) - GROUP_ORDER.indexOf(b));

  wrap.innerHTML = entries.map(([group, products]) => `
    <div class="category ${groupClass(group)}">
      <h3>${group}</h3>
      <div class="product-grid">
        ${products.map(p => productButtonHtml(p)).join('')}
      </div>
    </div>
  `).join('');

  document.querySelectorAll('.product-btn:not(.empty-product)').forEach(btn => {
    btn.addEventListener('click', () => addProduct(btn.dataset.name, Number(btn.dataset.price)));
  });
}

function productButtonHtml(p) {
  if (!p.name) {
    return `<button class="product-btn empty-product ${categoryClass(p.category)}" disabled><strong>Libre</strong><span>A paramétrer</span></button>`;
  }
  return `<button class="product-btn ${categoryClass(p.category)}" data-name="${escapeHtml(p.name)}" data-price="${p.price}"><strong>${escapeHtml(p.name)}</strong><span>${fmt(p.price)}</span></button>`;
}

function addProduct(name, price) {
  const line = cart.find(i => i.name === name && i.price === price);
  if (line) line.qty += 1;
  else cart.push({ name, price, qty: 1 });
  if (paymentMethod === 'CB') paidCents = Math.round(total() * 100);
  renderCart();
}

function renderCart() {
  document.getElementById('orderNumber').textContent = `n° ${String(orderNumber).padStart(4, '0')}`;
  const list = document.getElementById('cartLines');
  if (!cart.length) {
    list.className = 'cart-lines empty';
    list.textContent = 'Aucun produit';
  } else {
    list.className = 'cart-lines';
    list.innerHTML = cart.map((item, index) => `
      <div class="cart-line">
        <div>
          <div class="cart-name">${escapeHtml(item.name)}</div>
          <div class="cart-unit">${fmt(item.price)} / unité</div>
        </div>
        <div class="qty-actions">
          <button data-action="minus" data-index="${index}">-</button>
          <span class="qty-value">${item.qty}</span>
          <button data-action="plus" data-index="${index}">+</button>
          <button data-action="delete" data-index="${index}">x</button>
        </div>
        <div class="cart-total">${fmt(item.qty * item.price)}</div>
      </div>
    `).join('');
  }
  document.querySelectorAll('[data-action]').forEach(btn => btn.addEventListener('click', updateLine));
  updatePayment();
}

function updateLine(e) {
  const index = Number(e.currentTarget.dataset.index);
  const action = e.currentTarget.dataset.action;
  if (action === 'plus') cart[index].qty += 1;
  if (action === 'minus') cart[index].qty -= 1;
  if (action === 'delete' || cart[index].qty <= 0) cart.splice(index, 1);
  if (paymentMethod === 'CB') paidCents = Math.round(total() * 100);
  renderCart();
}

function updatePayment() {
  document.getElementById('cartTotalBottom').textContent = fmt(total());
  document.getElementById('amountPaidDisplay').textContent = fmt(paidAmount());
  document.getElementById('changeDue').textContent = fmt(Math.max(0, paidAmount() - total()));
}

function pressKey(key) {
  if (key === 'clear') paidCents = 0;
  else if (key === 'back') paidCents = Math.floor(paidCents / 10);
  else paidCents = Math.min(999999, paidCents * 10 + Number(key));
  updatePayment();
}

function setQuickAmount(amount) {
  paidCents = Math.round(amount * 100);
  updatePayment();
}

function payAndPrint(method) {
  if (!cart.length) return alert('Commande vide');
  paymentMethod = method;
  if (method === 'CB') paidCents = Math.round(total() * 100);
  if (method === 'Espèces' && paidAmount() < total()) {
    return alert('Le montant payé est inférieur au total dû.');
  }
  updatePayment();
  validateSale();
}

function buildTicket() {
  const number = String(orderNumber).padStart(4, '0');
  const lines = cart.map(item => {
    const marker = item.qty > 5
      ? '<span class="remaining-line"></span>'
      : Array.from({ length: Math.max(0, item.qty) }, () => '☐').join(' ');
    return `<div class="ticket-line"><div>${item.qty}</div><div class="ticket-product">${escapeHtml(item.name)}</div><div class="checks">${marker}</div><div>${fmt(item.qty * item.price)}</div></div>`;
  }).join('');
  document.getElementById('printArea').innerHTML = `
    <div class="ticket-title">Commande n° ${number}</div>
    ${lines}
    <div class="ticket-bottom">Paiement : ${paymentMethod}</div>
    <div class="ticket-bottom">Total : ${fmt(total())}</div>
  `;
}

function validateSale() {
  if (!cart.length) return alert('Commande vide');
  buildTicket();
  sales.push({ orderNumber, date: new Date().toISOString(), paymentMethod, paid: paidAmount(), change: Math.max(0, paidAmount() - total()), total: total(), items: cart });
  saveSales();
  window.print();
  orderNumber += 1;
  saveOrderNumber();
  cart = [];
  paidCents = 0;
  renderCart();
}

function exportCsv() {
  const rows = [['commande','date','paiement','paye','rendu','produit','quantite','prix_unitaire','total_ligne','total_commande']];
  sales.forEach(s => s.items.forEach(i => rows.push([s.orderNumber, s.date, s.paymentMethod, s.paid || '', s.change || '', i.name, i.qty, i.price, i.qty * i.price, s.total])));
  const csv = rows.map(r => r.map(v => `"${String(v).replaceAll('"','""')}"`).join(';')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'ventes-caisse.csv';
  a.click();
}

function openAdmin() {
  document.getElementById('adminEventName').value = config.eventName;
  document.getElementById('adminProducts').value = config.products.map(p => `${p.category};${p.name};${p.price}`).join('\n');
  document.getElementById('adminDialog').showModal();
}

function saveAdmin() {
  const name = document.getElementById('adminEventName').value.trim() || 'Manifestation';
  const products = document.getElementById('adminProducts').value.split('\n').map(line => {
    const [category, productName, price] = line.split(';').map(x => (x || '').trim());
    return category ? { category, name: productName || '', price: Number(price || 0) } : null;
  }).filter(Boolean);
  config = { eventName: name, products };
  saveConfig();
  renderProducts();
  document.getElementById('adminDialog').close();
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

document.querySelectorAll('[data-key]').forEach(btn => btn.addEventListener('click', () => pressKey(btn.dataset.key)));
document.querySelectorAll('[data-quick]').forEach(btn => btn.addEventListener('click', () => setQuickAmount(Number(btn.dataset.quick))));
document.getElementById('btnExact').addEventListener('click', () => setQuickAmount(total()));
document.querySelectorAll('.pay').forEach(btn => btn.addEventListener('click', () => payAndPrint(btn.dataset.method))); 
document.getElementById('btnPrintTicket').addEventListener('click', () => { if (cart.length) { buildTicket(); window.print(); } });
document.getElementById('btnClear').addEventListener('click', () => { cart = []; paidCents = 0; renderCart(); });
document.getElementById('btnExport').addEventListener('click', exportCsv);
document.getElementById('btnAdmin').addEventListener('click', openAdmin);
document.getElementById('btnSaveAdmin').addEventListener('click', saveAdmin);
document.getElementById('btnReset').addEventListener('click', () => { config = JSON.parse(JSON.stringify(DEFAULT_CONFIG)); saveConfig(); openAdmin(); renderProducts(); });

if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js');
renderProducts();
renderCart();
