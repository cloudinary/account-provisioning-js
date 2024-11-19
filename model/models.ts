import localVarRequest from 'request';

export * from './accessKey';
export * from './accessKeyRequest';
export * from './accessKeyUpdateRequest';
export * from './accessKeysResponse';
export * from './apiAccessKey';
export * from './createUserRequest';
export * from './errorResponse';
export * from './errorResponseError';
export * from './productEnvironment';
export * from './productEnvironmentRequest';
export * from './productEnvironmentUpdateRequest';
export * from './productEnvironmentsResponse';
export * from './successResponse';
export * from './user';
export * from './userGroup';
export * from './userGroupRequest';
export * from './userGroupSummary';
export * from './userGroupUser';
export * from './userGroupUsersResponse';
export * from './userGroupsResponse';
export * from './userRequest';
export * from './usersResponse';

import * as fs from 'fs';
import { Buffer } from 'buffer';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AccessKey } from './accessKey';
import { AccessKeyRequest } from './accessKeyRequest';
import { AccessKeyUpdateRequest } from './accessKeyUpdateRequest';
import { AccessKeysResponse } from './accessKeysResponse';
import { ApiAccessKey } from './apiAccessKey';
import { CreateUserRequest } from './createUserRequest';
import { ErrorResponse } from './errorResponse';
import { ErrorResponseError } from './errorResponseError';
import { ProductEnvironment } from './productEnvironment';
import { ProductEnvironmentRequest } from './productEnvironmentRequest';
import { ProductEnvironmentUpdateRequest } from './productEnvironmentUpdateRequest';
import { ProductEnvironmentsResponse } from './productEnvironmentsResponse';
import { SuccessResponse } from './successResponse';
import { User } from './user';
import { UserGroup } from './userGroup';
import { UserGroupRequest } from './userGroupRequest';
import { UserGroupSummary } from './userGroupSummary';
import { UserGroupUser } from './userGroupUser';
import { UserGroupUsersResponse } from './userGroupUsersResponse';
import { UserGroupsResponse } from './userGroupsResponse';
import { UserRequest } from './userRequest';
import { UsersResponse } from './usersResponse';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "AccessKeyUpdateRequest.DedicatedForEnum": AccessKeyUpdateRequest.DedicatedForEnum,
        "CreateUserRequest.RoleEnum": CreateUserRequest.RoleEnum,
        "UserRequest.RoleEnum": UserRequest.RoleEnum,
}

let typeMap: {[index: string]: any} = {
    "AccessKey": AccessKey,
    "AccessKeyRequest": AccessKeyRequest,
    "AccessKeyUpdateRequest": AccessKeyUpdateRequest,
    "AccessKeysResponse": AccessKeysResponse,
    "ApiAccessKey": ApiAccessKey,
    "CreateUserRequest": CreateUserRequest,
    "ErrorResponse": ErrorResponse,
    "ErrorResponseError": ErrorResponseError,
    "ProductEnvironment": ProductEnvironment,
    "ProductEnvironmentRequest": ProductEnvironmentRequest,
    "ProductEnvironmentUpdateRequest": ProductEnvironmentUpdateRequest,
    "ProductEnvironmentsResponse": ProductEnvironmentsResponse,
    "SuccessResponse": SuccessResponse,
    "User": User,
    "UserGroup": UserGroup,
    "UserGroupRequest": UserGroupRequest,
    "UserGroupSummary": UserGroupSummary,
    "UserGroupUser": UserGroupUser,
    "UserGroupUsersResponse": UserGroupUsersResponse,
    "UserGroupsResponse": UserGroupsResponse,
    "UserRequest": UserRequest,
    "UsersResponse": UsersResponse,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
