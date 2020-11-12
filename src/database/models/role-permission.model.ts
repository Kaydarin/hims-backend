import { PrimaryKey, AutoIncrement, Column, ForeignKey, AllowNull, CreatedAt, Model, Table, UpdatedAt } from 'sequelize-typescript';
import { Role } from './role.model';
import { Permission } from './permission.model';

@Table({ tableName: 'role_permissions' })
export class RolePermission extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @AllowNull(false)
    @ForeignKey(() => Role)
    @Column
    roleId: number;

    @AllowNull(false)
    @ForeignKey(() => Permission)
    @Column
    permissionId: number;

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