import { BaseControllers } from "../../../common/controller/base.controller";
import { Request, Response } from 'express';
import { ExchangeService } from "../services/exchange.service";
import { IExchageInput } from "../dtos/requests/exchange.dto";


export class ExchangeControllers extends BaseControllers {
    constructor(){
        super();
        this._initializeRoutes();
    }
    private  _initializeRoutes(){
        this.router.get(`${this.path}/healthCheck`, this.healthCheck);
        this.router.post(`${this.path}/exchange`,  this.exchangeCurrency);
    }
    public healthCheck(req:Request, res: Response){
        return res.status(200).send({success:'true'})
    }
    public async exchangeCurrency(req: Request, res:Response) {
        try {
           
            const body  = req.body;
            const exchangeService = new ExchangeService();
            const exchange = await exchangeService.exchangeCurrency({
                ...body
            });
            return res.status(200).json({data: exchange});
        } catch (error) {
            return res.status(500).json({error: error});
        }
    }


}