/**
 * Cloudinary Account Provisioning API
 * Accounts with provisioning API access can create and manage their **product environments**, **users** and **user groups** using the RESTful Provisioning API.   Provisioning API access is available [upon request](https://cloudinary.com/contact?plan=enterprise) for accounts on an [Enterprise plan](https://cloudinary.com/pricing#pricing-enterprise).  The API uses **Basic Authentication** over HTTPS. Your **Provisioning Key** and **Provisioning Secret** are used for the authentication. These credentials (as well as your ACCOUNT_ID) are located in the [Cloudinary Console](https://console.cloudinary.com/pm) under **Settings > Account > Provisioning API Access**, or they can be obtained from the provisioning environment variable available on your Cloudinary Console [Dashboard](https://console.cloudinary.com/pm/developer-dashboard).  The Provisioning API has dedicated SDKs for the following languages:  * [JavaScript](https://github.com/cloudinary/account-provisioning-js) * [PHP](https://github.com/cloudinary/account-provisioning-php) * [Java](https://github.com/cloudinary/account-provisioning-java)  Useful links: * [Provisioning API reference (Classic)](https://cloudinary.com/documentation/provisioning_api_1) 
 */

import { RequestFile } from './models';
import { UserGroupSummary } from './userGroupSummary';

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
    * The date when the user was last updated.
    */
    'updatedAt'?: Date;
    /**
    * The date when the user was last logged in.
    */
    'lastLogin'?: Date;
    'allSubAccounts'?: boolean;
    /**
    * The list of user groups.
    */
    'groups'?: Array<UserGroupSummary>;
    /**
    * The list of the product environments IDs.
    */
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
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
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
            "type": "Array<UserGroupSummary>"
        },
        {
            "name": "subAccountIds",
            "baseName": "sub_account_ids",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return User.attributeTypeMap;
    }
}

