

// Import only what we need from express
import { Router, Request, Response } from 'express';

// Assign router to the express.Router() instance

export default class FileController {
    private _router: Router;
    constructor() {
        this._router = Router();
        this.routes();
    }

    get router(): Router {
        return this._router;
    }

    public routes() {

        this._router.get('/', async (req: Request, res: Response) => {
            console.log(process.cwd() + '/content/index.html');
            res.sendFile(process.cwd() + '/content/index.html');
        });

        this._router.get('/:id', async (req: Request, res: Response) => {
            if (req.params.id) {
                res.send(req.params.id);
            }
        });
    }
}


