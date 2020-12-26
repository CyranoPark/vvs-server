import * as dotenv from 'dotenv';
import { IConfig } from '../types/config';

const env = process.env.NODE_ENV || 'development';
const dev = env === 'development';

if (dev) dotenv.config();

const config: IConfig = {
    MONGODB_URI: process.env.MONGODB_URI,
};

export default config;
