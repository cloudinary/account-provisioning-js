/**
 * Cloudinary Provisioning API
 * Manage product environments, users and user groups using the RESTful Provisioning API
 */

import { RequestFile } from './models';
import { ProductEnvironmentResponse } from './productEnvironmentResponse';

export class ProductEnvironmentsResponse {
    'subAccounts'?: Array<ProductEnvironmentResponse>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "subAccounts",
            "baseName": "sub_accounts",
            "type": "Array<ProductEnvironmentResponse>"
        }    ];

    static getAttributeTypeMap() {
        return ProductEnvironmentsResponse.attributeTypeMap;
    }
}

