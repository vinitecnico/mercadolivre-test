const productClient = require("../../client/productClient");

const getByTerm = async (req, res) => {
  try {
    // res.status(200).send(await getByTerm(req.query.q));
    const data = await productClient.getByTerm(req.query.q)
    res.status(200).send(data);
  } catch (error) {
    res.status(error.status).send(error);
  }
};

const getByProductId = async (req, res) => {
  try {
    // res.status(200).send(await search(req.query.q));
    res.status(200).send([1, 2, 3]);
  } catch (error) {
    res.status(error.status).send(error);
  }
};

module.exports = { getByTerm, getByProductId };
