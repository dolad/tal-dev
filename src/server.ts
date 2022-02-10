import express from 'express';
import { sequelize } from './db';
export class Server {
    public app: any;
    public port = 3000;

    constructor(controllers:any){
        this.app = express();
        this._initConfig();
        this.loadControllers(controllers)
    }

    private async _initConfig(){
        this.app.use(express.json());
        await sequelize.sync({force: true});
        
    }

    private loadControllers(controllers:any){
        for (const controller of controllers){
            this.app.use('/', controller.router);
        }
    }

    public listen(){
        this.app.listen(this.port, () =>  {
            console.log(`⚡️[server]: Server is running at http://localhost:${this.port}`);
        })
    }
    
}