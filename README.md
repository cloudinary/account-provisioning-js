# Cloudinary Cloudinary Account Provisioning API

Accounts with provisioning API access can create and manage their **product environments**, **users** and **user groups** using the RESTful Provisioning API. 

Provisioning API access is available [upon request](https://cloudinary.com/contact?plan=enterprise) for accounts on an [Enterprise plan](https://cloudinary.com/pricing#pricing-enterprise).

The API uses **Basic Authentication** over HTTPS. Your **Provisioning Key** and **Provisioning Secret** are used for the authentication. These credentials (as well as your ACCOUNT_ID) are located in the [Cloudinary Console](https://console.cloudinary.com/pm) under **Settings > Account > Provisioning API Access**, or they can be obtained from the provisioning environment variable available on your Cloudinary Console [Dashboard](https://console.cloudinary.com/pm/developer-dashboard).

The Provisioning API has dedicated SDKs for the following languages:

* [JavaScript](https://github.com/cloudinary/account-provisioning-js)
* [PHP](https://github.com/cloudinary/account-provisioning-php)
* [Java](https://github.com/cloudinary/account-provisioning-java)

Useful links:
* [Provisioning API reference (Classic)](https://cloudinary.com/documentation/provisioning_api_1)


### API Endpoints

All URIs are relative to *https://api.cloudinary.com/v1_1/provisioning/accounts/ACCOUNT_ID*

| Class | Method | HTTP request | Description |
| ------------ | ------------- | ------------- | ------------- |
*AccessKeysApi* | [**deleteAccessKey**](AccessKeysApi.md#deleteAccessKey) | **DELETE** /sub_accounts/{sub_account_id}/access_keys/{key} | Delete access key
*AccessKeysApi* | [**deleteAccessKeyByName**](AccessKeysApi.md#deleteAccessKeyByName) | **DELETE** /sub_accounts/{sub_account_id}/access_keys | Delete access key by name
*AccessKeysApi* | [**generateAccessKey**](AccessKeysApi.md#generateAccessKey) | **POST** /sub_accounts/{sub_account_id}/access_keys | Generate an access key
*AccessKeysApi* | [**getAccessKeys**](AccessKeysApi.md#getAccessKeys) | **GET** /sub_accounts/{sub_account_id}/access_keys | Get access keys
*AccessKeysApi* | [**updateAccessKey**](AccessKeysApi.md#updateAccessKey) | **PUT** /sub_accounts/{sub_account_id}/access_keys/{key} | Update an access key
*ProductEnvironmentsApi* | [**createProductEnvironment**](ProductEnvironmentsApi.md#createProductEnvironment) | **POST** /sub_accounts | Create product environment
*ProductEnvironmentsApi* | [**deleteProductEnvironment**](ProductEnvironmentsApi.md#deleteProductEnvironment) | **DELETE** /sub_accounts/{sub_account_id} | Delete product environment
*ProductEnvironmentsApi* | [**getProductEnvironment**](ProductEnvironmentsApi.md#getProductEnvironment) | **GET** /sub_accounts/{sub_account_id} | Get product environment
*ProductEnvironmentsApi* | [**getProductEnvironments**](ProductEnvironmentsApi.md#getProductEnvironments) | **GET** /sub_accounts | Get product environments
*ProductEnvironmentsApi* | [**updateProductEnvironment**](ProductEnvironmentsApi.md#updateProductEnvironment) | **PUT** /sub_accounts/{sub_account_id} | Update product environment
*UserGroupsApi* | [**addUserToUserGroup**](UserGroupsApi.md#addUserToUserGroup) | **POST** /user_groups/{group_id}/users/{user_id} | Add User to User Group
*UserGroupsApi* | [**createUserGroup**](UserGroupsApi.md#createUserGroup) | **POST** /user_groups | Create User Group
*UserGroupsApi* | [**deleteUserGroup**](UserGroupsApi.md#deleteUserGroup) | **DELETE** /user_groups/{group_id} | Delete User Group
*UserGroupsApi* | [**getUserGroup**](UserGroupsApi.md#getUserGroup) | **GET** /user_groups/{group_id} | Get User Group
*UserGroupsApi* | [**getUserGroups**](UserGroupsApi.md#getUserGroups) | **GET** /user_groups | Get User Groups
*UserGroupsApi* | [**getUsersInUserGroup**](UserGroupsApi.md#getUsersInUserGroup) | **GET** /user_groups/{group_id}/users | Get Users in User Group
*UserGroupsApi* | [**removeUserFromUserGroup**](UserGroupsApi.md#removeUserFromUserGroup) | **DELETE** /user_groups/{group_id}/users/{user_id} | Remove User from User Group
*UserGroupsApi* | [**updateUserGroup**](UserGroupsApi.md#updateUserGroup) | **PUT** /user_groups/{group_id} | Update User Group
*UsersApi* | [**createUser**](UsersApi.md#createUser) | **POST** /users | Create user
*UsersApi* | [**deleteUser**](UsersApi.md#deleteUser) | **DELETE** /users/{user_id} | Delete user
*UsersApi* | [**getUser**](UsersApi.md#getUser) | **GET** /users/{user_id} | Get user
*UsersApi* | [**getUsers**](UsersApi.md#getUsers) | **GET** /users | Get users
*UsersApi* | [**updateUser**](UsersApi.md#updateUser) | **PUT** /users/{user_id} | Update user


### Models

 - [AccessKey](AccessKey.md)
 - [AccessKeyRequest](AccessKeyRequest.md)
 - [AccessKeyUpdateRequest](AccessKeyUpdateRequest.md)
 - [AccessKeysResponse](AccessKeysResponse.md)
 - [ApiAccessKey](ApiAccessKey.md)
 - [CreateUserRequest](CreateUserRequest.md)
 - [ErrorResponse](ErrorResponse.md)
 - [ErrorResponseError](ErrorResponseError.md)
 - [ProductEnvironment](ProductEnvironment.md)
 - [ProductEnvironmentRequest](ProductEnvironmentRequest.md)
 - [ProductEnvironmentUpdateRequest](ProductEnvironmentUpdateRequest.md)
 - [ProductEnvironmentsResponse](ProductEnvironmentsResponse.md)
 - [SuccessResponse](SuccessResponse.md)
 - [User](User.md)
 - [UserGroup](UserGroup.md)
 - [UserGroupRequest](UserGroupRequest.md)
 - [UserGroupSummary](UserGroupSummary.md)
 - [UserGroupUser](UserGroupUser.md)
 - [UserGroupUsersResponse](UserGroupUsersResponse.md)
 - [UserGroupsResponse](UserGroupsResponse.md)
 - [UserRequest](UserRequest.md)
 - [UsersResponse](UsersResponse.md)


## Installation
```bash
npm install @cloudinary/account-provisioning
```

## Get Help
If you run into an issue or have a question, you can either:
- Issues related to the SDK: [Open a Github issue](https://github.com/cloudinary/media-editing-js/issues)
- Issues related to your account: [Open a support ticket](https://cloudinary.com/contact)

## Additional Resources
- [Cloudinary Transformation and REST API References](https://cloudinary.com/documentation/cloudinary_references): Comprehensive references, including syntax and examples for all SDKs.
- [MediaJams.dev](https://mediajams.dev/): Bite-size use-case tutorials written by and for Cloudinary Developers
- [DevJams](https://www.youtube.com/playlist?list=PL8dVGjLA2oMr09amgERARsZyrOz_sPvqw): Cloudinary developer podcasts on YouTube.
- [Cloudinary Academy](https://training.cloudinary.com/): Free self-paced courses, instructor-led virtual courses, and on-site courses.
- [Code Explorers and Feature Demos](https://cloudinary.com/documentation/code_explorers_demos_index): A one-stop shop for all code explorers, Postman collections, and feature demos found in the docs.
- [Cloudinary Roadmap](https://cloudinary.com/roadmap): Your chance to follow, vote, or suggest what Cloudinary should develop next.
- [Cloudinary Facebook Community](https://www.facebook.com/groups/CloudinaryCommunity): Learn from and offer help to other Cloudinary developers.
- [Cloudinary Account Registration](https://cloudinary.com/users/register/free): Free Cloudinary account registration.
- [Cloudinary Website](https://cloudinary.com)


## Licence
Released under the MIT license.
