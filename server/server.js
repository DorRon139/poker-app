import express from "express";
import { Server } from "socket.io";
import http from 'http'

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173',
    }
})


io.on('connection', (socket) => {
    console.log('user connected', socket.id)
    socket.join('room1')
    socket.on('get-card', ({ value, suit}) => {
        socket.emit('show-card', {value, suit})
    })
})
app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

server.listen(3040, () => {
  console.log('listening on *:3000');
});