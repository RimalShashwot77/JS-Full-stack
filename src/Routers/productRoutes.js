const {Addproduct, updateProduct, getAllProduct} = require('../controllers/productController')
const express = require('express');
const router = express.Router();


router.post('/product', Addproduct);
router.put('/updateproduct/:id', updateProduct);
router.get('/getProduct', getAllProduct)
router.get('/getProductById/:id', getAllProduct)


module.exports = router;
