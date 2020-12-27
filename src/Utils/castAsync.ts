import { Request, Response, NextFunction, RequestHandler } from 'express';

type Middleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => Promise<void>;

export default (middleware: Middleware): RequestHandler => {
    return async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> => {
        try {
            await middleware(req, res, next);
        } catch (e) {
            next(e);
        }
    };
};
