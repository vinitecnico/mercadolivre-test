const express = require('express')
const router = express.Router();

const ProductController = require("../controllers/ProductController")

/**
 * Routes - API
 */

router.get("/items", ProductController.getByTerm)
router.get("/items/:id", ProductController.getByTerm)

module.exports = router