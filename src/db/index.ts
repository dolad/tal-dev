import {Sequelize} from "sequelize-typescript";
import { Transaction } from "./models/Transaction.model";
import config from "../common/config";
import { Currency } from "./models/Currency.model";

const sequelize = new Sequelize({
    dialect: 'postgres',
   define: {
       underscored: true,
   },
   username: config().db.username,
   password: config().db.password,
   port: config().db.port,
   database: config().db.database,
   models: [Transaction,Currency],
   logging:false,

})


export {sequelize};