import { PrimaryKey, AutoIncrement, Column, ForeignKey, AllowNull, CreatedAt, Model, Table, UpdatedAt } from 'sequelize-typescript';
import { User } from './user.model';
import { Role } from './role.model';

@Table({ tableName: 'user_roles' })
export class UserRole extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @AllowNull(false)
    @ForeignKey(() => User)
    @Column
    userId: number;

    @AllowNull(false)
    @ForeignKey(() => Role)
    @Column
    roleId: number;

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