/**
 * Cloudinary Provisioning API
 * Manage product environments, users and user groups using the RESTful Provisioning API
 */

import { RequestFile } from './models';

export class UserRequest {
    'pending'?: boolean;
    'ids'?: Array<string>;
    'prefix'?: string;
    'subAccountId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "pending",
            "baseName": "pending",
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
        },
        {
            "name": "subAccountId",
            "baseName": "sub_account_id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return UserRequest.attributeTypeMap;
    }
}

