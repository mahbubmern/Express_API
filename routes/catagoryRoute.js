const express = require('express');
const router = express.Router();
const path = require('path');
const { getAllCatagory,createCatagory,getSingleCatagory,deleteCatagory, updateCatagory } = require('../controllers/catagoryControllers');









router.route('/').get(getAllCatagory).post(createCatagory)
router.route('/:slug').get(getSingleCatagory).delete(deleteCatagory).put(updateCatagory).patch(updateCatagory)



module.exports = router;