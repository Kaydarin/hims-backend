import { PrimaryKey, AutoIncrement, Column, Unique, AllowNull, CreatedAt, Model, Table, UpdatedAt, HasMany, BelongsToMany } from 'sequelize-typescript';
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

    @HasMany(() => Role, 'createdBy')
    createdRole: Role[];

    @HasMany(() => Role, 'updatedBy')
    updatedRole: Role[];

    @HasMany(() => UserRole, 'createdBy')
    createdUserRole: UserRole[];

    @HasMany(() => UserRole, 'updatedBy')
    updatedUserRole: UserRole[];

    @HasMany(() => RolePermission, 'createdBy')
    createdRolePermission: RolePermission[];

    @HasMany(() => RolePermission, 'updatedBy')
    updatedRolePermission: RolePermission[];

    @HasMany(() => Permission, 'createdBy')
    createdPermission: Permission[];

    @HasMany(() => Permission, 'updatedBy')
    updatedPermission: Permission[];

    @HasMany(() => Product, 'createdBy')
    createdProduct: Product[];

    @HasMany(() => Product, 'updatedBy')
    updatedProduct: Product[];

    @HasMany(() => Item, 'createdBy')
    createdItem: Item[];

    @HasMany(() => Item, 'updatedBy')
    updatedItem: Item[];

    @HasMany(() => Customer, 'createdBy')
    createdCustomer: Customer[];

    @HasMany(() => Customer, 'updatedBy')
    updatedCustomer: Customer[];

    @HasMany(() => CustomerItem, 'createdBy')
    createdCustomerItem: CustomerItem[];

    @HasMany(() => CustomerItem, 'updatedBy')
    updatedCustomerItem: CustomerItem[];
}