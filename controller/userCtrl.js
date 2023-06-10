const User = require("../models/userModel");

const createUser = async (req, res) =>{

   const email=req.body.email;
   const findUser = await User.fineOne(email);

   if(!findUser){
      //create a new User
      const newUser = User.create(req.body);
      res.json(newUser);
   }
   else{
      res.json({
         msg: 'User Already Exists',
         success: false,
      });
   }
};

module.exports={createUser};