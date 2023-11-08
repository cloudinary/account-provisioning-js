# EnvironmentsApi

All URIs are relative to *https://api.cloudinary.com/v1_1/provisioning/accounts/ACCOUNT_ID*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProductEnvironment**](EnvironmentsApi.md#createProductEnvironment) | **POST** /sub_accounts | Create product environment
[**deleteProductEnvironment**](EnvironmentsApi.md#deleteProductEnvironment) | **DELETE** /sub_accounts/{sub_account_id} | Delete product environment
[**getProductEnvironment**](EnvironmentsApi.md#getProductEnvironment) | **GET** /sub_accounts/{sub_account_id} | Get product environment
[**getProductEnvironments**](EnvironmentsApi.md#getProductEnvironments) | **GET** /sub_accounts | Get product environments
[**updateProductEnvironment**](EnvironmentsApi.md#updateProductEnvironment) | **PUT** /sub_accounts/{sub_account_id} | Update product environment


# **createProductEnvironment**
> ProductEnvironmentResponse createProductEnvironment()

Create a new product environment.

### Example

```typescript
import { EnvironmentsApi, IAccountUrlConfig} from '@cloudinary/account-provisioning';

// Configuration can be passed in:
const configuration: IAccountUrlConfig = {accountUrl: '<account_url>'}
const apiInstance = new EnvironmentsApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new EnvironmentsApi();

let body = {
// ProductEnvironmentRequest | Product environment details (optional)
productEnvironmentRequest: {
    enabled: true,
    ids: [
      "ids_example",
    ],
    prefix: "prefix_example",
  },
};

apiInstance.createProductEnvironment(body).then((data:any) => {
console.log('API called successfully. Returned data: ' + JSON.stringify(data.body));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productEnvironmentRequest** | **ProductEnvironmentRequest**| Product environment details |


### Return type

**ProductEnvironmentResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Product environment created successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteProductEnvironment**
> MessageResponse deleteProductEnvironment(subAccountId)

Delete a specific product environment.

### Example

```typescript
import { EnvironmentsApi, IAccountUrlConfig} from '@cloudinary/account-provisioning';

// Configuration can be passed in:
const configuration: IAccountUrlConfig = {accountUrl: '<account_url>'}
const apiInstance = new EnvironmentsApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new EnvironmentsApi();

let body = {
// string
subAccountId: "sub_account_id_example",
};

apiInstance.deleteProductEnvironment(body).then((data:any) => {
console.log('API called successfully. Returned data: ' + JSON.stringify(data.body));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subAccountId** | **string**|  |


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
**200** | Product environment deleted successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getProductEnvironment**
> ProductEnvironmentResponse getProductEnvironment(subAccountId)

Retrieve a specific product environment.

### Example

```typescript
import { EnvironmentsApi, IAccountUrlConfig} from '@cloudinary/account-provisioning';

// Configuration can be passed in:
const configuration: IAccountUrlConfig = {accountUrl: '<account_url>'}
const apiInstance = new EnvironmentsApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new EnvironmentsApi();

let body = {
// string
subAccountId: "demo",
};

apiInstance.getProductEnvironment(body).then((data:any) => {
console.log('API called successfully. Returned data: ' + JSON.stringify(data.body));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subAccountId** | **string**|  |


### Return type

**ProductEnvironmentResponse**

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

# **getProductEnvironments**
> ProductEnvironmentsResponse getProductEnvironments()

Retrieve an array of product environments.

### Example

```typescript
import { EnvironmentsApi, IAccountUrlConfig} from '@cloudinary/account-provisioning';

// Configuration can be passed in:
const configuration: IAccountUrlConfig = {accountUrl: '<account_url>'}
const apiInstance = new EnvironmentsApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new EnvironmentsApi();

let body = {
// boolean | Whether to return enabled (true) or disabled (false) product environments. Default all environments. (optional)
enabled: true,
// Array<string> | A list of up to 100 product environment IDs. (optional)
ids: [
    "ids_example",
  ],
// string (optional)
prefix: "prefix_example",
};

apiInstance.getProductEnvironments(body).then((data:any) => {
console.log('API called successfully. Returned data: ' + JSON.stringify(data.body));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **enabled** | **boolean**| Whether to return enabled (true) or disabled (false) product environments. Default all environments. |
 **ids** | **Array<string>**| A list of up to 100 product environment IDs. |
 **prefix** | **string**|  |


### Return type

**ProductEnvironmentsResponse**

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

# **updateProductEnvironment**
> ProductEnvironmentResponse updateProductEnvironment(subAccountId)

Update the details of a product environment.

### Example

```typescript
import { EnvironmentsApi, IAccountUrlConfig} from '@cloudinary/account-provisioning';

// Configuration can be passed in:
const configuration: IAccountUrlConfig = {accountUrl: '<account_url>'}
const apiInstance = new EnvironmentsApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new EnvironmentsApi();

let body = {
// string
subAccountId: "sub_account_id_example",
// ProductEnvironmentRequest | Updated product environment details (optional)
productEnvironmentRequest: {
    enabled: true,
    ids: [
      "ids_example",
    ],
    prefix: "prefix_example",
  },
};

apiInstance.updateProductEnvironment(body).then((data:any) => {
console.log('API called successfully. Returned data: ' + JSON.stringify(data.body));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subAccountId** | **string**|  |
 **productEnvironmentRequest** | **ProductEnvironmentRequest**| Updated product environment details |


### Return type

**ProductEnvironmentResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Product environment updated successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

