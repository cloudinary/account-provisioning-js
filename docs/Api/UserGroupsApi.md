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
> UserGroupUser addUserToUserGroup(groupId, userId)

Add a user to a group with the specified ID.

### Example

```typescript
import { UserGroupsApi, IAccountUrlConfig} from '@cloudinary/account-provisioning';

// Configuration can be passed in:
const configuration: IAccountUrlConfig = {accountUrl: '<account_url>'}
const apiInstance = new UserGroupsApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new UserGroupsApi();

// string | The ID of the user group.
const groupId = "7f08f1f1fc910bf1f25274aef11d27";
// string | The ID of the user.
const userId = "0abed8dfcc039ea05e2a1d494fd442";

// Example using parameters
apiInstance.addUserToUserGroup(groupId, userId)
    .then((data:any) => { console.log('API called successfully. Returned data: ' + JSON.stringify(data.body)); })
    .catch((error:any) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **string**| The ID of the user group. |
 **userId** | **string**| The ID of the user. |


### Return type

**UserGroupUser**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User added to group successfully |  -  |
**400** | Bad request. |  -  |
**401** | Authorization required. |  -  |
**403** | Not allowed. |  -  |
**404** | Not found. |  -  |
**409** | Already exists. |  -  |
**420** | Max usage rate exceeded. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createUserGroup**
> UserGroup createUserGroup()

Create a new user group for the account.

### Example

```typescript
import { UserGroupsApi, IAccountUrlConfig} from '@cloudinary/account-provisioning';

// Configuration can be passed in:
const configuration: IAccountUrlConfig = {accountUrl: '<account_url>'}
const apiInstance = new UserGroupsApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new UserGroupsApi();

// UserGroupRequest | User group details (optional)
const userGroupRequest = {
    name: "Designers",
  };

// Example using parameters
apiInstance.createUserGroup(userGroupRequest)
    .then((data:any) => { console.log('API called successfully. Returned data: ' + JSON.stringify(data.body)); })
    .catch((error:any) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userGroupRequest** | **UserGroupRequest**| User group details |


### Return type

**UserGroup**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User group created successfully |  -  |
**400** | Bad request. |  -  |
**401** | Authorization required. |  -  |
**403** | Not allowed. |  -  |
**404** | Not found. |  -  |
**409** | Already exists. |  -  |
**420** | Max usage rate exceeded. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteUserGroup**
> SuccessResponse deleteUserGroup(groupId)

Delete a user group with the specified ID.

### Example

```typescript
import { UserGroupsApi, IAccountUrlConfig} from '@cloudinary/account-provisioning';

// Configuration can be passed in:
const configuration: IAccountUrlConfig = {accountUrl: '<account_url>'}
const apiInstance = new UserGroupsApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new UserGroupsApi();

// string | The ID of the user group.
const groupId = "7f08f1f1fc910bf1f25274aef11d27";

// Example using parameters
apiInstance.deleteUserGroup(groupId)
    .then((data:any) => { console.log('API called successfully. Returned data: ' + JSON.stringify(data.body)); })
    .catch((error:any) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **string**| The ID of the user group. |


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
**200** | User group deleted successfully |  -  |
**400** | Bad request. |  -  |
**401** | Authorization required. |  -  |
**403** | Not allowed. |  -  |
**404** | Not found. |  -  |
**420** | Max usage rate exceeded. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getUserGroup**
> UserGroup getUserGroup(groupId)

Retrieve a specific user group.

### Example

```typescript
import { UserGroupsApi, IAccountUrlConfig} from '@cloudinary/account-provisioning';

// Configuration can be passed in:
const configuration: IAccountUrlConfig = {accountUrl: '<account_url>'}
const apiInstance = new UserGroupsApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new UserGroupsApi();

// string | The ID of the user group.
const groupId = "7f08f1f1fc910bf1f25274aef11d27";

// Example using parameters
apiInstance.getUserGroup(groupId)
    .then((data:any) => { console.log('API called successfully. Returned data: ' + JSON.stringify(data.body)); })
    .catch((error:any) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **string**| The ID of the user group. |


### Return type

**UserGroup**

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


// Example using parameters
apiInstance.getUserGroups()
    .then((data:any) => { console.log('API called successfully. Returned data: ' + JSON.stringify(data.body)); })
    .catch((error:any) => console.error(error));
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
**401** | Authorization required. |  -  |
**404** | Not found. |  -  |
**420** | Max usage rate exceeded. |  -  |

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

// string | The ID of the user group.
const groupId = "7f08f1f1fc910bf1f25274aef11d27";

// Example using parameters
apiInstance.getUsersInUserGroup(groupId)
    .then((data:any) => { console.log('API called successfully. Returned data: ' + JSON.stringify(data.body)); })
    .catch((error:any) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **string**| The ID of the user group. |


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
**401** | Authorization required. |  -  |
**404** | Not found. |  -  |
**420** | Max usage rate exceeded. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **removeUserFromUserGroup**
> UserGroupUsersResponse removeUserFromUserGroup(groupId, userId)

Remove a user from a group with the specified ID.

### Example

```typescript
import { UserGroupsApi, IAccountUrlConfig} from '@cloudinary/account-provisioning';

// Configuration can be passed in:
const configuration: IAccountUrlConfig = {accountUrl: '<account_url>'}
const apiInstance = new UserGroupsApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new UserGroupsApi();

// string | The ID of the user group.
const groupId = "7f08f1f1fc910bf1f25274aef11d27";
// string | The ID of the user.
const userId = "0abed8dfcc039ea05e2a1d494fd442";

// Example using parameters
apiInstance.removeUserFromUserGroup(groupId, userId)
    .then((data:any) => { console.log('API called successfully. Returned data: ' + JSON.stringify(data.body)); })
    .catch((error:any) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **string**| The ID of the user group. |
 **userId** | **string**| The ID of the user. |


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
**200** | User removed from group successfully |  -  |
**400** | Bad request. |  -  |
**401** | Authorization required. |  -  |
**403** | Not allowed. |  -  |
**404** | Not found. |  -  |
**420** | Max usage rate exceeded. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateUserGroup**
> UserGroup updateUserGroup(groupId)

Update the name of a specified user group.

### Example

```typescript
import { UserGroupsApi, IAccountUrlConfig} from '@cloudinary/account-provisioning';

// Configuration can be passed in:
const configuration: IAccountUrlConfig = {accountUrl: '<account_url>'}
const apiInstance = new UserGroupsApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new UserGroupsApi();

// string | The ID of the user group.
const groupId = "7f08f1f1fc910bf1f25274aef11d27";
// UserGroupRequest | Updated user group details (optional)
const userGroupRequest = {
    name: "Designers",
  };

// Example using parameters
apiInstance.updateUserGroup(groupId, userGroupRequest)
    .then((data:any) => { console.log('API called successfully. Returned data: ' + JSON.stringify(data.body)); })
    .catch((error:any) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **string**| The ID of the user group. |
 **userGroupRequest** | **UserGroupRequest**| Updated user group details |


### Return type

**UserGroup**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User group updated successfully |  -  |
**400** | Bad request. |  -  |
**401** | Authorization required. |  -  |
**403** | Not allowed. |  -  |
**404** | Not found. |  -  |
**409** | Already exists. |  -  |
**420** | Max usage rate exceeded. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

