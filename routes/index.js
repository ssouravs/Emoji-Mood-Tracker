const express=require('express')
const router=express.Router()

const userRouter=require('./userRoutes')
const moodRouter=require('./moodRoutes')

router.use('/user',userRouter);
router.use('/mood',moodRouter);


module.exports=router;

