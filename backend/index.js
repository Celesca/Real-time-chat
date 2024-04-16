const express = require('express');
const dotenv = require('dotenv');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const port = process.env.SERVER_PORT || 3000;
const app = express();
const server = http.createServer(app);

app.use(cors());

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
});

dotenv.config();

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('chat-message', (msg) => {
        io.emit('chat-message', msg);
    })

    socket.on('disconnect', () => {
        console.log('user disconnected');
    })
})

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})