import { BelongsToMany, PrimaryKey, AutoIncrement, Column, Unique, AllowNull, CreatedAt, Model, Table, UpdatedAt } from 'sequelize-typescript';
import { Item } from './item.model';
import { CustomerItem } from './customer-item.model';

@Table({ tableName: 'customers' })
export class Customer extends Model {

    @BelongsToMany(() => Item, () => CustomerItem)
    items: Item[];

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    fullname: string;

    @Unique
    @Column
    email: string;

    @Unique
    @Column
    phoneNo: number;

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