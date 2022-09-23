const express=require("express")
const bodyparser=require('body-parser')
const cors=require('cors')
const app=express()
require('dotenv').config()
const port=process.env.PORT
const DB=require("./config/DB")


app.use(cors())
app.use(express.json())
app.use(bodyparser.urlencoded({extended:true}));
app.use("/",require("./routes/route"))
DB();
app.get("/",(req,res,next)=>{
    console.log("its hitting")
    res.send(`<h1>Welcome </h1>`)
})
app.listen(port,()=>console.log(`Server Running on port ${port}`))

