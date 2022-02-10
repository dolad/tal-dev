import { Column,  Model, PrimaryKey, Table } from "sequelize-typescript";
import { DataTypes, Optional } from "sequelize";


export interface ICurrencyAttributes {
    id: number;
    currencyCode: string;
}

export type ICreateCurrencyAttributes = Optional<ICurrencyAttributes, "id">


@Table
export class Currency extends Model<ICurrencyAttributes, ICreateCurrencyAttributes> {
    
    @PrimaryKey
    @Column
    id: number;

    @Column({
        type:DataTypes.CHAR,
        allowNull: false,
    })
    currencyCode: string;
}