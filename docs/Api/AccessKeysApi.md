# AccessKeysApi

All URIs are relative to *https://api.cloudinary.com/v1_1/provisioning/accounts/ACCOUNT_ID*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteAccessKey**](AccessKeysApi.md#deleteAccessKey) | **DELETE** /sub_accounts/{sub_account_id}/access_keys/{key} | Delete access key
[**deleteAccessKeyByName**](AccessKeysApi.md#deleteAccessKeyByName) | **DELETE** /sub_accounts/{sub_account_id}/access_keys | Delete access key by name
[**generateAccessKey**](AccessKeysApi.md#generateAccessKey) | **POST** /sub_accounts/{sub_account_id}/access_keys | Generate an access key
[**getAccessKeys**](AccessKeysApi.md#getAccessKeys) | **GET** /sub_accounts/{sub_account_id}/access_keys | Get access keys
[**updateAccessKey**](AccessKeysApi.md#updateAccessKey) | **PUT** /sub_accounts/{sub_account_id}/access_keys/{key} | Update an access key


# **deleteAccessKey**
> SuccessResponse deleteAccessKey(subAccountId, key)

Delete a specific access key.

### Example

```typescript
import {
    AccessKeysApi,
    IAccountUrlConfig,
    type SuccessResponse,
    type ErrorResponse,
} from '@cloudinary/account-provisioning';

// Configuration can be passed in:
const configuration: IAccountUrlConfig = {accountUrl: '<account_url>'}
const apiInstance = new AccessKeysApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new AccessKeysApi();

// string | The ID of the product environment.
const subAccountId: string = "abcde1fghij2klmno3pqrst4uvwxy5z";
// string | The access key (api key).
const key: string = "814814814814814";

// Example using parameters
apiInstance.deleteAccessKey(subAccountId, key)
    .then((result) => { console.log('API called successfully. Returned data: ' + JSON.stringify(result)); })
    .catch((error) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subAccountId** | **string**| The ID of the product environment. |
 **key** | **string**| The access key (api key). |


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
**200** | Access Key deleted successfully |  -  |
**400** | Bad request. |  -  |
**401** | Authorization required. |  -  |
**403** | Not allowed. |  -  |
**404** | Not found. |  -  |
**420** | Max usage rate exceeded. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteAccessKeyByName**
> SuccessResponse deleteAccessKeyByName(subAccountId, name)

Delete a specific access key by name.

### Example

```typescript
import {
    AccessKeysApi,
    IAccountUrlConfig,
    type SuccessResponse,
    type ErrorResponse,
} from '@cloudinary/account-provisioning';

// Configuration can be passed in:
const configuration: IAccountUrlConfig = {accountUrl: '<account_url>'}
const apiInstance = new AccessKeysApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new AccessKeysApi();

// string | The ID of the product environment.
const subAccountId: string = "abcde1fghij2klmno3pqrst4uvwxy5z";
// string | The access key name.
const name: string = "main_key";

// Example using parameters
apiInstance.deleteAccessKeyByName(subAccountId, name)
    .then((result) => { console.log('API called successfully. Returned data: ' + JSON.stringify(result)); })
    .catch((error) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subAccountId** | **string**| The ID of the product environment. |
 **name** | **string**| The access key name. |


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
**200** | Access Key deleted successfully |  -  |
**400** | Bad request. |  -  |
**401** | Authorization required. |  -  |
**403** | Not allowed. |  -  |
**404** | Not found. |  -  |
**420** | Max usage rate exceeded. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **generateAccessKey**
> AccessKey generateAccessKey(subAccountId)

Generate a new access key.

### Example

```typescript
import {
    AccessKeysApi,
    IAccountUrlConfig,
    type AccessKeyRequest,
    type AccessKey,
    type ErrorResponse,
} from '@cloudinary/account-provisioning';

// Configuration can be passed in:
const configuration: IAccountUrlConfig = {accountUrl: '<account_url>'}
const apiInstance = new AccessKeysApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new AccessKeysApi();

// string | The ID of the product environment.
const subAccountId: string = "abcde1fghij2klmno3pqrst4uvwxy5z";
// AccessKeyRequest | Access key details (optional)
const accessKeyRequest: AccessKeyRequest = {
    name: "main_key",
    enabled: true,
  };

// Example using parameters
apiInstance.generateAccessKey(subAccountId, accessKeyRequest)
    .then((result) => { console.log('API called successfully. Returned data: ' + JSON.stringify(result)); })
    .catch((error) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subAccountId** | **string**| The ID of the product environment. |
 **accessKeyRequest** | **AccessKeyRequest**| Access key details |


### Return type

**AccessKey**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Access key created successfully |  -  |
**400** | Bad request. |  -  |
**401** | Authorization required. |  -  |
**403** | Not allowed. |  -  |
**404** | Not found. |  -  |
**409** | Already exists. |  -  |
**420** | Max usage rate exceeded. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAccessKeys**
> AccessKeysResponse getAccessKeys(subAccountId)

Retrieve an array of all access keys for a product environment.

### Example

```typescript
import {
    AccessKeysApi,
    IAccountUrlConfig,
    type AccessKeysResponse,
    type ErrorResponse,
} from '@cloudinary/account-provisioning';

// Configuration can be passed in:
const configuration: IAccountUrlConfig = {accountUrl: '<account_url>'}
const apiInstance = new AccessKeysApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new AccessKeysApi();

// string | The ID of the product environment.
const subAccountId: string = "abcde1fghij2klmno3pqrst4uvwxy5z";
// number | How many entries to display on each page. (optional)
const pageSize: number = 1;
// number | Which page to return (maximum pages 100). **Default**: All pages are returned.  (optional)
const page: number = 1;
// 'api_key' | 'created_at' | 'name' | 'enabled' | Which response parameter to sort by. **Possible values**: `api_key`, `created_at`, `name`, `enabled`.  (optional)
const sortBy: 'api_key' | 'created_at' | 'name' | 'enabled' = "created_at";
// 'desc' | 'asc' | Control the order of returned keys. **Possible values**: `desc` (default), `asc`.  (optional)
const sortOrder: 'desc' | 'asc' = "asc";

// Example using parameters
apiInstance.getAccessKeys(subAccountId, pageSize, page, sortBy, sortOrder)
    .then((result) => { console.log('API called successfully. Returned data: ' + JSON.stringify(result)); })
    .catch((error) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subAccountId** | **string**| The ID of the product environment. |
 **pageSize** | **number**| How many entries to display on each page. |
 **page** | **number**| Which page to return (maximum pages 100). **Default**: All pages are returned.  |
 **sortBy** | **&#39;api_key&#39; | &#39;created_at&#39; | &#39;name&#39; | &#39;enabled&#39;**| Which response parameter to sort by. **Possible values**: &#x60;api_key&#x60;, &#x60;created_at&#x60;, &#x60;name&#x60;, &#x60;enabled&#x60;.  |
 **sortOrder** | **&#39;desc&#39; | &#39;asc&#39;**| Control the order of returned keys. **Possible values**: &#x60;desc&#x60; (default), &#x60;asc&#x60;.  |


### Return type

**AccessKeysResponse**

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

# **updateAccessKey**
> AccessKey updateAccessKey(subAccountId, key)

Update the name and/or status of an existing access key.

### Example

```typescript
import {
    AccessKeysApi,
    IAccountUrlConfig,
    type AccessKey,
    type AccessKeyUpdateRequest,
    type ErrorResponse,
} from '@cloudinary/account-provisioning';

// Configuration can be passed in:
const configuration: IAccountUrlConfig = {accountUrl: '<account_url>'}
const apiInstance = new AccessKeysApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new AccessKeysApi();

// string | The ID of the product environment.
const subAccountId: string = "abcde1fghij2klmno3pqrst4uvwxy5z";
// string | The access key (api key).
const key: string = "814814814814814";
// AccessKeyUpdateRequest | Access key details for update (optional)
const accessKeyUpdateRequest: AccessKeyUpdateRequest = {
    name: "main_key",
    enabled: true,
    dedicatedFor: "webhooks",
  };

// Example using parameters
apiInstance.updateAccessKey(subAccountId, key, accessKeyUpdateRequest)
    .then((result) => { console.log('API called successfully. Returned data: ' + JSON.stringify(result)); })
    .catch((error) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subAccountId** | **string**| The ID of the product environment. |
 **key** | **string**| The access key (api key). |
 **accessKeyUpdateRequest** | **AccessKeyUpdateRequest**| Access key details for update |


### Return type

**AccessKey**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Access key updated successfully |  -  |
**400** | Bad request. |  -  |
**401** | Authorization required. |  -  |
**403** | Not allowed. |  -  |
**404** | Not found. |  -  |
**409** | Already exists. |  -  |
**420** | Max usage rate exceeded. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

