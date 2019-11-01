var express = require('express')
var router = express.Router()
const {authController} = require('../controllers')

router.get('/login', authController.login)
router.post('/register', authController.register)
router.get('/getdata', authController.getData)
router.post('/listproduct', authController.addProduct)
router.get('/getproduct', authController.getProduct)
router.patch('/updateproduct', authController.updateProduct)
router.get('/getproductdetail', authController.getProductDetail)

module.exports = router