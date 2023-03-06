const users = require("./users/users.service.js");
const food-recipe = require("./food-recipe/food-recipe.service.js");
const review = require("./review/review.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(food-recipe);
  app.configure(review);
  // ~cb-add-configure-service-name~
};
