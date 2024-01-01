/**
 * Cloudinary Account Provisioning API
 * Accounts with provisioning API access can create and manage their **product environments**, **users** and **user groups** using the RESTful Provisioning API.   Provisioning API access is available [upon request](https://cloudinary.com/contact?plan=enterprise) for accounts on an [Enterprise plan](https://cloudinary.com/pricing#pricing-enterprise). 
 */

import { RequestFile } from './models';

/**
* User details.
*/
export class User {
    /**
    * The user\'s ID.
    */
    'id'?: string;
    /**
    * The user\'s name.
    */
    'name'?: string;
    /**
    * The user\'s role.
    */
    'role'?: string;
    /**
    * The user\'s email.
    */
    'email'?: string;
    /**
    * Whether the user is pending.
    */
    'pending'?: boolean;
    /**
    * Whether the user is enabled.
    */
    'enabled'?: boolean;
    /**
    * The date when the user was created.
    */
    'createdAt'?: Date;
    /**
    * The date when the user was last logged in.
    */
    'lastLogin'?: Date;
    'allSubAccounts'?: boolean;
    /**
    * The list of user groups.
    */
    'groups'?: Array<string>;
    /**
    * The list of the product environments IDs.
    */
    'subAccountIds'?: Array<string>;

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
            "type": "Date"
        },
        {
            "name": "lastLogin",
            "baseName": "last_login",
            "type": "Date"
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
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return User.attributeTypeMap;
    }
}

