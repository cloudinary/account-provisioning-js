/**
 * Cloudinary Account Provisioning API
 * Accounts with provisioning API access can create and manage their **product environments**, **users** and **user groups** using the RESTful Provisioning API.   Provisioning API access is available [upon request](https://cloudinary.com/contact?plan=enterprise) for accounts on an [Enterprise plan](https://cloudinary.com/pricing#pricing-enterprise). 
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

