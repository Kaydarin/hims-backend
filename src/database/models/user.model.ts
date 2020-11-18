import { PrimaryKey, AutoIncrement, Column, Unique, AllowNull, CreatedAt, Model, Table, UpdatedAt, HasMany, BelongsToMany, } from 'sequelize-typescript';
import { Role, UserRole, RolePermission, Permission, Product, Item, Customer, CustomerItem } from './index';

@Table({ tableName: 'users' })
export class User extends Model {

    // --------------- Columns --------------- //

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @AllowNull(false)
    @Column
    fullname: string;

    @AllowNull(false)
    @Unique
    @Column
    username: string;

    @AllowNull(false)
    @Column
    password: string;

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

    // --------------- Relationships --------------- //

    @BelongsToMany(() => Role, () => UserRole)
    roles: Role[];

    @HasMany(() => Role, 'createdByUser')
    createdRole: Role[];

    @HasMany(() => Role, 'updatedByUser')
    updatedRole: Role[];

    @HasMany(() => UserRole, 'createdByUser')
    createdUserRole: UserRole[];

    @HasMany(() => UserRole, 'updatedByUser')
    updatedUserRole: UserRole[];

    @HasMany(() => RolePermission, 'createdByUser')
    createdRolePermission: RolePermission[];

    @HasMany(() => RolePermission, 'updatedByUser')
    updatedRolePermission: RolePermission[];

    @HasMany(() => Permission, 'createdByUser')
    createdPermission: Permission[];

    @HasMany(() => Permission, 'updatedByUser')
    updatedPermission: Permission[];

    @HasMany(() => Product, 'createdByUser')
    createdProduct: Product[];

    @HasMany(() => Product, 'updatedByUser')
    updatedProduct: Product[];

    @HasMany(() => Item, 'createdByUser')
    createdItem: Item[];

    @HasMany(() => Item, 'updatedByUser')
    updatedItem: Item[];

    @HasMany(() => Customer, 'createdByUser')
    createdCustomer: Customer[];

    @HasMany(() => Customer, 'updatedByUser')
    updatedCustomer: Customer[];

    @HasMany(() => CustomerItem, 'createdByUser')
    createdCustomerItem: CustomerItem[];

    @HasMany(() => CustomerItem, 'updatedByUser')
    updatedCustomerItem: CustomerItem[];
}