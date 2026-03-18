# BillingUsage

## Overview

### Available Operations

* [get](#get) - Get billing usage information

## get

Retrieve billing usage metrics for your account and product environments,
including storage, bandwidth, impressions, and transformations.

If `year` is provided:
  - **Annual subscription**: Returns the single annual usage cycle that began in the specified year (if any).
  - **Monthly subscription**: Returns all monthly usage cycles that began in the specified year.

If `year` is not provided:
  - Returns usage for the year in which the current active subscription period began.
  - If no active subscription exists, an empty list is returned.

**Note**: Usage metrics are updated daily, so calling this endpoint once per day gives you the latest data.


### Example Usage: AdvancedExtraPAYG

<!-- UsageSnippet language="typescript" operationID="getBillingUsage" method="get" path="/v1_1/provisioning/accounts/{account_id}/billing_usage" example="AdvancedExtraPAYG" -->
```typescript
import { CldProvisioning } from "@cloudinary/account-provisioning";

const cldProvisioning = new CldProvisioning();

async function run() {
  const result = await cldProvisioning.billingUsage.get({
    year: 2024,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CldProvisioningCore } from "@cloudinary/account-provisioning/core.js";
import { billingUsageGet } from "@cloudinary/account-provisioning/funcs/billingUsageGet.js";

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
  const res = await billingUsageGet(cldProvisioning, {
    year: 2024,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("billingUsageGet failed:", res.error);
  }
}

run();
```
### Example Usage: AdvancedPAYG

<!-- UsageSnippet language="typescript" operationID="getBillingUsage" method="get" path="/v1_1/provisioning/accounts/{account_id}/billing_usage" example="AdvancedPAYG" -->
```typescript
import { CldProvisioning } from "@cloudinary/account-provisioning";

const cldProvisioning = new CldProvisioning();

async function run() {
  const result = await cldProvisioning.billingUsage.get({
    year: 2024,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CldProvisioningCore } from "@cloudinary/account-provisioning/core.js";
import { billingUsageGet } from "@cloudinary/account-provisioning/funcs/billingUsageGet.js";

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
  const res = await billingUsageGet(cldProvisioning, {
    year: 2024,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("billingUsageGet failed:", res.error);
  }
}

run();
```
### Example Usage: MultiPlan

<!-- UsageSnippet language="typescript" operationID="getBillingUsage" method="get" path="/v1_1/provisioning/accounts/{account_id}/billing_usage" example="MultiPlan" -->
```typescript
import { CldProvisioning } from "@cloudinary/account-provisioning";

const cldProvisioning = new CldProvisioning();

async function run() {
  const result = await cldProvisioning.billingUsage.get({
    year: 2024,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CldProvisioningCore } from "@cloudinary/account-provisioning/core.js";
import { billingUsageGet } from "@cloudinary/account-provisioning/funcs/billingUsageGet.js";

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
  const res = await billingUsageGet(cldProvisioning, {
    year: 2024,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("billingUsageGet failed:", res.error);
  }
}

run();
```
### Example Usage: ProPAYG

<!-- UsageSnippet language="typescript" operationID="getBillingUsage" method="get" path="/v1_1/provisioning/accounts/{account_id}/billing_usage" example="ProPAYG" -->
```typescript
import { CldProvisioning } from "@cloudinary/account-provisioning";

const cldProvisioning = new CldProvisioning();

async function run() {
  const result = await cldProvisioning.billingUsage.get({
    year: 2024,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CldProvisioningCore } from "@cloudinary/account-provisioning/core.js";
import { billingUsageGet } from "@cloudinary/account-provisioning/funcs/billingUsageGet.js";

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
  const res = await billingUsageGet(cldProvisioning, {
    year: 2024,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("billingUsageGet failed:", res.error);
  }
}

run();
```
### Example Usage: ProPAYGPlus

<!-- UsageSnippet language="typescript" operationID="getBillingUsage" method="get" path="/v1_1/provisioning/accounts/{account_id}/billing_usage" example="ProPAYGPlus" -->
```typescript
import { CldProvisioning } from "@cloudinary/account-provisioning";

const cldProvisioning = new CldProvisioning();

async function run() {
  const result = await cldProvisioning.billingUsage.get({
    year: 2024,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CldProvisioningCore } from "@cloudinary/account-provisioning/core.js";
import { billingUsageGet } from "@cloudinary/account-provisioning/funcs/billingUsageGet.js";

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
  const res = await billingUsageGet(cldProvisioning, {
    year: 2024,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("billingUsageGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.GetBillingUsageRequest](../../models/getbillingusagerequest.md)                                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.BillingUsageResponse[]](../../models/.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| models.ErrorResponse    | 400, 401, 403, 404, 429 | application/json        |
| models.SDKError         | 4XX, 5XX                | \*/\*                   |