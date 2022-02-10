import {Server} from "./src/server";
import {ExchangeControllers} from './src/modules/exchange/controllers/exchange.controller';
import { TransactionController } from "./src/modules/transactions/controllers/transaction.controller";

export const app = new Server([new ExchangeControllers, new TransactionController])