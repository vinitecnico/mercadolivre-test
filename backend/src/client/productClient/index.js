const statusCode = require("http-status-codes");
const _ = require("lodash");
const { getApiAsync } = require("../api");
const { responseGetByTerm, responseProductDetails } = require("../../utils");

/**
 * Search products by term
 * @param {string} term
 */
const getByTerm = async (term) => {
  if (!term) {
    throw new ExeptionError(
      statusCode.BAD_REQUEST,
      "Terms required",
      "Validation_Error"
    );
  }

  const productList = await getApiAsync(`sites/MLB/search?q=${term}`);

  const idCategories = _.uniq(
    productList.results.map((item) => item.category_id)
  );

  const categories = await Promise.all(
    idCategories.map((category) => getProductCategory(category))
  );

  return responseGetByTerm(productList, categories);
};

/**
 * Search products by idProduct
 * @param {string} productId
 */
const getByProductId = async (productId) => {
  if (!productId) {
    throw new ExeptionError(
      statusCode.BAD_REQUEST,
      "ProductId required",
      "Validation_Error"
    );
  }

  const [detail, description] = await Promise.all([
    getProductIdInfo(productId.replace(/[^a-z0-9\s]*/ig, '')),
    getProductDescription(productId),
  ]);

  const category = await getProductCategory(detail.category_id);

  return responseProductDetails(detail, description, category);
};

/**
 * Get product info
 * @param {number} idProduct
 */
function getProductIdInfo(idProduct) {
  return getApiAsync(`items/${idProduct}`)
}

/**
 * Get product description
 * @param {number} productId
 */
function getProductDescription(productId) {
  return getApiAsync(`items/${productId}/description`);
}

/**
 * Search category by
 * @param {string} categoryId
 */
const getProductCategory = (categoryId) => {
  return getApiAsync(`categories/${categoryId}`);
};

module.exports = { getByTerm, getByProductId };
