// Import only what we need from express
import { Router, Request, Response } from 'express';
import { User } from '../models/user';

// Assign router to the express.Router() instance

export default class UserController {
    private _router: Router;
    constructor() {
        this._router = Router();
        this.routes();
    }

    get router(): Router {
        return this._router;
    }

    public routes() {
        this._router.get('/users', async (req: Request, res: Response) => {
            res.send('users route test');
        });

        this._router.get('/users/:id', async (req: Request, res: Response) => {
            if (req.params.id) {
                res.send(req.params.id);
            }
        });

        this._router.post('/users', async (req: Request, res: Response) => {
            try {
                if (req.body instanceof User) {
                    const payload = req.body as User;
                    res.send(payload);
                }
            } catch(err) {
                console.log(err);
            }
        })
    }
}


