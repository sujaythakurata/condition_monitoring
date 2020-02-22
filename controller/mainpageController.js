
const path = require("path");

exports.controller = (req,res)=>{
    res.sendFile(path.join(__dirname,"../public/view/main.html"));
}