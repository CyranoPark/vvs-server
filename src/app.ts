import * as express from 'express';
import { createServer } from 'http';
import * as SocketIO from 'socket.io';
import createError from 'http-errors';

import initLoaders from './loaders';
import indexRouter from './routes';
import usersRouter from './routes/users';
import addSocketListener from './socketIO';

const env: string = process.env.NODE_ENV || 'development';
const port: number = Number(process.env.PORT) || 8888;

const app: express.Application = express();

const startServer = async () => {
    await initLoaders(app);

    app.use('/', indexRouter);
    app.use('/users', usersRouter);

    app.use((req, res, next) => {
        next(createError(404));
    });

    app.use((err, req, res, next) => {
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        res.status(err.status || 500);
        res.send({ error: err });
    });

    const server = createServer(app);

    server.listen(port, () => {
        console.log(`> Ready on port ${port} [${env}]`);
    });

    /**
     * socket io
     */

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const io: SocketIO.Server = require('socket.io')(server);
    addSocketListener(io);
};

startServer();
