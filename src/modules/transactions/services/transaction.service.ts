import { ICreateTransactionAttributes, ITransactionAttributes, Transaction } from "../../../db/models/Transaction.model";

export class TransactionServices {
    async createTransaction(payload: ICreateTransactionAttributes): Promise<ITransactionAttributes>{
        return  await Transaction.create(payload);
    }
    async getTransactions(): Promise<ITransactionAttributes[]>{
        return await Transaction.findAll();
    }
}