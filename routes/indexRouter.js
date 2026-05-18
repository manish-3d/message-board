const express = require("express");
const router = express.Router();

const messages = [
    {
        text : "hi there", 
        user : "amando",
        added : new Date()
    },
    {
        text : "hello there", 
        user : "charles",
        added : new Date()
    }
];
router.get("/", (req,res) => {
    res.render("index",{
        title : "Mini messageboard",
        messages : messages
    });
});
router.get("/new",(req,res) => {
    res.render("form");
});
router.post("/new", (req , res) => {
    const messageText = req.body.messageText;
    const messageUser = req.body.messageUser;

    messages.push({
        text : messageText,
        user : messageUser,
        added : new Date()
    });
res.redirect("/");
});
router.get("/message/:id",(req,res)=>{
    const messageId = req.params.id;
    const message = messages[messageId];

    res.render("message",{
        message : message
    });
});
module.exports = router;
