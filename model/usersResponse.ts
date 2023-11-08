/**
 * Cloudinary Provisioning API
 * Manage product environments, users and user groups using the RESTful Provisioning API
 */

import { RequestFile } from './models';
import { UserResponse } from './userResponse';

export class UsersResponse {
    'users'?: Array<UserResponse>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "users",
            "baseName": "users",
            "type": "Array<UserResponse>"
        }    ];

    static getAttributeTypeMap() {
        return UsersResponse.attributeTypeMap;
    }
}

