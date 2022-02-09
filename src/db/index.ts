import {Sequelize} from "sequelize-typescript";
import { Transaction } from "./models/Transaction.model";
import config from "../config";

const sequelize = new Sequelize({
    dialect: 'postgres',
   define: {
       underscored: true,
   },
   username: config().db.username,
   password: config().db.password,
   port: config().db.port,
   database: config().db.database,
   logging:false,

})

sequelize.addModels([Transaction]);

export default sequelize;