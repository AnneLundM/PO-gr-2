const servicesRoot = document.getElementById("services-rows");

/* RENDER */

function renderServiceRows(articles) {
  servicesRoot.innerHTML = articles
    .map((article, index) => {
      const reverseClass = index % 2 === 1 ? " service-row--reverse" : "";

      const checksHTML = article.list
        .map((item) => `<li><span>✓</span>${item}</li>`)
        .join("");

      return `
        <article class="service-row${reverseClass}">
          <img
            src="${article.image}"
            alt="${article.title}"
            class="service-row__image"
          />
          <div class="service-row__text">
            <h2>${article.title}</h2>
            <p>${article.description}</p>
            <ul class="service-checks">
              ${checksHTML}
            </ul>
          </div>
        </article>
      `;
    })
    .join("");
}

/* FETCH */

if (servicesRoot) {
  fetch("./public/data/articles.json")
    .then((res) => res.json())
    .then((data) => {
      const articles = data.data.slice(0, 3);
      renderServiceRows(articles);
    })
    .catch((err) => console.error("Failed to load articles:", err));
}
