import * as SocketIO from 'socket.io';

const addSocketListener = (io: SocketIO.Server): void => {
    io.on('connection', () => {
        console.log('a user connected');
    });
};

export default addSocketListener;
