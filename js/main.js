// nav
const toggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

toggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// specific category

const categoryItems = document.querySelectorAll(".category-item");

categoryItems.forEach((item) => {
  item.addEventListener("click", function () {
    const category = this.getAttribute("data-category");

    localStorage.setItem("selectedCategory", category);

    window.location.href = "specific-category.html";
  });
});
function loadSpecificCategory() {
  const categoryTitle = document.querySelector(".product-categories h2");

  if (categoryTitle) {
    const selectedCategory =
      localStorage.getItem("selectedCategory") || "STRENGTH";

    categoryTitle.textContent = selectedCategory + " EQUIPMENT";

    loadProductsByCategory(selectedCategory);

    const categoryLinks = document.querySelectorAll(".category-list a");

    categoryLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();

        categoryLinks.forEach((l) => l.classList.remove("active-category"));
        this.classList.add("active-category");

        const category = this.textContent;
        localStorage.setItem("selectedCategory", category);

        categoryTitle.textContent = category + " EQUIPMENT";
        loadProductsByCategory(category);
      });
    });

    // Tambahkan class active ke link yang sesuai dengan selectedCategory
    categoryLinks.forEach((link) => {
      if (link.textContent === selectedCategory) {
        link.classList.add("active-category");
      }
    });
  }
}

function loadProductsByCategory(category) {
  const productData = {
    STRENGTH: [
      {
        image: "./assets/images/multi-gym-1.jpg",
        name: "MULTI GYM 1 SISI",
        price: "Rp 8.500.000",
      },
      {
        image: "./assets/images/multi-gym-2.jpg",
        name: "MULTI GYM 2 SISI",
        price: "Rp 16.900.000",
      },
      {
        image: "./assets/images/superlative.jpg",
        name: "SUPERLATIVE SUPER RACK",
        price: "Rp 15.900.000 - Rp 35.900.000",
      },
      {
        image: "./assets/images/category.jpg",
        name: "Power Rack",
        price: "Rp 12.000.000",
      },
    ],
    CARDIO: [
      {
        image: "./assets/images/category.jpg",
        name: "Treadmill",
        price: "Rp 25.000.000",
      },
      {
        image: "./assets/images/category.jpg",
        name: "Exercise Bike",
        price: "Rp 15.000.000",
      },
      {
        image: "./assets/images/category.jpg",
        name: "Elliptical",
        price: "Rp 18.000.000",
      },
      {
        image: "./assets/images/category.jpg",
        name: "Rowing Machine",
        price: "Rp 20.000.000",
      },
    ],
    PACKAGES: [
      {
        image: "./assets/images/category.jpg",
        name: "Home Gym Package",
        price: "Rp 30.000.000",
      },
      {
        image: "./assets/images/category.jpg",
        name: "Commercial Gym Package",
        price: "Rp 150.000.000",
      },
      {
        image: "./assets/images/category.jpg",
        name: "Hotel Gym Package",
        price: "Rp 100.000.000",
      },
    ],
    "FREE WEIGHT": [
      {
        image: "./assets/images/category.jpg",
        name: "Dumbbells Set",
        price: "Rp 5.000.000",
      },
      {
        image: "./assets/images/category.jpg",
        name: "Barbells",
        price: "Rp 3.500.000",
      },
      {
        image: "./assets/images/category.jpg",
        name: "Kettlebells",
        price: "Rp 2.000.000",
      },
      {
        image: "./assets/images/category.jpg",
        name: "Weight Plates",
        price: "Rp 8.000.000",
      },
    ],
    "FLOORING & STORAGE": [
      {
        image: "./assets/images/category.jpg",
        name: "Rubber Flooring",
        price: "Rp 500.000/m²",
      },
      {
        image: "./assets/images/category.jpg",
        name: "Dumbbell Rack",
        price: "Rp 3.000.000",
      },
      {
        image: "./assets/images/category.jpg",
        name: "Weight Plate Storage",
        price: "Rp 2.500.000",
      },
    ],
  };

  const products = productData[category] || productData["STRENGTH"];

  const productGrid = document.querySelector(".product-grid");
  if (!productGrid) return;

  productGrid.innerHTML = "";

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="product-info">
        <h3>${product.name}</h3>
        <p class="product-price">${product.price}</p>
      </div>
    `;

    productGrid.appendChild(productCard);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname.includes("specific-category.html")) {
    loadSpecificCategory();
  }

  const categoryLinks = document.querySelectorAll(".category-list a");
  categoryLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const category = this.textContent;
      localStorage.setItem("selectedCategory", category);
      loadSpecificCategory();
    });
  });
});
