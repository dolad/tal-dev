import { Column, CreatedAt,  Model, Table } from "sequelize-typescript";
import { DataTypes, Optional } from "sequelize";

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
        type:DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    })
    id: string;

    @Column({
        type:DataTypes.CHAR,
        allowNull: false,
    })
    currencyPair: string;

    @Column({
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    })
    pairRate: number;

    @Column({
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    })
    amount: number;

    @Column({
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    })
    convertedAmount: number;

    @Column({
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    })
    exchangeFromUsdRate: number;

    @Column({
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    })
    exchangeToUsdRate: number;

    @Column({
        type:DataTypes.CHAR,
        allowNull: false,
    })
    exchangeFromCurrency: string;

    @Column({
        type:DataTypes.CHAR,
        allowNull: false,
    })
    exchangeToCurrency: string;
    
    @CreatedAt
    creationDate: Date;


}