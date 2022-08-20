"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var http_1 = __importDefault(require("http"));
var path_1 = __importDefault(require("path"));
var PORT = process.env.PORT || 8080;
var app = (0, express_1.default)();
app.set('port', PORT);
var server = http_1.default.createServer(app);
// Middlewares
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    allowedHeaders: ['Content-Type'],
    origin: ['http://localhost:3000']
}));
// Routes
app.use('/api/room', require('./routes/room.routes'));
// Socket.io
var socket_io_1 = require("socket.io");
var io = new socket_io_1.Server(server, {
    cors: {
        origin: 'http://localhost:3000'
    }
});
io.on('connection', function (socket) {
    socket.on('joinroom', function (roomId) {
        socket.join(roomId);
        socket.broadcast.to(roomId).emit('userjoined');
    });
    socket.on('leaveroom', function (roomId) {
        socket.leave(roomId);
    });
    socket.on('updateBody', function (_a) {
        var value = _a.value, roomId = _a.roomId;
        socket.broadcast.to(roomId).emit('updateBody', value);
    });
    socket.on('updateInput', function (_a) {
        var value = _a.value, roomId = _a.roomId;
        socket.broadcast.to(roomId).emit('updateInput', value);
    });
    socket.on('setBody', function (_a) {
        var value = _a.value, roomId = _a.roomId;
        socket.broadcast.to(roomId).emit('setBody', value);
    });
    socket.on('setInput', function (_a) {
        var value = _a.value, roomId = _a.roomId;
        socket.broadcast.to(roomId).emit('setInput', value);
    });
    socket.on('setLanguage', function (_a) {
        var value = _a.value, roomId = _a.roomId;
        socket.broadcast.to(roomId).emit('setLanguage', value);
    });
    socket.on('setOutput', function (_a) {
        var value = _a.value, roomId = _a.roomId;
        socket.broadcast.to(roomId).emit('setOutput', value);
    });
    socket.on('joinAudioRoom', function (roomId, userId) {
        socket.broadcast.to(roomId).emit('userJoinedAudio', userId);
        socket.on('leaveAudioRoom', function () {
            socket.broadcast.to(roomId).emit('userLeftAudio', userId);
        });
    });
});
server.listen(PORT, function () {
    console.log("Server listening on port: ".concat(PORT));
});
if (process.env.NODE_ENV === 'production') {
    PORT = process.env.PORT;
    console.log('env is prod');
    app.use(express_1.default.static('frontend/build'));
    app.get('*', function (req, res) {
        console.log('req: ', req.url);
        res.sendFile(path_1.default.resolve(__dirname, '..', 'frontend', 'build', 'index.html'));
    });
}
