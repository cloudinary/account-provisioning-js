/**
 * Cloudinary Account Provisioning API
 * Accounts with provisioning API access can create and manage their **product environments**, **users** and **user groups** using the RESTful Provisioning API.   Provisioning API access is available [upon request](https://cloudinary.com/contact?plan=enterprise) for accounts on an [Enterprise plan](https://cloudinary.com/pricing#pricing-enterprise). 
 */

import { RequestFile } from './models';
import { UserGroup } from './userGroup';

export class UserGroupsResponse {
    /**
    * A list of user groups.
    */
    'userGroups'?: Array<UserGroup>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "userGroups",
            "baseName": "user_groups",
            "type": "Array<UserGroup>"
        }    ];

    static getAttributeTypeMap() {
        return UserGroupsResponse.attributeTypeMap;
    }
}

