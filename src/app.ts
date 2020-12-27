import * as express from 'express';
import { createServer } from 'http';

import initLoaders from './loaders';
import indexRouter from './routes';
import articlesRouter from './routes/articles';
import { AppError } from './Service/ErrorService';

const env: string = process.env.NODE_ENV || 'development';
const port: number = Number(process.env.PORT) || 8080;

const app: express.Application = express();

const startServer = async () => {
    await initLoaders(app);

    app.use('/', indexRouter);
    app.use('/articles', articlesRouter);

    app.use((_req, _res, next) => {
        next(new AppError('Not Found', 404));
    });

    app.use((err, req, res, next) => {
        err.statusCode = err.statusCode || 500;
        err.status = err.status || 'error';

        res.status(err.statusCode).json({
            status: err.status,
            message: err.message,
        });
    });

    const server = createServer(app);

    server.listen(port, () => {
        console.log(`> Ready on port ${port} [${env}]`);
    });
};

startServer();
