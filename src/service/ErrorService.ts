import * as mongoose from 'mongoose';

export class AppError extends Error {
    private statusCode: number;
    private status: string;
    private isOperational: boolean;

    constructor(message: string, statusCode: number) {
        super(message);

        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true;

        Error.captureStackTrace(this, this.constructor);
    }
}

class ErrorService {
    validateId(id: string) {
        const ObjectId: any = mongoose.Types.ObjectId;
        return ObjectId.isValid(id);
    }

    createIdValidateError() {
        throw new AppError('invalid id', 400);
    }

    createNotFoundError() {
        throw new AppError('Not Found', 404);
    }
}

export default new ErrorService();
