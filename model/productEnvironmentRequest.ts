/**
 * Cloudinary Provisioning API
 * Manage product environments, users and user groups using the RESTful Provisioning API
 */

import { RequestFile } from './models';

export class ProductEnvironmentRequest {
    'enabled'?: boolean;
    'ids'?: Array<string>;
    'prefix'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        },
        {
            "name": "ids",
            "baseName": "ids",
            "type": "Array<string>"
        },
        {
            "name": "prefix",
            "baseName": "prefix",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ProductEnvironmentRequest.attributeTypeMap;
    }
}

