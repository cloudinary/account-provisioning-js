/**
 * Cloudinary Account Provisioning API
 * Accounts with provisioning API access can create and manage their **product environments**, **users** and **user groups** using the RESTful Provisioning API.   Provisioning API access is available [upon request](https://cloudinary.com/contact?plan=enterprise) for accounts on an [Enterprise plan](https://cloudinary.com/pricing#pricing-enterprise). 
 */

import { RequestFile } from './models';
import { ProductEnvironment } from './productEnvironment';

export class ProductEnvironmentsResponse {
    'subAccounts'?: Array<ProductEnvironment>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "subAccounts",
            "baseName": "sub_accounts",
            "type": "Array<ProductEnvironment>"
        }    ];

    static getAttributeTypeMap() {
        return ProductEnvironmentsResponse.attributeTypeMap;
    }
}

