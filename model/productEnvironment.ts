/**
 * Cloudinary Account Provisioning API
 * Accounts with provisioning API access can create and manage their **product environments**, **users** and **user groups** using the RESTful Provisioning API.   Provisioning API access is available [upon request](https://cloudinary.com/contact?plan=enterprise) for accounts on an [Enterprise plan](https://cloudinary.com/pricing#pricing-enterprise). 
 */

import { RequestFile } from './models';
import { ApiAccessKey } from './apiAccessKey';

/**
* Product Environment
*/
export class ProductEnvironment {
    'cloudName'?: string;
    /**
    * The name of the product environment.
    */
    'name'?: string;
    /**
    * Whether the product environment is enabled or disabled.
    */
    'enabled'?: boolean;
    /**
    * The ID of the product environment.
    */
    'id'?: string;
    /**
    * The list of the product environment\'s access keys.
    */
    'apiAccessKeys'?: Array<ApiAccessKey>;
    /**
    * The date when the product environment was created.
    */
    'createdAt'?: Date;

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
            "type": "Array<ApiAccessKey>"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return ProductEnvironment.attributeTypeMap;
    }
}

