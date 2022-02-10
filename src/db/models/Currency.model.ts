import { Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Optional } from "sequelize/types";


export interface ICurrencyAttributes {
    id: number;
    currencyCode: string;
}

export type ICreateCurrencyAttributes = Optional<ICurrencyAttributes, "id">


@Table
export class Currency extends Model<ICurrencyAttributes, ICreateCurrencyAttributes> {
    @Column
    @PrimaryKey
    id: number;

    @Column({
        type:DataType.CHAR,
        allowNull: false,
    })
    currencyCode: string;
}