import allowedOrigins from './allowedOrigins';
import { CorsOptions } from 'cors';

const corsOptions: CorsOptions = {
    origin: (origin, callback) => {
        if (typeof origin === 'string' && allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else if (!origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200
}

module.exports = corsOptions;