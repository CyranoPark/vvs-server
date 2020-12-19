import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as path from 'path';
import * as cookieParser from 'cookie-parser';
import * as logger from 'morgan';
import * as swaggerJsdoc from 'swagger-jsdoc';
import * as swaggerUi from 'swagger-ui-express';
import swaggerOptions from '../config/swaggerOIptions';

const initExpressLoaders = (app: express.Application): express.Application => {
    app.use(cors());
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));

    const specs = swaggerJsdoc(swaggerOptions);
    app.use(
        '/docs',
        swaggerUi.serve,
        swaggerUi.setup(specs, { explorer: true })
    );
    return app;
};

export default initExpressLoaders;
