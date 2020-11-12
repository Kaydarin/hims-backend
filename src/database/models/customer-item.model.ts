import { PrimaryKey, AutoIncrement, Column, ForeignKey, AllowNull, CreatedAt, Model, Table, UpdatedAt } from 'sequelize-typescript';
import { Customer } from './customer.model';
import { Item } from './item.model';

@Table({ tableName: 'customer_items' })
export class CustomerItem extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @AllowNull(false)
    @ForeignKey(() => Customer)
    @Column
    customerId: number;

    @AllowNull(false)
    @ForeignKey(() => Item)
    @Column
    itemId: number;

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