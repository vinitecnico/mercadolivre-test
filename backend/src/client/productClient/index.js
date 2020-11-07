const statusCode = require("http-status-codes")
const _ = require('lodash')
const { getApiAsync } = require("../api")
const {responseGetByTerm} = require("../../utils")

/**
 * Search products by term
 * @param {string} term 
 */
const getByTerm = async (term) => {
  if (!term) {
    throw new ExeptionError(statusCode.BAD_REQUEST, "Terms required", "Validation_Error");
  }

  const productList = await getApiAsync(`sites/MLB/search?q=${term}`)

  const idCategories = _.uniq(productList.results.map(item => item.category_id))

  const categories = await Promise.all(idCategories.map(category => getProductCategory(category)))

  return responseGetByTerm(productList, categories)
};


/**
 * Search products by idProduct
 * @param {string} idProduct 
 */
const getByProductId = async (productId) => {
  return getApiAsync(`items/${productId}`);
};

/**
 * Search category by 
 * @param {string} categoryId 
 */
const getProductCategory = (categoryId) => {
  return getApiAsync(`categories/${categoryId}`)
  
}

module.exports = { getByTerm, getByProductId };
