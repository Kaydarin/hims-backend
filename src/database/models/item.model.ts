import { BelongsToMany, PrimaryKey, AutoIncrement, Column, ForeignKey, Unique, AllowNull, CreatedAt, Model, Table, UpdatedAt } from 'sequelize-typescript';
import { Customer } from './customer.model';
import { CustomerItem } from './customer-item.model';
import { Product } from './product.model';

@Table({ tableName: 'items' })
export class Item extends Model {

    @BelongsToMany(() => Customer, () => CustomerItem)
    customers: Customer[];

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @AllowNull(false)
    @ForeignKey(() => Product)
    @Column
    productId: number;

    @AllowNull(false)
    @Unique
    @Column
    code: string;

    @Column
    remarks: string;

    @AllowNull(false)
    @Column({ defaultValue: false })
    isDeleted: boolean;

    @AllowNull(false)
    @CreatedAt
    @Column
    createdAt: Date;

    @AllowNull(false)
    @UpdatedAt
    @Column
    updatedAt: Date;
}