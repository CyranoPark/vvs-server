export default (req, res, next): void => {
    if (req.originalUrl.includes('favicon.ico')) {
        return res.status(204).end();
    }
    next();
};
