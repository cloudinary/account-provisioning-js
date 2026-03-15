# SystemPolicies

## Overview

### Available Operations

* [list](#list) - Get system policies

## list

Retrieve all system-defined permission policies. Optionally filter the results by `scope_type` (account or product environment) and/or `permission_type` (global or content-specific).

**Note:** If `scope_type` isn't specified as `prodenv`, the account-level policies will be returned.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getSystemPolicies" method="get" path="/v2/accounts/{account_id}/permissions/policies/system" example="SystemPoliciesExample" -->
```typescript
import { CldProvisioning } from "@cloudinary/account-provisioning";

const cldProvisioning = new CldProvisioning({
  accountId: "<id>",
  security: {
    provisioningApiKey: "CLOUDINARY_PROVISIONING_API_KEY",
    provisioningApiSecret: "CLOUDINARY_PROVISIONING_API_SECRET",
  },
});

async function run() {
  const result = await cldProvisioning.systemPolicies.list("global", "prodenv");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CldProvisioningCore } from "@cloudinary/account-provisioning/core.js";
import { systemPoliciesList } from "@cloudinary/account-provisioning/funcs/systemPoliciesList.js";

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
  const res = await systemPoliciesList(cldProvisioning, "global", "prodenv");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("systemPoliciesList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                                                                                | Example                                                                                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `permissionType`                                                                                                                                                                                                                                                                           | [models.PermissionTypeEnum](../../models/permissiontypeenum.md)                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                                         | Specifies whether to retrieve roles whose permissions apply globally across all contexts within the scope (i.e., security settings for the account, or all folders in a product environment), or specifically to designated content instances (i.e., folder with external ID "fg3841spr"). | global                                                                                                                                                                                                                                                                                     |
| `scopeType`                                                                                                                                                                                                                                                                                | [models.ScopeTypeEnum](../../models/scopetypeenum.md)                                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                                                         | Specifies the level for retrieving policies or roles, either at the account level or within product environments.                                                                                                                                                                          | prodenv                                                                                                                                                                                                                                                                                    |
| `options`                                                                                                                                                                                                                                                                                  | RequestOptions                                                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                                         | Used to set various options for making HTTP requests.                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                                                            |
| `options.fetchOptions`                                                                                                                                                                                                                                                                     | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                         | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                                                             |                                                                                                                                                                                                                                                                                            |
| `options.retries`                                                                                                                                                                                                                                                                          | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                                                         | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                                                           |                                                                                                                                                                                                                                                                                            |

### Response

**Promise\<[models.SystemPoliciesResponse](../../models/systempoliciesresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| models.PermissionsErrorResponse | 401, 403                        | application/json                |
| models.PermissionsErrorResponse | 500                             | application/json                |
| models.SDKError                 | 4XX, 5XX                        | \*/\*                           |