import { CommonRouteConfig } from "../routes/common.routes.config";
import express from 'express';

export class UsersRoutes extends CommonRouteConfig {
    configureRoutes(): express.Application {
        this.app.route('/users')
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send(`GET request to the ${req.params[0]}`);
            })
            .post((req: express.Request, res: express.Response) => {
                res.status(201).send('User created')
        });
        this.app.route('/users/:id')
            .all((req: express.Request, res: express.Response, next: express.NextFunction) => {
                next()
            })
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send('User found ${req.params.id}')
            })
            .put((req: express.Request, res: express.Response) => {
                res.status(200).send('User updated ${req.params.id}')
            })
            .patch((req: express.Request, res: express.Response) => {
                res.status(200).send('User updated ${req.params.id}')
            })
            .delete((req: express.Request, res: express.Response) => {
                res.status(200).send('User deleted ${req.params.id}')
            });
        return this.app;
    }
    constructor(app: express.Application) {
        super(app, 'users');
    }


}