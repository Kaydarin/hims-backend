import { PrimaryKey, AutoIncrement, Column, ForeignKey, Unique, AllowNull, CreatedAt, Model, Table, UpdatedAt, BelongsTo, BelongsToMany } from 'sequelize-typescript';
import { Role } from './role.model';
import { RolePermission } from './role-permission.model';
import { User } from './user.model';

@Table({ tableName: 'permissions' })
export class Permission extends Model {

    // --------------- Columns --------------- //

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

    @BelongsToMany(() => Role, () => RolePermission)
    roles: Role[];

    @BelongsTo(() => User, 'createdBy')
    createdByUser: User;

    @BelongsTo(() => User, 'updatedBy')
    updatedByUser: User;
}