import express from 'express';
import { Config } from './config';
import UserController from './controllers/user.controller';
import FileController from './controllers/file.controller';
import morgan from 'morgan';
import bodyParser = require('body-parser');

class App {
    readonly _app: any;
    readonly _config: any;
    constructor() {
        this._config = new Config();
        this._app = express();
        this.loadExtensions();
    }

    public get app(): express.Application {
        return this._app;
    }

    loadExtensions(): void {
        this._app.use(morgan('dev'));
        this._app.use(bodyParser.json());

        // load controllers
        this._app.use(new UserController().router);
        this._app.use(new FileController().router);
    }
}

export default new App().app;
