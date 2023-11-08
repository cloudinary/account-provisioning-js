/**
 * Cloudinary Provisioning API
 * Manage product environments, users and user groups using the RESTful Provisioning API
 */

import { RequestFile } from './models';

export class UserGroupResponse {
    'id'?: string;
    'name'?: string;

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
        }    ];

    static getAttributeTypeMap() {
        return UserGroupResponse.attributeTypeMap;
    }
}

