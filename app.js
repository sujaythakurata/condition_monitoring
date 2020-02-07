const server = require('express');
const app = server();
const path = require("path");
const port = process.env.PORT || 3000;
app.use(server.static(path.join(__dirname,"public")));
app.use(server.static(path.join(__dirname,"node_modules")));
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname+"/public/view/main.html"));
});
app.listen(port,()=>{console.log('hello server is running at port '+port)});