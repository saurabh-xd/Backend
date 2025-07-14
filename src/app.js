import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))     //for json data from frontend
app.use(express.urlencoded({extended: true, limit: "16kb"}))  // for form data that come from forntend
app.use(express.static("public")) //to store files
app.use(cookieParser())   // to read browser cookies


//routes import

import userRouter from './routes/user.routes.js'


//routes declaretion
app.use("/api/v1/users", userRouter)



export { app }