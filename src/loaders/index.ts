import * as express from 'express';
import expressLoader from './express';
import mongooseLoader from './mongoose';

const initLoaders = async (app: express.Application): Promise<void> => {
    expressLoader(app);
    await mongooseLoader();
};

export default initLoaders;
