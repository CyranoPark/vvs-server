import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as path from 'path';
import * as cookieParser from 'cookie-parser';
import * as logger from 'morgan';

const initExpressLoaders = (app: express.Application): express.Application => {
    app.use(cors());
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));

    return app;
};

export default initExpressLoaders;
