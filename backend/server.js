import express from "express";
import dotenv from "dotenv";
import authroutes from "./routes/auth.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";
const app=express();
dotenv.config();
const PORT=process.env.PORT||5000;
app.use(express.json());
app.use("/api/auth",authroutes);
app.get("/",(req,res)=>{
    res.send("hello");
})

app.listen(PORT,()=>{
    
    connectToMongoDB()
    console.log(`server ${PORT}`)

})

