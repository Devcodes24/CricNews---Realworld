const http = require("http");
const express = require("express");
//const path = require("path");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Socket.io
io.on("connection", (socket) => {
  socket.on('match-event1',(message1)=>{
	  io.emit("message1",message1);
	  
  });
});

io.on("connection", (socket1) => {
  socket1.on('match-event2',(message2)=>{
	  io.emit("message2",message2);
  });
});

io.on("connection", (socket2) => {
  socket2.on('match-event3',(message3)=>{
	  io.emit("message3",message3);
  });
});
io.on("connection", (socket3) => {
  socket3.on('match-event4',(message4)=>{
	  io.emit("message4",message4);
  });
});





//app.use(express.static(path.resolve("./jasi/Websocketio")));

app.get("/", (req, res) => {
  return res.sendFile("/Users\/dubey/Desktop/jasi/Websocketio/index.html");
});

app.get("/harsh", (req, res) => {
  return res.sendFile("/Users\/dubey/Desktop/jasi/Websocketio/index2.html");
});

server.listen(9000, () => console.log(`Server Started at PORT:9000`));
