// ====== Build sidebar dinamis + menu hamburger untuk mobile ======
(function () {
  const links = [
    { href: './index.html',       text: 'Home',             icon: '🏠' },
    { href: './historia.html',    text: 'Historia',         icon: '📖' },
    { href: './lian-bunak.html',  text: 'Lian Bunak',       icon: '🗣️' },
    { href: './kultura.html',     text: 'Kultura',          icon: '🎎' },
    { href: './galeria.html',     text: 'Galeria',          icon: '📸' },
    { href: './artigu.html',      text: 'Artigu / Blog',    icon: '📰' },
    { href: './about.html',       text: 'Kontaktu / About', icon: '📞' },
  ];

  const sb = document.querySelector('.sidebar');
  if (!sb) return;

  // tentukan halaman aktif dengan aman (mendukung GH Pages /myblog/ & home "/")
  const path = location.pathname;
  const lastSeg = path.endsWith('/') ? 'index.html' : path.split('/').pop();

  // tombol hamburger (muncul di mobile)
  const toggle = document.createElement('button');
  toggle.className = 'menu-toggle';
  toggle.setAttribute('aria-label', 'Open menu');
  toggle.innerHTML = '<span>Menu</span><span style="font-size:22px">☰</span>';

  // daftar menu
  const nav = document.createElement('nav');
  nav.className = 'nav flex-column';
  nav.setAttribute('aria-label', 'Sidebar navigation');

  nav.innerHTML = links.map(l => {
    const isActive = lastSeg === l.href.replace('./','');
    return `<a class="nav-link${isActive ? ' active' : ''}" href="${l.href}">
              <span style="margin-right:8px">${l.icon}</span>${l.text}
            </a>`;
  }).join('');

  // logo
  const logo = document.createElement('div');
  logo.className = 'logo';
  logo.textContent = 'BUNAK HERITAGE';

  // render
  sb.innerHTML = '';
  sb.appendChild(logo);
  sb.appendChild(toggle);
  sb.appendChild(nav);

  // interaksi mobile
  toggle.addEventListener('click', () => {
    sb.classList.toggle('open');
  });
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => sb.classList.remove('open'));
  });

  // jika kamu punya fungsi translatePage(), tetap dipanggil
  if (typeof translatePage === 'function') {
    translatePage();
  }
})();
