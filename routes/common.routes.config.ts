import express from 'express';

export abstract class CommonRouteConfig {
    app: express.Application;
    name: string;

    constructor(app: express.Application, name: string) {
        this.app = app;
        this.name = 'common';
    }

    getName(): string {
        return this.name;
    }
    // This force any call extending to provide an implementation matching that signature 
    abstract configureRoutes(): express.Application;
}
