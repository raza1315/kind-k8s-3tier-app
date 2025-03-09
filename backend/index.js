const express = require("express");
const cors=require("cors");
const os =require("os");
const apiRouter=require("./routers/apiRouter");
const app = express();
app.use(cors());
app.listen(4001,()=>{
console.log("running on port 4001");
})
app.use("/test",apiRouter);
app.get('/',(req,res)=>{
 res.status(200).json(`Home Route served by ${os.hostname()} ...`)
})
