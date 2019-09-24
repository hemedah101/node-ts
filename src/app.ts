import * as express from 'express';
import * as compression from 'compression';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import * as cors from 'cors';
import * as errorHandler from 'errorhandler';

/**
 * Create Express server
 */
const app = express();

/**
 * Express configurations
 */
app.set('port', process.env.PORT || 8080);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors({ origin: true }));

/**
 * Error Handler.
 */
if (process.env.NODE_ENV === 'development') {
    // only use in development
    app.use(errorHandler());
} else {
    app.use((err: any, req: express.Request, res: express.Response) => {
        console.error(err);
        res.status(500).send('Server Error');
    });
}

export default app;
