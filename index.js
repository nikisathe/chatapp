const http =require("http");
const express = require("express");
const path = require('path');
const { Server  } = require("socket.io");


const app = express();
const server = http.createServer(app);
const io = new Server(server)

io.on("connection", (socket)=>{
     //When a client sends the  message event, the server will respond with "Message  Received" 

   socket.on("Two-usercommunication", (message)=>{
    io.emit("message", message); 
}); 
  
    
  
});


app.use(express.static(path.resolve("./public")));
app.get ('/' ,(req,res) =>{
    return res.sendFile("/public/index.html")
})

server.listen(3000,() =>console.log(`server is started`))