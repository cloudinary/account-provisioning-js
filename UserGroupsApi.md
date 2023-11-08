# UserGroupsApi

All URIs are relative to *https://api.cloudinary.com/v1_1/provisioning/accounts/ACCOUNT_ID*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addUserToUserGroup**](UserGroupsApi.md#addUserToUserGroup) | **POST** /user_groups/{group_id}/users/{user_id} | Add User to User Group
[**createUserGroup**](UserGroupsApi.md#createUserGroup) | **POST** /user_groups | Create User Group
[**deleteUserGroup**](UserGroupsApi.md#deleteUserGroup) | **DELETE** /user_groups/{group_id} | Delete User Group
[**getUserGroup**](UserGroupsApi.md#getUserGroup) | **GET** /user_groups/{group_id} | Get User Group
[**getUserGroups**](UserGroupsApi.md#getUserGroups) | **GET** /user_groups | Get User Groups
[**getUsersInUserGroup**](UserGroupsApi.md#getUsersInUserGroup) | **GET** /user_groups/{group_id}/users | Get Users in User Group
[**removeUserFromUserGroup**](UserGroupsApi.md#removeUserFromUserGroup) | **DELETE** /user_groups/{group_id}/users/{user_id} | Remove User from User Group
[**updateUserGroup**](UserGroupsApi.md#updateUserGroup) | **PUT** /user_groups/{group_id} | Update User Group


# **addUserToUserGroup**
> UserGroupUserResponse addUserToUserGroup(groupId, userId)

Add a user to a group with the specified ID.

### Example

```typescript
import { UserGroupsApi, IAccountUrlConfig} from '@cloudinary/account-provisioning';

// Configuration can be passed in:
const configuration: IAccountUrlConfig = {accountUrl: '<account_url>'}
const apiInstance = new UserGroupsApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new UserGroupsApi();

let body = {
// string
groupId: "group_id_example",
// string
userId: "user_id_example",
};

apiInstance.addUserToUserGroup(body).then((data:any) => {
console.log('API called successfully. Returned data: ' + JSON.stringify(data.body));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **string**|  |
 **userId** | **string**|  |


### Return type

**UserGroupUserResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | User added to group successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createUserGroup**
> UserGroupResponse createUserGroup()

Create a new user group for the account.

### Example

```typescript
import { UserGroupsApi, IAccountUrlConfig} from '@cloudinary/account-provisioning';

// Configuration can be passed in:
const configuration: IAccountUrlConfig = {accountUrl: '<account_url>'}
const apiInstance = new UserGroupsApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new UserGroupsApi();

let body = {
// UserGroupRequest | User group details (optional)
userGroupRequest: {
    name: "name_example",
  },
};

apiInstance.createUserGroup(body).then((data:any) => {
console.log('API called successfully. Returned data: ' + JSON.stringify(data.body));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userGroupRequest** | **UserGroupRequest**| User group details |


### Return type

**UserGroupResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | User group created successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteUserGroup**
> MessageResponse deleteUserGroup(groupId)

Delete a user group with the specified ID.

### Example

```typescript
import { UserGroupsApi, IAccountUrlConfig} from '@cloudinary/account-provisioning';

// Configuration can be passed in:
const configuration: IAccountUrlConfig = {accountUrl: '<account_url>'}
const apiInstance = new UserGroupsApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new UserGroupsApi();

let body = {
// string
groupId: "group_id_example",
};

apiInstance.deleteUserGroup(body).then((data:any) => {
console.log('API called successfully. Returned data: ' + JSON.stringify(data.body));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **string**|  |


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
**200** | User group deleted successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getUserGroup**
> UserGroupResponse getUserGroup(groupId)

Retrieve a specific user group.

### Example

```typescript
import { UserGroupsApi, IAccountUrlConfig} from '@cloudinary/account-provisioning';

// Configuration can be passed in:
const configuration: IAccountUrlConfig = {accountUrl: '<account_url>'}
const apiInstance = new UserGroupsApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new UserGroupsApi();

let body = {
// string
groupId: "group_id_example",
};

apiInstance.getUserGroup(body).then((data:any) => {
console.log('API called successfully. Returned data: ' + JSON.stringify(data.body));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **string**|  |


### Return type

**UserGroupResponse**

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

# **getUserGroups**
> UserGroupsResponse getUserGroups()

Retrieve an array of all user groups in the account.

### Example

```typescript
import { UserGroupsApi, IAccountUrlConfig} from '@cloudinary/account-provisioning';

// Configuration can be passed in:
const configuration: IAccountUrlConfig = {accountUrl: '<account_url>'}
const apiInstance = new UserGroupsApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new UserGroupsApi();

let body:any = {};

apiInstance.getUserGroups(body).then((data:any) => {
console.log('API called successfully. Returned data: ' + JSON.stringify(data.body));
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**UserGroupsResponse**

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

# **getUsersInUserGroup**
> UserGroupUsersResponse getUsersInUserGroup(groupId)

Retrieve the users in the group with the specified ID.

### Example

```typescript
import { UserGroupsApi, IAccountUrlConfig} from '@cloudinary/account-provisioning';

// Configuration can be passed in:
const configuration: IAccountUrlConfig = {accountUrl: '<account_url>'}
const apiInstance = new UserGroupsApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new UserGroupsApi();

let body = {
// string
groupId: "group_id_example",
};

apiInstance.getUsersInUserGroup(body).then((data:any) => {
console.log('API called successfully. Returned data: ' + JSON.stringify(data.body));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **string**|  |


### Return type

**UserGroupUsersResponse**

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

# **removeUserFromUserGroup**
> UserGroupUserResponse removeUserFromUserGroup(groupId, userId)

Remove a user from a group with the specified ID.

### Example

```typescript
import { UserGroupsApi, IAccountUrlConfig} from '@cloudinary/account-provisioning';

// Configuration can be passed in:
const configuration: IAccountUrlConfig = {accountUrl: '<account_url>'}
const apiInstance = new UserGroupsApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new UserGroupsApi();

let body = {
// string
groupId: "group_id_example",
// string
userId: "user_id_example",
};

apiInstance.removeUserFromUserGroup(body).then((data:any) => {
console.log('API called successfully. Returned data: ' + JSON.stringify(data.body));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **string**|  |
 **userId** | **string**|  |


### Return type

**UserGroupUserResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User removed from group successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateUserGroup**
> UserGroupResponse updateUserGroup(groupId)

Update the name of a specified user group.

### Example

```typescript
import { UserGroupsApi, IAccountUrlConfig} from '@cloudinary/account-provisioning';

// Configuration can be passed in:
const configuration: IAccountUrlConfig = {accountUrl: '<account_url>'}
const apiInstance = new UserGroupsApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new UserGroupsApi();

let body = {
// string
groupId: "group_id_example",
// UserGroupRequest | Updated user group details (optional)
userGroupRequest: {
    name: "name_example",
  },
};

apiInstance.updateUserGroup(body).then((data:any) => {
console.log('API called successfully. Returned data: ' + JSON.stringify(data.body));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **string**|  |
 **userGroupRequest** | **UserGroupRequest**| Updated user group details |


### Return type

**UserGroupResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User group updated successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

