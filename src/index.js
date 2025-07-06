// require('dotenv').config({path: './env'})
import dotenv from "dotenv"


import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()













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