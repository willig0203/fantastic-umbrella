const { check } = require("express-validator");
const repo = require("./repository");
module.exports = {
  validateHeight: check("height")
    // To delete leading and trailing space
    .trim()

    // Validate height to accept
    // only decimal number
    .isDecimal()

    // Custom message
    .withMessage("Must be a decimal number"),
};
