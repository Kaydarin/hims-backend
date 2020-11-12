import { Role } from './role.model';
export * from './role.model';

import { User } from './user.model';
export * from './user.model';

import { Permission } from './permission.model';
export * from './permission.model';

import { RolePermission } from './role-permission.model';
export * from './role-permission.model';

import { Product } from './product.model';
export * from './product.model';

import { Item } from './item.model';
export * from './item.model';

import { Customer } from './customer.model';
export * from './customer.model';

import { CustomerItem } from './customer-item.model';
export * from './customer-item.model';


let Models: Array<any> = [
    Role,
    User,
    Permission,
    RolePermission,
    Product,
    Item,
    Customer,
    CustomerItem
];

export default Models;