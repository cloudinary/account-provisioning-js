/**
 * Cloudinary Account Provisioning API
 * Accounts with provisioning API access can create and manage their **product environments**, **users** and **user groups** using the RESTful Provisioning API.   Provisioning API access is available [upon request](https://cloudinary.com/contact?plan=enterprise) for accounts on an [Enterprise plan](https://cloudinary.com/pricing#pricing-enterprise).  The API uses **Basic Authentication** over HTTPS. Your **Provisioning Key** and **Provisioning Secret** are used for the authentication. These credentials (as well as your ACCOUNT_ID) are located in the [Cloudinary Console](https://console.cloudinary.com/pm) under **Settings > Account > Provisioning API Access**, or they can be obtained from the provisioning environment variable available on your Cloudinary Console [Dashboard](https://console.cloudinary.com/pm/developer-dashboard).  The Provisioning API has dedicated SDKs for the following languages:  * [JavaScript](https://github.com/cloudinary/account-provisioning-js) * [PHP](https://github.com/cloudinary/account-provisioning-php) * [Java](https://github.com/cloudinary/account-provisioning-java)  Useful links: * [Provisioning API reference (Classic)](https://cloudinary.com/documentation/provisioning_api_1) 
 */

import { RequestFile } from './models';

/**
* User group user.
*/
export class UserGroupUser {
    /**
    * The user\'s ID.
    */
    'id'?: string;
    /**
    * The user\'s name.
    */
    'name'?: string;
    /**
    * The user\'s email.
    */
    'email'?: string;

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
            "name": "email",
            "baseName": "email",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return UserGroupUser.attributeTypeMap;
    }
}

