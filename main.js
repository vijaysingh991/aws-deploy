import express from "express"
import cors from "cors"
import connection from "./db.js"
import userRoute from "./route.js"
const app=express()
app.use(cors())
app.use(express.json())
app.use("/user",userRoute)
const port=3001
app.get("/health",(req,res)=>{
    return res.json({status:true,time:new Date(),message:"server running perfectly"})
})
app.listen(port,async()=>{
    await connection()
    console.log(`server started at port - > ${port}`)
})