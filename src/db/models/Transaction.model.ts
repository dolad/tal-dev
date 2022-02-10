import { Column, CreatedAt, DataType, Model, Table } from "sequelize-typescript";
import { Optional } from "sequelize/types";


export interface ITransactionAttributes {
    id: string;
    currencyPair: string;
    pairRate: number;
    amount: number;
    convertedAmount: number;
    exchangeFromUsdRate: number;
    exchangeToUsdRate: number;
    exchangeFromCurrency: string;
    exchangeToCurrency: string;
    creationDate: Date;
}

export type ICreateTransactionAttributes = Optional<ITransactionAttributes, "id">



@Table
export class Transaction extends Model<ITransactionAttributes, ICreateTransactionAttributes> {
    @Column({
        type:DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true,
    })
    id: string;

    @Column({
        type:DataType.CHAR,
        allowNull: false,
    })
    currencyPair: string;

    @Column({
        type: DataType.FLOAT,
        allowNull: false,
        defaultValue: 0
    })
    pairRate: number;

    @Column({
        type: DataType.FLOAT,
        allowNull: false,
        defaultValue: 0
    })
    amount: number;

    @Column({
        type: DataType.FLOAT,
        allowNull: false,
        defaultValue: 0
    })
    convertedAmount: number;

    @Column({
        type: DataType.FLOAT,
        allowNull: false,
        defaultValue: 0
    })
    exchangeFromUsdRate: number;

    @Column({
        type: DataType.FLOAT,
        allowNull: false,
        defaultValue: 0
    })
    exchangeToUsdRate: number;

    @Column({
        type:DataType.CHAR,
        allowNull: false,
    })
    exchangeFromCurrency: string;

    @Column({
        type:DataType.CHAR,
        allowNull: false,
    })
    exchangeToCurrency: string;
    
    @CreatedAt
    creationDate: Date;


}