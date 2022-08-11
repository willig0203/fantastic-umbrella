const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// forienkeys autmatically generated
// see database eer diagram
Product.hasOne(Category);

Product.belongsTo(Category);

Category.hasMany(Product);

Product.belongsToMany(Tag, { through: ProductTag });

Tag.belongsToMany(Product, { through: ProductTag });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
