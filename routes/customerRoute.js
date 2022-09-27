const express = require('express');
const router = express.Router();
const path = require('path');
const { getAllCustomer,createCustomer,getSingleCustomer,deleteCustomer, updateCustomer } = require('../controllers/customersControllers');









router.route('/').get(getAllCustomer).post(createCustomer)
router.route('/:id').get(getSingleCustomer).delete(deleteCustomer).put(updateCustomer).patch(updateCustomer)



module.exports = router;