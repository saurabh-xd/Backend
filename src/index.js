// require('dotenv').config({path: './env'})
import dotenv from "dotenv"

import { app } from "./app.js";
import connectDB from "./db/index.js";



dotenv.config({
    path: './.env'
})

connectDB()
.then(()=>{
   app.listen(process.env.PORT || 8000, ()=>{                              //server started now it can listen post,get etc request
    console.log(`server is running at port : ${process.env.PORT}`);
    
   }) 
})
.catch((err)=>{
    console.log("MONGODB connection failed", err);
    
})













// 2nd method to connect 

// import express from "express"
// const app = express()

// ( async ()=>{
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//        app.on("error",(error)=>{
//         console.log("ERRR", error);
//         throw error
        
//        })

//        app.listen(process.env.PORT, ()=>{
//         console.log(`app is listening in port ${process.env.PORT}`);
        
//        })

//     } catch (error) {
//         console.log("ERROR", error);
//         throw err
        
//     }
// })()  