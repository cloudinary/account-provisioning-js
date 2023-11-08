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
> UserResponse createUser()

Create a new user.

### Example

```typescript
import { UsersApi, IAccountUrlConfig} from '@cloudinary/account-provisioning';

// Configuration can be passed in:
const configuration: IAccountUrlConfig = {accountUrl: '<account_url>'}
const apiInstance = new UsersApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new UsersApi();

let body = {
// UserRequest | User details (optional)
userRequest: {
    pending: true,
    ids: [
      "ids_example",
    ],
    prefix: "prefix_example",
    subAccountId: "subAccountId_example",
  },
};

apiInstance.createUser(body).then((data:any) => {
console.log('API called successfully. Returned data: ' + JSON.stringify(data.body));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userRequest** | **UserRequest**| User details |


### Return type

**UserResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | User created successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteUser**
> MessageResponse deleteUser(userId)

Delete a specific user.

### Example

```typescript
import { UsersApi, IAccountUrlConfig} from '@cloudinary/account-provisioning';

// Configuration can be passed in:
const configuration: IAccountUrlConfig = {accountUrl: '<account_url>'}
const apiInstance = new UsersApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new UsersApi();

let body = {
// string
userId: "user_id_example",
};

apiInstance.deleteUser(body).then((data:any) => {
console.log('API called successfully. Returned data: ' + JSON.stringify(data.body));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **string**|  |


### Return type

**MessageResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User deleted successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getUser**
> UserResponse getUser(userId)

Retrieve a specific user.

### Example

```typescript
import { UsersApi, IAccountUrlConfig} from '@cloudinary/account-provisioning';

// Configuration can be passed in:
const configuration: IAccountUrlConfig = {accountUrl: '<account_url>'}
const apiInstance = new UsersApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new UsersApi();

let body = {
// string
userId: "user_id_example",
};

apiInstance.getUser(body).then((data:any) => {
console.log('API called successfully. Returned data: ' + JSON.stringify(data.body));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **string**|  |


### Return type

**UserResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getUsers**
> UsersResponse getUsers()

Retrieve an array of users.

### Example

```typescript
import { UsersApi, IAccountUrlConfig} from '@cloudinary/account-provisioning';

// Configuration can be passed in:
const configuration: IAccountUrlConfig = {accountUrl: '<account_url>'}
const apiInstance = new UsersApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new UsersApi();

let body = {
// boolean | Whether to return pending users. Default false (all users) (optional)
pending: true,
// Array<string> | A list of up to 100 user IDs. (optional)
ids: [
    "ids_example",
  ],
// string | Returns users where the name begins with the specified case-insensitive string. (optional)
prefix: "prefix_example",
// string | Only returns users who have access to the specified account. (optional)
subAccountId: "sub_account_id_example",
};

apiInstance.getUsers(body).then((data:any) => {
console.log('API called successfully. Returned data: ' + JSON.stringify(data.body));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pending** | **boolean**| Whether to return pending users. Default false (all users) |
 **ids** | **Array<string>**| A list of up to 100 user IDs. |
 **prefix** | **string**| Returns users where the name begins with the specified case-insensitive string. |
 **subAccountId** | **string**| Only returns users who have access to the specified account. |


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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateUser**
> UserResponse updateUser(userId)

Update the details of a user.

### Example

```typescript
import { UsersApi, IAccountUrlConfig} from '@cloudinary/account-provisioning';

// Configuration can be passed in:
const configuration: IAccountUrlConfig = {accountUrl: '<account_url>'}
const apiInstance = new UsersApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new UsersApi();

let body = {
// string
userId: "user_id_example",
// UserRequest | Updated user details (optional)
userRequest: {
    pending: true,
    ids: [
      "ids_example",
    ],
    prefix: "prefix_example",
    subAccountId: "subAccountId_example",
  },
};

apiInstance.updateUser(body).then((data:any) => {
console.log('API called successfully. Returned data: ' + JSON.stringify(data.body));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **string**|  |
 **userRequest** | **UserRequest**| Updated user details |


### Return type

**UserResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User updated successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

