# Principals

## Overview

View roles associated with a specified principal, and add or remove a role associated with a principal.


### Available Operations

* [listRoles](#listroles) - Get a principal's roles
* [updateRoles](#updateroles) - Assign roles to a principal
* [inspect](#inspect) - Inspect
* [inspectMultiple](#inspectmultiple) - Inspect multiple

## listRoles

Retrieve all roles associated with a specific principal.

### Example Usage: GetPrincipalRolesExample

<!-- UsageSnippet language="typescript" operationID="getPrincipalRoles" method="get" path="/v2/accounts/{account_id}/permissions/principal_roles" example="GetPrincipalRolesExample" -->
```typescript
import CldProvisioning from "@cloudinary/account-provisioning";
import { CldProvisioning } from "@cloudinary/account-provisioning";

const cldProvisioning = new CldProvisioning();

async function run() {
  const result = await cldProvisioning.principals.listRoles({
    principalType: "user",
    principalId: "<id>",
    permissionType: "global",
    managementType: "system",
    scopeType: "prodenv",
    paramKey: [
      "folder_id",
    ],
    paramValue: [
      "asdfjkl12347890",
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CldProvisioningCore } from "@cloudinary/account-provisioning/core.js";
import { principalsListRoles } from "@cloudinary/account-provisioning/funcs/principalsListRoles.js";

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
  const res = await principalsListRoles(cldProvisioning, {
    principalType: "user",
    principalId: "<id>",
    permissionType: "global",
    managementType: "system",
    scopeType: "prodenv",
    paramKey: [
      "folder_id",
    ],
    paramValue: [
      "asdfjkl12347890",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("principalsListRoles failed:", res.error);
  }
}

run();
```
### Example Usage: GetPrincipalRolesWithParamKeyValueExample

<!-- UsageSnippet language="typescript" operationID="getPrincipalRoles" method="get" path="/v2/accounts/{account_id}/permissions/principal_roles" example="GetPrincipalRolesWithParamKeyValueExample" -->
```typescript
import CldProvisioning from "@cloudinary/account-provisioning";
import { CldProvisioning } from "@cloudinary/account-provisioning";

const cldProvisioning = new CldProvisioning();

async function run() {
  const result = await cldProvisioning.principals.listRoles({
    principalType: "user",
    principalId: "<id>",
    permissionType: "global",
    managementType: "system",
    scopeType: "prodenv",
    paramKey: [
      "folder_id",
    ],
    paramValue: [
      "asdfjkl12347890",
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CldProvisioningCore } from "@cloudinary/account-provisioning/core.js";
import { principalsListRoles } from "@cloudinary/account-provisioning/funcs/principalsListRoles.js";

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
  const res = await principalsListRoles(cldProvisioning, {
    principalType: "user",
    principalId: "<id>",
    permissionType: "global",
    managementType: "system",
    scopeType: "prodenv",
    paramKey: [
      "folder_id",
    ],
    paramValue: [
      "asdfjkl12347890",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("principalsListRoles failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.GetPrincipalRolesRequest](../../models/getprincipalrolesrequest.md)                                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PrincipalRolesResponse](../../models/principalrolesresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| models.PermissionsErrorResponse | 400, 401, 404                   | application/json                |
| models.PermissionsErrorResponse | 500                             | application/json                |
| models.SDKError                 | 4XX, 5XX                        | \*/\*                           |

## updateRoles

Add or remove roles associated with a principal.

### Example Usage: InvalidOperationFieldErrorExample

<!-- UsageSnippet language="typescript" operationID="updatePrincipalRoles" method="put" path="/v2/accounts/{account_id}/permissions/principal_roles" example="InvalidOperationFieldErrorExample" -->
```typescript
import CldProvisioning from "@cloudinary/account-provisioning";
import { CldProvisioning } from "@cloudinary/account-provisioning";

const cldProvisioning = new CldProvisioning();

async function run() {
  await cldProvisioning.principals.updateRoles({
    operation: "add",
    principal: {
      type: "user",
      id: "1234abc",
    },
    roles: [
      {
        id: "marketing_content_contributor_1357fhe",
        scopeId: "975l29lz02jt0836fhwi",
        policyParameters: {},
      },
    ],
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CldProvisioningCore } from "@cloudinary/account-provisioning/core.js";
import { principalsUpdateRoles } from "@cloudinary/account-provisioning/funcs/principalsUpdateRoles.js";

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
  const res = await principalsUpdateRoles(cldProvisioning, {
    operation: "add",
    principal: {
      type: "user",
      id: "1234abc",
    },
    roles: [
      {
        id: "marketing_content_contributor_1357fhe",
        scopeId: "975l29lz02jt0836fhwi",
        policyParameters: {},
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("principalsUpdateRoles failed:", res.error);
  }
}

run();
```
### Example Usage: missingPrincipalFieldsErrorExample

<!-- UsageSnippet language="typescript" operationID="updatePrincipalRoles" method="put" path="/v2/accounts/{account_id}/permissions/principal_roles" example="missingPrincipalFieldsErrorExample" -->
```typescript
import CldProvisioning from "@cloudinary/account-provisioning";
import { CldProvisioning } from "@cloudinary/account-provisioning";

const cldProvisioning = new CldProvisioning();

async function run() {
  await cldProvisioning.principals.updateRoles({
    operation: "add",
    principal: {
      type: "user",
      id: "1234abc",
    },
    roles: [
      {
        id: "marketing_content_contributor_1357fhe",
        scopeId: "975l29lz02jt0836fhwi",
        policyParameters: {},
      },
    ],
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CldProvisioningCore } from "@cloudinary/account-provisioning/core.js";
import { principalsUpdateRoles } from "@cloudinary/account-provisioning/funcs/principalsUpdateRoles.js";

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
  const res = await principalsUpdateRoles(cldProvisioning, {
    operation: "add",
    principal: {
      type: "user",
      id: "1234abc",
    },
    roles: [
      {
        id: "marketing_content_contributor_1357fhe",
        scopeId: "975l29lz02jt0836fhwi",
        policyParameters: {},
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("principalsUpdateRoles failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.UpdatePrincipalRolesRequest](../../models/updateprincipalrolesrequest.md)                                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| models.PermissionsErrorResponse | 400, 401, 403, 404              | application/json                |
| models.SDKError                 | 4XX, 5XX                        | \*/\*                           |

## inspect

Retrieves principals and their assigned roles within a specified scope, based on query filters.

Use this endpoint to determine which users, groups, API keys, or account API keys have roles applied at:
* A specific `scope_type` ("account" or "prodenv")
* A specific `scope_id` (for product environments)
* Optional content filters (such as `folder_id`, `collection_id`, or `param_key` / `param_value`)
* Optional `principal_type` (and `principal_id`)

The response includes all principals that match the specified filters, along with the roles applied to them within that context.

This endpoint is useful when you want to:
* Audit who has access within a given scope
* Identify all principals assigned to roles for a specific folder, collection, asset, or product environment
* Retrieve role assignments dynamically based on filtering criteria


### Example Usage: InspectExampleAllFolders

<!-- UsageSnippet language="typescript" operationID="inspect" method="get" path="/v2/accounts/{account_id}/permissions/principal_roles/inspect" example="InspectExampleAllFolders" -->
```typescript
import CldProvisioning from "@cloudinary/account-provisioning";
import { CldProvisioning } from "@cloudinary/account-provisioning";

const cldProvisioning = new CldProvisioning();

async function run() {
  const result = await cldProvisioning.principals.inspect({
    scopeType: "prodenv",
    principalType: "user",
    paramKey: [
      "folder_id",
    ],
    paramValue: [
      "asdfjkl12347890",
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CldProvisioningCore } from "@cloudinary/account-provisioning/core.js";
import { principalsInspect } from "@cloudinary/account-provisioning/funcs/principalsInspect.js";

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
  const res = await principalsInspect(cldProvisioning, {
    scopeType: "prodenv",
    principalType: "user",
    paramKey: [
      "folder_id",
    ],
    paramValue: [
      "asdfjkl12347890",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("principalsInspect failed:", res.error);
  }
}

run();
```
### Example Usage: InspectExampleFolder

<!-- UsageSnippet language="typescript" operationID="inspect" method="get" path="/v2/accounts/{account_id}/permissions/principal_roles/inspect" example="InspectExampleFolder" -->
```typescript
import CldProvisioning from "@cloudinary/account-provisioning";
import { CldProvisioning } from "@cloudinary/account-provisioning";

const cldProvisioning = new CldProvisioning();

async function run() {
  const result = await cldProvisioning.principals.inspect({
    scopeType: "prodenv",
    principalType: "user",
    paramKey: [
      "folder_id",
    ],
    paramValue: [
      "asdfjkl12347890",
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CldProvisioningCore } from "@cloudinary/account-provisioning/core.js";
import { principalsInspect } from "@cloudinary/account-provisioning/funcs/principalsInspect.js";

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
  const res = await principalsInspect(cldProvisioning, {
    scopeType: "prodenv",
    principalType: "user",
    paramKey: [
      "folder_id",
    ],
    paramValue: [
      "asdfjkl12347890",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("principalsInspect failed:", res.error);
  }
}

run();
```
### Example Usage: InspectExampleProdEnv

<!-- UsageSnippet language="typescript" operationID="inspect" method="get" path="/v2/accounts/{account_id}/permissions/principal_roles/inspect" example="InspectExampleProdEnv" -->
```typescript
import CldProvisioning from "@cloudinary/account-provisioning";
import { CldProvisioning } from "@cloudinary/account-provisioning";

const cldProvisioning = new CldProvisioning();

async function run() {
  const result = await cldProvisioning.principals.inspect({
    scopeType: "prodenv",
    principalType: "user",
    paramKey: [
      "folder_id",
    ],
    paramValue: [
      "asdfjkl12347890",
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CldProvisioningCore } from "@cloudinary/account-provisioning/core.js";
import { principalsInspect } from "@cloudinary/account-provisioning/funcs/principalsInspect.js";

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
  const res = await principalsInspect(cldProvisioning, {
    scopeType: "prodenv",
    principalType: "user",
    paramKey: [
      "folder_id",
    ],
    paramValue: [
      "asdfjkl12347890",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("principalsInspect failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.InspectRequest1](../../models/inspectrequest1.md)                                                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PrincipalRolesInspectResponse](../../models/principalrolesinspectresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| models.PermissionsErrorResponse | 400, 401, 404                   | application/json                |
| models.PermissionsErrorResponse | 500                             | application/json                |
| models.SDKError                 | 4XX, 5XX                        | \*/\*                           |

## inspectMultiple

Retrieves role assignments for a specified list of principals within a shared scope and optional policy parameters.

Use this endpoint when you already know which principals you want to evaluate and want to check their role assignments in a single request.

In this request:
* You explicitly provide the `principals` array in the request body.
* All principals are evaluated against the same `scope_type`, optional `scope_id`, and optional `policy_parameters`.
* Unlike `Inspect`, this endpoint doesn't search for matching principals. It evaluates only the principals you provide.

This endpoint is useful for:
* Verify role assignments for multiple specified principals at once
* Comparing role assignments across specific users, groups, or keys
* Reducing multiple per-principal `Inspect` calls into a single request


### Example Usage: InspectMultipleRequestExample

<!-- UsageSnippet language="typescript" operationID="inspectMultiple" method="post" path="/v2/accounts/{account_id}/permissions/principal_roles/inspect" example="InspectMultipleRequestExample" -->
```typescript
import CldProvisioning from "@cloudinary/account-provisioning";
import { CldProvisioning } from "@cloudinary/account-provisioning";

const cldProvisioning = new CldProvisioning();

async function run() {
  const result = await cldProvisioning.principals.inspectMultiple({
    scopeType: "prodenv",
    scopeId: "975l29lz02jt0836fhwi",
    principals: [
      {
        type: "user",
        id: "1234abc",
      },
      {
        type: "user",
        id: "4567xyz",
      },
      {
        type: "apiKey",
        id: "a382ltieo893jhioqpg8urp",
      },
    ],
    policyParameters: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CldProvisioningCore } from "@cloudinary/account-provisioning/core.js";
import { principalsInspectMultiple } from "@cloudinary/account-provisioning/funcs/principalsInspectMultiple.js";

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
  const res = await principalsInspectMultiple(cldProvisioning, {
    scopeType: "prodenv",
    scopeId: "975l29lz02jt0836fhwi",
    principals: [
      {
        type: "user",
        id: "1234abc",
      },
      {
        type: "user",
        id: "4567xyz",
      },
      {
        type: "apiKey",
        id: "a382ltieo893jhioqpg8urp",
      },
    ],
    policyParameters: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("principalsInspectMultiple failed:", res.error);
  }
}

run();
```
### Example Usage: InspectMultipleResponseExample

<!-- UsageSnippet language="typescript" operationID="inspectMultiple" method="post" path="/v2/accounts/{account_id}/permissions/principal_roles/inspect" example="InspectMultipleResponseExample" -->
```typescript
import CldProvisioning from "@cloudinary/account-provisioning";
import { CldProvisioning } from "@cloudinary/account-provisioning";

const cldProvisioning = new CldProvisioning();

async function run() {
  const result = await cldProvisioning.principals.inspectMultiple({
    scopeType: "prodenv",
    principals: [
      {
        type: "user",
        id: "1234abc",
      },
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CldProvisioningCore } from "@cloudinary/account-provisioning/core.js";
import { principalsInspectMultiple } from "@cloudinary/account-provisioning/funcs/principalsInspectMultiple.js";

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
  const res = await principalsInspectMultiple(cldProvisioning, {
    scopeType: "prodenv",
    principals: [
      {
        type: "user",
        id: "1234abc",
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("principalsInspectMultiple failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.InspectRequest](../../models/inspectrequest.md)                                                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PrincipalRolesInspectResponse](../../models/principalrolesinspectresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| models.PermissionsErrorResponse | 400, 401, 404                   | application/json                |
| models.PermissionsErrorResponse | 500                             | application/json                |
| models.SDKError                 | 4XX, 5XX                        | \*/\*                           |