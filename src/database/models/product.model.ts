import { HasMany, PrimaryKey, AutoIncrement, Column, Unique, AllowNull, CreatedAt, Model, Table, UpdatedAt } from 'sequelize-typescript';
import { Item } from './item.model';

@Table({ tableName: 'products' })
export class Product extends Model {

    @HasMany(() => Item)
    items: Item[];

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @AllowNull(false)
    @Column
    name: string;

    @Column
    description: string;

    @AllowNull(false)
    @Unique
    @Column
    code: string;

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