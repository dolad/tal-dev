import { BaseControllers } from "../../../common/controller/base.controller";
import { ITransactionAttributes} from "../../../db/models/Transaction.model";
import { TransactionServices } from "../services/transaction.service";

export class TransactionController extends BaseControllers {
    constructor(){
        super();
        this._initializeRoutes();
    }

    private _initializeRoutes(){
        this.router.get(`${this.path}/transaction`, this.getTransactions);
    }

    private async getTransactions(): Promise<ITransactionAttributes[]> {
        const transactionServices = new TransactionServices();
        const transactions = await transactionServices.getTransactions();
        return transactions;
    }
}