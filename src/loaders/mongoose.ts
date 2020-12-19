import * as mongoose from 'mongoose';
import config from '../config';

const initMongooseLoader = async (): Promise<void> => {
    const { MONGODB_BASE_URL, MONGODB_DATABASE_NAME } = config;
    await mongoose.connect(`${MONGODB_BASE_URL}/${MONGODB_DATABASE_NAME}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    mongoose.connection.on('error', (e) => {
        console.error('connection error:');
        console.error(e);
    });

    mongoose.connection.once('open', () => {
        console.log('mongo db connected');
    });
};

export default initMongooseLoader;
