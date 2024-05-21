import jwt from "jsonwebtoken"

const generateTokenAndSetCookie=(userId,res)=>{
    const token=jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:'15d'
    });


   res.cookie("jwt",token,{
    maxAge: 15*24*60*1000,
    httpOnly:true, //prevent xss attack cross-site scripting attacks
    
    sameSite:"strict", // CSRF attacks cross-site request frogery attacls
    secure:process.env.NODE_ENV !== "development"
   })




}


export default generateTokenAndSetCookie;