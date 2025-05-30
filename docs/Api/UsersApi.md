# UsersApi

All URIs are relative to *https://api.cloudinary.com/v1_1/provisioning/accounts/ACCOUNT_ID*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUser**](UsersApi.md#createUser) | **POST** /users | Create user
[**deleteUser**](UsersApi.md#deleteUser) | **DELETE** /users/{user_id} | Delete user
[**getUser**](UsersApi.md#getUser) | **GET** /users/{user_id} | Get user
[**getUsers**](UsersApi.md#getUsers) | **GET** /users | Get users
[**updateUser**](UsersApi.md#updateUser) | **PUT** /users/{user_id} | Update user


# **createUser**
> User createUser()

Create a new user.

### Example

```typescript
import {
    UsersApi,
    IAccountUrlConfig,
    type User,
    type CreateUserRequest,
    type ErrorResponse,
} from '@cloudinary/account-provisioning';

// Configuration can be passed in:
const configuration: IAccountUrlConfig = {accountUrl: '<account_url>'}
const apiInstance = new UsersApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new UsersApi();

// CreateUserRequest | User details (optional)
const createUserRequest: CreateUserRequest = null;

// Example using parameters
apiInstance.createUser(createUserRequest)
    .then((result) => { console.log('API called successfully. Returned data: ' + JSON.stringify(result)); })
    .catch((error) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createUserRequest** | **CreateUserRequest**| User details |


### Return type

**User**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User created successfully |  -  |
**400** | Bad request. |  -  |
**401** | Authorization required. |  -  |
**403** | Not allowed. |  -  |
**404** | Not found. |  -  |
**409** | Already exists. |  -  |
**420** | Max usage rate exceeded. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteUser**
> SuccessResponse deleteUser(userId)

Delete a specific user.

### Example

```typescript
import {
    UsersApi,
    IAccountUrlConfig,
    type SuccessResponse,
    type ErrorResponse,
} from '@cloudinary/account-provisioning';

// Configuration can be passed in:
const configuration: IAccountUrlConfig = {accountUrl: '<account_url>'}
const apiInstance = new UsersApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new UsersApi();

// string | The ID of the user.
const userId: string = "0abed8dfcc039ea05e2a1d494fd442";

// Example using parameters
apiInstance.deleteUser(userId)
    .then((result) => { console.log('API called successfully. Returned data: ' + JSON.stringify(result)); })
    .catch((error) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **string**| The ID of the user. |


### Return type

**SuccessResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User deleted successfully |  -  |
**400** | Bad request. |  -  |
**401** | Authorization required. |  -  |
**403** | Not allowed. |  -  |
**404** | Not found. |  -  |
**420** | Max usage rate exceeded. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getUser**
> User getUser(userId)

Retrieve a specific user.

### Example

```typescript
import {
    UsersApi,
    IAccountUrlConfig,
    type User,
    type ErrorResponse,
} from '@cloudinary/account-provisioning';

// Configuration can be passed in:
const configuration: IAccountUrlConfig = {accountUrl: '<account_url>'}
const apiInstance = new UsersApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new UsersApi();

// string | The ID of the user.
const userId: string = "0abed8dfcc039ea05e2a1d494fd442";

// Example using parameters
apiInstance.getUser(userId)
    .then((result) => { console.log('API called successfully. Returned data: ' + JSON.stringify(result)); })
    .catch((error) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **string**| The ID of the user. |


### Return type

**User**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**401** | Authorization required. |  -  |
**404** | Not found. |  -  |
**420** | Max usage rate exceeded. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getUsers**
> UsersResponse getUsers()

Returns an array of all users in the account, or if conditions are specified, returns the relevant users. 

### Example

```typescript
import {
    UsersApi,
    IAccountUrlConfig,
    type UsersResponse,
    type ErrorResponse,
} from '@cloudinary/account-provisioning';

// Configuration can be passed in:
const configuration: IAccountUrlConfig = {accountUrl: '<account_url>'}
const apiInstance = new UsersApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new UsersApi();

// boolean | Whether to return pending users. **Default**: `false` (all users)  (optional)
const pending: boolean = false;
// Array<string> | A list of up to 100 user IDs.  When provided, other parameters are ignored. (optional)
const ids: Array<string> = [
    "ids_example",
  ];
// Array<string> | A list of up to 100 user Emails.  When provided, other parameters are ignored. (optional)
const emails: Array<string> = [
    "emails_example",
  ];
// string | Returns users where the name begins with the specified case-insensitive string. (optional)
const prefix: string = "john";
// string | Only returns users who have access to the specified account. (optional)
const subAccountId: string = "sub_account_id_example";
// boolean | Specifies a date range for last login. (optional)
const lastLogin: boolean = true;
// string | All last logins after this date, given in the format: yyyy-mm-dd.  (optional)
const from: string = new Date('2023-01-01').toISOString().split('T')[0];;
// string | All last logins before this date, given in the format: yyyy-mm-dd.  (optional)
const to: string = new Date('2024-12-31').toISOString().split('T')[0];;
// 'include' | 'exclude' | Whether to return users who last logged in within the specified date range (include) or those who didn\'t last log in within the range (exclude). **Possible values**: `include`, `exclude`. **Default**: `include`.  (optional)
const unionType: 'include' | 'exclude' = "include";
// 'desc' | 'asc' | Control the order of returned users. **Possible values**: `desc` (default), `asc`.  (optional)
const sortOrder: 'desc' | 'asc' = "desc";
// 'name' | 'role' | 'status' | 'activity' | 'created_at' (optional)
const sortBy: 'name' | 'role' | 'status' | 'activity' | 'created_at' = "name";
// number (optional)
const page: number = 1;
// number (optional)
const pageSize: number = 1;

// Example using parameters
apiInstance.getUsers(pending, ids, emails, prefix, subAccountId, lastLogin, from, to, unionType, sortOrder, sortBy, page, pageSize)
    .then((result) => { console.log('API called successfully. Returned data: ' + JSON.stringify(result)); })
    .catch((error) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pending** | **boolean**| Whether to return pending users. **Default**: &#x60;false&#x60; (all users)  |
 **ids** | **Array<string>**| A list of up to 100 user IDs.  When provided, other parameters are ignored. |
 **emails** | **Array<string>**| A list of up to 100 user Emails.  When provided, other parameters are ignored. |
 **prefix** | **string**| Returns users where the name begins with the specified case-insensitive string. |
 **subAccountId** | **string**| Only returns users who have access to the specified account. |
 **lastLogin** | **boolean**| Specifies a date range for last login. |
 **from** | **string**| All last logins after this date, given in the format: yyyy-mm-dd.  |
 **to** | **string**| All last logins before this date, given in the format: yyyy-mm-dd.  |
 **unionType** | **&#39;include&#39; | &#39;exclude&#39;**| Whether to return users who last logged in within the specified date range (include) or those who didn\&#39;t last log in within the range (exclude). **Possible values**: &#x60;include&#x60;, &#x60;exclude&#x60;. **Default**: &#x60;include&#x60;.  |
 **sortOrder** | **&#39;desc&#39; | &#39;asc&#39;**| Control the order of returned users. **Possible values**: &#x60;desc&#x60; (default), &#x60;asc&#x60;.  |
 **sortBy** | **&#39;name&#39; | &#39;role&#39; | &#39;status&#39; | &#39;activity&#39; | &#39;created_at&#39;**|  |
 **page** | **number**|  |
 **pageSize** | **number**|  |


### Return type

**UsersResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**401** | Authorization required. |  -  |
**404** | Not found. |  -  |
**420** | Max usage rate exceeded. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateUser**
> User updateUser(userId)

Update the details of a user.

### Example

```typescript
import {
    UsersApi,
    IAccountUrlConfig,
    type User,
    type UserRequest,
    type ErrorResponse,
} from '@cloudinary/account-provisioning';

// Configuration can be passed in:
const configuration: IAccountUrlConfig = {accountUrl: '<account_url>'}
const apiInstance = new UsersApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new UsersApi();

// string | The ID of the user.
const userId: string = "0abed8dfcc039ea05e2a1d494fd442";
// UserRequest | Updated user details (optional)
const userRequest: UserRequest = {
    name: "John",
    email: "john@example.com",
    role: "technical_admin",
    subAccountIds: [
      "subAccountIds_example",
    ],
    enabled: true,
  };

// Example using parameters
apiInstance.updateUser(userId, userRequest)
    .then((result) => { console.log('API called successfully. Returned data: ' + JSON.stringify(result)); })
    .catch((error) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **string**| The ID of the user. |
 **userRequest** | **UserRequest**| Updated user details |


### Return type

**User**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User updated successfully |  -  |
**400** | Bad request. |  -  |
**401** | Authorization required. |  -  |
**403** | Not allowed. |  -  |
**404** | Not found. |  -  |
**409** | Already exists. |  -  |
**420** | Max usage rate exceeded. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

