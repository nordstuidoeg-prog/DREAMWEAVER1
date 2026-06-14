/* =========================================================
   DREAMWEAVERS — script.js
   Edit PRODUCTS below to update the shop. Edit CONFIG for
   quick appearance tweaks without touching CSS variables.
   ========================================================= */

const CONFIG = {
  currency: 'LE',
  currencyAlt: 'ج.م',
  instagramHandle: 'dreamweaverswear',
  instagramUrl: 'https://www.instagram.com/dreamweaverswear/',
  tiktokUrl: 'https://www.tiktok.com/@dreamweaverswear',
  facebookUrl: 'https://www.facebook.com/profile.php?id=61582313214934',
  shopUrl: '#products',
  announcementMessages: [
    'Winter Collection is live · Limited batches',
    'Free shipping over LE 1,500 · Egypt & KSA',
    'No fast fashion. No mass production. Just character.',
  ],
};

const PRODUCTS = [
  {
    id: 1,
    name: 'Cosmic Canvas Denim Jacket',
    price: 499,
    originalPrice: 1500,
    image: 'images/IBRA0309.webp',
    soldOut: true,
    category: 'unisex',
  },
  {
    id: 2,
    name: 'The Dreamworld Leather Jacket',
    price: 499,
    originalPrice: 2000,
    image: 'images/IBRA0012.webp',
    soldOut: true,
    category: 'unisex',
  },
  {
    id: 3,
    name: 'The Dreamer Biker Jacket',
    price: 499,
    originalPrice: 2000,
    image: 'images/IBRA0327.webp',
    soldOut: false,
    category: 'men',
  },
  {
    id: 4,
    name: 'The Daydream Jacket',
    price: 499,
    originalPrice: 2000,
    image: 'images/IBRA0163.webp',
    soldOut: true,
    category: 'unisex',
  },
  {
    id: 5,
    name: 'The Dream Bloom Jacket',
    price: 499,
    originalPrice: 999,
    image: 'images/IBRA0257.webp',
    soldOut: false,
    category: 'women',
  },
  {
    id: 6,
    name: 'Gemini Wide-Legged Pants',
    price: 499,
    originalPrice: 999,
    image: 'images/IBRA0021_e086049d-1f6d-4aa8-86d5-c07156ab01d8.webp',
    soldOut: false,
    category: 'unisex',
  },
  {
    id: 7,
    name: 'The Dream Henley Shirt',
    price: 499,
    originalPrice: 999,
    image: 'images/prod-7.jpg',
    soldOut: false,
    category: 'men',
  },
  {
    id: 8,
    name: 'Infinity Sweater',
    price: 499,
    originalPrice: 799,
    image: 'images/prod-8.jpg',
    soldOut: false,
    category: 'unisex',
  },
  {
    id: 9,
    name: 'The Autumn Nomad Linen Shacket',
    price: 499,
    originalPrice: 799,
    image: 'images/prod-9.jpg',
    soldOut: false,
    category: 'unisex',
  },
  {
    id: 10,
    name: 'The Daydream Henley',
    price: 499,
    originalPrice: 799,
    image: 'images/prod-10.jpg',
    soldOut: false,
    category: 'men',
  },
  {
    id: 11,
    name: 'The Starlight Hoodie',
    price: 499,
    originalPrice: 750,
    image: 'images/prod-11.jpg',
    soldOut: false,
    category: 'unisex',
  },
  {
    id: 12,
    name: 'The Honey Moon Hoodie',
    price: 499,
    originalPrice: 499,
    image: 'images/prod-12.jpg',
    soldOut: false,
    category: 'unisex',
  },
  {
    id: 13,
    name: 'The Dream Cloud Sweater',
    price: 499,
    originalPrice: 499,
    image: 'images/prod-13.jpg',
    soldOut: false,
    category: 'unisex',
  },
  {
    id: 14,
    name: 'The Dream Thread Mohair Polo',
    price: 499,
    originalPrice: 499,
    image: 'images/prod-14.jpg',
    soldOut: false,
    category: 'men',
  },
  {
    id: 15,
    name: 'The Dreamline Quarter-Zip',
    price: 499,
    originalPrice: 499,
    image: 'images/prod-15.jpg',
    soldOut: false,
    category: 'unisex',
  },
  {
    id: 16,
    name: 'The Midnight Wash Shirt',
    price: 499,
    originalPrice: 499,
    image: 'images/prod-16.jpg',
    soldOut: false,
    category: 'men',
  },
  {
    id: 17,
    name: 'The Smoky Nights Skirt',
    price: 499,
    originalPrice: 499,
    image: 'images/prod-17.jpg',
    soldOut: false,
    category: 'women',
  },
  {
    id: 18,
    name: 'This Is Not a Hoodie',
    price: 499,
    originalPrice: 499,
    image: 'images/prod-18.jpg',
    soldOut: true,
    category: 'unisex',
  },
];

/* ---- Announcement bar rotator ---- */
(function initAnnouncement() {
  const track = document.getElementById('ann-track');
  const dismiss = document.getElementById('ann-dismiss');
  const bar = document.getElementById('ann-bar');
  if (!track || !bar) return;

  let idx = 0;
  const msgs = CONFIG.announcementMessages;

  function rotate() {
    track.style.opacity = '0';
    track.style.transform = 'translateY(6px)';
    setTimeout(() => {
      idx = (idx + 1) % msgs.length;
      track.textContent = msgs[idx];
      track.style.opacity = '1';
      track.style.transform = 'translateY(0)';
    }, 300);
  }

  const iv = setInterval(rotate, 4000);

  dismiss && dismiss.addEventListener('click', () => {
    bar.style.height = bar.offsetHeight + 'px';
    bar.style.overflow = 'hidden';
    requestAnimationFrame(() => {
      bar.style.transition = 'height 0.35s ease, opacity 0.35s ease';
      bar.style.height = '0';
      bar.style.opacity = '0';
    });
    setTimeout(() => bar.remove(), 380);
    clearInterval(iv);
  });
})();

/* ---- Header scroll behaviour ---- */
(function initHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;
  let lastY = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    header.classList.toggle('scrolled', y > 40);
    header.classList.toggle('hidden', y > lastY && y > 200);
    lastY = y;
  }, { passive: true });
})();

/* ---- Mobile nav toggle ---- */
(function initMobileNav() {
  const toggle = document.getElementById('nav-toggle');
  const drawer = document.getElementById('nav-drawer');
  const overlay = document.getElementById('nav-overlay');
  if (!toggle || !drawer) return;

  function open() {
    drawer.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    toggle.setAttribute('aria-expanded', 'true');
  }
  function close() {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', () => {
    drawer.classList.contains('open') ? close() : open();
  });
  overlay.addEventListener('click', close);
  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
})();

/* ---- Build product grid ---- */
(function initProducts() {
  const grid = document.getElementById('product-grid');
  if (!grid) return;

  const PLACEHOLDER_COLORS = [
    'linear-gradient(135deg,#1a1525 0%,#2a1f3d 100%)',
    'linear-gradient(135deg,#0f1a24 0%,#1a2a35 100%)',
    'linear-gradient(135deg,#1a1010 0%,#2d1a0e 100%)',
    'linear-gradient(135deg,#0a1a15 0%,#0e2a20 100%)',
    'linear-gradient(135deg,#151515 0%,#252525 100%)',
    'linear-gradient(135deg,#1a1520 0%,#2a2035 100%)',
  ];

  PRODUCTS.forEach((p, i) => {
    const save = p.originalPrice > p.price
      ? Math.round((1 - p.price / p.originalPrice) * 100)
      : 0;

    const card = document.createElement('article');
    card.className = 'product-card' + (p.soldOut ? ' sold-out' : '');
    card.dataset.category = p.category;

    card.innerHTML = `
      <div class="product-img-wrap">
        <img
          src="${p.image}"
          alt="${p.name}"
          loading="lazy"
          onerror="this.style.display='none';this.parentElement.classList.add('img-placeholder')"
        />
        <span class="placeholder-label">${p.name.split(' ').slice(0, 2).join(' ')}</span>
        ${save > 0 ? `<span class="badge-save">Save ${save}%</span>` : ''}
        ${p.soldOut ? '<div class="sold-out-overlay"><span>SOLD OUT</span></div>' : ''}
      </div>
      <div class="product-info">
        <h3 class="product-name">${p.name}</h3>
        <div class="product-pricing">
          <span class="price-sale">${CONFIG.currency} ${p.price.toLocaleString()}</span>
          ${p.originalPrice > p.price
            ? `<span class="price-orig">${CONFIG.currency} ${p.originalPrice.toLocaleString()}</span>`
            : ''}
        </div>
        <button class="btn-shop${p.soldOut ? ' btn-soldout' : ''}" aria-label="Shop ${p.name}" ${p.soldOut ? 'disabled' : ''}>
          ${p.soldOut ? 'Sold Out' : 'Shop'}
        </button>
      </div>
    `;

    /* set placeholder bg */
    const wrap = card.querySelector('.product-img-wrap');
    wrap.style.setProperty('--ph-bg', PLACEHOLDER_COLORS[i % PLACEHOLDER_COLORS.length]);

    grid.appendChild(card);
  });
})();

/* ---- Product filter tabs ---- */
(function initFilter() {
  const tabs = document.querySelectorAll('[data-filter]');
  const grid = document.getElementById('product-grid');
  if (!tabs.length || !grid) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.dataset.filter;
      grid.querySelectorAll('.product-card').forEach(card => {
        const show = cat === 'all' || card.dataset.category === cat;
        card.style.display = show ? '' : 'none';
      });
    });
  });
})();

/* ---- Email capture ---- */
(function initEmail() {
  const form = document.getElementById('email-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const input = form.querySelector('input[type="email"]');
    const success = document.getElementById('email-success');
    if (success) {
      success.style.display = 'block';
      form.style.display = 'none';
    }
    input && (input.value = '');
  });
})();

/* ---- Scroll reveal ---- */
(function initReveal() {
  const els = document.querySelectorAll('[data-reveal]');
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => obs.observe(el));
})();

/* ---- Lookbook drag scroll ---- */
(function initLookbook() {
  const track = document.querySelector('.lookbook-track');
  if (!track) return;
  let isDown = false, startX, scrollLeft;
  track.addEventListener('mousedown', e => {
    isDown = true;
    track.classList.add('dragging');
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });
  track.addEventListener('mouseleave', () => { isDown = false; track.classList.remove('dragging'); });
  track.addEventListener('mouseup', () => { isDown = false; track.classList.remove('dragging'); });
  track.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    track.scrollLeft = scrollLeft - (x - startX) * 1.5;
  });
})();

/* ---- Sticky mobile bar CTA ---- */
(function initMobileBar() {
  const bar = document.getElementById('mobile-bar');
  if (!bar) return;
  let shown = false;
  window.addEventListener('scroll', () => {
    const should = window.scrollY > 400;
    if (should !== shown) {
      bar.classList.toggle('visible', should);
      shown = should;
    }
  }, { passive: true });
})();

/* ---- Hero parallax (subtle, only on desktop) ---- */
(function initParallax() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const hero = document.querySelector('.hero-bg');
  if (!hero) return;
  window.addEventListener('scroll', () => {
    if (window.innerWidth < 768) return;
    hero.style.transform = `translateY(${window.scrollY * 0.3}px)`;
  }, { passive: true });
})();
