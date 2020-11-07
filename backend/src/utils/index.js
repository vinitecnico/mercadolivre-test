const _ = require("lodash");

const responseGetByTerm = (data, categories) => {
  return {
    author: {
      name: "Mercado Livre",
      lastname: "test frontEnd",
    },
    categories: getCategories(categories),
    items: data.results.map((product) => {
      const [amount, decimals] = splitAmountAndDecimalsWithPrecision(
        product.price
      );
      return {
        id: product.id,
        title: product.title,
        price: {
          currency: product.currency_id,
          amount: parseInt(amount),
          decimals: parseInt(decimals),
        },
        picture: product.thumbnail,
        condition: product.condition,
        free_shipping: product.shipping && product.shipping.free_shipping,
      };
    }),
  };
};

const responseProductDetails = (
  detailProduct,
  descriptionProduct,
  category
) => {
  const [amount, decimals] = splitAmountAndDecimalsWithPrecision(
    detailProduct.price
  )

  return {
    author: {
      name: "Vendedor",
      lastname: "Mercado Livre",
    },
    item: {
      id: detailProduct.id,
      title: detailProduct.title,
      categories: _.uniq(category.path_from_root.map(path => path.name)),
      price: {
        currency: detailProduct.currency_id,
        amount: parseInt(amount),
        decimals: parseInt(decimals),
      },
      picture: _.first(detailProduct.pictures).url,
      condition: detailProduct.condition,
      free_shipping:
        (detailProduct.shipping && detailProduct.shipping.free_shipping) ||
        false,
      sold_quantity: parseInt(detailProduct.sold_quantity),
      description: descriptionProduct.plain_text,
    },
  };
};

const splitAmountAndDecimalsWithPrecision = (floatValue) => {
  const [amount, decimals] = floatValue.toFixed(2).split(".");
  return [amount, decimals];
};

const getCategories = (categories) => {
  const data = categories.reduce((listCategories, category) => {
    listCategories.push(...category.path_from_root.map((path) => path.name));
    return listCategories;
  }, []);
  return _.uniq(data);
};

module.exports = { responseGetByTerm, responseProductDetails };
