
const express = require("express");
const cors=require("cors");
const app = express();
app.listen(4001,()=>{
console.log("running on port 4001");
})
app.get("/",(req,res)=>{
res.status(200).json("home route...")
})
