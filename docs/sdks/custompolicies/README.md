# CustomPolicies

## Overview

### Available Operations

* [list](#list) - Get custom policies
* [create](#create) - Create custom policy
* [get](#get) - Get custom policy
* [update](#update) - Update custom policy
* [delete](#delete) - Delete custom policy

## list

Retrieve all custom permission policies defined for a specific scope. The scope can be at the account level or within a specific product environment.

**Notes:**
  * If `scope_type` isn't specified as `prodenv`, the account-level policies will be returned.

  * If `scope_type` is specified as `prodenv`, `scope_id` is required.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCustomPolicies" method="get" path="/v2/accounts/{account_id}/permissions/policies/custom" example="CustomPoliciesExample" -->
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
  const result = await cldProvisioning.customPolicies.list({
    scopeType: "prodenv",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CldProvisioningCore } from "@cloudinary/account-provisioning/core.js";
import { customPoliciesList } from "@cloudinary/account-provisioning/funcs/customPoliciesList.js";

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
  const res = await customPoliciesList(cldProvisioning, {
    scopeType: "prodenv",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customPoliciesList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.GetCustomPoliciesRequest](../../models/getcustompoliciesrequest.md)                                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CustomPoliciesResponse](../../models/custompoliciesresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| models.PermissionsErrorResponse | 401, 403                        | application/json                |
| models.PermissionsErrorResponse | 500                             | application/json                |
| models.SDKError                 | 4XX, 5XX                        | \*/\*                           |

## create

Create a new custom policy with a statement defined in Cedar. This policy specifies permissions for a principal, allowing a specific action on a designated resource, within a particular scope.

Learn more about creating a new custom policy
<https://cloudinary.com/documentation/permissions_api_guide#create_a_policy_statement>

### Example Usage: cedarErrorExample

<!-- UsageSnippet language="typescript" operationID="createCustomPolicy" method="post" path="/v2/accounts/{account_id}/permissions/policies/custom" example="cedarErrorExample" -->
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
  const result = await cldProvisioning.customPolicies.create({
    policyStatement: "permit(principal == Cloudinary::APIKey::\\\"1234\\\",action==Cloudinary::Action::\\\"read\\\",resource is Cloudinary::Folder ) when {resource.ancestor_ids.contains(\\\"asdfjkl12347890\\\")} ;\n",
    description: "Permit read access to the Clothing folder with external ID asdfjkl12347890.",
    scopeType: "prodenv",
    scopeId: "975l29lz02jt0836fhwi",
    name: "Read access to Clothing folder",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CldProvisioningCore } from "@cloudinary/account-provisioning/core.js";
import { customPoliciesCreate } from "@cloudinary/account-provisioning/funcs/customPoliciesCreate.js";

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
  const res = await customPoliciesCreate(cldProvisioning, {
    policyStatement: "permit(principal == Cloudinary::APIKey::\\\"1234\\\",action==Cloudinary::Action::\\\"read\\\",resource is Cloudinary::Folder ) when {resource.ancestor_ids.contains(\\\"asdfjkl12347890\\\")} ;\n",
    description: "Permit read access to the Clothing folder with external ID asdfjkl12347890.",
    scopeType: "prodenv",
    scopeId: "975l29lz02jt0836fhwi",
    name: "Read access to Clothing folder",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customPoliciesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: createCustomPolicyExample

<!-- UsageSnippet language="typescript" operationID="createCustomPolicy" method="post" path="/v2/accounts/{account_id}/permissions/policies/custom" example="createCustomPolicyExample" -->
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
  const result = await cldProvisioning.customPolicies.create({
    policyStatement: "permit(principal == Cloudinary::APIKey::\"1234\",action==Cloudinary::Action::\"read\",resource is Cloudinary::Folder ) when {resource.ancestor_ids.contains(\"asdfjkl12347890\")} ;",
    description: "Permit read access to the Clothing folder with external ID asdfjkl12347890.",
    scopeType: "prodenv",
    scopeId: "975l29lz02jt0836fhwi",
    name: "Read access to Clothing folder",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CldProvisioningCore } from "@cloudinary/account-provisioning/core.js";
import { customPoliciesCreate } from "@cloudinary/account-provisioning/funcs/customPoliciesCreate.js";

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
  const res = await customPoliciesCreate(cldProvisioning, {
    policyStatement: "permit(principal == Cloudinary::APIKey::\"1234\",action==Cloudinary::Action::\"read\",resource is Cloudinary::Folder ) when {resource.ancestor_ids.contains(\"asdfjkl12347890\")} ;",
    description: "Permit read access to the Clothing folder with external ID asdfjkl12347890.",
    scopeType: "prodenv",
    scopeId: "975l29lz02jt0836fhwi",
    name: "Read access to Clothing folder",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customPoliciesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: createPolicyResponse

<!-- UsageSnippet language="typescript" operationID="createCustomPolicy" method="post" path="/v2/accounts/{account_id}/permissions/policies/custom" example="createPolicyResponse" -->
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
  const result = await cldProvisioning.customPolicies.create({
    policyStatement: "permit(principal == Cloudinary::APIKey::\\\"1234\\\",action==Cloudinary::Action::\\\"read\\\",resource is Cloudinary::Folder ) when {resource.ancestor_ids.contains(\\\"asdfjkl12347890\\\")} ;\n",
    description: "Permit read access to the Clothing folder with external ID asdfjkl12347890.",
    scopeType: "prodenv",
    scopeId: "975l29lz02jt0836fhwi",
    name: "Read access to Clothing folder",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CldProvisioningCore } from "@cloudinary/account-provisioning/core.js";
import { customPoliciesCreate } from "@cloudinary/account-provisioning/funcs/customPoliciesCreate.js";

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
  const res = await customPoliciesCreate(cldProvisioning, {
    policyStatement: "permit(principal == Cloudinary::APIKey::\\\"1234\\\",action==Cloudinary::Action::\\\"read\\\",resource is Cloudinary::Folder ) when {resource.ancestor_ids.contains(\\\"asdfjkl12347890\\\")} ;\n",
    description: "Permit read access to the Clothing folder with external ID asdfjkl12347890.",
    scopeType: "prodenv",
    scopeId: "975l29lz02jt0836fhwi",
    name: "Read access to Clothing folder",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customPoliciesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: invalidFieldErrorExample

<!-- UsageSnippet language="typescript" operationID="createCustomPolicy" method="post" path="/v2/accounts/{account_id}/permissions/policies/custom" example="invalidFieldErrorExample" -->
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
  const result = await cldProvisioning.customPolicies.create({
    policyStatement: "permit(principal == Cloudinary::APIKey::\\\"1234\\\",action==Cloudinary::Action::\\\"read\\\",resource is Cloudinary::Folder ) when {resource.ancestor_ids.contains(\\\"asdfjkl12347890\\\")} ;\n",
    description: "Permit read access to the Clothing folder with external ID asdfjkl12347890.",
    scopeType: "prodenv",
    scopeId: "975l29lz02jt0836fhwi",
    name: "Read access to Clothing folder",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CldProvisioningCore } from "@cloudinary/account-provisioning/core.js";
import { customPoliciesCreate } from "@cloudinary/account-provisioning/funcs/customPoliciesCreate.js";

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
  const res = await customPoliciesCreate(cldProvisioning, {
    policyStatement: "permit(principal == Cloudinary::APIKey::\\\"1234\\\",action==Cloudinary::Action::\\\"read\\\",resource is Cloudinary::Folder ) when {resource.ancestor_ids.contains(\\\"asdfjkl12347890\\\")} ;\n",
    description: "Permit read access to the Clothing folder with external ID asdfjkl12347890.",
    scopeType: "prodenv",
    scopeId: "975l29lz02jt0836fhwi",
    name: "Read access to Clothing folder",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customPoliciesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: missingFieldsErrorExample

<!-- UsageSnippet language="typescript" operationID="createCustomPolicy" method="post" path="/v2/accounts/{account_id}/permissions/policies/custom" example="missingFieldsErrorExample" -->
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
  const result = await cldProvisioning.customPolicies.create({
    policyStatement: "permit(principal == Cloudinary::APIKey::\\\"1234\\\",action==Cloudinary::Action::\\\"read\\\",resource is Cloudinary::Folder ) when {resource.ancestor_ids.contains(\\\"asdfjkl12347890\\\")} ;\n",
    description: "Permit read access to the Clothing folder with external ID asdfjkl12347890.",
    scopeType: "prodenv",
    scopeId: "975l29lz02jt0836fhwi",
    name: "Read access to Clothing folder",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CldProvisioningCore } from "@cloudinary/account-provisioning/core.js";
import { customPoliciesCreate } from "@cloudinary/account-provisioning/funcs/customPoliciesCreate.js";

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
  const res = await customPoliciesCreate(cldProvisioning, {
    policyStatement: "permit(principal == Cloudinary::APIKey::\\\"1234\\\",action==Cloudinary::Action::\\\"read\\\",resource is Cloudinary::Folder ) when {resource.ancestor_ids.contains(\\\"asdfjkl12347890\\\")} ;\n",
    description: "Permit read access to the Clothing folder with external ID asdfjkl12347890.",
    scopeType: "prodenv",
    scopeId: "975l29lz02jt0836fhwi",
    name: "Read access to Clothing folder",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customPoliciesCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CustomPolicy](../../models/custompolicy.md)                                                                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CustomPolicyResponse](../../models/custompolicyresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| models.PermissionsErrorResponse | 400, 401, 403, 409              | application/json                |
| models.PermissionsErrorResponse | 500                             | application/json                |
| models.SDKError                 | 4XX, 5XX                        | \*/\*                           |

## get

Get a specific custom policy.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCustomPolicy" method="get" path="/v2/accounts/{account_id}/permissions/policies/custom/{policy_id}" example="CustomPolicyExample" -->
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
  const result = await cldProvisioning.customPolicies.get({
    policyId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CldProvisioningCore } from "@cloudinary/account-provisioning/core.js";
import { customPoliciesGet } from "@cloudinary/account-provisioning/funcs/customPoliciesGet.js";

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
  const res = await customPoliciesGet(cldProvisioning, {
    policyId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customPoliciesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.GetCustomPolicyRequest](../../models/getcustompolicyrequest.md)                                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CustomPolicyResponse](../../models/custompolicyresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| models.PermissionsErrorResponse | 401, 403, 404                   | application/json                |
| models.SDKError                 | 4XX, 5XX                        | \*/\*                           |

## update

Update a specific custom policy by providing the entire policy entity in the request body. Ensure the new `policy_statement` includes modifications. Existing permissions will be replaced with the new data.

*Note:* Updating a policy with an identical `policy_statement` will trigger a 409 error.


### Example Usage: cedarErrorExample

<!-- UsageSnippet language="typescript" operationID="updateCustomPolicy" method="put" path="/v2/accounts/{account_id}/permissions/policies/custom/{policy_id}" example="cedarErrorExample" -->
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
  const result = await cldProvisioning.customPolicies.update({
    policyId: "<id>",
    updateCustomPolicy: {
      policyStatement: "permit(principal == Cloudinary::APIKey::\\\"1234\\\",action==Cloudinary::Action::\\\"read\\\",resource is Cloudinary::Folder ) when {resource.ancestor_ids.contains(\\\"asdfjkl12347890\\\")} ;\n",
      description: "Permit read access to the Clothing folder with external ID asdfjkl12347890.",
      scopeType: "prodenv",
      scopeId: "975l29lz02jt0836fhwi",
      name: "Read access to Clothing folder",
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
import { customPoliciesUpdate } from "@cloudinary/account-provisioning/funcs/customPoliciesUpdate.js";

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
  const res = await customPoliciesUpdate(cldProvisioning, {
    policyId: "<id>",
    updateCustomPolicy: {
      policyStatement: "permit(principal == Cloudinary::APIKey::\\\"1234\\\",action==Cloudinary::Action::\\\"read\\\",resource is Cloudinary::Folder ) when {resource.ancestor_ids.contains(\\\"asdfjkl12347890\\\")} ;\n",
      description: "Permit read access to the Clothing folder with external ID asdfjkl12347890.",
      scopeType: "prodenv",
      scopeId: "975l29lz02jt0836fhwi",
      name: "Read access to Clothing folder",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customPoliciesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: invalidFieldErrorExample

<!-- UsageSnippet language="typescript" operationID="updateCustomPolicy" method="put" path="/v2/accounts/{account_id}/permissions/policies/custom/{policy_id}" example="invalidFieldErrorExample" -->
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
  const result = await cldProvisioning.customPolicies.update({
    policyId: "<id>",
    updateCustomPolicy: {
      policyStatement: "permit(principal == Cloudinary::APIKey::\\\"1234\\\",action==Cloudinary::Action::\\\"read\\\",resource is Cloudinary::Folder ) when {resource.ancestor_ids.contains(\\\"asdfjkl12347890\\\")} ;\n",
      description: "Permit read access to the Clothing folder with external ID asdfjkl12347890.",
      scopeType: "prodenv",
      scopeId: "975l29lz02jt0836fhwi",
      name: "Read access to Clothing folder",
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
import { customPoliciesUpdate } from "@cloudinary/account-provisioning/funcs/customPoliciesUpdate.js";

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
  const res = await customPoliciesUpdate(cldProvisioning, {
    policyId: "<id>",
    updateCustomPolicy: {
      policyStatement: "permit(principal == Cloudinary::APIKey::\\\"1234\\\",action==Cloudinary::Action::\\\"read\\\",resource is Cloudinary::Folder ) when {resource.ancestor_ids.contains(\\\"asdfjkl12347890\\\")} ;\n",
      description: "Permit read access to the Clothing folder with external ID asdfjkl12347890.",
      scopeType: "prodenv",
      scopeId: "975l29lz02jt0836fhwi",
      name: "Read access to Clothing folder",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customPoliciesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: missingFieldsUpdateErrorExample

<!-- UsageSnippet language="typescript" operationID="updateCustomPolicy" method="put" path="/v2/accounts/{account_id}/permissions/policies/custom/{policy_id}" example="missingFieldsUpdateErrorExample" -->
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
  const result = await cldProvisioning.customPolicies.update({
    policyId: "<id>",
    updateCustomPolicy: {
      policyStatement: "permit(principal == Cloudinary::APIKey::\\\"1234\\\",action==Cloudinary::Action::\\\"read\\\",resource is Cloudinary::Folder ) when {resource.ancestor_ids.contains(\\\"asdfjkl12347890\\\")} ;\n",
      description: "Permit read access to the Clothing folder with external ID asdfjkl12347890.",
      scopeType: "prodenv",
      scopeId: "975l29lz02jt0836fhwi",
      name: "Read access to Clothing folder",
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
import { customPoliciesUpdate } from "@cloudinary/account-provisioning/funcs/customPoliciesUpdate.js";

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
  const res = await customPoliciesUpdate(cldProvisioning, {
    policyId: "<id>",
    updateCustomPolicy: {
      policyStatement: "permit(principal == Cloudinary::APIKey::\\\"1234\\\",action==Cloudinary::Action::\\\"read\\\",resource is Cloudinary::Folder ) when {resource.ancestor_ids.contains(\\\"asdfjkl12347890\\\")} ;\n",
      description: "Permit read access to the Clothing folder with external ID asdfjkl12347890.",
      scopeType: "prodenv",
      scopeId: "975l29lz02jt0836fhwi",
      name: "Read access to Clothing folder",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customPoliciesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: updateCustomPolicyExample

<!-- UsageSnippet language="typescript" operationID="updateCustomPolicy" method="put" path="/v2/accounts/{account_id}/permissions/policies/custom/{policy_id}" example="updateCustomPolicyExample" -->
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
  const result = await cldProvisioning.customPolicies.update({
    policyId: "<id>",
    updateCustomPolicy: {
      policyStatement: "permit(principal == Cloudinary::APIKey::\"1234\",action==Cloudinary::Action::\"read\",resource is Cloudinary::Folder ) when {resource.ancestor_ids.contains(\"asdfjkl12347890\")} ;",
      description: "Permit read access to the Accessories folder with external ID asdfjkl12347890.",
      scopeType: "prodenv",
      scopeId: "975l29lz02jt0836fhwi",
      name: "Read access to Accessories folder",
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
import { customPoliciesUpdate } from "@cloudinary/account-provisioning/funcs/customPoliciesUpdate.js";

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
  const res = await customPoliciesUpdate(cldProvisioning, {
    policyId: "<id>",
    updateCustomPolicy: {
      policyStatement: "permit(principal == Cloudinary::APIKey::\"1234\",action==Cloudinary::Action::\"read\",resource is Cloudinary::Folder ) when {resource.ancestor_ids.contains(\"asdfjkl12347890\")} ;",
      description: "Permit read access to the Accessories folder with external ID asdfjkl12347890.",
      scopeType: "prodenv",
      scopeId: "975l29lz02jt0836fhwi",
      name: "Read access to Accessories folder",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customPoliciesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: updatePolicyResponse

<!-- UsageSnippet language="typescript" operationID="updateCustomPolicy" method="put" path="/v2/accounts/{account_id}/permissions/policies/custom/{policy_id}" example="updatePolicyResponse" -->
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
  const result = await cldProvisioning.customPolicies.update({
    policyId: "<id>",
    updateCustomPolicy: {
      policyStatement: "permit(principal == Cloudinary::APIKey::\\\"1234\\\",action==Cloudinary::Action::\\\"read\\\",resource is Cloudinary::Folder ) when {resource.ancestor_ids.contains(\\\"asdfjkl12347890\\\")} ;\n",
      description: "Permit read access to the Clothing folder with external ID asdfjkl12347890.",
      scopeType: "prodenv",
      scopeId: "975l29lz02jt0836fhwi",
      name: "Read access to Clothing folder",
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
import { customPoliciesUpdate } from "@cloudinary/account-provisioning/funcs/customPoliciesUpdate.js";

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
  const res = await customPoliciesUpdate(cldProvisioning, {
    policyId: "<id>",
    updateCustomPolicy: {
      policyStatement: "permit(principal == Cloudinary::APIKey::\\\"1234\\\",action==Cloudinary::Action::\\\"read\\\",resource is Cloudinary::Folder ) when {resource.ancestor_ids.contains(\\\"asdfjkl12347890\\\")} ;\n",
      description: "Permit read access to the Clothing folder with external ID asdfjkl12347890.",
      scopeType: "prodenv",
      scopeId: "975l29lz02jt0836fhwi",
      name: "Read access to Clothing folder",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customPoliciesUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.UpdateCustomPolicyRequest](../../models/updatecustompolicyrequest.md)                                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CustomPolicyResponse](../../models/custompolicyresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| models.PermissionsErrorResponse | 400, 401, 403, 404, 409         | application/json                |
| models.PermissionsErrorResponse | 500                             | application/json                |
| models.SDKError                 | 4XX, 5XX                        | \*/\*                           |

## delete

Delete a specific custom policy.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteCustomPolicy" method="delete" path="/v2/accounts/{account_id}/permissions/policies/custom/{policy_id}" -->
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
  await cldProvisioning.customPolicies.delete({
    policyId: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CldProvisioningCore } from "@cloudinary/account-provisioning/core.js";
import { customPoliciesDelete } from "@cloudinary/account-provisioning/funcs/customPoliciesDelete.js";

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
  const res = await customPoliciesDelete(cldProvisioning, {
    policyId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("customPoliciesDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.DeleteCustomPolicyRequest](../../models/deletecustompolicyrequest.md)                                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| models.PermissionsErrorResponse | 401, 403, 404                   | application/json                |
| models.SDKError                 | 4XX, 5XX                        | \*/\*                           |