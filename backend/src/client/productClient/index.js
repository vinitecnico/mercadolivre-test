const { getApiAsync } = require("../api");

const getByTerm = async (term) => {
  return getApiAsync(`sites/MLB/search?q=${term}`);
};

const getByProductId = async (productId) => {
  return getApiAsync(`items/${productId}`);
};

module.exports = { getByTerm, getByProductId };
