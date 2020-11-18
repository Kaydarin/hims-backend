import { PrimaryKey, AutoIncrement, Column, ForeignKey, AllowNull, CreatedAt, Model, Table, UpdatedAt, BelongsTo } from 'sequelize-typescript';
import { Customer } from './customer.model';
import { Item } from './item.model';
import { User } from './user.model';

@Table({ tableName: 'customer_items' })
export class CustomerItem extends Model {

    // --------------- Columns --------------- //

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
    @ForeignKey(() => User)
    @Column
    createdBy: number;

    @AllowNull(false)
    @ForeignKey(() => User)
    @Column
    updatedBy: number;

    @AllowNull(false)
    @CreatedAt
    @Column
    createdAt: Date;

    @AllowNull(false)
    @UpdatedAt
    @Column
    updatedAt: Date;

    // --------------- Relationships --------------- //

    @BelongsTo(() => User, 'createdBy')
    createdByUser: User;

    @BelongsTo(() => User, 'updatedBy')
    updatedByUser: User;
}