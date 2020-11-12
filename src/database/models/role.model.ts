import { HasMany, BelongsToMany, PrimaryKey, AutoIncrement, Column, Unique, AllowNull, CreatedAt, Model, Table, UpdatedAt } from 'sequelize-typescript';
import { User } from './user.model';
import { Permission } from './permission.model';
import { RolePermission } from './role-permission.model';

@Table({ tableName: 'roles' })
export class Role extends Model {

    @HasMany(() => User)
    users: User[];

    @BelongsToMany(() => Permission, () => RolePermission)
    permissions: Permission[];

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @AllowNull(false)
    @Unique
    @Column
    name: string;

    @Column
    description: string;

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