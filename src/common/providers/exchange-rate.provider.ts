import {Request} from '../request/request';
import config from "../config"
import { ObjectStructLiteral } from '../interface/ObjectStructural.interface';

export class ExchangeRateServiceProvider extends Request {
    constructor(){
        super();
        this.baseURL = config().exchangeRate.baseUrl
    }
    /**
     * @method getUsdConnvertionRate 
     * get the currentConversion rate of all currency
     * @returns OjectStructLiteral
     */
    public async getUsdConnvertionRate(): Promise<ObjectStructLiteral>{
        return await this.fetchRequest('GET');
    }
}