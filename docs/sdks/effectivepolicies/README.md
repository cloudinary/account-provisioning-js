# EffectivePolicies

## Overview

### Available Operations

* [list](#list) - Get effective policies

## list

Retrieve all roles (along with their system permission policies) associated with principals, and all custom permission policies directly added to principals, all within a specified scope.

Optionally specify a principal to only include roles and policies associated with that principal.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getEffectivePolicies" method="get" path="/v2/accounts/{account_id}/permissions/policies/effective" example="EffectivePoliciesExample" -->
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
  const result = await cldProvisioning.effectivePolicies.list("prodenv", undefined, "user");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CldProvisioningCore } from "@cloudinary/account-provisioning/core.js";
import { effectivePoliciesList } from "@cloudinary/account-provisioning/funcs/effectivePoliciesList.js";

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
  const res = await effectivePoliciesList(cldProvisioning, "prodenv", undefined, "user");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("effectivePoliciesList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                          | Type                                                                                                                                                                                                                                               | Required                                                                                                                                                                                                                                           | Description                                                                                                                                                                                                                                        | Example                                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `scopeType`                                                                                                                                                                                                                                        | [models.ScopeTypeEnum](../../models/scopetypeenum.md)                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                 | Specifies the level for retrieving policies or roles, either at the account level or within product environments.                                                                                                                                  | prodenv                                                                                                                                                                                                                                            |
| `scopeId`                                                                                                                                                                                                                                          | *string*                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                 | The ID of a specific product environment where the policy is applied. This parameter is only relevant if `scope_type` is "prodenv".<br/>- <product_environment_id><br/>                                                                            |                                                                                                                                                                                                                                                    |
| `principalType`                                                                                                                                                                                                                                    | [models.PrincipalTypeEnum](../../models/principaltypeenum.md)                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                 | The type of principal you want to retrieve roles or permission policies for.                                                                                                                                                                       | user                                                                                                                                                                                                                                               |
| `principalId`                                                                                                                                                                                                                                      | *string*                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                 | The unique identifier of the principal you want to retrieve roles or permission policies for.<br/><br/>**Notes:**<br/><br/>* This parameter is mandatory if `principal_type` is provided.<br/>* Ensure the specified ID belongs to a principle of the specified type.<br/> |                                                                                                                                                                                                                                                    |
| `options`                                                                                                                                                                                                                                          | RequestOptions                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                 | Used to set various options for making HTTP requests.                                                                                                                                                                                              |                                                                                                                                                                                                                                                    |
| `options.fetchOptions`                                                                                                                                                                                                                             | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                 | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                     |                                                                                                                                                                                                                                                    |
| `options.retries`                                                                                                                                                                                                                                  | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                 | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                   |                                                                                                                                                                                                                                                    |

### Response

**Promise\<[models.EffectivePoliciesResponse](../../models/effectivepoliciesresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| models.PermissionsErrorResponse | 400, 401, 403, 404              | application/json                |
| models.PermissionsErrorResponse | 500                             | application/json                |
| models.SDKError                 | 4XX, 5XX                        | \*/\*                           |