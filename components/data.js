const dataSrc = require("../data/items.json");

module.exports = {
  getAllItems: () => {
    return dataSrc.items;
  },
};
