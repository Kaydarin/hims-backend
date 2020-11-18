import { BelongsToMany, PrimaryKey, AutoIncrement, Column, Unique, AllowNull, CreatedAt, Model, Table, UpdatedAt } from 'sequelize-typescript';
import { Role } from './role.model';
import { UserRole } from './user-role.model';

@Table({ tableName: 'users' })
export class User extends Model {

    @BelongsToMany(() => Role, () => UserRole)
    roles: Role[];

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
}