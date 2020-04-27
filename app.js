/* this is an example of a shopping cart */

/*
    > user visits item
    > shows item, info, image, description, add to cart, item quantity, order quantity etc.
    > user selects quantity, clicks add to cart
    > user can delete from cart
    > user can checkout
    > adds price up, adds tax and shipping
    > order places - returns a receipt and updates stock levels
  */

const { getAllItems } = require("./components/data");

console.log(getAllItems());
