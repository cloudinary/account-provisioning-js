/**
 * Cloudinary Provisioning API
 * Manage product environments, users and user groups using the RESTful Provisioning API
 */

import { RequestFile } from './models';
import { AccessKeyResponse } from './accessKeyResponse';

export class AccessKeysResponse {
    'accessKeys'?: Array<AccessKeyResponse>;
    'total'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accessKeys",
            "baseName": "access_keys",
            "type": "Array<AccessKeyResponse>"
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return AccessKeysResponse.attributeTypeMap;
    }
}

