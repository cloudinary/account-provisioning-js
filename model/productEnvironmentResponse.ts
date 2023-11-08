/**
 * Cloudinary Provisioning API
 * Manage product environments, users and user groups using the RESTful Provisioning API
 */

import { RequestFile } from './models';
import { AccessKeyResponse } from './accessKeyResponse';

export class ProductEnvironmentResponse {
    'cloudName'?: string;
    'name'?: string;
    'enabled'?: boolean;
    'id'?: string;
    'apiAccessKeys'?: Array<AccessKeyResponse>;
    'createdAt'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cloudName",
            "baseName": "cloud_name",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "apiAccessKeys",
            "baseName": "api_access_keys",
            "type": "Array<AccessKeyResponse>"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ProductEnvironmentResponse.attributeTypeMap;
    }
}

