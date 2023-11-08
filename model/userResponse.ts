/**
 * Cloudinary Provisioning API
 * Manage product environments, users and user groups using the RESTful Provisioning API
 */

import { RequestFile } from './models';

export class UserResponse {
    'id'?: string;
    'name'?: string;
    'role'?: string;
    'email'?: string;
    'pending'?: boolean;
    'enabled'?: boolean;
    'createdAt'?: string;
    'lastLogin'?: string;
    'allSubAccounts'?: boolean;
    'groups'?: Array<string>;
    'subAccountIds'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "role",
            "baseName": "role",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "pending",
            "baseName": "pending",
            "type": "boolean"
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "string"
        },
        {
            "name": "lastLogin",
            "baseName": "last_login",
            "type": "string"
        },
        {
            "name": "allSubAccounts",
            "baseName": "all_sub_accounts",
            "type": "boolean"
        },
        {
            "name": "groups",
            "baseName": "groups",
            "type": "Array<string>"
        },
        {
            "name": "subAccountIds",
            "baseName": "sub_account_ids",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return UserResponse.attributeTypeMap;
    }
}

