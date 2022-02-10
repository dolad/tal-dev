import * as express from 'express';

export class BaseControllers {
    public path = '/api/v1';
    public router = express.Router();
}