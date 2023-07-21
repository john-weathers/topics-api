import allowedOrigins from '../config/allowedOrigins';
import { RequestHandler } from 'express';

const credentials: RequestHandler = (req, res, next) => {
    const origin = req.headers.origin;
    if (typeof origin === 'string' && allowedOrigins.includes(origin)) {
        // @ts-ignore
        res.header('Access-Control-Allow-Credentials', true);
    }
    next();
}

export default credentials;