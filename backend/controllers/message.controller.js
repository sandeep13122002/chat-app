import { json } from "express";

export const sendMessage=async (req,res)=>{
     try{
        const {message}=req.body;
        const {id}=req.params;
        const sendeId=req.user._Id;

     }catch(error){
        console.log("Error in sendMessage controller ",error.message)
        res.status(500).json({error:"Internal server error"});
     }
}