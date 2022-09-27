const express = require('express');
const router = express.Router();
const path = require('path');
const { getAllTag,createTag,getSingleTag,deleteTag, updateTag } = require('../controllers/tagControllers');









router.route('/').get(getAllTag).post(createTag)
router.route('/:slug').get(getSingleTag).delete(deleteTag).put(updateTag).patch(updateTag)



module.exports = router;