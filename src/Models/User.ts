import * as mongoose from 'mongoose';
import { IUserModel } from '../types/models/User';

const userSchema: mongoose.Schema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
        },
        name: {
            type: String,
            required: true,
            trim: true,
        },
        nickname: {
            type: String,
            required: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            trim: true,
        },
    },
    { timestamps: true }
);

const User = mongoose.model<IUserModel>('User', userSchema);
export default User;
