const express = require('express'),
    path = require('path'),
    fs = require('fs');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const staticRoot = 'dist/';

const roomToUsers = {
    1: [],
    2: [],
}

const roomToMessages = {
    1: [],
    2: [],
}

app.set('port', (process.env.PORT || 3000));
app.use(express.static(staticRoot));

io.on('connection', socket => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    socket.on('add-message', msg => {
        const roomId = msg.substr(msg.indexOf('[') + 1, msg.indexOf(']') - 1);
        const message = msg.substr(msg.indexOf(']') + 1);
        roomToUsers[roomId].push(socket);
        roomToMessages[roomId].push(message);
        for (socket of roomToUsers[roomId]) {
            socket.emit('message', message);
        }
        // io.sockets.emit('message', message);
    });
});


app.use(function (req, res, next) {
    // if the request is not html then move along
    const accept = req.accepts('html', 'json', 'xml');
    if (accept !== 'html') {
        return next();
    }

    // if the request has a '.' assume that it's for a file, move along
    const ext = path.extname(req.path);
    if (ext !== '') {
        return next();
    }
    fs.createReadStream(staticRoot + 'index.html').pipe(res);
});

http.listen(app.get('port'), function () {
    console.log('app running on port', app.get('port'));
});