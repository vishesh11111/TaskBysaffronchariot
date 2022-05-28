const express = require("express");
const app = express();
const User = require("../models/user.model");

app.get("", async(req,res)=>{
    try {
        const user = await User.find().lean().exec();
        return res.status(200).send(user)
    } catch (error) {
        return res.status(500).send({msg : msg.error});
    }
})


module.exports= app;