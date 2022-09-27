const express = require('express');
const router = express.Router();
const path = require('path');
const { getAllProduct,createProduct,getSingleProduct,deleteProduct, updateProduct } = require('../controllers/productsControllers');









router.route('/').get(getAllProduct).post(createProduct)
router.route('/:id').get(getSingleProduct).delete(deleteProduct).put(updateProduct).patch(updateProduct)



module.exports = router;