# ProductEnvironmentsApi

All URIs are relative to *https://api.cloudinary.com/v1_1/provisioning/accounts/ACCOUNT_ID*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProductEnvironment**](ProductEnvironmentsApi.md#createProductEnvironment) | **POST** /sub_accounts | Create product environment
[**deleteProductEnvironment**](ProductEnvironmentsApi.md#deleteProductEnvironment) | **DELETE** /sub_accounts/{sub_account_id} | Delete product environment
[**getProductEnvironment**](ProductEnvironmentsApi.md#getProductEnvironment) | **GET** /sub_accounts/{sub_account_id} | Get product environment
[**getProductEnvironments**](ProductEnvironmentsApi.md#getProductEnvironments) | **GET** /sub_accounts | Get product environments
[**updateProductEnvironment**](ProductEnvironmentsApi.md#updateProductEnvironment) | **PUT** /sub_accounts/{sub_account_id} | Update product environment


# **createProductEnvironment**
> ProductEnvironment createProductEnvironment(productEnvironmentRequest)

Create a new product environment. Any users that have access to all product environments will also automatically have access to the new product environment. 

### Example

```typescript
import {
    ProductEnvironmentsApi,
    IAccountUrlConfig,
    type ProductEnvironmentRequest,
    type ProductEnvironment,
    type ErrorResponse,
} from '@cloudinary/account-provisioning';

// Configuration can be passed in:
const configuration: IAccountUrlConfig = {accountUrl: '<account_url>'}
const apiInstance = new ProductEnvironmentsApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new ProductEnvironmentsApi();

// ProductEnvironmentRequest | Product environment details
const productEnvironmentRequest: ProductEnvironmentRequest = {
    name: "Product3 Application",
    cloudName: "product3",
    baseSubAccountId: "0aaaaa1bbbbb2ccccc3ddddd4eeeee5f",
    customAttributes: {},
  };

// Example using parameters
apiInstance.createProductEnvironment(productEnvironmentRequest)
    .then((result) => { console.log('API called successfully. Returned data: ' + JSON.stringify(result)); })
    .catch((error) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productEnvironmentRequest** | **ProductEnvironmentRequest**| Product environment details |


### Return type

**ProductEnvironment**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Product environment created successfully |  -  |
**400** | Bad request. |  -  |
**401** | Authorization required. |  -  |
**403** | Not allowed. |  -  |
**409** | Already exists. |  -  |
**420** | Max usage rate exceeded. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteProductEnvironment**
> SuccessResponse deleteProductEnvironment(subAccountId)

Delete a specific product environment.

### Example

```typescript
import {
    ProductEnvironmentsApi,
    IAccountUrlConfig,
    type SuccessResponse,
    type ErrorResponse,
} from '@cloudinary/account-provisioning';

// Configuration can be passed in:
const configuration: IAccountUrlConfig = {accountUrl: '<account_url>'}
const apiInstance = new ProductEnvironmentsApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new ProductEnvironmentsApi();

// string | The ID of the product environment.
const subAccountId: string = "abcde1fghij2klmno3pqrst4uvwxy5z";

// Example using parameters
apiInstance.deleteProductEnvironment(subAccountId)
    .then((result) => { console.log('API called successfully. Returned data: ' + JSON.stringify(result)); })
    .catch((error) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subAccountId** | **string**| The ID of the product environment. |


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
**200** | Product environment deleted successfully |  -  |
**400** | Bad request. |  -  |
**401** | Authorization required. |  -  |
**403** | Not allowed. |  -  |
**404** | Not found. |  -  |
**420** | Max usage rate exceeded. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getProductEnvironment**
> ProductEnvironment getProductEnvironment(subAccountId)

Retrieve a specific product environment.

### Example

```typescript
import {
    ProductEnvironmentsApi,
    IAccountUrlConfig,
    type ProductEnvironment,
    type ErrorResponse,
} from '@cloudinary/account-provisioning';

// Configuration can be passed in:
const configuration: IAccountUrlConfig = {accountUrl: '<account_url>'}
const apiInstance = new ProductEnvironmentsApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new ProductEnvironmentsApi();

// string | The ID of the product environment.
const subAccountId: string = "abcde1fghij2klmno3pqrst4uvwxy5z";

// Example using parameters
apiInstance.getProductEnvironment(subAccountId)
    .then((result) => { console.log('API called successfully. Returned data: ' + JSON.stringify(result)); })
    .catch((error) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subAccountId** | **string**| The ID of the product environment. |


### Return type

**ProductEnvironment**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad request. |  -  |
**401** | Authorization required. |  -  |
**404** | Not found. |  -  |
**420** | Max usage rate exceeded. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getProductEnvironments**
> ProductEnvironmentsResponse getProductEnvironments()

Return an array of all product environments, or if conditions are specified,  return the relevant product environments. 

### Example

```typescript
import {
    ProductEnvironmentsApi,
    IAccountUrlConfig,
    type ProductEnvironmentsResponse,
    type ErrorResponse,
} from '@cloudinary/account-provisioning';

// Configuration can be passed in:
const configuration: IAccountUrlConfig = {accountUrl: '<account_url>'}
const apiInstance = new ProductEnvironmentsApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new ProductEnvironmentsApi();

// boolean | Whether to only return enabled product environments (true) or disabled product environments (false).  **Default**: all product environments are returned (both enabled and disabled).  (optional)
const enabled: boolean = true;
// Array<string> | A list of up to 100 product environment IDs. When provided, other parameters are ignored. (optional)
const ids: Array<string> = [
    "ids_example",
  ];
// Array<string> | A list of up to 100 product environment cloud names. (optional)
const cloudNames: Array<string> = [
    "cloud_names_example",
  ];
// string | Returns product environments where the name begins with the specified case-insensitive string. (optional)
const prefix: string = "product";

// Example using parameters
apiInstance.getProductEnvironments(enabled, ids, cloudNames, prefix)
    .then((result) => { console.log('API called successfully. Returned data: ' + JSON.stringify(result)); })
    .catch((error) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **enabled** | **boolean**| Whether to only return enabled product environments (true) or disabled product environments (false).  **Default**: all product environments are returned (both enabled and disabled).  |
 **ids** | **Array<string>**| A list of up to 100 product environment IDs. When provided, other parameters are ignored. |
 **cloudNames** | **Array<string>**| A list of up to 100 product environment cloud names. |
 **prefix** | **string**| Returns product environments where the name begins with the specified case-insensitive string. |


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
**200** | Successful operation. |  -  |
**400** | Bad request. |  -  |
**401** | Authorization required. |  -  |
**403** | Not allowed. |  -  |
**404** | Not found. |  -  |
**409** | Already exists. |  -  |
**420** | Max usage rate exceeded. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateProductEnvironment**
> ProductEnvironment updateProductEnvironment(subAccountId)

Update the details of a product environment.

### Example

```typescript
import {
    ProductEnvironmentsApi,
    IAccountUrlConfig,
    type ProductEnvironmentUpdateRequest,
    type ProductEnvironment,
    type ErrorResponse,
} from '@cloudinary/account-provisioning';

// Configuration can be passed in:
const configuration: IAccountUrlConfig = {accountUrl: '<account_url>'}
const apiInstance = new ProductEnvironmentsApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new ProductEnvironmentsApi();

// string | The ID of the product environment.
const subAccountId: string = "abcde1fghij2klmno3pqrst4uvwxy5z";
// ProductEnvironmentUpdateRequest | Updated product environment details (optional)
const productEnvironmentUpdateRequest: ProductEnvironmentUpdateRequest = {
    name: "Product3 Application",
    cloudName: "product3",
    customAttributes: {},
    enabled: true,
  };

// Example using parameters
apiInstance.updateProductEnvironment(subAccountId, productEnvironmentUpdateRequest)
    .then((result) => { console.log('API called successfully. Returned data: ' + JSON.stringify(result)); })
    .catch((error) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subAccountId** | **string**| The ID of the product environment. |
 **productEnvironmentUpdateRequest** | **ProductEnvironmentUpdateRequest**| Updated product environment details |


### Return type

**ProductEnvironment**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Product environment updated successfully |  -  |
**400** | Bad request. |  -  |
**401** | Authorization required. |  -  |
**403** | Not allowed. |  -  |
**404** | Not found. |  -  |
**409** | Already exists. |  -  |
**420** | Max usage rate exceeded. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

