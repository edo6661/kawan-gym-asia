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
        image: "./assets/images/product/strength/hurricane/HURRICANE-HS01-SEATED-CHEST-PRESS.svg",
        name: "HURRICANE HS01 SEATED CHEST PRESS",
        price: "",
        berat: "Berat : 68kg / 149lb",
        dimensi: "Dimensi: 1360(L)*1260(W)*1650mm(H)",
      },
      {
        image: "./assets/images/product/strength/hurricane/HURRICANE-HS02-SEATED-ROW.svg",
        name: "HURRICANE HS02 SEATED ROW",
        price: "",
        berat: "Berat : 86kg / 189lb",
        dimensi: "Dimensi: 1450(L)*1010(W)*1650mm(H)",
      },
      {
        image: "./assets/images/product/strength/hurricane/HURRICANE-HS03-SHOULDER-PRESS.svg",
        name: "HURRICANE HS03 SHOULDER PRESS",
        price: "",
        berat: "Berat : 86kg / 189lb",
        dimensi: "Dimensi: 1600(L)*1430(W)*1650mm(H)",
      },
      {
        image: "./assets/images/product/strength/hurricane/HURRICANE-HS06-SEATED-LEG-CURL.svg",
        name: "HURRICANE HS06 SEATED LEG CURL",
        price: "",
        berat: "Berat : 104kg / 228lb",
        dimensi: "Dimensi: 1315(L)*970(W)*1650mm(H)",
      },  
    ],
    CARDIO: [
      {
        image: "./assets/images/product/cardio/hurricane/HURRICANE-F6-ARTIS-RECUMBENT-BIKE.svg",
        name: "HURRICANE F6 ARTIS RECUMBENT BIKE",
        price: "",
        berat: "Berat : 72kg / 159lb",
        dimensi: "Dimensi: 1770(L)*750(W)*1450(H)",
      },
      {
        image: "./assets/images/product/cardio/hurricane/HURRICANE-F6-ARTIS-SPIN-BIKE.svg",
        name: "HURRICANE F6 ARTIS SPIN BIKE",
        price: "",
        berat: "Berat : 68kg / 149lb",
        dimensi: "Dimensi: 1200(L)*580(W)*1550(H)",
      },
      {
        image: "./assets/images/product/cardio/hurricane/HURRICANE-F6-ARTIS-STAIR-CLIMBER.svg",
        name: "HURRICANE F6 ARTIS STAIR CLIMBER",
        price: "",
        berat: "Berat : 108kg / 238lb",
        dimensi: "Dimensi: 910(L)*1320(W)*1800(H)", 
      },
      {
        image: "./assets/images/product/cardio/hurricane/HURRICANE-F6-ARTIS-TREADMILL.svg",
        name: "HURRICANE F6 ARTIS TREADMILL",
        price: "",
        berat: "Berat : 108kg / 238lb",
        dimensi: "Dimensi: 2200(L)*850(W)*1510(H)", 
      },
      
    ],
    PACKAGES: [
      
    ],
    "FREE WEIGHT": [
      
    ],
    "FLOORING & STORAGE": [
      
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
  const modalDimensi = document.getElementById("modalDimensi");
  const modalBerat = document.getElementById("modalBerat");

  modalImage.src = product.image;
  modalName.textContent = product.name;
  modalPrice.textContent = product.price;
  modalDimensi.textContent = product.dimensi;
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
