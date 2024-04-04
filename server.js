const express = require('express')
const app = express();

const PORT = process.env.PORT || 3001;
const http = require('http').Server(app);

const io = require("socket.io")(3001, {
    cors: {
        origin: 'http://localhost:3000', 
        methods: ["GET", "POST", "PATCH", "DELETE"],
    }
});

io.on("connection", (socket) => {
    console.log("User connected");
    socket.on("new victim stop", (stops) => {
        socket.broadcast.emit("new victim location", stops);
    })
})

console.log('hello')