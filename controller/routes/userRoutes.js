const express = require("express");
const { registerUser, authUser } = require("../controllers/userController");
const router = express.Router();

router.post('/login',(req, res)=>{
    console.log("yes",req.data);
    res.send("Sent")
});

// router.post('/login',authUser);

module.exports = router;