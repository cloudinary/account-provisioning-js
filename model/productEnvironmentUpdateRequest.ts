/**
 * Cloudinary Account Provisioning API
 * Accounts with provisioning API access can create and manage their **product environments**, **users** and **user groups** using the RESTful Provisioning API.   Provisioning API access is available [upon request](https://cloudinary.com/contact?plan=enterprise) for accounts on an [Enterprise plan](https://cloudinary.com/pricing#pricing-enterprise). 
 */

import { RequestFile } from './models';

export class ProductEnvironmentUpdateRequest {
    /**
    * The display name for the product environment.
    */
    'name'?: string;
    /**
    * The Cloudinary cloud name. An error is returned if the requested name already exists. **Note**: Can only be changed for accounts with fewer than 1000 images. 
    */
    'cloudName'?: string;
    /**
    * Custom attributes associated with the product environment.
    */
    'customAttributes'?: object;
    /**
    * Whether the product environment is enabled. **Default**: true. 
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
            "name": "cloudName",
            "baseName": "cloud_name",
            "type": "string"
        },
        {
            "name": "customAttributes",
            "baseName": "custom_attributes",
            "type": "object"
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return ProductEnvironmentUpdateRequest.attributeTypeMap;
    }
}

