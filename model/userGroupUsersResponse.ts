/**
 * Cloudinary Provisioning API
 * Manage product environments, users and user groups using the RESTful Provisioning API
 */

import { RequestFile } from './models';
import { User } from './user';

export class UserGroupUsersResponse {
    'users'?: Array<User>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "users",
            "baseName": "users",
            "type": "Array<User>"
        }    ];

    static getAttributeTypeMap() {
        return UserGroupUsersResponse.attributeTypeMap;
    }
}

