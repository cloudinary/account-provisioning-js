export * from './accessKeysApi';
import { AccessKeysApi } from './accessKeysApi';
export * from './environmentsApi';
import { EnvironmentsApi } from './environmentsApi';
export * from './userGroupsApi';
import { UserGroupsApi } from './userGroupsApi';
export * from './usersApi';
import { UsersApi } from './usersApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [AccessKeysApi, EnvironmentsApi, UserGroupsApi, UsersApi];

export interface IAccountUrlConfig {
accountUrl?: string;
basePath?: string;
}

export interface IConfig {
userName: string;
password: string;
basePath?: string;
}
