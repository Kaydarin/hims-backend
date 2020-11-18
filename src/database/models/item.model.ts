import { PrimaryKey, AutoIncrement, Column, ForeignKey, Unique, AllowNull, CreatedAt, Model, Table, UpdatedAt, BelongsTo, BelongsToMany } from 'sequelize-typescript';
import { Customer } from './customer.model';
import { CustomerItem } from './customer-item.model';
import { Product } from './product.model';
import { User } from './user.model';

@Table({ tableName: 'items' })
export class Item extends Model {

    // --------------- Columns --------------- //

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

    @BelongsTo(() => Product)
    product: Product;

    @BelongsToMany(() => Customer, () => CustomerItem)
    customers: Customer[];

    @BelongsTo(() => User, 'createdBy')
    createdByUser: User;

    @BelongsTo(() => User, 'updatedBy')
    updatedByUser: User;
}