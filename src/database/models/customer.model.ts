import { PrimaryKey, AutoIncrement, Column, ForeignKey, Unique, AllowNull, CreatedAt, Model, Table, UpdatedAt, BelongsTo, BelongsToMany } from 'sequelize-typescript';
import { Item } from './item.model';
import { CustomerItem } from './customer-item.model';
import { User } from './user.model';

@Table({ tableName: 'customers' })
export class Customer extends Model {

    // --------------- Columns --------------- //

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

    @BelongsToMany(() => Item, () => CustomerItem)
    items: Item[];

    @BelongsTo(() => User, 'createdBy')
    createdByUser: User;

    @BelongsTo(() => User, 'updatedBy')
    updatedByUser: User;
}