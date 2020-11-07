const statusCode = require("http-status-codes")
const productClient = require("../../client/productClient");

const getByTerm = async (req, res) => {
  try {
    const data = await productClient.getByTerm(req.query.q)
    res.status(statusCode.OK).send(data);
  } catch (error) {
    res.status(statusCode.INTERNAL_SERVER_ERROR).send(error.message || error)
  }
};

const getByProductId = async (req, res) => {
  try {
    const data = await productClient.getByProductId(req.params.id)
    res.status(statusCode.OK).send(data);
  } catch (error) {
    res.status(statusCode.INTERNAL_SERVER_ERROR).send(error.message || error);
  }
};

module.exports = { getByTerm, getByProductId };
