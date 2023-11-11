const {User}=require('../models/index')
const bcrypt=require('bcrypt')
const signUpController= async (req,res)=>{
    try{
        console.log(req.body)
        //checking whether user with the same email already exist or not
        const existingUser=await User.findOne({
            where: {email: req.body.email},
        });

        if(existingUser){
            //User already exist
            return res.status(400).json({error: 'User already exist with this email'})
        }

        //Hashing the password sent by the client using bcrypt
        const hashPassword=await bcrypt.hash(req.body.password,10)

        //create a new user with the hashed password
        const newUser=await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashPassword,
        });

        res.json({success: true, user:newUser});


    }catch(err){
        console.log(err);
        res.status(500).json({error: 'an error occured while registering the user'})
    }
}

module.exports=signUpController;