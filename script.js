/* ═══════════════════════════════════════════════════════════════
   NATHRI AL AWALIN — Enhanced Script
   Features:
     • English / Arabic bilingual toggle (localStorage saved)
     • Cart persistence via localStorage
     • All original functionality preserved
   ═══════════════════════════════════════════════════════════════ */

/* ──────────────────────────────────────────
   1. TRANSLATION DICTIONARY
   ────────────────────────────────────────── */
const translations = {
  en: {
    navMenu: 'Menu',
    navAbout: 'About',
    heroBadge: '🍽 Traditional Saudi Cuisine',
    heroSub:
      'Authentic flavors passed down through generations — crafted with love, served with pride.',
    heroViewMenu: ' View Menu',
    heroOurStory: ' Our Story',
    stat1Num: '2+',
    stat1Label: 'Years of Excellence',
    stat2Num: '21+',
    stat2Label: 'Menu Items',
    stat3Num: '2K+',
    stat3Label: 'Happy Customers',
    stat4Num: '4.5★',
    stat4Label: 'Average Rating',
    tabChicken: 'Chicken',
    tabRice: 'Rice',
    tabMeat: 'Meat',
    tabVegetables: 'Vegetables',
    tabCondiments: 'Condiments & Sides',
    tabBeverages: 'Beverages',
    sectionChicken: 'Chicken',
    sectionRice: 'Rice Dishes',
    sectionMeat: 'Meat Dishes',
    sectionVegetables: 'Vegetables & Sides',
    sectionDrinks: 'Beverages',
    'whole Grilled Chicken': 'Whole Grilled Chicken',
    'Half Grilled Chicken': 'Half Grilled Chicken',
    'Quarter Grilled Chicken with Rice': 'Quarter Grilled Chicken with Rice',
    'Whole Chicken Mandi': 'Whole Chicken Mandi',
    'Half Chicken Mandi': 'Half Chicken Mandi',
    'Whole Al Faham Chicken': 'Whole Al Faham Chicken',
    'Half Al Faham Chicken': 'Half Al Faham Chicken',
    'Whole Chicken Madghout': 'Whole Chicken Madghout',
    'Half Chicken Madghout': 'Half Chicken Madghout',
    'Bukhari Rice': 'Bukhari Rice',
    'Peshawari Rice': 'Peshawari Rice',
    'American Rice': 'American Rice',
    'Mandi Rice': 'Mandi Rice',
    'Meat Mandi': 'Meat Mandi',
    'Mixed Vegetables': 'Mixed Vegetables',
    Pumpkin: 'Pumpkin',
    Okra: 'Okra',
    'Molokhia (Jute Leaves Curry)': 'Molokhia (Jute Leaves Curry)',
    Margoog: 'Margoog',
    'Jareesh (Crushed Wheat Stew)': 'Jareesh (Crushed Wheat Stew)',
    Pepsi: 'Pepsi',
    'Pepsi Diet': 'Pepsi Diet',
    'Medium Pepsi': 'Medium Pepsi',
    'Large Pepsi': 'Large Pepsi',
    '7UP': '7UP',
    '7UP Diet': '7UP Diet',
    '7UP Medium': '7UP Medium',
    '7UP Large': '7UP Large',
    Mirinda: 'Mirinda',
    'Mirinda Orange': 'Mirinda Orange',
    'Mirinda Medium': 'Mirinda Medium',
    'Mirinda Large': 'Mirinda Large',
    'Mountain Dew': 'Mountain Dew',
    'Mountain Dew Medium': 'Mountain Dew Medium',
    'Mountain Dew Large': 'Mountain Dew Large',
    'Almarai Laban': 'Almarai Laban',
    'Almarai Laban Medium': 'Almarai Laban Medium',
    'Almarai Laban Large': 'Almarai Laban Large',
    'Laban Al Qariah': 'Laban Al Qariah',
    'Laban Al Qariah Large': 'Laban Al Qariah Large',
    'Al Qariah Jelly': 'Al Qariah Jelly',
    badgePopular: 'Popular',
    badgeNew: 'New',
    cartTitle: 'Your Order',
    cartEmpty1: 'Your bag is empty',
    cartEmpty2: 'Add items from the menu',
    cartSubtotal: 'Subtotal',
    cartDelivery: 'Delivery fee',
    cartDeliveryVal: 'FREE',
    cartPlaceOrder: ' Place Order',
    addBtn: 'Add',
    pricePrefix: 'Price: ',
    aboutHeading: 'Our Story & Heritage',
    aboutP1:
      'Founded over 2 years ago in the heart of Saudi Arabia, Nathri Al Awalin was born from a passion for preserving authentic folk cuisines. Every dish tells a story of generations of culinary tradition.',
    aboutP2:
      'We source the finest local ingredients, use time-honored spice blends, and prepare everything fresh daily — ensuring every plate carries the warmth of home.',
    feat1Title: 'Charcoal Grilled',
    feat1Sub: 'Traditional cooking methods',
    feat2Title: 'Fresh Daily',
    feat2Sub: 'No frozen, no shortcuts',
    feat3Title: 'Fast Delivery',
    feat3Sub: '30–45 min to your door',
    testiHeading: 'What Our Guests Say',
    testiSub: 'Thousands of satisfied customers across the Kingdom',
    testi1:
      '"The food was very delicious, the staffs are very nice and generous. I recommend it to everyone"',
    testi1Author: 'ibrahim dgheish',
    testi1City: 'Riyadh',
    testi2: '"Delicious food and super friendly service! Recommended."',
    testi2Author: 'christophe dainelli',
    testi2City: 'Jeddah',
    testi3:
      '"They deserve it, may God reward them for the delicious food. It\'s best eaten locally."',
    testi3Author: 'mr thamer',
    testi3City: 'Dammam',
    ctaHeading: 'Ready to Order?',
    ctaSub: 'Fresh food delivered to your doorstep in 30–45 minutes',
    ctaOrderNow: ' Order Now',
    ctaCallUs: ' Call Us',
    ctaAddress: 'ابو بكر الصديق, Al Sukhayrat, AlUla 43522',
    ctaHours: 'Open daily 11:30AM – 12AM',
    ctaPhone: '+966 55 800 5662',
    footerBrandDesc:
      'Authentic Saudi cuisine, crafted with tradition and passion since 2024—serving the Kingdom one plate at a time.',
    footerMenuTitle: 'Menu',
    footerCompanyTitle: 'Company',
    footerContactTitle: 'Contact',
    footerChicken: 'Chicken',
    footerRice: 'Rice Dishes',
    footerMeat: 'Meat',
    footerVegetables: 'Vegetables',
    footerDrinks: 'Drinks',
    footerAbout: 'About Us',
    footerCareers: 'Careers',
    footerBlog: 'Blog',
    footerPress: 'Press',
    footerAddress: 'ابو بكر الصديق, Al Sukhayrat, AlUla 43522',
    footerPhone: '+966 55 800 5662',
    footerHours: 'Open 11:30AM – 12AM',
    footerCopy: '© 2024 Nathri Al Awalin. All rights reserved.',
    toastAlready: 'Item already added',
    waHeader: '*ORDER LIST*\n\n*Nathri Al Awalin Restaurant*\n\n',
    waPrice: '\n*PRICE:',
    totalPriceLabel: 'total price',
    confirmBtn: 'Confirm Order',
    cancelBtn: 'Cancel',
    langToggle: 'العربية',
  },

  ar: {
    navMenu: 'القائمة',
    navAbout: 'من نحن',
    heroBadge: '🍽 المطبخ السعودي الأصيل',
    heroSub:
      'نكهات أصيلة توارثناها جيلاً بعد جيل — صنعناها بحب وقدّمناها بفخر.',
    heroViewMenu: ' عرض القائمة',
    heroOurStory: ' قصتنا',
    stat1Num: '+2',
    stat1Label: 'سنوات من التميز',
    stat2Num: '+21',
    stat2Label: 'صنف في القائمة',
    stat3Num: '+2K',
    stat3Label: 'عميل سعيد',
    stat4Num: '4.5★',
    stat4Label: 'متوسط التقييم',
    tabChicken: 'دجاج',
    tabRice: 'أرز',
    tabMeat: 'لحم',
    tabVegetables: 'خضروات',
    tabCondiments: 'مرافق وإضافات',
    tabBeverages: 'مشروبات',
    sectionChicken: 'أطباق الدجاج',
    sectionRice: 'أطباق الأرز',
    sectionMeat: 'أطباق اللحم',
    sectionVegetables: 'الخضروات والمرافق',
    sectionDrinks: 'المشروبات',
    'whole Grilled Chicken': 'دجاجة مشوية كاملة',
    'Half Grilled Chicken': 'نصف دجاجة مشوية',
    'Quarter Grilled Chicken with Rice': 'ربع دجاجة مشوية مع أرز',
    'Whole Chicken Mandi': 'مندي دجاج كامل',
    'Half Chicken Mandi': 'مندي نصف دجاجة',
    'Whole Al Faham Chicken': 'دجاجة فحم كاملة',
    'Half Al Faham Chicken': 'نصف دجاجة فحم',
    'Whole Chicken Madghout': 'مدغوط دجاج كامل',
    'Half Chicken Madghout': 'مدغوط نصف دجاجة',
    'Bukhari Rice': 'أرز بخاري',
    'Peshawari Rice': 'أرز بيشاوري',
    'American Rice': 'أرز أمريكي',
    'Mandi Rice': 'أرز مندي',
    'Meat Mandi': 'مندي لحم',
    'Mixed Vegetables': 'خضروات مشكلة',
    Pumpkin: 'قرع عسلي',
    Okra: 'بامية',
    'Molokhia (Jute Leaves Curry)': 'ملوخية',
    Margoog: 'مرقوق',
    'Jareesh (Crushed Wheat Stew)': 'جريش',
    Pepsi: 'بيبسي',
    'Pepsi Diet': 'بيبسي دايت',
    'Medium Pepsi': 'بيبسي وسط',
    'Large Pepsi': 'بيبسي كبير',
    '7UP': '7UP',
    '7UP Diet': '7UP دايت',
    '7UP Medium': '7UP وسط',
    '7UP Large': '7UP كبير',
    Mirinda: 'ميرندا',
    'Mirinda Orange': 'ميرندا برتقال',
    'Mirinda Medium': 'ميرندا وسط',
    'Mirinda Large': 'ميرندا كبير',
    'Mountain Dew': 'ماونتن ديو',
    'Mountain Dew Medium': 'ماونتن ديو وسط',
    'Mountain Dew Large': 'ماونتن ديو كبير',
    'Almarai Laban': 'لبن المراعي',
    'Almarai Laban Medium': 'لبن المراعي وسط',
    'Almarai Laban Large': 'لبن المراعي كبير',
    'Laban Al Qariah': 'لبن القرية',
    'Laban Al Qariah Large': 'لبن القرية كبير',
    'Al Qariah Jelly': 'جيلي القرية',
    badgePopular: 'الأكثر طلباً',
    badgeNew: 'جديد',
    cartTitle: 'طلبك',
    cartEmpty1: 'سلتك فارغة',
    cartEmpty2: 'أضف أصنافاً من القائمة',
    cartSubtotal: 'المجموع',
    cartDelivery: 'رسوم التوصيل',
    cartDeliveryVal: 'مجاناً',
    cartPlaceOrder: ' تأكيد الطلب',
    addBtn: 'أضف',
    pricePrefix: 'السعر: ',
    aboutHeading: 'قصتنا وإرثنا',
    aboutP1:
      'تأسّس مطعم نثري الأولين منذ أكثر من عامين في قلب المملكة العربية السعودية، انطلاقاً من شغف حقيقي بالحفاظ على المأكولات الشعبية الأصيلة. كل طبق يحكي قصة أجيال من التراث الطهوي.',
    aboutP2:
      'نختار أجود المكوّنات المحلية، ونستخدم خلطات التوابل الموروثة، ونحضّر كل شيء طازجاً يومياً — لضمان أن كل طبق يحمل دفء البيت.',
    feat1Title: 'مشوي على الفحم',
    feat1Sub: 'طرق الطهي التقليدية',
    feat2Title: 'طازج يومياً',
    feat2Sub: 'لا مجمّد ولا اختصارات',
    feat3Title: 'توصيل سريع',
    feat3Sub: '30–45 دقيقة إلى بابك',
    testiHeading: 'ماذا يقول ضيوفنا',
    testiSub: 'آلاف العملاء السعداء في أنحاء المملكة',
    testi1: '«الطعام لذيذ جداً والموظفون ودودون وكرماء. أنصح به الجميع»',
    testi1Author: 'إبراهيم دغيش',
    testi1City: 'الرياض',
    testi2: '«طعام شهي وخدمة رائعة! موصى به.»',
    testi2Author: 'كريستوف داينيللي',
    testi2City: 'جدة',
    testi3: '«يستحقون كل الثناء، بارك الله فيهم على هذا الطعام اللذيذ.»',
    testi3Author: 'أبو ثامر',
    testi3City: 'الدمام',
    ctaHeading: 'جاهز للطلب؟',
    ctaSub: 'طعام طازج يُوصّل إلى باب بيتك خلال 30–45 دقيقة',
    ctaOrderNow: ' اطلب الآن',
    ctaCallUs: ' اتصل بنا',
    ctaAddress: 'أبو بكر الصديق، السخيرات، العُلا 43522',
    ctaHours: 'مفتوح يومياً 11:30ص – 12م',
    ctaPhone: '+966 55 800 5662',
    footerBrandDesc:
      'مأكولات سعودية أصيلة، مصنوعة بالتراث والشغف منذ 2024 — نخدم المملكة طبقاً بطبق.',
    footerMenuTitle: 'القائمة',
    footerCompanyTitle: 'الشركة',
    footerContactTitle: 'تواصل معنا',
    footerChicken: 'دجاج',
    footerRice: 'أطباق الأرز',
    footerMeat: 'لحم',
    footerVegetables: 'خضروات',
    footerDrinks: 'مشروبات',
    footerAbout: 'من نحن',
    footerCareers: 'الوظائف',
    footerBlog: 'المدونة',
    footerPress: 'الصحافة',
    footerAddress: 'أبو بكر الصديق، السخيرات، العُلا 43522',
    footerPhone: '+966 55 800 5662',
    footerHours: 'مفتوح 11:30ص – 12م',
    footerCopy: '© 2024 نثري الأولين. جميع الحقوق محفوظة.',
    toastAlready: 'الصنف مضاف بالفعل',
    waHeader: '*قائمة الطلب*\n\n*مطعم نثري الأولين*\n\n',
    waPrice: '\n*السعر الكلي:',
    totalPriceLabel: 'السعر الكلي',
    confirmBtn: 'تأكيد الطلب',
    cancelBtn: 'إلغاء',
    langToggle: 'English',
  },
};

/* ──────────────────────────────────────────
   2. STATE
   ────────────────────────────────────────── */
let currentLang = localStorage.getItem('nathri_lang') || 'en';
let countprice = 0;
let itemCount = 0;
const CART_KEY = 'nathri_cart';

/* ──────────────────────────────────────────
   3. HELPERS
   ────────────────────────────────────────── */
function normTitle(raw) {
  return raw.trim().replace(/\s+/g, ' ');
}

function getCartData() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
}

function saveCartData(arr) {
  localStorage.setItem(CART_KEY, JSON.stringify(arr));
}

function recalcTotals() {
  const cart = getCartData();
  countprice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  itemCount = cart.length;
  document.querySelector('#cartTotal').textContent = countprice;
  const show = document.querySelector('#cartCount');
  show.textContent = itemCount;
  show.style.display = itemCount > 0 ? 'block' : 'none';
}

function buildCartItemHTML(item) {
  const t = translations[currentLang];
  const name = t[item.title] || item.title;
  return `<div class="cart-item" data-title="${item.title}">
    <img class="cart-item-img" src="${item.img}" alt="${item.alt}">
    <div class="cart-item-info">
      <h4>${name}</h4>
      <div class="ci-price" data-price="${item.price}">${item.price * item.qty} SAR</div>
    </div>
    <div class="cart-qty">
      <button class="qty-btn substriction">−</button>
      <span class="qty-num">${item.qty}</span>
      <button class="qty-btn">+</button>
    </div>
    <button class="cart-remove"><i class="fa-solid fa-trash-can"></i></button>
  </div>`;
}

/* ──────────────────────────────────────────
   4. LANGUAGE TOGGLE BUTTON
   ────────────────────────────────────────── */
function injectLangToggle() {
  if (document.getElementById('langToggleBtn')) return;
  const nav = document.querySelector('.main ul');
  const li = document.createElement('li');
  li.innerHTML = `<button id="langToggleBtn" style="
    background:var(--primary);color:#fff;border:none;
    padding:0.4rem 1rem;border-radius:20px;cursor:pointer;
    font-size:0.85rem;font-family:inherit;font-weight:600;
    letter-spacing:0.02em;transition:opacity 0.2s;
  ">${translations[currentLang].langToggle}</button>`;
  nav.appendChild(li);

  document.getElementById('langToggleBtn').addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    localStorage.setItem('nathri_lang', currentLang);
    applyLanguage();
  });
}

/* ──────────────────────────────────────────
   5. APPLY LANGUAGE TO PAGE
   ────────────────────────────────────────── */
function applyLanguage() {
  const t = translations[currentLang];
  const isAr = currentLang === 'ar';

  document.documentElement.lang = currentLang;
  document.documentElement.dir = isAr ? 'rtl' : 'ltr';

  // Lang button
  const lb = document.getElementById('langToggleBtn');
  if (lb) lb.textContent = t.langToggle;

  // Navbar
  document.querySelectorAll('.main ul li a').forEach(a => {
    const icon = a.querySelector('i');
    const ic = icon ? icon.outerHTML + ' ' : '';
    if (a.getAttribute('href') === '#menu') a.innerHTML = ic + t.navMenu;
    if (a.getAttribute('href') === '#about') a.innerHTML = ic + t.navAbout;
  });

  // Hero
  const badge = document.querySelector('.heros-badge');
  if (badge) badge.textContent = t.heroBadge;
  const heroSub = document.querySelector('.heros-sub');
  if (heroSub) heroSub.textContent = t.heroSub;
  const bp = document.querySelector('.heros-cta .btn-primary');
  if (bp)
    bp.innerHTML = '<i class="fa-solid fa-utensils"></i>' + t.heroViewMenu;
  const bo = document.querySelector('.heros-cta .btn-outline');
  if (bo)
    bo.innerHTML = '<i class="fa-solid fa-circle-play"></i>' + t.heroOurStory;

  // Stats
  const statKeys = [
    [t.stat1Num, t.stat1Label],
    [t.stat2Num, t.stat2Label],
    [t.stat3Num, t.stat3Label],
    [t.stat4Num, t.stat4Label],
  ];
  document.querySelectorAll('.stat-item').forEach((el, i) => {
    if (!statKeys[i]) return;
    const n = el.querySelector('.num');
    const l = el.querySelector('.label');
    if (n) n.textContent = statKeys[i][0];
    if (l) l.textContent = statKeys[i][1];
  });

  // Category tabs
  const tabT = [
    t.tabChicken,
    t.tabRice,
    t.tabMeat,
    t.tabVegetables,
    t.tabCondiments,
    t.tabBeverages,
  ];
  document.querySelectorAll('.item-list h2').forEach((h2, i) => {
    if (tabT[i]) h2.textContent = tabT[i];
  });

  // Section headings
  [
    ['chicken', t.sectionChicken],
    ['rice', t.sectionRice],
    ['meat', t.sectionMeat],
    ['vegetables', t.sectionVegetables],
    ['drinks', t.sectionDrinks],
  ].forEach(([id, text]) => {
    const sec = document.getElementById(id);
    if (sec) {
      const h2 = sec.querySelector('.section-heading h2');
      if (h2) h2.textContent = text;
    }
  });

  // Product cards
  document.querySelectorAll('.chicken-item').forEach(card => {
    const h4 = card.querySelector('.chicken-text h4');
    if (h4) {
      const key = h4.getAttribute('data-en') || normTitle(h4.textContent);
      if (!h4.getAttribute('data-en')) h4.setAttribute('data-en', key);
      h4.textContent = t[key] || key;
    }
    // Price label (text node before span)
    const priceLabel = card.querySelector('.chicken-text .price-row .price');
    if (priceLabel) {
      priceLabel.childNodes.forEach(node => {
        if (node.nodeType === 3) node.textContent = t.pricePrefix;
      });
    }
    const btn = card.querySelector('.price-row button');
    if (btn) btn.textContent = t.addBtn;
    const pop = card.querySelector('.badge-pop');
    if (pop) pop.textContent = t.badgePopular;
    const nw = card.querySelector('.badge-new');
    if (nw) nw.textContent = t.badgeNew;
  });

  // Cart UI
  const ch = document.querySelector('.cart-header h3');
  if (ch)
    ch.innerHTML = `<i class="fa-solid fa-bag-shopping" style="color:var(--primary);margin-right:0.5rem"></i> ${t.cartTitle}`;
  const ce = document.querySelector('.cart-empty');
  if (ce) {
    const ps = ce.querySelectorAll('p');
    if (ps[0]) ps[0].textContent = t.cartEmpty1;
    if (ps[1]) ps[1].textContent = t.cartEmpty2;
  }
  const labels = document.querySelectorAll('.cart-total-label');
  if (labels[0]) labels[0].textContent = t.cartSubtotal;
  if (labels[1]) labels[1].textContent = t.cartDelivery;
  const freeEl = document.querySelector(
    '.cart-footer [style*="var(--teiray)"]',
  );
  if (freeEl) freeEl.textContent = t.cartDeliveryVal;
  const cob = document.querySelector('.checkout-btn');
  if (cob)
    cob.innerHTML =
      '<i class="fa-solid fa-bag-shopping"></i>' + t.cartPlaceOrder;

  // Cart items re-render labels
  document.querySelectorAll('#cartItems .cart-item').forEach(card => {
    const key = card.getAttribute('data-title');
    const h4 = card.querySelector('h4');
    if (h4 && key) h4.textContent = t[key] || key;
  });

  // About
  const ah2 = document.querySelector('.about-text h2');
  if (ah2) ah2.textContent = t.aboutHeading;
  const aps = document.querySelectorAll('.about-text > p');
  if (aps[0]) aps[0].textContent = t.aboutP1;
  if (aps[1]) aps[1].textContent = t.aboutP2;
  const feats = document.querySelectorAll('.feature-item');
  [
    [t.feat1Title, t.feat1Sub],
    [t.feat2Title, t.feat2Sub],
    [t.feat3Title, t.feat3Sub],
  ].forEach(([ti, su], i) => {
    if (!feats[i]) return;
    const fh4 = feats[i].querySelector('h4');
    const fp = feats[i].querySelector('p');
    if (fh4) fh4.textContent = ti;
    if (fp) fp.textContent = su;
  });

  // Testimonials
  const th2 = document.querySelector('.testimonials-header h2');
  if (th2) th2.textContent = t.testiHeading;
  const tp = document.querySelector('.testimonials-header p');
  if (tp) tp.textContent = t.testiSub;
  const tcards = document.querySelectorAll('.testimonial-card');
  [
    [t.testi1, t.testi1Author, t.testi1City],
    [t.testi2, t.testi2Author, t.testi2City],
    [t.testi3, t.testi3Author, t.testi3City],
  ].forEach(([q, a, c], i) => {
    if (!tcards[i]) return;
    const tp2 = tcards[i].querySelector('p');
    const ta = tcards[i].querySelector('h4');
    const tc = tcards[i].querySelector('.author-info span');
    if (tp2) tp2.textContent = q;
    if (ta) ta.textContent = a;
    if (tc) tc.textContent = c;
  });

  // CTA
  const ctah2 = document.querySelector('.cta-section h2');
  if (ctah2) ctah2.textContent = t.ctaHeading;
  const ctap = document.querySelector('.cta-section p');
  if (ctap) ctap.textContent = t.ctaSub;
  const ctaO = document.querySelector('.cta-btn-white');
  if (ctaO)
    ctaO.innerHTML = '<i class="fa-solid fa-utensils"></i>' + t.ctaOrderNow;
  const ctaC = document.querySelector('.cta-btn-dark');
  if (ctaC) ctaC.innerHTML = '<i class="fa-solid fa-phone"></i>' + t.ctaCallUs;
  const infos = document.querySelectorAll('.cta-info-item');
  if (infos[0])
    infos[0].innerHTML = `<i class="fa-solid fa-location-dot"></i> ${t.ctaAddress}`;
  if (infos[1])
    infos[1].innerHTML = `<i class="fa-solid fa-clock"></i> ${t.ctaHours}`;
  if (infos[2])
    infos[2].innerHTML = `<i class="fa-solid fa-phone"></i> ${t.ctaPhone}`;

  // Footer
  const fbp = document.querySelector('.footer-brand p');
  if (fbp) fbp.textContent = t.footerBrandDesc;
  const fcols = document.querySelectorAll('.footer-col');
  if (fcols[0]) {
    const fh = fcols[0].querySelector('h4');
    if (fh) fh.textContent = t.footerMenuTitle;
    const fls = fcols[0].querySelectorAll('a');
    [
      t.footerChicken,
      t.footerRice,
      t.footerMeat,
      t.footerVegetables,
      t.footerDrinks,
    ].forEach((l, i) => {
      if (fls[i]) fls[i].textContent = l;
    });
  }
  if (fcols[1]) {
    const fh = fcols[1].querySelector('h4');
    if (fh) fh.textContent = t.footerCompanyTitle;
    const fls = fcols[1].querySelectorAll('a');
    [t.footerAbout, t.footerCareers, t.footerBlog, t.footerPress].forEach(
      (l, i) => {
        if (fls[i]) fls[i].textContent = l;
      },
    );
  }
  if (fcols[2]) {
    const fh = fcols[2].querySelector('h4');
    if (fh) fh.textContent = t.footerContactTitle;
    const fls = fcols[2].querySelectorAll('a');
    if (fls[0]) fls[0].textContent = t.footerAddress;
    if (fls[1]) fls[1].textContent = t.footerPhone;
    if (fls[2]) fls[2].textContent = t.footerHours;
  }
  const fcp = document.querySelector('.footer-bottom p');
  if (fcp) fcp.textContent = t.footerCopy;

  // Checkout area
  const os = document.querySelector('.ordeer-sum');
  if (os) os.textContent = t.totalPriceLabel;
  const cb2 = document.querySelector('.confirm-btn');
  if (cb2) cb2.textContent = t.confirmBtn;
  const ccb = document.querySelector('.cancel-btn');
  if (ccb) ccb.textContent = t.cancelBtn;
}

/* ──────────────────────────────────────────
   6. RESTORE CART FROM LOCALSTORAGE
   ────────────────────────────────────────── */
function restoreCartFromStorage() {
  const cart = getCartData();
  if (!cart.length) return;
  const container = document.querySelector('#cartItems');
  document.querySelector('.cart-empty').style.display = 'none';
  cart.forEach(item =>
    container.insertAdjacentHTML('beforeend', buildCartItemHTML(item)),
  );
  recalcTotals();
}

/* ──────────────────────────────────────────
   7. CART SIDEBAR OPEN / CLOSE
   ────────────────────────────────────────── */
function careShow() {
  const showOrder = document.querySelector('.cart-btn');
  const cardClose = document.querySelector('.cart-close');
  showOrder.addEventListener('click', e => {
    e.preventDefault();
    const showCard = document.querySelector('.cart-sidebar');
    const overlay = document.querySelector('#cartOverlay');
    showCard.classList.add('open');
    overlay.classList.add('open');
    cardClose.addEventListener('click', e => {
      e.preventDefault();
      showCard.classList.remove('open');
      overlay.classList.remove('open');
    });
  });
}

/* ──────────────────────────────────────────
   8. ADD TO CART
   ────────────────────────────────────────── */
function addToCard() {
  document.querySelectorAll('.chicken-item .price-row button').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const card = btn.closest('.chicken-item');
      const img = card.querySelector('img');
      const h4 = card.querySelector('h4');
      const key = h4.getAttribute('data-en') || normTitle(h4.textContent);
      if (!h4.getAttribute('data-en')) h4.setAttribute('data-en', key);
      const priceSpan = card.querySelector(
        '.chicken-text .price-row .price span',
      );
      const cleanPrice = Number(
        priceSpan.textContent.replace('SAR', '').trim(),
      );

      const cart = getCartData();
      if (cart.some(i => i.title === key)) {
        singleItem();
        return;
      }

      const newItem = {
        title: key,
        img: img.src,
        alt: img.alt,
        price: cleanPrice,
        qty: 1,
      };
      cart.push(newItem);
      saveCartData(cart);

      document
        .querySelector('#cartItems')
        .insertAdjacentHTML('beforeend', buildCartItemHTML(newItem));
      document.querySelector('.cart-empty').style.display = 'none';
      recalcTotals();
    });
  });
}

/* ──────────────────────────────────────────
   9. QUANTITY CONTROLS (delegated)
   ────────────────────────────────────────── */
function qntPriceCount() {
  document.querySelector('#cartItems').addEventListener('click', e => {
    e.preventDefault();
    const closItem = e.target.closest('.cart-item');
    if (!closItem) return;
    const key = closItem.getAttribute('data-title');
    const numEl = closItem.querySelector('.qty-num');
    const priceEl = closItem.querySelector('.ci-price');
    const totalEl = document.querySelector('#cartTotal');
    let qty = Number(numEl.textContent);
    const base = Number(priceEl.dataset.price);
    let total = Number(totalEl.textContent);

    if (
      e.target.classList.contains('qty-btn') &&
      e.target.textContent === '+'
    ) {
      qty++;
      numEl.textContent = qty;
      priceEl.textContent = `${qty * base} SAR`;
      totalEl.textContent = total + base;
      countprice = total + base;
      const cart = getCartData();
      const it = cart.find(i => i.title === key);
      if (it) {
        it.qty = qty;
        saveCartData(cart);
      }
    }

    if (e.target.classList.contains('substriction') && qty > 1) {
      qty--;
      numEl.textContent = qty;
      priceEl.textContent = `${qty * base} SAR`;
      totalEl.textContent = total - base;
      countprice = total - base;
      const cart = getCartData();
      const it = cart.find(i => i.title === key);
      if (it) {
        it.qty = qty;
        saveCartData(cart);
      }
    }
  });
}

/* ──────────────────────────────────────────
   10. DELETE ITEM
   ────────────────────────────────────────── */
function deletItem() {
  const contain = document.querySelector('#cartItems');
  contain.addEventListener('click', e => {
    e.preventDefault();
    if (!e.target.closest('.cart-remove')) return;
    const removeItem = e.target.closest('.cart-item');
    const key = removeItem.getAttribute('data-title');
    saveCartData(getCartData().filter(i => i.title !== key));
    removeItem.remove();
    recalcTotals();
    if (!contain.querySelector('.cart-item')) {
      document.querySelector('.cart-empty').style.display = 'block';
    }
  });
}

/* ──────────────────────────────────────────
   11. SCROLL TO SECTION (exposed globally)
   ────────────────────────────────────────── */
function scrollToSection(id, el) {
  document
    .querySelectorAll('.item-list')
    .forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  const sec = document.getElementById(id);
  const top = sec.getBoundingClientRect().top + window.scrollY - 130;
  window.scrollTo({ top, behavior: 'smooth' });
}
window.scrollToSection = scrollToSection;

/* ──────────────────────────────────────────
   12. TOAST
   ────────────────────────────────────────── */
function singleItem() {
  const t = translations[currentLang];
  const pop = document.querySelector('#toast');
  document.querySelector('#toastMsg').textContent = t.toastAlready;
  pop.classList.add('show');
  setTimeout(() => pop.classList.remove('show'), 2000);
}

/* ──────────────────────────────────────────
   13. PRODUCT COUNT (category badges)
   ────────────────────────────────────────── */
function productcount() {
  [
    ['#chicken-items-total', '#chicken-Total'],
    ['#rice-items-total', '#rice-Total'],
    ['#meat-items-total', '#meat-Total'],
    ['#vegetables-items-total', '#vegetables-Total'],
    ['#drinks-items-total', '#drinks-Total'],
  ].forEach(([li, ti]) => {
    const list = document.querySelector(li);
    const total = document.querySelector(ti);
    if (list && total) total.textContent = `${list.childElementCount} items`;
  });
}

/* ──────────────────────────────────────────
   14. CHECKOUT (WhatsApp)
   ────────────────────────────────────────── */
function ShowTotalPrice() {
  document.querySelector('.checkout-btn').addEventListener('click', e => {
    e.preventDefault();
    const cart = getCartData();
    if (!cart.length) return;
    const t = translations[currentLang];
    let msg = t.waHeader;
    cart.forEach(item => {
      const name = t[item.title] || item.title;
      msg += ` • (${item.qty})➞${name}➞${item.price * item.qty} SAR\n`;
    });
    msg += `${t.waPrice} ${document.querySelector('#cartTotal').textContent} SAR*`;
    window.open(
      `https://wa.me/966558005662?text=${encodeURIComponent(msg)}`,
      '_blank',
    );
  });
}

/* ──────────────────────────────────────────
   15. INIT
   ────────────────────────────────────────── */
function display() {
  // Stamp each product h4 with its English key before any translation
  document.querySelectorAll('.chicken-item h4').forEach(h4 => {
    if (!h4.getAttribute('data-en')) {
      h4.setAttribute('data-en', normTitle(h4.textContent));
    }
  });

  injectLangToggle();
  restoreCartFromStorage();
  applyLanguage();

  careShow();
  addToCard();
  qntPriceCount();
  deletItem();
  ShowTotalPrice();
  productcount();
}

display();
