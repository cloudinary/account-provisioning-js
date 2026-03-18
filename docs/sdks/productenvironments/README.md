# ProductEnvironments

## Overview

### Available Operations

* [list](#list) - Get product environments
* [create](#create) - Create product environment
* [get](#get) - Get product environment
* [update](#update) - Update product environment
* [delete](#delete) - Delete product environment

## list

Return an array of all product environments, or if conditions are specified,
return the relevant product environments.


Learn more about getting product environments.
<https://cloudinary.com/documentation/provisioning_api#get_product_environments>

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getProductEnvironments" method="get" path="/v1_1/provisioning/accounts/{account_id}/sub_accounts" example="ProductEnvironments" -->
```typescript
import CldProvisioning from "@cloudinary/account-provisioning";
import { CldProvisioning } from "@cloudinary/account-provisioning";

const cldProvisioning = new CldProvisioning();

async function run() {
  const result = await cldProvisioning.productEnvironments.list({
    enabled: true,
    prefix: "product",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CldProvisioningCore } from "@cloudinary/account-provisioning/core.js";
import { productEnvironmentsList } from "@cloudinary/account-provisioning/funcs/productEnvironmentsList.js";

// Use `CldProvisioningCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cldProvisioning = new CldProvisioningCore({
  accountId: "<id>",
  security: {
    provisioningApiKey: "CLOUDINARY_PROVISIONING_API_KEY",
    provisioningApiSecret: "CLOUDINARY_PROVISIONING_API_SECRET",
  },
});

async function run() {
  const res = await productEnvironmentsList(cldProvisioning, {
    enabled: true,
    prefix: "product",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("productEnvironmentsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.GetProductEnvironmentsRequest](../../models/getproductenvironmentsrequest.md)                                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ProductEnvironmentsResponse](../../models/productenvironmentsresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| models.ErrorResponse              | 400, 401, 403, 404, 409, 420, 429 | application/json                  |
| models.SDKError                   | 4XX, 5XX                          | \*/\*                             |

## create

Create a new product environment. Any users that have access to all product environments will also automatically
have access to the new product environment.


Learn more about creating product environments.
<https://cloudinary.com/documentation/provisioning_api#create_product_environment>

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createProductEnvironment" method="post" path="/v1_1/provisioning/accounts/{account_id}/sub_accounts" example="ProductEnvironment3" -->
```typescript
import CldProvisioning from "@cloudinary/account-provisioning";
import { CldProvisioning } from "@cloudinary/account-provisioning";

const cldProvisioning = new CldProvisioning();

async function run() {
  const result = await cldProvisioning.productEnvironments.create({
    name: "Product3 Application",
    cloudName: "product3",
    baseSubAccountId: "0aaaaa1bbbbb2ccccc3ddddd4eeeee5f",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CldProvisioningCore } from "@cloudinary/account-provisioning/core.js";
import { productEnvironmentsCreate } from "@cloudinary/account-provisioning/funcs/productEnvironmentsCreate.js";

// Use `CldProvisioningCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cldProvisioning = new CldProvisioningCore({
  accountId: "<id>",
  security: {
    provisioningApiKey: "CLOUDINARY_PROVISIONING_API_KEY",
    provisioningApiSecret: "CLOUDINARY_PROVISIONING_API_SECRET",
  },
});

async function run() {
  const res = await productEnvironmentsCreate(cldProvisioning, {
    name: "Product3 Application",
    cloudName: "product3",
    baseSubAccountId: "0aaaaa1bbbbb2ccccc3ddddd4eeeee5f",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("productEnvironmentsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.ProductEnvironmentRequest](../../models/productenvironmentrequest.md)                                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ProductEnvironment](../../models/productenvironment.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| models.ErrorResponse         | 400, 401, 403, 409, 420, 429 | application/json             |
| models.SDKError              | 4XX, 5XX                     | \*/\*                        |

## get

Retrieve a specific product environment.

Learn more about retrieving specific product environments.
<https://cloudinary.com/documentation/provisioning_api#get_product_environment>

### Example Usage: ProductEnvironment1

<!-- UsageSnippet language="typescript" operationID="getProductEnvironment" method="get" path="/v1_1/provisioning/accounts/{account_id}/sub_accounts/{sub_account_id}" example="ProductEnvironment1" -->
```typescript
import CldProvisioning from "@cloudinary/account-provisioning";
import { CldProvisioning } from "@cloudinary/account-provisioning";

const cldProvisioning = new CldProvisioning();

async function run() {
  const result = await cldProvisioning.productEnvironments.get({
    subAccountId: "abcde1fghij2klmno3pqrst4uvwxy5z",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CldProvisioningCore } from "@cloudinary/account-provisioning/core.js";
import { productEnvironmentsGet } from "@cloudinary/account-provisioning/funcs/productEnvironmentsGet.js";

// Use `CldProvisioningCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cldProvisioning = new CldProvisioningCore({
  accountId: "<id>",
  security: {
    provisioningApiKey: "CLOUDINARY_PROVISIONING_API_KEY",
    provisioningApiSecret: "CLOUDINARY_PROVISIONING_API_SECRET",
  },
});

async function run() {
  const res = await productEnvironmentsGet(cldProvisioning, {
    subAccountId: "abcde1fghij2klmno3pqrst4uvwxy5z",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("productEnvironmentsGet failed:", res.error);
  }
}

run();
```
### Example Usage: ProductEnvironment2

<!-- UsageSnippet language="typescript" operationID="getProductEnvironment" method="get" path="/v1_1/provisioning/accounts/{account_id}/sub_accounts/{sub_account_id}" example="ProductEnvironment2" -->
```typescript
import CldProvisioning from "@cloudinary/account-provisioning";
import { CldProvisioning } from "@cloudinary/account-provisioning";

const cldProvisioning = new CldProvisioning();

async function run() {
  const result = await cldProvisioning.productEnvironments.get({
    subAccountId: "abcde1fghij2klmno3pqrst4uvwxy5z",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CldProvisioningCore } from "@cloudinary/account-provisioning/core.js";
import { productEnvironmentsGet } from "@cloudinary/account-provisioning/funcs/productEnvironmentsGet.js";

// Use `CldProvisioningCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cldProvisioning = new CldProvisioningCore({
  accountId: "<id>",
  security: {
    provisioningApiKey: "CLOUDINARY_PROVISIONING_API_KEY",
    provisioningApiSecret: "CLOUDINARY_PROVISIONING_API_SECRET",
  },
});

async function run() {
  const res = await productEnvironmentsGet(cldProvisioning, {
    subAccountId: "abcde1fghij2klmno3pqrst4uvwxy5z",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("productEnvironmentsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.GetProductEnvironmentRequest](../../models/getproductenvironmentrequest.md)                                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ProductEnvironment](../../models/productenvironment.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| models.ErrorResponse    | 400, 401, 404, 420, 429 | application/json        |
| models.SDKError         | 4XX, 5XX                | \*/\*                   |

## update

Update the details of a product environment.

Learn more about updating product environments.
<https://cloudinary.com/documentation/provisioning_api#update_product_environment>

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateProductEnvironment" method="put" path="/v1_1/provisioning/accounts/{account_id}/sub_accounts/{sub_account_id}" example="ProductEnvironment1" -->
```typescript
import CldProvisioning from "@cloudinary/account-provisioning";
import { CldProvisioning } from "@cloudinary/account-provisioning";

const cldProvisioning = new CldProvisioning();

async function run() {
  const result = await cldProvisioning.productEnvironments.update({
    subAccountId: "abcde1fghij2klmno3pqrst4uvwxy5z",
    productEnvironmentUpdateRequest: {
      name: "Product3 Application",
      cloudName: "product3",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CldProvisioningCore } from "@cloudinary/account-provisioning/core.js";
import { productEnvironmentsUpdate } from "@cloudinary/account-provisioning/funcs/productEnvironmentsUpdate.js";

// Use `CldProvisioningCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cldProvisioning = new CldProvisioningCore({
  accountId: "<id>",
  security: {
    provisioningApiKey: "CLOUDINARY_PROVISIONING_API_KEY",
    provisioningApiSecret: "CLOUDINARY_PROVISIONING_API_SECRET",
  },
});

async function run() {
  const res = await productEnvironmentsUpdate(cldProvisioning, {
    subAccountId: "abcde1fghij2klmno3pqrst4uvwxy5z",
    productEnvironmentUpdateRequest: {
      name: "Product3 Application",
      cloudName: "product3",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("productEnvironmentsUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.UpdateProductEnvironmentRequest](../../models/updateproductenvironmentrequest.md)                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ProductEnvironment](../../models/productenvironment.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| models.ErrorResponse              | 400, 401, 403, 404, 409, 420, 429 | application/json                  |
| models.SDKError                   | 4XX, 5XX                          | \*/\*                             |

## delete

Delete a specific product environment.

Learn more about deleting product environments.
<https://cloudinary.com/documentation/provisioning_api#delete_product_environment>

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteProductEnvironment" method="delete" path="/v1_1/provisioning/accounts/{account_id}/sub_accounts/{sub_account_id}" -->
```typescript
import CldProvisioning from "@cloudinary/account-provisioning";
import { CldProvisioning } from "@cloudinary/account-provisioning";

const cldProvisioning = new CldProvisioning();

async function run() {
  const result = await cldProvisioning.productEnvironments.delete({
    subAccountId: "abcde1fghij2klmno3pqrst4uvwxy5z",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CldProvisioningCore } from "@cloudinary/account-provisioning/core.js";
import { productEnvironmentsDelete } from "@cloudinary/account-provisioning/funcs/productEnvironmentsDelete.js";

// Use `CldProvisioningCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cldProvisioning = new CldProvisioningCore({
  accountId: "<id>",
  security: {
    provisioningApiKey: "CLOUDINARY_PROVISIONING_API_KEY",
    provisioningApiSecret: "CLOUDINARY_PROVISIONING_API_SECRET",
  },
});

async function run() {
  const res = await productEnvironmentsDelete(cldProvisioning, {
    subAccountId: "abcde1fghij2klmno3pqrst4uvwxy5z",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("productEnvironmentsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.DeleteProductEnvironmentRequest](../../models/deleteproductenvironmentrequest.md)                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SuccessResponse](../../models/successresponse.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| models.ErrorResponse         | 400, 401, 403, 404, 420, 429 | application/json             |
| models.SDKError              | 4XX, 5XX                     | \*/\*                        |