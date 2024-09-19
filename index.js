import express from 'express'
const app = express();
import route from './router/loginroute.js'
app.use(express.json())
app.use("/api",route)
import dotenv from 'dotenv'
dotenv.config({})
const PORT = process.env.PORT || 3000

app.listen(PORT,(req,res)=>{
    console.log(`Server is running on port ${PORT}`)  // Server is running on port 3000
})