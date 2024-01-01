/**
 * Cloudinary Account Provisioning API
 * Accounts with provisioning API access can create and manage their **product environments**, **users** and **user groups** using the RESTful Provisioning API.   Provisioning API access is available [upon request](https://cloudinary.com/contact?plan=enterprise) for accounts on an [Enterprise plan](https://cloudinary.com/pricing#pricing-enterprise). 
 */

import { RequestFile } from './models';

export class ProductEnvironmentRequest {
    /**
    * The display name for the product environment.
    */
    'name': string;
    /**
    * The Cloudinary cloud name (optional, default is auto-generated).
    */
    'cloudName'?: string;
    /**
    * The ID of another product environment to copy settings from (optional).
    */
    'baseSubAccountId'?: string;
    /**
    * Custom attributes associated with the product environment (optional).
    */
    'customAttributes'?: object;

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
            "name": "baseSubAccountId",
            "baseName": "base_sub_account_id",
            "type": "string"
        },
        {
            "name": "customAttributes",
            "baseName": "custom_attributes",
            "type": "object"
        }    ];

    static getAttributeTypeMap() {
        return ProductEnvironmentRequest.attributeTypeMap;
    }
}

