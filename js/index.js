import "./slider.js";
import "./mobil-menu.js";
import "./products-slider.js";

const headerTemplate = `
<header class="site-header" aria-label="Hovednavigation">
  <a class="site-header__brand" href="./index.html" aria-label="Gowala Farms forsiden">
    <img src="./public/assets/backgrounds/logo.png" alt="Gowala Farms logo" class="site-header__logo" />
  </a>
  <div class="site-header__actions">
    <nav class="site-header__nav" aria-label="Primær navigation">
      <ul class="site-header__menu">
        <li><a href="./shop.html">Shop</a></li>
        <li><a href="./services.html">Services</a></li>
        <li><a href="./om.html">Om</a></li>
        <li><a href="./kontakt.html">Kontakt</a></li>
        <li><a href="./checkout.html">Checkout</a></li>
      </ul>
    </nav>
    <a class="site-header__checkout" href="./checkout.html" aria-label="Gaa til checkout">
      <svg class="site-header__cart" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M6 6h15l-1.5 7.5H8.2L6 6Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" />
        <path d="M7.5 6 7 3.8H3.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <circle cx="9.3" cy="18.2" r="1.5" fill="currentColor" />
        <circle cx="17.2" cy="18.2" r="1.5" fill="currentColor" />
      </svg>
    </a>
  </div>
</header>
`;

const footerTemplate = `
<section class="footer-newsletter" aria-label="Nyhedsbrev">
  <div class="footer-newsletter__panel">
    <h2>Nyhedsbrev</h2>
    <p class="footer-newsletter__lead">Få nyhederne fra gården på din mail.</p>
    <p class="footer-newsletter__sub">
      Tilmeld dig vores nyhedsbrev - så kan du altid følge med i, hvad der sker på farmen.
    </p>
    <form class="footer-newsletter__form">
      <input type="email" placeholder="Din email" aria-label="Din email" />
      <button type="submit">Tilmeld</button>
    </form>
  </div>
</section>
<section class="sponsors" aria-label="Sponsorer">
  <img src="./public/assets/sponsors/01.png" alt="Organic badge" />
  <img src="./public/assets/sponsors/02.png" alt="Quality products" />
  <img src="./public/assets/sponsors/03.png" alt="Premium quality" />
  <img src="./public/assets/sponsors/04.png" alt="Premium quality logo" />
  <img src="./public/assets/sponsors/05.png" alt="Eco quality" />
</section>
<footer class="site-footer" aria-label="Kontakt og footer">
  <div class="site-footer__content">
    <img src="./public/assets/backgrounds/logo.png" alt="Gowala Farms logo" class="site-footer__logo" />
    <p class="site-footer__description">
      Gowala Farms er en dedikeret gård, der producerer friske mejeriprodukter og kvalitetskød med fokus på dyrevelfærd, bæredygtighed og autentisk smag.
    </p>
    <ul class="site-footer__list">
      <li>
        <span class="site-footer__icon">●</span>
        +88130-589-745-6987<br />
        +1655-456-532
      </li>
      <li>
        <span class="site-footer__icon">●</span>
        Man - Fre (09:00 - 18:00)<br />
        (undtagen helligdage)
      </li>
      <li>
        <span class="site-footer__icon">●</span>
        Mejerigade 14<br />
        Mejeby
      </li>
    </ul>
  </div>
</footer>
<section class="site-footer-credits" aria-label="Copyright">
  <p>
    © 2024 <span>Gowala</span>. All rights Reserved By<br />
    <span>LabArtisian & Viborg Media College</span>
  </p>
</section>
`;

async function injectPartial(targetId, url, fallbackMarkup) {
  const target = document.getElementById(targetId);

  if (!target) {
    return;
  }

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Kunne ikke hente ${url}`);
    }

    target.innerHTML = await response.text();
  } catch {
    target.innerHTML = fallbackMarkup;
  }
}

await Promise.all([
  injectPartial("header-root", "./header.html", headerTemplate),
  injectPartial("footer-root", "./footer.html", footerTemplate),
]);
