const express = require("express");
const app =express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/post");
const academyRouter = require("./routes/academy")
const URL = "mongodb+srv://academymate:sakthi*123@cluster0.4ob4gls.mongodb.net/social?retryWrites=true&w=majority"

// ----------------------------------------------------------------
mongoose.connect(URL, {useNewUrlParser: true});
const database=mongoose.connection
database.on("error", ()=>{
    console.log("Database is error");
})

database.once("open", ()=>{
    console.log("Database connection is Available");
})

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

//Baisc Routes
app.get("/",(req,res) =>{
    res.send("Welcome to Home page");
})
app.get("/authenticate", (req,res) =>{
    res.send("welcome to authenticate End Point");
})

//Express Routers
app.use("/api/user", userRoute);

app.use("/api/auth", authRoute);

app.use("/api/posts",postRoute);

app.use("/api/academy", academyRouter)

app.listen(7000,()=>{
    console.log("listening on port 7000... is running Now");
})