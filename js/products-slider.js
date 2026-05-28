document.addEventListener("DOMContentLoaded", () => {
  const featuredImage = document.getElementById("featuredImage");
  const featuredTitle = document.getElementById("featuredTitle");
  const featuredPrice = document.getElementById("featuredPrice");
  const dots = document.querySelectorAll(".dot");

  const featuredProducts = [
    {
      image: "./public/assets/products/parmasan.jpg",
      title: "Gowala Parmesan",
      price: "89,-",
    },
    {
      image: "./public/assets/products/gouda.jpg",
      title: "Gowala Gouda",
      price: "149,-",
    },
    {
      image: "./public/assets/products/butter.jpg",
      title: "Gowala Smør",
      price: "39,-",
    },
  ];

  let currentProduct = 0;

  function showProduct(index) {
    if (!featuredImage || !featuredTitle || !featuredPrice) return;

    featuredImage.src = featuredProducts[index].image;
    featuredTitle.textContent = featuredProducts[index].title;
    featuredPrice.textContent = featuredProducts[index].price;

    dots.forEach((dot) => dot.classList.remove("active"));

    if (dots[index]) {
      dots[index].classList.add("active");
    }
  }

  setInterval(() => {
    currentProduct = (currentProduct + 1) % featuredProducts.length;
    showProduct(currentProduct);
  }, 3000);
});
