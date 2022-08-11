const { Category } = require("../models");

const categoryData = [
  {
    category_name: "Shirts",
    product_id: 1, // why not seeding this column?
  },
  {
    category_name: "Shorts",
    product_id: 5,
  },
  {
    category_name: "Music",
    product_id: 4,
  },
  {
    category_name: "Hats",
    product_id: 3,
  },
  {
    category_name: "Shoes",
    product_id: 2,
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
