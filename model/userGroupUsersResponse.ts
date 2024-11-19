/**
 * Cloudinary Account Provisioning API
 * Accounts with provisioning API access can create and manage their **product environments**, **users** and **user groups** using the RESTful Provisioning API.   Provisioning API access is available [upon request](https://cloudinary.com/contact?plan=enterprise) for accounts on an [Enterprise plan](https://cloudinary.com/pricing#pricing-enterprise).  The API uses **Basic Authentication** over HTTPS. Your **Provisioning Key** and **Provisioning Secret** are used for the authentication. These credentials (as well as your ACCOUNT_ID) are located in the [Cloudinary Console](https://console.cloudinary.com/pm) under **Settings > Account > Provisioning API Access**, or they can be obtained from the provisioning environment variable available on your Cloudinary Console [Dashboard](https://console.cloudinary.com/pm/developer-dashboard).  The Provisioning API has dedicated SDKs for the following languages:  * [JavaScript](https://github.com/cloudinary/account-provisioning-js) * [PHP](https://github.com/cloudinary/account-provisioning-php) * [Java](https://github.com/cloudinary/account-provisioning-java)  Useful links: * [Provisioning API reference (Classic)](https://cloudinary.com/documentation/provisioning_api_1) 
 */

import { RequestFile } from './models';
import { UserGroupUser } from './userGroupUser';

export class UserGroupUsersResponse {
    /**
    * A list of user group users.
    */
    'users'?: Array<UserGroupUser>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "users",
            "baseName": "users",
            "type": "Array<UserGroupUser>"
        }    ];

    static getAttributeTypeMap() {
        return UserGroupUsersResponse.attributeTypeMap;
    }
}

