const express = require('express');
const dotenv = require('dotenv');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');

const port = process.env.SERVER_PORT || 3001;
const app = express();
const server = createServer(app);
const io = new Server(server);


dotenv.config();

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
})

io.on('connection', (socket) => {
    console.log('a user connected');
    //Handle incoming messages from client
    socket.on('chat-message', (msg) => {
        console.log('message: ' + msg);
        io.emit('chat-message', msg);
    })

    socket.on('disconnect', () => {
        console.log('user disconnected');
    })
})

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})