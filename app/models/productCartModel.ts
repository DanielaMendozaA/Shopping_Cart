import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    ForeignKey,
    HasMany
} from 'sequelize-typescript';
import { CartModel } from './cartModel';
import { ProductModel } from './productModel';
import { OrderModel } from './orderModel';

@Table({
    tableName: "product_cart",
    timestamps: true
})

export class ProductCart extends Model<ProductCart>{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number;

    @ForeignKey(() => CartModel)
    @Column({
        type: DataType.INTEGER,
    })
    cartId!: number;

    @ForeignKey(() => ProductModel)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    productId!: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    quantity!: number;

}

