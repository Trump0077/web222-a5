/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  {
    id: "P1",
    title: "Trae Young 1",
    description: "Adidas, Black/Red/Yellow",
    price: 179,
    imageUrl: "./image/trae_young.jpg",
    discontinued: false,
    categories: ["c1"]
  },

  {
    id: "P2",
    title: "Harden Vol 6",
    description: "Adidas, Yellow/Blue",
    price: 199,
    imageUrl: "./image/Harden.jpg",
    discontinued: false,
    categories: ["c1"]
  },

  {
    id: "P3",
    title: "Jordan 23",
    description: "Nike, Black/White",
    price: 299.45,
    imageUrl: "./image/Jordan23.jpg",
    discontinued: true,
    categories: ["c1"]
  },

  {
    id: "P4",
    title: "LeBron 18",
    description: "Nike, Purple/Yellow",
    price: 259.67,
    imageUrl: "./image/LeBron18.jpg",
    discontinued: false,
    categories: ["c1"]
  },

  {
    id: "P5",
    title: "Dame 8",
    description: "Adidas, White/Red/Black",
    price: 259,
    imageUrl: "./image/Dame8.jpg",
    discontinued: false,
    categories: ["c1"]
  },

  {
    id: "P6",
    title: "Freak 3",
    description: "Nike, Black/White/Red",
    price: 159,
    imageUrl: "./image/Freak3.jpg",
    discontinued: false,
    categories: ["c1"]
  },

  {
    id: "P7",
    title: "PG 6",
    description: "Nike, Black/White/Mint",
    price: 144,
    imageUrl: "./image/PG6.jpg",
    discontinued: false,
    categories: ["c1"]
  },

  {
    id: "P8",
    title: "Curry 9",
    description: "Under Armour, Navy/Orange",
    price: 189,
    imageUrl: "./image/Curry9.jpg",
    discontinued: false,
    categories: ["c1"]
  },

  {
    id: "P9",
    title: "AJ 36",
    description: "Nike, Purple/Yellow",
    price: 260.13,
    imageUrl: "./image/AJ36.jpg",
    discontinued: false,
    categories: ["c1"]
  },

  {
    id: "P10",
    title: "Kawhi 2",
    description: "New Balance, Black/Green",
    price: 209.9,
    imageUrl: "./image/Kawhi2.jpg",
    discontinued: false,
    categories: ["c1"]
  },

  {
    id: "P11",
    title: "Superfly 9 Elite",
    description: "Nike, Green/Yellow",
    price: 364,
    imageUrl: "./image/Superfly9.jpg",
    discontinued: false,
    categories: ["c2"]
  },

  {
    id: "P12",
    title: "Vapor 15 Elite",
    description: "Nike, White/Orange",
    price: 329,
    imageUrl: "./image/Vapor15.jpg",
    discontinued: false,
    categories: ["c2"]
  },

  {
    id: "P13",
    title: "Predator Edge+",
    description: "Adidas, Black",
    price: 349.99,
    imageUrl: "./image/Predator.jpg",
    discontinued: false,
    categories: ["c2"]
  },

  {
    id: "P14",
    title: "Redon Move",
    description: "Puma, White/Blue",
    price: 99.88,
    imageUrl: "./image/Redon_Move.jpg",
    discontinued: false,
    categories: ["c2"]
  },

  {
    id: "P15",
    title: "NMD R1",
    description: "Adidas, Black/Gum",
    price: 189,
    imageUrl: "./image/NMD.jpg",
    discontinued: false,
    categories: ["c3"]
  },

  {
    id: "P16",
    title: "Gel 1130",
    description: "ASICS, Grey/Silver",
    price: 110,
    imageUrl: "./image/Gel.jpg",
    discontinued: false,
    categories: ["c3"]
  },

  {
    id: "P17",
    title: "2002 R",
    description: "New Balance, White/Yellow/Blue",
    price: 150.77,
    imageUrl: "./image/2002R.jpg",
    discontinued: false,
    categories: ["c3"]
  },

  {
    id: "P18",
    title: "Old Skool",
    description: "Vans, Black/White",
    price: 90.99,
    imageUrl: "./image/Old_Skool.jpg",
    discontinued: true,
    categories: ["c4"]
  },

  {
    id: "P19",
    title: "Air Force 1",
    description: "Nike, White/White",
    price: 120.5,
    imageUrl: "./image/af1.jpg",
    discontinued: false,
    categories: ["c4"]
  },

  {
    id: "P20",
    title: "Speedcross 3",
    description: "Salomon, Black/White",
    price: 169.99,
    imageUrl: "./image/Speedcross3.jpg",
    discontinued: false,
    categories: ["c4"]
  },

  {
    id: "P21",
    title: "Superstar",
    description: "Adidas, Black/White",
    price: 120.8,
    imageUrl: "./image/Superstar.jpg",
    discontinued: false,
    categories: ["c4"]
  },

  {
    id: "P22",
    title: "All Star",
    description: "Converse, White/Optical",
    price: 74.99,
    imageUrl: "./image/Allstar.jpg",
    discontinued: true,
    categories: ["c4"]
  }
];
