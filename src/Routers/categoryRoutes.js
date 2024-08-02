const {Addcategory} = require('../controllers/categoryController')
const express = require('express');
const router = express.Router();

/**
 * @description To post the category
 * @api /api/category
 * @access PRIVATE
 * @type GET
 * @return response
 */

router.post('/category', Addcategory)

module.exports = router