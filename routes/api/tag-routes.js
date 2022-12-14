const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({ include: Product })
    .then((dbTagData) => res.json(dbTagData))
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  // find a single tag by its `id`
  // and include its associated Product data
  Tag.findAll({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Product,
      },
    ],
  })
    .then((dbTagData) => res.json(dbTagData))
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  // create a new tag
  // TODO: check if it exists
  //body
  // {
  //   "tag_name":"Pink"
  // }
  Tag.create({
    tag_name: req.body.tag_name,
  })
    .then((dbTagData) => {
      res.json(dbTagData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  // {
  // 	"tag_name":"Pink"
  // }
  Tag.update(
    {
      tag_name: req.body.tag_name,
    },
    {
      where: { id: req.params.id },
    }
  )
    .then((dbTagData) => {
      res.json(dbTagData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: { id: req.params.id },
  })
    .then((dbTagData) => {
      res.json(dbTagData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
