const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  // find all tags
  // be sure to include its associated Product data

  Tag.findAll({
    attributes: ["id", "tag_name"],
  }).then((dbTagData) => {
    console.log(res);
    console.log(dbTagData);
    // const tags = dbTagData.map((Tag) => Tag.get({ plain: true }));
    // console.log(tags);
    // // res.render('homepage', { posts });
    // console.log(tags.every((tag) => tag instanceof Tag)); // true
    // console.log("All tags:", JSON.stringify(tags, null, 2));
  });
  // .catch((err) => {
  //   console.log(err);
  //   res.status(500).json(err);
  // });
});

router.get("/:id", (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post("/", (req, res) => {
  // create a new tag
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
