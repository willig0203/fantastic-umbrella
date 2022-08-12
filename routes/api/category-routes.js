const router = require("express").Router();
const { Category, Product } = require("../../models");
// const sequelize = require("./config/connection");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  // find all categories
  // and its associated Products
  Category.findAll({ include: Product })
    .then((dbCategoryData) => res.json(dbCategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  // and include its associated Products
  console.log("find one category by its `id` value");
  Category.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Product,
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
  // TODO: check if it exists

  //body
  // {
  //   "category_name":"Underwear"
  // }

  Category.create({
    category_name: req.body.category_name,
    product_id: null,
  })
    .then((dbCategoryData) => {
      res.json(dbCategoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  //http://localhost:3001/api/categories/7
  // {
  // 	"category_name":"Television",
  // 	"product_id":"3" // how to update fKey?
  // }
  Category.update(
    {
      category_name: req.body.category_name,
      product_id: req.body.product_id,
    },
    {
      where: { id: req.params.id },
    }
  )
    .then((dbCategoryData) => {
      res.json(dbCategoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: { id: req.params.id },
  })
    .then((dbCategoryData) => {
      res.json(dbCategoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
