import * as express from 'express';
import * as compression from 'compression';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import * as cors from 'cors';

/**
 * Controllers (route handlers)
 */
import * as apiController from './controllers/api';

/**
 * Create Express server
 */
const app = express();

/**
 * Express configurations
 */
app.set('port', process.env.PORT || 8080);
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors({ origin: true }));

/**
 * API examples routes.
 */
app.get('/api', apiController.api);

export default app;
