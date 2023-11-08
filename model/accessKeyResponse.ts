/**
 * Cloudinary Provisioning API
 * Manage product environments, users and user groups using the RESTful Provisioning API
 */

import { RequestFile } from './models';

export class AccessKeyResponse {
    'name'?: string;
    'apiKey'?: string;
    'apiSecret'?: string;
    'createdAt'?: string;
    'updatedAt'?: string;
    'enabled'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "apiKey",
            "baseName": "api_key",
            "type": "string"
        },
        {
            "name": "apiSecret",
            "baseName": "api_secret",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "string"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "string"
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return AccessKeyResponse.attributeTypeMap;
    }
}

