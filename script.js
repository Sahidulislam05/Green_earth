// Load Categories
const loadCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/categories"
  );
  const data = await res.json();
  displayCategories(data.categories);
};
// Spinner section
const manageSpinner = (status) => {
  if (status == true) {
    document.getElementById("spinner").classList.remove("hidden");
    document.getElementById("defaultContainer").classList.add("hidden");
    document.getElementById("plantsContainer").classList.add("hidden");
  } else {
    document.getElementById("defaultContainer").classList.remove("hidden");
    document.getElementById("plantsContainer").classList.remove("hidden");
    document.getElementById("spinner").classList.add("hidden");
  }
};

const removeActive = () => {
  const plantButtons = document.querySelectorAll(".plantsBtn");
  // console.log(plantButtons)
  plantButtons.forEach((btn) => btn.classList.remove("active"));
};

// Load Plants by Category
const categoriesLoad = (id) => {
  manageSpinner(true);
  document.getElementById("plantsContainer").innerHTML = "";
  document.getElementById("defaultContainer").innerHTML = "";

  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      removeActive();
      const clickBtn = document.getElementById(`activeBtn-${id}`);
      clickBtn.classList.add("active");
      showDisplayCategories(data.plants);
    });
};

// Plant Details Modal
const plantsDetail = async (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  const res = await fetch(url);
  const details = await res.json();
  displayPlantsDetail(details.plants);
};

const displayPlantsDetail = (plant) => {
  const detailsBox = document.getElementById("plantsDetailContainer");
  detailsBox.innerHTML = `
    <div class="card shadow-sm">
      <h2 class="card-title text-2xl font-bold p-2">${plant.name}</h2>
      <figure class="mt-4">
        <img src="${plant.image}" alt="Image"
          class="w-60 h-40 object-cover rounded-xl"/>
      </figure>
      <div class="card-body">
        <h2><span class="font-bold">Category:</span> ${plant.category}</h2>
        <h2><span class="font-bold">Price: ৳</span> ${plant.price}</h2>
        <p class="text-[#1F2937]">${plant.description}</p>
      </div>
    </div>
  `;
  document.getElementById("plants_modal").showModal();
};

// Default Plants
const DefaultPlants = () => {
  manageSpinner(true);
  document.getElementById("plantsContainer").innerHTML = "";
  document.getElementById("defaultContainer").innerHTML = "";

  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((json) => displayDefaultPlants(json.plants));
};

const displayDefaultPlants = (plants) => {
  const defaultContainer = document.getElementById("defaultContainer");

  for (let plant of plants) {
    const card = document.createElement("div");

    card.innerHTML = `
      <div class="card bg-white shadow-sm">
        <figure class="mt-4">
          <img src="${plant.image}" alt="Image"
            class="w-40 h-40 object-cover rounded-xl"/>
        </figure>
        <div class="card-body">
          <h2 onclick="plantsDetail(${plant.id})"
            class="card-title font-semibold cursor-pointer">${plant.name}</h2>
          <p class="text-[#1F2937]">${plant.description}</p>
          <div class="flex justify-between items-center">
            <h2 class="bg-[#DCFCE7] text-[#15803D] p-2 rounded-xl">${plant.category}</h2>
            <h2 class="font-semibold">৳${plant.price}</h2>
          </div>
          <div class="card-actions">
            <button onclick='addToCart({name: "${plant.name}", price: ${plant.price}})'
              class="btn bg-[#15803D] w-full rounded-full text-white">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    `;
    defaultContainer.append(card);
  }
  manageSpinner(false);
};

// Category Display Plants
const showDisplayCategories = (plants) => {
  const plantsContainer = document.getElementById("plantsContainer");
  plantsContainer.innerHTML = "";

  plants.forEach((plant) => {
    const card = document.createElement("div");
    card.innerHTML = `
      <div class="card bg-white shadow-sm">
        <figure class="px-3 mt-4">
          <img src="${plant.image}" alt="Plant"
            class="w-40 h-40 object-cover rounded-md"/>
        </figure>
        <div class="card-body">
          <h2 onclick="plantsDetail(${plant.id})"
            class="card-title font-semibold cursor-pointer">${plant.name}</h2>
          <p class="text-[#1F2937]">${plant.description}</p>
          <div class="flex justify-between items-center">
            <h2 class="bg-[#DCFCE7] text-[#15803D] p-2 rounded-xl">${plant.category}</h2>
            <h2 class="font-semibold">৳${plant.price}</h2>
          </div>
          <div class="card-actions">
            <button onclick='addToCart({name: "${plant.name}", price: ${plant.price}})'
              class="btn bg-[#15803D] w-full rounded-full text-white">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    `;
    plantsContainer.append(card);
  });
  manageSpinner(false);
};

// ALL Display Categories
const displayCategories = (categories) => {
  const categoriesContainer = document.getElementById("categoriesContainer");
  categoriesContainer.innerHTML = "";

  for (let category of categories) {
    const btnDiv = document.createElement("div");

    btnDiv.innerHTML = `
      <h1 id="activeBtn-${category.id}"
        class="font-medium p-2 rounded-lg hover:bg-[#15803D] hover:text-white cursor-pointer plantsBtn"
        onclick="categoriesLoad('${category.id}')"
      >
        ${category.category_name}
      </h1>
    `;

    categoriesContainer.append(btnDiv);
  }
};

// Challenges Part all Function

let cart = [];
const addToCart = (plant) => {
  cart.push(plant);
  renderCart();
};

const renderCart = () => {
  const cartList = document.getElementById("cartList");
  const cartTotal = document.getElementById("cartTotal");

  cartList.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement("li");
    li.className =
      "flex justify-between items-center bg-[#F0FDF4] p-2 rounded-lg";

    li.innerHTML = `
      <span>${item.name} <br> ৳${item.price}</span>
      <button onclick="removeFromCart(${index})" class="text-red-500 font-bold">❌</button>
    `;
    cartList.appendChild(li);
  });

  cartTotal.textContent = total;
};

const removeFromCart = (index) => {
  cart.splice(index, 1);
  renderCart();
};

// all function call section 

DefaultPlants();
loadCategories();
