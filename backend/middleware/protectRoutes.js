import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';


const protectRoute= async (req,res,next)=>{

try{
    const token=req.cookies.jwt;
   if(!token){
    return res.status(401).json({error:"Unauthorized -No Token Provided"});
   }
   const decoded =jwt.verify(token,process.env.JWT_SECRET);

   if(!decoded){
    return res.status(401).json({error:"Unauthorized - Invalid Token"});

   }
   console.log(decoded.userId)
   const user =await User.findOne({_id:'664d6c2220a5062fd341823a'});
  console.log(user)
//    if(!user){
//     return res.status(404).json({error:"User not found"});
//    }

    // req.user=user
    // console.log(user)
    // next()


//    if(!token){
//     return res.status(401).json({error:"Unauthorized- No Token Provided"});
//    }

}catch(error){
    console.log("Error in protectectRoute middleware :", error.message)
    res.status(500).json({error:"Internal server error"});
}


}

export default protectRoute;