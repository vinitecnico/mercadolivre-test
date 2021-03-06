const express = require('express')
const router = express.Router();

const ProductController = require("../controllers/ProductController")

router.get("/items", ProductController.getByTerm)
router.get("/items/:id", ProductController.getByProductId)

module.exports = router