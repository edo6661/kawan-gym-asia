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
        image: "./assets/images/category.jpg",
        name: "MULTI GYM 1 SISI",
        price: "Rp 8.500.000",
        berat: "6kg",

        description: "Alat gym multifungsi untuk latihan full body",
      },
      {
        image: "./assets/images/category.jpg",
        name: "MULTI GYM 2 SISI",
        price: "Rp 16.900.000",
        berat: "6kg",

        description: "Latihan intens dua sisi untuk kekuatan optimal",
      },
      {
        image: "./assets/images/category.jpg",
        name: "SUPERLATIVE SUPER RACK",
        price: "Rp 15.900.000",
        berat: "6kg",

        description: "Rak premium untuk latihan angkat beban berat",
      },
      {
        image: "./assets/images/category.jpg",
        name: "Power Rack",
        price: "Rp 12.000.000",
        berat: "6kg",

        description: "Power rack kokoh untuk latihan beban maksimal",
      },
    ],
    CARDIO: [
      {
        image: "./assets/images/category.jpg",
        name: "Treadmill",
        price: "Rp 25.000.000",
        berat: "6kg",

        description: "Tingkatkan kardio dengan treadmill berkualitas",
      },
      {
        image: "./assets/images/category.jpg",
        name: "Exercise Bike",
        price: "Rp 15.000.000",
        berat: "6kg",

        description: "Sepeda statis untuk latihan kardio harian",
      },
      {
        image: "./assets/images/category.jpg",
        name: "Elliptical",
        price: "Rp 18.000.000",
        berat: "6kg",

        description: "Latihan low impact untuk semua kalangan",
      },
      {
        image: "./assets/images/category.jpg",
        name: "Rowing Machine",
        price: "Rp 20.000.000",
        berat: "6kg",

        description: "Latihan seluruh tubuh dengan gerakan mendayung",
      },
    ],
    PACKAGES: [
      {
        image: "./assets/images/category.jpg",
        name: "Home Gym Package",
        price: "Rp 30.000.000",
        berat: "6kg",

        description: "Paket lengkap gym di rumah untuk kebugaran",
      },
      {
        image: "./assets/images/category.jpg",
        name: "Commercial Gym Package",
        price: "Rp 150.000.000",
        berat: "6kg",

        description: `Solusi gym komersial lengkap dan terpercaya`,
      },
      {
        image: "./assets/images/category.jpg",
        name: "Hotel Gym Package",
        price: "Rp 100.000.000",
        berat: "6kg",

        description: "Paket gym elegan untuk fasilitas hotel modern",
      },
    ],
    "FREE WEIGHT": [
      {
        image: "./assets/images/category.jpg",
        name: "Dumbbells Set",
        price: "Rp 5.000.000",
        berat: "6kg",

        description: "Set dumbbell untuk latihan kekuatan otot",
      },
      {
        image: "./assets/images/category.jpg",
        name: "Barbells",
        price: "Rp 3.500.000",
        berat: "6kg",

        description: "Barbell kuat untuk latihan angkat beban",
      },
      {
        image: "./assets/images/category.jpg",
        name: "Kettlebells",
        price: "Rp 2.000.000",
        berat: "6kg",

        description: "Kettlebell multifungsi untuk berbagai latihan",
      },
      {
        image: "./assets/images/category.jpg",
        name: "Weight Plates",
        price: "Rp 8.000.000",
        berat: "6kg",

        description: "Piring beban standar untuk berbagai kebutuhan",
      },
    ],
    "FLOORING & STORAGE": [
      {
        image: "./assets/images/category.jpg",
        name: "Rubber Flooring",
        price: "Rp 500.000/m²",
        berat: "6kg",

        description: "Lantai karet tahan lama dan aman untuk gym",
      },
      {
        image: "./assets/images/category.jpg",
        name: "Dumbbell Rack",
        price: "Rp 3.000.000",
        berat: "6kg",

        description: "Rak dumbbell kuat untuk penyimpanan rapi",
      },
      {
        image: "./assets/images/category.jpg",
        name: "Weight Plate Storage",
        price: "Rp 2.500.000",
        berat: "6kg",

        description: "Tempat penyimpanan piring beban praktis",
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
    productCard.addEventListener("click", () => {
      showModal(product);
    });
  });
}
function showModal(product) {
  const modal = document.getElementById("modalOverlay");
  const modalImage = document.getElementById("modalImage");
  const modalName = document.getElementById("modalName");
  const modalPrice = document.getElementById("modalPrice");
  const modalDescription = document.getElementById("modalDescription");
  const modalBerat = document.getElementById("modalBerat");

  modalImage.src = product.image;
  modalName.textContent = product.name;
  modalPrice.textContent = product.price;
  modalDescription.textContent = product.description;
  modalBerat.textContent = product.berat;

  modal.style.display = "flex";

  requestAnimationFrame(() => {
    modal.classList.add("show");
  });
}

function hideModal() {
  const modal = document.getElementById("modalOverlay");
  modal.classList.remove("show");

  setTimeout(() => {
    modal.style.display = "none";
  }, 300);
}

document.getElementById("modalClose").addEventListener("click", hideModal);
document.getElementById("modalOverlay").addEventListener("click", (e) => {
  if (e.target.id === "modalOverlay") {
    hideModal();
  }
});

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
