const router = require("express").Router();
const { Category, Product } = require("../../models");
// const sequelize = require("./config/connection");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  // find all categories
  // be sure to include its associated Products

  Category.findAll({ include: Product })
    .then((dbCategoryData) => res.json(dbCategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  console.log("find one category by its `id` value");
  Category.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "product_name",
      "price",
      "stock",
      "category_id",
      [
        sequelize.literal(
          //sequelize not defined
          "(SELECT * FROM product WHERE product.id = category.id)"
        ),
        "vote_count",
      ],
    ],
    include: [
      {
        model: Product,
        attributes: ["id", "product_name", "price", "stock", "category_id"],
        // include: {
        //   model: User,
        //   attributes: ["username"],
        // },
      },
    ],
  })
    .then((dbCategoryData) => {
      if (!dbCategoryData) {
        res.status(404).json({ message: "No Category found with this id" });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  // create a new category
  console.log("create a new category");
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  console.log("update a category by its `id` value");
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  console.log("delete a category by its `id` value");
});

module.exports = router;
