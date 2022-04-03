const express=require('express');
const router=express.Router();
const employee=require('./../controllers/product')
const {fileController,registerusers,loginusers,getFeatures}=require('./../controllers/userscontrollers')
const {protect}=require('../middleware/authMiddleware')


router.route('/register').post(registerusers)
router.route('/login').post(loginusers)
router.route('/getfeature').post(protect,getFeatures)
router.route('/upload').post(fileController)
router.route('/getalldata').get(employee.Employeedata)

module.exports=router