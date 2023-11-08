/**
 * Cloudinary Provisioning API
 * Manage product environments, users and user groups using the RESTful Provisioning API
 */

import { RequestFile } from './models';

export class UserGroupUserRequest {
    'userId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return UserGroupUserRequest.attributeTypeMap;
    }
}

