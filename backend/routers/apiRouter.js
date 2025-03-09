const express=require("express")
const router=express.Router();
const os =require("os");
router.get('/', (req, res) => {
  res.status(200).json(`test home route ${os.hostname()}`);
});

router.get('/about', (req, res) => {
  res.status(200).json('About Page');
});

module.exports=router;
