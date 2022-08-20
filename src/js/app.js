/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Jiaheng Wang
 *      Student ID: 180562217
 *      Date:       July 22, 2022
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");

function createCategoryButtons() {
  const nav = document.querySelector("#menu");

  categories.forEach((category) => {
    const button = document.createElement("button");
    button.id = `category-${category.id}-btn`;
    button.type = "button";
    button.innerText = category.name;

    button.onclick = () => showCategory(category);

    nav.appendChild(button);
  });
}

function getCategoryProducts(category) {
  return products
    .filter((product) => product.categories.includes(category.id))
    .filter((product) => !product.discontinued);
}

function showCategory(selectedCategory = categories[0]) {
  document.querySelector("#selected-category").innerText = selectedCategory.name;

  const cardContainer = document.querySelector(".card-container");
  cardContainer.innerHTML = "";

  const categoryProducts = getCategoryProducts(selectedCategory);
  categoryProducts.forEach((product) => {
    const productCard = createProductCard(product);
    document.querySelector(".card-container").append(productCard);
  });
}

function createProductCard(product) {
  // Create a <div> to hold the card
  const card = document.createElement("div");
  // Add the .card class to the <div>
  card.classList.add("card");

  // Create a product image, use the .card-image class
  const productImage = document.createElement("img");
  productImage.src = product.imageUrl;
  productImage.classList.add("card-image");
  card.appendChild(productImage);

  const cardDetail = document.createElement("div");
  cardDetail.classList.add("card_detail");

  const spanCategory = document.createElement("span");
  spanCategory.textContent = product.categories
    .map((id) => {
      return categories.filter((category) => category.id === id).map((category) => category.name);
    })
    .toString();

  const nameDiv = document.createElement("div");
  nameDiv.classList.add("name");
  nameDiv.textContent = product.title;

  const descP = document.createElement("p");
  descP.classList.add("description");
  descP.textContent = product.description;

  const priceSpan = document.createElement("span");
  priceSpan.classList.add("price");
  priceSpan.textContent = `$${product.price.toFixed(2)} CAD`;

  cardDetail.append(nameDiv);
  cardDetail.append(descP);
  cardDetail.append(priceSpan);

  card.append(productImage);
  card.append(cardDetail);

  // Return the card’s <div> element to the caller
  return card;
}

function init() {
  createCategoryButtons();
  showCategory();
}

addEventListener("DOMContentLoaded", init);
