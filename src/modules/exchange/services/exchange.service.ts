import { IExchageInput } from "../dtos/requests/exchange.dto";
import { Currency } from "../../../db/models/Currency.model";
import { ExchangeRateServiceProvider } from "../../../common/providers/exchange-rate.provider";
import { ITransactionAttributes} from "../../../db/models/Transaction.model";
import { TransactionServices } from "../../transactions/services/transaction.service";
export class ExchangeService {

    async exchangeCurrency(payload: IExchageInput): Promise<ITransactionAttributes>{
     const {amount, date, baseCurrency, targetCurrency} = payload;
     await this.validateSupportForCurrency(baseCurrency);
     await this.validateSupportForCurrency(targetCurrency); 
     const {baseUsdRate, targetUsdRate} = await this.fetchUsdRate({baseCurrency, targetCurrency});
     const convertedAmount = this.calculateExchange({
         amount,
         baseUsdRate,
         targetUsdRate
     });
     const transactionService = new TransactionServices();
     const transaction = await transactionService.createTransaction({
         amount,
         convertedAmount,
         exchangeFromUsdRate:baseUsdRate,
         exchangeToUsdRate:targetUsdRate,
         exchangeFromCurrency:baseCurrency,
         exchangeToCurrency:targetCurrency,
         currencyPair:`${baseCurrency}/${targetCurrency}`,
         pairRate: (convertedAmount/amount),
         creationDate: new Date(date)
     })
     return transaction;

    }
    private async validateSupportForCurrency(currencyCode: string) : Promise<boolean> {
        const isSupportedCurrency = await Currency.findOne({
            where: {
                currencyCode,
            }
        })

        if(!isSupportedCurrency) throw new Error("Sorry we do not support one of your currency curency at this time");
        
        return true;
    } 

    /**
     * @method fetchCurrentUsdRate this method fetch usd currentRate to USD/Currency pair
     * @param payload 
     * @returns Promise<{fetchUsdBaseRate: number; fetchUsdTargetRate: number}>
     */
    private async fetchUsdRate(payload:{
        baseCurrency: string
        targetCurrency: string;
    }): Promise<{baseUsdRate: number; targetUsdRate: number }> {
        const {baseCurrency, targetCurrency} = payload;
        const exchangeProvider = new ExchangeRateServiceProvider();
        const response = await exchangeProvider.getUsdConnvertionRate();
        const targetUsdRate : number = response.rate[targetCurrency];
        const baseUsdRate : number = response.rate[baseCurrency];
        return { baseUsdRate, targetUsdRate};

    }

    /**
     * @method calculateExchange method does the conversion 
     * @returns number
     */
    private calculateExchange(payload:{
        amount: number;
        baseUsdRate: number;
        targetUsdRate: number;
    }): number {
        const {amount, baseUsdRate, targetUsdRate} = payload;
        return amount * (1 / baseUsdRate) * (targetUsdRate);
    }
}