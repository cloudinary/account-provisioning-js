/**
 * Cloudinary Provisioning API
 * Manage product environments, users and user groups using the RESTful Provisioning API
 */

import { RequestFile } from './models';

export class AccessKeyUpdateRequest {
    'name'?: string;
    'enabled'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return AccessKeyUpdateRequest.attributeTypeMap;
    }
}

