const PALETTE = {
  bleu: { label: 'Bleu', bg: '#dbeafe', fg: '#1e3a8a' },
  rouge: { label: 'Rouge', bg: '#fee2e2', fg: '#991b1b' },
  vert: { label: 'Vert', bg: '#dcfce7', fg: '#14532d' },
  orange: { label: 'Orange', bg: '#ffedd5', fg: '#9a3412' },
  jaune: { label: 'Jaune', bg: '#fef3c7', fg: '#78350f' },
  violet: { label: 'Violet', bg: '#ede9fe', fg: '#4c1d95' },
  rose: { label: 'Rose', bg: '#fce7f3', fg: '#831843' },
  cyan: { label: 'Cyan', bg: '#cffafe', fg: '#155e75' },
  gris: { label: 'Gris', bg: '#f3f4f6', fg: '#374151' },
  noir: { label: 'Noir', bg: '#111827', fg: '#ffffff' }
};

const DEFAULT_CONFIG = {
  eventName: 'Manifestation',
  orderPrefix: 'A',
  ticketColor: 'black',
  categoryColors: {
    'Boissons sans alcool': 'bleu',
    'Boissons avec alcool': 'orange',
    'Boissons chaudes': 'jaune',
    'Entrée': 'vert',
    'Plat': 'vert',
    'Fromage': 'violet',
    'Dessert': 'rose',
    'Consigne': 'violet',
    'Retour consigne': 'gris'
  },
  baseFoods: [
    { id: 'food-saucisse', name: 'Saucisse', category: 'Viande', stock: '' },
    { id: 'food-merguez', name: 'Merguez', category: 'Viande', stock: '' },
    { id: 'food-puree', name: 'Purée', category: 'Accompagnement', stock: '' }
  ],
  products: [
    { id: 'p1', group: 'Boissons', category: 'Boissons sans alcool', name: 'Eau', price: 1, type: 'simple', components: [], refundable: true, stock: '' },
    { id: 'p2', group: 'Boissons', category: 'Boissons sans alcool', name: 'Soda', price: 2, type: 'simple', components: [], refundable: true, stock: '' },
    { id: 'p3', group: 'Boissons', category: 'Boissons sans alcool', name: 'Jus de fruit', price: 2, type: 'simple', components: [], refundable: true, stock: '' },
    { id: 'p4', group: 'Boissons', category: 'Boissons sans alcool', name: '', price: 0, type: 'simple', components: [], refundable: true, stock: '' },
    { id: 'p5', group: 'Boissons', category: 'Boissons sans alcool', name: '', price: 0, type: 'simple', components: [], refundable: true, stock: '' },
    { id: 'p6', group: 'Boissons', category: 'Boissons sans alcool', name: '', price: 0, type: 'simple', components: [], refundable: true, stock: '' },
    { id: 'p7', group: 'Boissons', category: 'Boissons avec alcool', name: 'Bière', price: 3, type: 'simple', components: [], refundable: true, stock: '' },
    { id: 'p8', group: 'Boissons', category: 'Boissons avec alcool', name: 'Vin', price: 2.5, type: 'simple', components: [], refundable: true, stock: '' },
    { id: 'p9', group: 'Boissons', category: 'Boissons avec alcool', name: '', price: 0, type: 'simple', components: [], refundable: true, stock: '' },
    { id: 'p10', group: 'Boissons', category: 'Boissons avec alcool', name: '', price: 0, type: 'simple', components: [], refundable: true, stock: '' },
    { id: 'p11', group: 'Boissons', category: 'Boissons avec alcool', name: '', price: 0, type: 'simple', components: [], refundable: true, stock: '' },
    { id: 'p12', group: 'Boissons', category: 'Boissons chaudes', name: 'Café', price: 1, type: 'simple', components: [], refundable: true, stock: '' },
    { id: 'p13', group: 'Boissons', category: 'Boissons chaudes', name: 'Thé', price: 1, type: 'simple', components: [], refundable: true, stock: '' },
    { id: 'p14', group: 'Boissons', category: 'Boissons chaudes', name: '', price: 0, type: 'simple', components: [], refundable: true, stock: '' },
    { id: 'p15', group: 'Boissons', category: 'Boissons chaudes', name: '', price: 0, type: 'simple', components: [], refundable: true, stock: '' },
    { id: 'p16', group: 'Boissons', category: 'Boissons chaudes', name: '', price: 0, type: 'simple', components: [], refundable: true, stock: '' },
    { id: 'p17', group: 'Restauration', category: 'Entrée', name: 'Entrée', price: 5, type: 'simple', components: [], refundable: true, stock: '' },
    { id: 'p18', group: 'Restauration', category: 'Plat', name: 'Saucisse purée', price: 8, type: 'compose', components: ['food-saucisse', 'food-puree'], refundable: true, stock: '' },
    { id: 'p19', group: 'Restauration', category: 'Plat', name: 'Merguez purée', price: 8, type: 'compose', components: ['food-merguez', 'food-puree'], refundable: true, stock: '' },
    { id: 'p20', group: 'Restauration', category: 'Fromage', name: 'Fromage', price: 3, type: 'simple', components: [], refundable: true, stock: '' },
    { id: 'p21', group: 'Restauration', category: 'Dessert', name: 'Dessert', price: 3, type: 'simple', components: [], refundable: true, stock: '' },
    { id: 'p22', group: 'Restauration', category: 'Plat', name: '', price: 0, type: 'simple', components: [], refundable: true, stock: '' },
    { id: 'p23', group: 'Restauration', category: 'Plat', name: '', price: 0, type: 'simple', components: [], refundable: true, stock: '' },
    { id: 'p24', group: 'Restauration', category: 'Plat', name: '', price: 0, type: 'simple', components: [], refundable: true, stock: '' },
    { id: 'p25', group: 'Restauration', category: 'Plat', name: '', price: 0, type: 'simple', components: [], refundable: true, stock: '' },
    { id: 'p26', group: 'Restauration', category: 'Plat', name: '', price: 0, type: 'simple', components: [], refundable: true, stock: '' },
    { id: 'p27', group: 'Restauration', category: 'Dessert', name: '', price: 0, type: 'simple', components: [], refundable: true, stock: '' },
    { id: 'p28', group: 'Restauration', category: 'Dessert', name: '', price: 0, type: 'simple', components: [], refundable: true, stock: '' },
    { id: 'p29', group: 'Consignes', category: 'Consigne', name: 'Consigne gobelet', price: 1, type: 'simple', components: [], refundable: true, stock: '' },
    { id: 'p30', group: 'Consignes', category: 'Retour consigne', name: 'Retour gobelet', price: -1, type: 'simple', components: [], refundable: false, stock: '' }
  ]
};

const GROUP_ORDER = ['Boissons', 'Restauration', 'Consignes'];
const CATEGORIES = ['Boissons sans alcool', 'Boissons avec alcool', 'Boissons chaudes', 'Entrée', 'Plat', 'Fromage', 'Dessert', 'Consigne', 'Retour consigne'];
let config = normalizeConfig(JSON.parse(localStorage.getItem('caisse_config') || 'null') || DEFAULT_CONFIG);
let draftConfig = null;
let cart = [];
let paymentMethod = 'Espèces';
let paidCents = 0;
let orderNumber = Number(localStorage.getItem('caisse_order_number') || '1');
let sales = JSON.parse(localStorage.getItem('caisse_sales') || '[]');

const fmt = n => new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(n || 0);
const total = () => cart.reduce((sum, item) => sum + item.price * item.qty, 0);
const paidAmount = () => paidCents / 100;
function uid(prefix) { return prefix + '-' + Math.random().toString(36).slice(2, 8); }
function saveConfig() { localStorage.setItem('caisse_config', JSON.stringify(config)); }
function saveSales() { localStorage.setItem('caisse_sales', JSON.stringify(sales)); }
function saveOrderNumber() { localStorage.setItem('caisse_order_number', String(orderNumber)); }
function clone(obj) { return JSON.parse(JSON.stringify(obj)); }

function normalizeConfig(c) {
  const base = clone(DEFAULT_CONFIG);
  if (!c) return base;
  if (Array.isArray(c.products) && c.products[0] && !c.products[0].id) {
    c.products = c.products.map((p, i) => ({ id: 'p' + (i + 1), group: displayGroup(p.category), category: p.category || 'Plat', name: p.name || '', price: Number(p.price || 0), type: 'simple', components: [], refundable: true, stock: '' }));
  }
  c.eventName ||= base.eventName;
  c.orderPrefix ||= 'A';
  c.ticketColor ||= 'black';
  c.baseFoods ||= base.baseFoods;
  c.categoryColors ||= base.categoryColors;
  c.products ||= base.products;
  c.products.forEach((p, i) => { p.id ||= 'p' + (i + 1); p.group ||= displayGroup(p.category); p.type ||= 'simple'; p.components ||= []; p.refundable = p.refundable !== false; p.stock ??= ''; });
  c.baseFoods.forEach(f => { f.id ||= uid('food'); f.category ||= 'Viande'; f.stock ??= ''; });
  return c;
}

function displayGroup(cat) {
  if (String(cat).startsWith('Boissons')) return 'Boissons';
  if (String(cat).includes('Consigne') || String(cat).includes('consigne')) return 'Consignes';
  return 'Restauration';
}
function groupClass(group) { return 'group-' + slug(group); }
function slug(s) { return String(s).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }
function escapeHtml(str) { return String(str).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }
function options(arr, selected) { return arr.map(x => `<option ${x === selected ? 'selected' : ''}>${escapeHtml(x)}</option>`).join(''); }
function paletteOptions(selected) { return Object.entries(PALETTE).map(([k, v]) => `<option value="${k}" ${k === selected ? 'selected' : ''}>${v.label}</option>`).join(''); }

function colorFor(category) { return PALETTE[config.categoryColors?.[category]] || PALETTE.gris; }
function isTracked(v) { return v !== '' && v !== null && v !== undefined && !Number.isNaN(Number(v)); }
function stockAvailable(product) {
  if (product.price < 0) return true;
  if (product.type === 'simple' && isTracked(product.stock) && Number(product.stock) <= 0) return false;
  for (const id of product.components || []) {
    const p = config.products.find(x => x.id === id);
    const f = config.baseFoods.find(x => x.id === id);
    if (p && !stockAvailable(p)) return false;
    if (f && isTracked(f.stock) && Number(f.stock) <= 0) return false;
  }
  return true;
}

function renderProducts() {
  document.getElementById('eventName').textContent = config.eventName;
  document.documentElement.style.setProperty('--ticket-color', config.ticketColor);
  const wrap = document.getElementById('categories');
  const groups = {};
  config.products.forEach(p => (groups[p.group || displayGroup(p.category)] ||= []).push(p));
  wrap.innerHTML = GROUP_ORDER.map(group => {
    const products = groups[group] || [];
    return `<div class="category ${groupClass(group)}"><h3>${group}</h3><div class="product-grid">${products.map(productButtonHtml).join('')}</div></div>`;
  }).join('');
  document.querySelectorAll('.product-btn:not(.empty-product):not(.out-stock)').forEach(btn => btn.addEventListener('click', () => addProduct(btn.dataset.id)));
}
function productButtonHtml(p) {
  const col = colorFor(p.category);
  const style = `background:${col.bg};color:${col.fg}`;
  if (!p.name) return `<button class="product-btn empty-product" style="${style}" disabled><strong>Libre</strong><span>A paramétrer</span></button>`;
  const out = !stockAvailable(p);
  return `<button class="product-btn ${out ? 'out-stock' : ''}" style="${style}" data-id="${p.id}" ${out ? 'disabled' : ''}><strong>${escapeHtml(p.name)}</strong><span>${fmt(p.price)}${out ? ' - rupture' : ''}</span></button>`;
}
function addProduct(id) {
  const p = config.products.find(x => x.id === id);
  if (!p || !p.name) return;
  const line = cart.find(i => i.id === id);
  if (line) line.qty += 1;
  else cart.push({ id: p.id, name: p.name, price: p.price, qty: 1, refundable: p.refundable });
  if (paymentMethod === 'CB') paidCents = Math.round(total() * 100);
  renderCart();
}
function renderCart() {
  document.getElementById('orderNumber').textContent = `n° ${config.orderPrefix}${String(orderNumber).padStart(4, '0')}`;
  const list = document.getElementById('cartLines');
  if (!cart.length) { list.className = 'cart-lines empty'; list.textContent = 'Aucun produit'; }
  else {
    list.className = 'cart-lines';
    list.innerHTML = cart.map((item, index) => `<div class="cart-line"><div><div class="cart-name">${escapeHtml(item.name)}</div><div class="cart-unit">${fmt(item.price)} / unité</div></div><div class="qty-actions"><button data-action="minus" data-index="${index}">-</button><span class="qty-value">${item.qty}</span><button data-action="plus" data-index="${index}">+</button><button data-action="delete" data-index="${index}">x</button></div><div class="cart-total">${fmt(item.qty * item.price)}</div></div>`).join('');
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
function pressKey(key) { if (key === 'clear') paidCents = 0; else if (key === 'back') paidCents = Math.floor(paidCents / 10); else paidCents = Math.min(999999, paidCents * 10 + Number(key)); updatePayment(); }
function setQuickAmount(amount) { paidCents = Math.round(amount * 100); updatePayment(); }
function payAndPrint(method) { if (!cart.length) return alert('Commande vide'); paymentMethod = method; if (method === 'CB') paidCents = Math.round(total() * 100); if (method === 'Espèces' && paidAmount() < total()) return alert('Le montant payé est inférieur au total dû.'); updatePayment(); validateSale(); }

function consumeStock() {
  const consumeProduct = (id, qty) => {
    const p = config.products.find(x => x.id === id);
    if (!p) return;
    if (p.type === 'simple' && isTracked(p.stock)) p.stock = Math.max(0, Number(p.stock) - qty);
    (p.components || []).forEach(cid => {
      const childProduct = config.products.find(x => x.id === cid);
      const food = config.baseFoods.find(x => x.id === cid);
      if (childProduct) consumeProduct(childProduct.id, qty);
      if (food && isTracked(food.stock)) food.stock = Math.max(0, Number(food.stock) - qty);
    });
  };
  cart.forEach(i => { if (i.price >= 0) consumeProduct(i.id, i.qty); });
  saveConfig();
}
function buildTicket() {
  const number = `${config.orderPrefix}${String(orderNumber).padStart(4, '0')}`;
  const lines = cart.map(item => {
    const marker = item.qty > 5 ? '<span class="remaining-line"></span>' : Array.from({ length: Math.max(0, item.qty) }, () => '☐').join(' ');
    return `<div class="ticket-line"><div>${item.qty}</div><div class="ticket-product">${escapeHtml(item.name)}</div><div class="checks">${marker}</div><div class="ticket-price">${fmt(item.qty * item.price)}</div></div>`;
  }).join('');
  document.getElementById('printArea').innerHTML = `<div class="ticket-title">Commande n° ${number}</div>${lines}<div class="ticket-bottom">Paiement : ${paymentMethod}</div><div class="ticket-bottom">Total : ${fmt(total())}</div>`;
}
function validateSale() {
  buildTicket();
  sales.push({ orderNumber: `${config.orderPrefix}${String(orderNumber).padStart(4, '0')}`, date: new Date().toISOString(), paymentMethod, paid: paidAmount(), change: Math.max(0, paidAmount() - total()), total: total(), items: clone(cart) });
  consumeStock();
  saveSales();
  window.print();
  orderNumber += 1; saveOrderNumber(); cart = []; paidCents = 0; renderProducts(); renderCart();
}
function exportCsv() {
  const rows = [['commande','date','paiement','paye','rendu','produit','quantite','prix_unitaire','total_ligne','total_commande']];
  sales.forEach(s => s.items.forEach(i => rows.push([s.orderNumber, s.date, s.paymentMethod, s.paid || '', s.change || '', i.name, i.qty, i.price, i.qty * i.price, s.total])));
  const csv = rows.map(r => r.map(v => `"${String(v).replaceAll('"','""')}"`).join(';')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'ventes-caisse.csv'; a.click();
}

function openSettings() { draftConfig = clone(config); renderSettings(); document.getElementById('settingsDialog').showModal(); }
function renderSettings() { renderProductEditor(); renderFoodEditor(); renderStockEditor(); renderGeneralEditor(); }
function renderProductEditor() {
  const el = document.getElementById('productEditor');
  const componentOptions = [...draftConfig.baseFoods.map(f => [f.id, 'Aliment - ' + f.name]), ...draftConfig.products.filter(p => p.name).map(p => [p.id, 'Produit - ' + p.name])];
  el.innerHTML = draftConfig.products.map((p, i) => `<div class="editor-row"><div><small>Nom</small><input data-product="name" data-i="${i}" value="${escapeHtml(p.name)}"></div><div><small>Prix</small><input type="number" step="0.01" data-product="price" data-i="${i}" value="${p.price}"></div><div><small>Type</small><select data-product="type" data-i="${i}">${['simple','compose','menu'].map(t => `<option value="${t}" ${p.type === t ? 'selected' : ''}>${t}</option>`).join('')}</select></div><div><small>Catégorie</small><select data-product="category" data-i="${i}">${options(CATEGORIES, p.category)}</select></div><div><small>Composition</small><select multiple size="3" data-product="components" data-i="${i}">${componentOptions.filter(([id]) => id !== p.id).map(([id, label]) => `<option value="${id}" ${(p.components || []).includes(id) ? 'selected' : ''}>${escapeHtml(label)}</option>`).join('')}</select></div><div class="checkline"><input type="checkbox" data-product="refundable" data-i="${i}" ${p.refundable ? 'checked' : ''}> Remboursable</div></div>`).join('');
  el.querySelectorAll('[data-product]').forEach(x => x.addEventListener('change', updateProductDraft));
}
function updateProductDraft(e) {
  const i = Number(e.currentTarget.dataset.i), field = e.currentTarget.dataset.product, p = draftConfig.products[i];
  if (field === 'components') p.components = Array.from(e.currentTarget.selectedOptions).map(o => o.value);
  else if (field === 'refundable') p.refundable = e.currentTarget.checked;
  else if (field === 'price') p.price = Number(e.currentTarget.value || 0);
  else { p[field] = e.currentTarget.value; if (field === 'category') p.group = displayGroup(p.category); }
  if (field === 'type' && p.type === 'simple') p.components = [];
  renderStockEditor(); renderGeneralEditor();
}
function renderFoodEditor() {
  const el = document.getElementById('foodEditor');
  el.innerHTML = draftConfig.baseFoods.map((f, i) => `<div class="editor-row food"><div><small>Nom</small><input data-food="name" data-i="${i}" value="${escapeHtml(f.name)}"></div><div><small>Catégorie</small><select data-food="category" data-i="${i}"><option ${f.category === 'Viande' ? 'selected' : ''}>Viande</option><option ${f.category === 'Accompagnement' ? 'selected' : ''}>Accompagnement</option></select></div><button class="danger" data-delete-food="${i}">Supprimer</button></div>`).join('');
  el.querySelectorAll('[data-food]').forEach(x => x.addEventListener('change', e => { const f = draftConfig.baseFoods[Number(e.currentTarget.dataset.i)]; f[e.currentTarget.dataset.food] = e.currentTarget.value; renderProductEditor(); renderStockEditor(); }));
  el.querySelectorAll('[data-delete-food]').forEach(b => b.addEventListener('click', e => { const i = Number(e.currentTarget.dataset.deleteFood); draftConfig.baseFoods.splice(i, 1); draftConfig.products.forEach(p => p.components = (p.components || []).filter(id => draftConfig.baseFoods.some(f => f.id === id) || draftConfig.products.some(pp => pp.id === id))); renderSettings(); }));
}
function renderStockEditor() {
  const el = document.getElementById('stockEditor');
  const productRows = draftConfig.products.filter(p => p.name && p.type === 'simple').map(p => ({ kind: 'product', id: p.id, label: 'Produit simple - ' + p.name, value: p.stock }));
  const foodRows = draftConfig.baseFoods.map(f => ({ kind: 'food', id: f.id, label: 'Aliment - ' + f.name, value: f.stock }));
  el.innerHTML = [...productRows, ...foodRows].map(r => `<div class="editor-row stock"><div>${escapeHtml(r.label)}</div><input placeholder="vide = pas de suivi" data-stock-kind="${r.kind}" data-stock-id="${r.id}" value="${r.value ?? ''}"></div>`).join('');
  el.querySelectorAll('[data-stock-kind]').forEach(x => x.addEventListener('change', e => { const kind = e.currentTarget.dataset.stockKind, id = e.currentTarget.dataset.stockId; const obj = kind === 'product' ? draftConfig.products.find(p => p.id === id) : draftConfig.baseFoods.find(f => f.id === id); obj.stock = e.currentTarget.value.trim(); }));
}
function renderGeneralEditor() {
  document.getElementById('setEventName').value = draftConfig.eventName;
  document.getElementById('setPrefix').value = draftConfig.orderPrefix;
  document.getElementById('setTicketColor').value = draftConfig.ticketColor;
  const cats = Array.from(new Set([...CATEGORIES, ...draftConfig.products.map(p => p.category).filter(Boolean)]));
  document.getElementById('categoryColorEditor').innerHTML = cats.map(c => `<div class="editor-row color"><div>${escapeHtml(c)}</div><select data-cat-color="${escapeHtml(c)}">${paletteOptions(draftConfig.categoryColors[c] || 'gris')}</select></div>`).join('');
  document.querySelectorAll('[data-cat-color]').forEach(x => x.addEventListener('change', e => { draftConfig.categoryColors[e.currentTarget.dataset.catColor] = e.currentTarget.value; }));
}
function saveSettings() {
  draftConfig.eventName = document.getElementById('setEventName').value.trim() || 'Manifestation';
  draftConfig.orderPrefix = document.getElementById('setPrefix').value;
  draftConfig.ticketColor = document.getElementById('setTicketColor').value;
  config = normalizeConfig(draftConfig); saveConfig(); renderProducts(); renderCart(); document.getElementById('settingsDialog').close();
}

document.querySelectorAll('[data-key]').forEach(btn => btn.addEventListener('click', () => pressKey(btn.dataset.key)));
document.querySelectorAll('[data-quick]').forEach(btn => btn.addEventListener('click', () => setQuickAmount(Number(btn.dataset.quick))));
document.getElementById('btnExact').addEventListener('click', () => setQuickAmount(total()));
document.querySelectorAll('.pay').forEach(btn => btn.addEventListener('click', () => payAndPrint(btn.dataset.method)));
document.getElementById('btnPrintTicket').addEventListener('click', () => { if (cart.length) { buildTicket(); window.print(); } });
document.getElementById('btnClear').addEventListener('click', () => { cart = []; paidCents = 0; renderCart(); });
document.getElementById('btnExport').addEventListener('click', exportCsv);
document.getElementById('btnSettings').addEventListener('click', openSettings);
document.getElementById('btnCloseSettings').addEventListener('click', () => document.getElementById('settingsDialog').close());
document.getElementById('btnSaveSettings').addEventListener('click', saveSettings);
document.getElementById('btnAddFood').addEventListener('click', () => { draftConfig.baseFoods.push({ id: uid('food'), name: 'Nouvel aliment', category: 'Viande', stock: '' }); renderSettings(); });
document.getElementById('btnReset').addEventListener('click', () => { if (confirm('Réinitialiser tous les paramètres ?')) { draftConfig = clone(DEFAULT_CONFIG); renderSettings(); } });
document.querySelectorAll('.tab').forEach(btn => btn.addEventListener('click', () => { document.querySelectorAll('.tab').forEach(b => b.classList.remove('active')); document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active')); btn.classList.add('active'); document.getElementById('tab-' + btn.dataset.tab).classList.add('active'); }));
if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js');
renderProducts();
renderCart();
