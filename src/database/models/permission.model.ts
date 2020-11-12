import { BelongsToMany, PrimaryKey, AutoIncrement, Column, Unique, AllowNull, CreatedAt, Model, Table, UpdatedAt } from 'sequelize-typescript';
import { Role } from './role.model';
import { RolePermission } from './role-permission.model';

@Table({ tableName: 'permissions' })
export class Permission extends Model {

    @BelongsToMany(() => Role, () => RolePermission)
    roles: Role[];

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @AllowNull(false)
    @Unique
    @Column
    action: string;

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