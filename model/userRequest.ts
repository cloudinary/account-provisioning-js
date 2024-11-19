/**
 * Cloudinary Account Provisioning API
 * Accounts with provisioning API access can create and manage their **product environments**, **users** and **user groups** using the RESTful Provisioning API.   Provisioning API access is available [upon request](https://cloudinary.com/contact?plan=enterprise) for accounts on an [Enterprise plan](https://cloudinary.com/pricing#pricing-enterprise).  The API uses **Basic Authentication** over HTTPS. Your **Provisioning Key** and **Provisioning Secret** are used for the authentication. These credentials (as well as your ACCOUNT_ID) are located in the [Cloudinary Console](https://console.cloudinary.com/pm) under **Settings > Account > Provisioning API Access**, or they can be obtained from the provisioning environment variable available on your Cloudinary Console [Dashboard](https://console.cloudinary.com/pm/developer-dashboard).  The Provisioning API has dedicated SDKs for the following languages:  * [JavaScript](https://github.com/cloudinary/account-provisioning-js) * [PHP](https://github.com/cloudinary/account-provisioning-php) * [Java](https://github.com/cloudinary/account-provisioning-java)  Useful links: * [Provisioning API reference (Classic)](https://cloudinary.com/documentation/provisioning_api_1) 
 */

import { RequestFile } from './models';

export class UserRequest {
    /**
    * The user\'s name.
    */
    'name'?: string;
    /**
    * A unique email address, which serves as the login name and notification address.
    */
    'email'?: string;
    /**
    * The role to assign.
    */
    'role'?: UserRequest.RoleEnum;
    /**
    * A list of product environment IDs that this user can access. Ignored if the role is `master_admin`.  **Default**: all product environments. 
    */
    'subAccountIds'?: Array<string>;
    /**
    * Whether the user is enabled. **Default**: true. 
    */
    'enabled'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "role",
            "baseName": "role",
            "type": "UserRequest.RoleEnum"
        },
        {
            "name": "subAccountIds",
            "baseName": "sub_account_ids",
            "type": "Array<string>"
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return UserRequest.attributeTypeMap;
    }
}

export namespace UserRequest {
    export type RoleEnum = 'master_admin' | 'admin' | 'billing' | 'technical_admin' | 'reports' | 'media_library_admin' | 'media_library_user';
    export const RoleEnum = {
        MasterAdmin: 'master_admin' as RoleEnum,
        Admin: 'admin' as RoleEnum,
        Billing: 'billing' as RoleEnum,
        TechnicalAdmin: 'technical_admin' as RoleEnum,
        Reports: 'reports' as RoleEnum,
        MediaLibraryAdmin: 'media_library_admin' as RoleEnum,
        MediaLibraryUser: 'media_library_user' as RoleEnum
    };
}

