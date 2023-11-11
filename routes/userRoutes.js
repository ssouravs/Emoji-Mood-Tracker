const express=require('express');
const signUpController = require('../controllers/signUpController');
const loginController = require('../controllers/loginController');
const router=express.Router();

router.post('/signup',signUpController);

router.post('/login',loginController)

module.exports=router;






/*
router.post('/users/:userId/generate-sharing-link', userController.generateSharingLink);
router.put('/users/:userId/disable-sharing', userController.disableSharing);

*/