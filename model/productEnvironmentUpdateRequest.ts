/**
 * Cloudinary Account Provisioning API
 * Accounts with provisioning API access can create and manage their **product environments**, **users** and **user groups** using the RESTful Provisioning API.   Provisioning API access is available [upon request](https://cloudinary.com/contact?plan=enterprise) for accounts on an [Enterprise plan](https://cloudinary.com/pricing#pricing-enterprise).  The API uses **Basic Authentication** over HTTPS. Your **Provisioning Key** and **Provisioning Secret** are used for the authentication. These credentials (as well as your ACCOUNT_ID) are located in the [Cloudinary Console](https://console.cloudinary.com/pm) under **Settings > Account > Provisioning API Access**, or they can be obtained from the provisioning environment variable available on your Cloudinary Console [Dashboard](https://console.cloudinary.com/pm/developer-dashboard).  The Provisioning API has dedicated SDKs for the following languages:  * [JavaScript](https://github.com/cloudinary/account-provisioning-js) * [PHP](https://github.com/cloudinary/account-provisioning-php) * [Java](https://github.com/cloudinary/account-provisioning-java)  Useful links: * [Provisioning API reference (Classic)](https://cloudinary.com/documentation/provisioning_api_1) 
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

