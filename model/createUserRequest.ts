/**
 * Cloudinary Account Provisioning API
 * Accounts with provisioning API access can create and manage their **product environments**, **users** and **user groups** using the RESTful Provisioning API.   Provisioning API access is available [upon request](https://cloudinary.com/contact?plan=enterprise) for accounts on an [Enterprise plan](https://cloudinary.com/pricing#pricing-enterprise). 
 */

import { RequestFile } from './models';
import { UserRequest } from './userRequest';

export class CreateUserRequest {
    /**
    * The user\'s name.
    */
    'name': string;
    /**
    * A unique email address, which serves as the login name and notification address.
    */
    'email': string;
    /**
    * The role to assign.
    */
    'role': CreateUserRequest.RoleEnum;
    /**
    * A list of product environment IDs that this user can access. Ignored if the role is `master_admin`.  **Default**: all product environments. 
    */
    'subAccountIds'?: Array<string>;
    /**
    * Whether the user is enabled. **Default**: true. 
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
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "role",
            "baseName": "role",
            "type": "CreateUserRequest.RoleEnum"
        },
        {
            "name": "subAccountIds",
            "baseName": "sub_account_ids",
            "type": "Array<string>"
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return CreateUserRequest.attributeTypeMap;
    }
}

export namespace CreateUserRequest {
    export enum RoleEnum {
        MasterAdmin = <any> 'master_admin',
        Admin = <any> 'admin',
        Billing = <any> 'billing',
        TechnicalAdmin = <any> 'technical_admin',
        Reports = <any> 'reports',
        MediaLibraryAdmin = <any> 'media_library_admin',
        MediaLibraryUser = <any> 'media_library_user'
    }
}
