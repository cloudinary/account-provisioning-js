/**
 * Cloudinary Account Provisioning API
 * Accounts with provisioning API access can create and manage their **product environments**, **users** and **user groups** using the RESTful Provisioning API.   Provisioning API access is available [upon request](https://cloudinary.com/contact?plan=enterprise) for accounts on an [Enterprise plan](https://cloudinary.com/pricing#pricing-enterprise). 
 */

import { RequestFile } from './models';

export class AccessKey {
    /**
    * The name of the access key.
    */
    'name'?: string;
    /**
    * The API key.
    */
    'apiKey'?: string;
    /**
    * The API secret.
    */
    'apiSecret'?: string;
    /**
    * The date when the access key was created.
    */
    'createdAt'?: Date;
    /**
    * The date when the access key was last updated.
    */
    'updatedAt'?: Date;
    /**
    * Whether the access key is enabled or disabled.
    */
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
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "Date"
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return AccessKey.attributeTypeMap;
    }
}

