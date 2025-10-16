document.querySelector('.sidebar').innerHTML = `
    <div class="logo">BUNAK HERITAGE</div>
    <nav class="nav flex-column">
        <a class="nav-link${location.pathname.endsWith('index.html') ? ' active' : ''}" href="index.html">🏠 Home</a>
        <a class="nav-link${location.pathname.endsWith('historia.html') ? ' active' : ''}" href="historia.html">📖 Historia</a>
        <a class="nav-link${location.pathname.endsWith('lian-bunak.html') ? ' active' : ''}" href="lian-bunak.html">🗣️ Lian Bunak</a>
        <a class="nav-link${location.pathname.endsWith('kultura.html') ? ' active' : ''}" href="kultura.html">🎎 Kultura</a>
        <a class="nav-link${location.pathname.endsWith('galeria.html') ? ' active' : ''}" href="galeria.html">📸 Galeria</a>
        <a class="nav-link${location.pathname.endsWith('artigu.html') ? ' active' : ''}" href="artigu.html">📰 Artigu / Blog</a>
        <a class="nav-link${location.pathname.endsWith('about.html') ? ' active' : ''}" href="about.html">📞 Kontaktu / About</a>
    </nav>
    `;


translatePage();