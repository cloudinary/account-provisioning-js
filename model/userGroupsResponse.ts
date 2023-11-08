/**
 * Cloudinary Provisioning API
 * Manage product environments, users and user groups using the RESTful Provisioning API
 */

import { RequestFile } from './models';
import { UserGroup } from './userGroup';

export class UserGroupsResponse {
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

