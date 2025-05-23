/**
 * Cloudinary Account Provisioning API
 * Accounts with provisioning API access can create and manage their **product environments**, **users** and **user groups** using the RESTful Provisioning API.   Provisioning API access is available [upon request](https://cloudinary.com/contact?plan=enterprise) for accounts on an [Enterprise plan](https://cloudinary.com/pricing#pricing-enterprise).  The API uses **Basic Authentication** over HTTPS. Your **Provisioning Key** and **Provisioning Secret** are used for the authentication. These credentials (as well as your ACCOUNT_ID) are located in the [Cloudinary Console](https://console.cloudinary.com/pm) under **Settings > Account > Provisioning API Access**, or they can be obtained from the provisioning environment variable available on your Cloudinary Console [Dashboard](https://console.cloudinary.com/pm/developer-dashboard).  The Provisioning API has dedicated SDKs for the following languages:  * [JavaScript](https://github.com/cloudinary/account-provisioning-js) * [PHP](https://github.com/cloudinary/account-provisioning-php) * [Java](https://github.com/cloudinary/account-provisioning-java)  Useful links: * [Provisioning API reference (Classic)](https://cloudinary.com/documentation/provisioning_api_1) 
 */

import { RequestFile } from './models';

export class AccessKeyUpdateRequest {
    /**
    * The name of the access key.
    */
    'name'?: string;
    /**
    * Whether the access key is enabled or disabled.
    */
    'enabled'?: boolean;
    /**
    * Designates the access key for a specific purpose while allowing it to be used for other purposes, as well.  This action replaces any previously assigned key. **Possible values**: `webhooks` 
    */
    'dedicatedFor'?: AccessKeyUpdateRequest.DedicatedForEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
            "name": "dedicatedFor",
            "baseName": "dedicated_for",
            "type": "AccessKeyUpdateRequest.DedicatedForEnum"
        }    ];

    static getAttributeTypeMap() {
        return AccessKeyUpdateRequest.attributeTypeMap;
    }
}

export namespace AccessKeyUpdateRequest {
    export type DedicatedForEnum = 'webhooks';
    export const DedicatedForEnum = {
        Webhooks: 'webhooks' as DedicatedForEnum
    };
}

