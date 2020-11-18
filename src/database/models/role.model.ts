import { PrimaryKey, AutoIncrement, Column, ForeignKey, Unique, AllowNull, CreatedAt, Model, Table, UpdatedAt, BelongsTo, BelongsToMany } from 'sequelize-typescript';
import { User } from './user.model';
import { UserRole } from './user-role.model';
import { Permission } from './permission.model';
import { RolePermission } from './role-permission.model';

@Table({ tableName: 'roles' })
export class Role extends Model {

    // --------------- Columns --------------- //

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

    @BelongsToMany(() => User, () => UserRole)
    users: User[];

    @BelongsToMany(() => Permission, () => RolePermission)
    permissions: Permission[];

    @BelongsTo(() => User, 'createdBy')
    createdByUser: User;

    @BelongsTo(() => User, 'updatedBy')
    updatedByUser: User;
}