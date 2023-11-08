# AccessKeysApi

All URIs are relative to *https://api.cloudinary.com/v1_1/provisioning/accounts/ACCOUNT_ID*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generateAccessKey**](AccessKeysApi.md#generateAccessKey) | **POST** /sub_accounts/{sub_account_id}/access_keys | Generate an access key
[**getAccessKeys**](AccessKeysApi.md#getAccessKeys) | **GET** /sub_accounts/{sub_account_id}/access_keys | Get access keys
[**updateAccessKey**](AccessKeysApi.md#updateAccessKey) | **PUT** /sub_accounts/{sub_account_id}/access_keys/{key} | Update an access key


# **generateAccessKey**
> AccessKeyResponse generateAccessKey(subAccountId)

Generate a new access key.

### Example

```typescript
import { AccessKeysApi, IAccountUrlConfig} from '@cloudinary/account-provisioning';

// Configuration can be passed in:
const configuration: IAccountUrlConfig = {accountUrl: '<account_url>'}
const apiInstance = new AccessKeysApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new AccessKeysApi();

let body = {
// string
subAccountId: "sub_account_id_example",
// AccessKeyRequest | Access key details (optional)
accessKeyRequest: {
    name: "name_example",
    enabled: true,
  },
};

apiInstance.generateAccessKey(body).then((data:any) => {
console.log('API called successfully. Returned data: ' + JSON.stringify(data.body));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subAccountId** | **string**|  |
 **accessKeyRequest** | **AccessKeyRequest**| Access key details |


### Return type

**AccessKeyResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Access key created successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAccessKeys**
> AccessKeysResponse getAccessKeys(subAccountId)

Retrieve an array of all access keys for a product environment.

### Example

```typescript
import { AccessKeysApi, IAccountUrlConfig} from '@cloudinary/account-provisioning';

// Configuration can be passed in:
const configuration: IAccountUrlConfig = {accountUrl: '<account_url>'}
const apiInstance = new AccessKeysApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new AccessKeysApi();

let body = {
// string
subAccountId: "sub_account_id_example",
// number | How many entries to display on each page. (optional)
pageSize: 1,
// number | Which page to return (maximum pages 100). Default All pages are returned. (optional)
page: 1,
// string | Which response parameter to sort by. Possible values api_key, created_at, name, enabled. (optional)
sortBy: "sort_by_example",
// string | Control the order of returned keys. Possible values desc (default), asc. (optional)
sortOrder: "sort_order_example",
};

apiInstance.getAccessKeys(body).then((data:any) => {
console.log('API called successfully. Returned data: ' + JSON.stringify(data.body));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subAccountId** | **string**|  |
 **pageSize** | **number**| How many entries to display on each page. |
 **page** | **number**| Which page to return (maximum pages 100). Default All pages are returned. |
 **sortBy** | **string**| Which response parameter to sort by. Possible values api_key, created_at, name, enabled. |
 **sortOrder** | **string**| Control the order of returned keys. Possible values desc (default), asc. |


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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateAccessKey**
> AccessKeyResponse updateAccessKey(subAccountId, key)

Update the name and/or status of an existing access key.

### Example

```typescript
import { AccessKeysApi, IAccountUrlConfig} from '@cloudinary/account-provisioning';

// Configuration can be passed in:
const configuration: IAccountUrlConfig = {accountUrl: '<account_url>'}
const apiInstance = new AccessKeysApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new AccessKeysApi();

let body = {
// string
subAccountId: "sub_account_id_example",
// string
key: "key_example",
// AccessKeyUpdateRequest | Access key details for update (optional)
accessKeyUpdateRequest: {
    name: "name_example",
    enabled: true,
  },
};

apiInstance.updateAccessKey(body).then((data:any) => {
console.log('API called successfully. Returned data: ' + JSON.stringify(data.body));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subAccountId** | **string**|  |
 **key** | **string**|  |
 **accessKeyUpdateRequest** | **AccessKeyUpdateRequest**| Access key details for update |


### Return type

**AccessKeyResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Access key updated successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

