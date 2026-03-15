# Roles

## Overview

All roles include one or more predefined **system policies**, and can be applied to principals to enforce these policies.

You can **manage custom roles**, where you select the system policies.

You can **view system roles**, which contain a fixed set of system policies and are provided by Cloudinary.


### Available Operations

* [list](#list) - Get roles
* [create](#create) - Create custom role
* [get](#get) - Get role
* [update](#update) - Update custom role
* [delete](#delete) - Delete custom role
* [listPrincipals](#listprincipals) - Get a role's principals
* [updatePrincipals](#updateprincipals) - Assign principals to a role

## list

Retrieve all system and custom roles of a specific `permission_type` (global or content-specific). Optionally filter by `scope_type`, `management_type`, and `policy_parameters`.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getRoles" method="get" path="/v2/accounts/{account_id}/permissions/roles" example="GetRolesExample" -->
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
  const result = await cldProvisioning.roles.list("global", "prodenv", "system");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CldProvisioningCore } from "@cloudinary/account-provisioning/core.js";
import { rolesList } from "@cloudinary/account-provisioning/funcs/rolesList.js";

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
  const res = await rolesList(cldProvisioning, "global", "prodenv", "system");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("rolesList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                                                              | Type                                                                                                                                                                                                                                                                                                                                   | Required                                                                                                                                                                                                                                                                                                                               | Description                                                                                                                                                                                                                                                                                                                            | Example                                                                                                                                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `permissionType`                                                                                                                                                                                                                                                                                                                       | [models.PermissionTypeEnum](../../models/permissiontypeenum.md)                                                                                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                     | Specifies whether to retrieve roles whose permissions apply globally across all contexts within the scope (i.e., security settings for the account, or all folders in a product environment), or specifically to designated content instances (i.e., folder with external ID "fg3841spr").                                             | global                                                                                                                                                                                                                                                                                                                                 |
| `scopeType`                                                                                                                                                                                                                                                                                                                            | [models.ScopeTypeEnum](../../models/scopetypeenum.md)                                                                                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                     | Specifies the level for retrieving policies or roles, either at the account level or within product environments.                                                                                                                                                                                                                      | prodenv                                                                                                                                                                                                                                                                                                                                |
| `managementType`                                                                                                                                                                                                                                                                                                                       | [models.ManagementTypeEnum](../../models/managementtypeenum.md)                                                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                     | Specifies whether the role's policies are managed by Cloudinary (`system`) or by the user (`custom`).                                                                                                                                                                                                                                  | system                                                                                                                                                                                                                                                                                                                                 |
| `policyParameters`                                                                                                                                                                                                                                                                                                                     | *string*[]                                                                                                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                     | For roles with `permission_type` set to `content`, this defines the type of content the role's policies apply to:<br/>- The content type can be: `folder_id` or `collection_id`.<br/>- When assigning the role, provide the instance, e.g. `{"folder_id":"asdfjkl12347890"}`. This specification is passed to the `policy_statement` (Cedar).<br/> |                                                                                                                                                                                                                                                                                                                                        |
| `options`                                                                                                                                                                                                                                                                                                                              | RequestOptions                                                                                                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                     | Used to set various options for making HTTP requests.                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                        |
| `options.fetchOptions`                                                                                                                                                                                                                                                                                                                 | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                     | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                                                                                                         |                                                                                                                                                                                                                                                                                                                                        |
| `options.retries`                                                                                                                                                                                                                                                                                                                      | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                     | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                                                                                        |

### Response

**Promise\<[models.RolesResponse](../../models/rolesresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| models.PermissionsErrorResponse | 401, 403                        | application/json                |
| models.PermissionsErrorResponse | 500                             | application/json                |
| models.SDKError                 | 4XX, 5XX                        | \*/\*                           |

## create

Create a new custom role.

### Example Usage: createAcctRoleExample

<!-- UsageSnippet language="typescript" operationID="createRole" method="post" path="/v2/accounts/{account_id}/permissions/roles" example="createAcctRoleExample" -->
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
  const result = await cldProvisioning.roles.create({
    id: "sensitive_account_details_manager_88825hl",
    permissionType: "global",
    scopeType: "account",
    name: "Sensitive account details manager",
    description: "Responsible for managing users and account security.",
    systemPolicyIds: [
      "cld::global::users_and_groups::manage",
      "cld::policy::global::account_security::manage",
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
import { rolesCreate } from "@cloudinary/account-provisioning/funcs/rolesCreate.js";

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
  const res = await rolesCreate(cldProvisioning, {
    id: "sensitive_account_details_manager_88825hl",
    permissionType: "global",
    scopeType: "account",
    name: "Sensitive account details manager",
    description: "Responsible for managing users and account security.",
    systemPolicyIds: [
      "cld::global::users_and_groups::manage",
      "cld::policy::global::account_security::manage",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("rolesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: createAcctRoleResponseExample

<!-- UsageSnippet language="typescript" operationID="createRole" method="post" path="/v2/accounts/{account_id}/permissions/roles" example="createAcctRoleResponseExample" -->
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
  const result = await cldProvisioning.roles.create({
    id: "upload_manager_12334565",
    permissionType: "global",
    scopeType: "prodenv",
    name: "Upload manager",
    description: "Responsible for managing upload presets and uploading new assets.",
    systemPolicyIds: [
      "cld::policy::global::upload_presets::manage",
      "cld::policy::global::folder_and_asset_management::create_asset",
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
import { rolesCreate } from "@cloudinary/account-provisioning/funcs/rolesCreate.js";

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
  const res = await rolesCreate(cldProvisioning, {
    id: "upload_manager_12334565",
    permissionType: "global",
    scopeType: "prodenv",
    name: "Upload manager",
    description: "Responsible for managing upload presets and uploading new assets.",
    systemPolicyIds: [
      "cld::policy::global::upload_presets::manage",
      "cld::policy::global::folder_and_asset_management::create_asset",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("rolesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: createContentRoleExample

<!-- UsageSnippet language="typescript" operationID="createRole" method="post" path="/v2/accounts/{account_id}/permissions/roles" example="createContentRoleExample" -->
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
  const result = await cldProvisioning.roles.create({
    id: "marketing_content_contributor_1357fhe",
    permissionType: "content",
    scopeType: "prodenv",
    name: "Marketing content contributor",
    description: "View all assets in selected folders and contribute to those folders, without permission to download.",
    systemPolicyIds: [
      "cld::policy::content::folder::view_download",
      "cld::policy::content::folder::add_assets",
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
import { rolesCreate } from "@cloudinary/account-provisioning/funcs/rolesCreate.js";

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
  const res = await rolesCreate(cldProvisioning, {
    id: "marketing_content_contributor_1357fhe",
    permissionType: "content",
    scopeType: "prodenv",
    name: "Marketing content contributor",
    description: "View all assets in selected folders and contribute to those folders, without permission to download.",
    systemPolicyIds: [
      "cld::policy::content::folder::view_download",
      "cld::policy::content::folder::add_assets",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("rolesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: createContentRoleResponseExample

<!-- UsageSnippet language="typescript" operationID="createRole" method="post" path="/v2/accounts/{account_id}/permissions/roles" example="createContentRoleResponseExample" -->
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
  const result = await cldProvisioning.roles.create({
    id: "upload_manager_12334565",
    permissionType: "global",
    scopeType: "prodenv",
    name: "Upload manager",
    description: "Responsible for managing upload presets and uploading new assets.",
    systemPolicyIds: [
      "cld::policy::global::upload_presets::manage",
      "cld::policy::global::folder_and_asset_management::create_asset",
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
import { rolesCreate } from "@cloudinary/account-provisioning/funcs/rolesCreate.js";

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
  const res = await rolesCreate(cldProvisioning, {
    id: "upload_manager_12334565",
    permissionType: "global",
    scopeType: "prodenv",
    name: "Upload manager",
    description: "Responsible for managing upload presets and uploading new assets.",
    systemPolicyIds: [
      "cld::policy::global::upload_presets::manage",
      "cld::policy::global::folder_and_asset_management::create_asset",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("rolesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: createGlobalRoleExample

<!-- UsageSnippet language="typescript" operationID="createRole" method="post" path="/v2/accounts/{account_id}/permissions/roles" example="createGlobalRoleExample" -->
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
  const result = await cldProvisioning.roles.create({
    id: "upload_manager_12334565",
    permissionType: "global",
    scopeType: "prodenv",
    name: "Upload manager",
    description: "Responsible for managing uploads and uploading new assets.",
    systemPolicyIds: [
      "cld::policy::global::upload_presets::manage",
      "cld::policy::global::folder_and_asset_management::create_asset",
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
import { rolesCreate } from "@cloudinary/account-provisioning/funcs/rolesCreate.js";

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
  const res = await rolesCreate(cldProvisioning, {
    id: "upload_manager_12334565",
    permissionType: "global",
    scopeType: "prodenv",
    name: "Upload manager",
    description: "Responsible for managing uploads and uploading new assets.",
    systemPolicyIds: [
      "cld::policy::global::upload_presets::manage",
      "cld::policy::global::folder_and_asset_management::create_asset",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("rolesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: createGlobalRoleResponseExample

<!-- UsageSnippet language="typescript" operationID="createRole" method="post" path="/v2/accounts/{account_id}/permissions/roles" example="createGlobalRoleResponseExample" -->
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
  const result = await cldProvisioning.roles.create({
    id: "upload_manager_12334565",
    permissionType: "global",
    scopeType: "prodenv",
    name: "Upload manager",
    description: "Responsible for managing upload presets and uploading new assets.",
    systemPolicyIds: [
      "cld::policy::global::upload_presets::manage",
      "cld::policy::global::folder_and_asset_management::create_asset",
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
import { rolesCreate } from "@cloudinary/account-provisioning/funcs/rolesCreate.js";

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
  const res = await rolesCreate(cldProvisioning, {
    id: "upload_manager_12334565",
    permissionType: "global",
    scopeType: "prodenv",
    name: "Upload manager",
    description: "Responsible for managing upload presets and uploading new assets.",
    systemPolicyIds: [
      "cld::policy::global::upload_presets::manage",
      "cld::policy::global::folder_and_asset_management::create_asset",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("rolesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: invalidFieldErrorExample

<!-- UsageSnippet language="typescript" operationID="createRole" method="post" path="/v2/accounts/{account_id}/permissions/roles" example="invalidFieldErrorExample" -->
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
  const result = await cldProvisioning.roles.create({
    id: "upload_manager_12334565",
    permissionType: "global",
    scopeType: "prodenv",
    name: "Upload manager",
    description: "Responsible for managing upload presets and uploading new assets.",
    systemPolicyIds: [
      "cld::policy::global::upload_presets::manage",
      "cld::policy::global::folder_and_asset_management::create_asset",
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
import { rolesCreate } from "@cloudinary/account-provisioning/funcs/rolesCreate.js";

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
  const res = await rolesCreate(cldProvisioning, {
    id: "upload_manager_12334565",
    permissionType: "global",
    scopeType: "prodenv",
    name: "Upload manager",
    description: "Responsible for managing upload presets and uploading new assets.",
    systemPolicyIds: [
      "cld::policy::global::upload_presets::manage",
      "cld::policy::global::folder_and_asset_management::create_asset",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("rolesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: missingFieldsErrorExample

<!-- UsageSnippet language="typescript" operationID="createRole" method="post" path="/v2/accounts/{account_id}/permissions/roles" example="missingFieldsErrorExample" -->
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
  const result = await cldProvisioning.roles.create({
    id: "upload_manager_12334565",
    permissionType: "global",
    scopeType: "prodenv",
    name: "Upload manager",
    description: "Responsible for managing upload presets and uploading new assets.",
    systemPolicyIds: [
      "cld::policy::global::upload_presets::manage",
      "cld::policy::global::folder_and_asset_management::create_asset",
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
import { rolesCreate } from "@cloudinary/account-provisioning/funcs/rolesCreate.js";

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
  const res = await rolesCreate(cldProvisioning, {
    id: "upload_manager_12334565",
    permissionType: "global",
    scopeType: "prodenv",
    name: "Upload manager",
    description: "Responsible for managing upload presets and uploading new assets.",
    systemPolicyIds: [
      "cld::policy::global::upload_presets::manage",
      "cld::policy::global::folder_and_asset_management::create_asset",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("rolesCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CreateRole](../../models/createrole.md)                                                                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.RoleResponse](../../models/roleresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| models.PermissionsErrorResponse | 400, 401, 403, 409              | application/json                |
| models.PermissionsErrorResponse | 500                             | application/json                |
| models.SDKError                 | 4XX, 5XX                        | \*/\*                           |

## get

Get a specific system or custom role.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getRole" method="get" path="/v2/accounts/{account_id}/permissions/roles/{role_id}" example="GetRoleExample" -->
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
  const result = await cldProvisioning.roles.get({
    roleId: "<id>",
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
import { rolesGet } from "@cloudinary/account-provisioning/funcs/rolesGet.js";

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
  const res = await rolesGet(cldProvisioning, {
    roleId: "<id>",
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
    console.log("rolesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.GetRoleRequest](../../models/getrolerequest.md)                                                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.RoleResponse](../../models/roleresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| models.PermissionsErrorResponse | 401, 403, 404                   | application/json                |
| models.SDKError                 | 4XX, 5XX                        | \*/\*                           |

## update

Update a specific custom role by providing all relevant details, including those you want to keep as-is.

*Note:* Updating a role with a name that already exists will trigger a 409 error.


### Example Usage: invalidPolicyIDFieldErrorExample

<!-- UsageSnippet language="typescript" operationID="updateRole" method="put" path="/v2/accounts/{account_id}/permissions/roles/{role_id}" example="invalidPolicyIDFieldErrorExample" -->
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
  const result = await cldProvisioning.roles.update("<id>", {
    name: "Upload manager",
    description: "Responsible for managing upload presets and uploading new assets.",
    systemPolicyIds: [
      "cld::policy::global::upload_presets::manage",
      "cld::policy::global::folder_and_asset_management::create_asset",
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
import { rolesUpdate } from "@cloudinary/account-provisioning/funcs/rolesUpdate.js";

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
  const res = await rolesUpdate(cldProvisioning, "<id>", {
    name: "Upload manager",
    description: "Responsible for managing upload presets and uploading new assets.",
    systemPolicyIds: [
      "cld::policy::global::upload_presets::manage",
      "cld::policy::global::folder_and_asset_management::create_asset",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("rolesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: missingFieldsErrorExample

<!-- UsageSnippet language="typescript" operationID="updateRole" method="put" path="/v2/accounts/{account_id}/permissions/roles/{role_id}" example="missingFieldsErrorExample" -->
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
  const result = await cldProvisioning.roles.update("<id>", {
    name: "Upload manager",
    description: "Responsible for managing upload presets and uploading new assets.",
    systemPolicyIds: [
      "cld::policy::global::upload_presets::manage",
      "cld::policy::global::folder_and_asset_management::create_asset",
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
import { rolesUpdate } from "@cloudinary/account-provisioning/funcs/rolesUpdate.js";

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
  const res = await rolesUpdate(cldProvisioning, "<id>", {
    name: "Upload manager",
    description: "Responsible for managing upload presets and uploading new assets.",
    systemPolicyIds: [
      "cld::policy::global::upload_presets::manage",
      "cld::policy::global::folder_and_asset_management::create_asset",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("rolesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: updatePolicyResponse

<!-- UsageSnippet language="typescript" operationID="updateRole" method="put" path="/v2/accounts/{account_id}/permissions/roles/{role_id}" example="updatePolicyResponse" -->
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
  const result = await cldProvisioning.roles.update("<id>", {
    name: "Upload manager",
    description: "Responsible for managing upload presets and uploading new assets.",
    systemPolicyIds: [
      "cld::policy::global::upload_presets::manage",
      "cld::policy::global::folder_and_asset_management::create_asset",
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
import { rolesUpdate } from "@cloudinary/account-provisioning/funcs/rolesUpdate.js";

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
  const res = await rolesUpdate(cldProvisioning, "<id>", {
    name: "Upload manager",
    description: "Responsible for managing upload presets and uploading new assets.",
    systemPolicyIds: [
      "cld::policy::global::upload_presets::manage",
      "cld::policy::global::folder_and_asset_management::create_asset",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("rolesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: updateRoleExample

<!-- UsageSnippet language="typescript" operationID="updateRole" method="put" path="/v2/accounts/{account_id}/permissions/roles/{role_id}" example="updateRoleExample" -->
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
  const result = await cldProvisioning.roles.update("<id>", {
    name: "Upload manager",
    description: "Responsible for managing uploads and uploading new assets.",
    systemPolicyIds: [
      "cld::policy::global::upload_presets::manage",
      "cld::policy::global::folder_and_asset_management::create_asset",
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
import { rolesUpdate } from "@cloudinary/account-provisioning/funcs/rolesUpdate.js";

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
  const res = await rolesUpdate(cldProvisioning, "<id>", {
    name: "Upload manager",
    description: "Responsible for managing uploads and uploading new assets.",
    systemPolicyIds: [
      "cld::policy::global::upload_presets::manage",
      "cld::policy::global::folder_and_asset_management::create_asset",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("rolesUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `roleId`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | A unique identifier for the role.                                                                                                                                              |
| `role`                                                                                                                                                                         | [models.Role](../../models/role.md)                                                                                                                                            | :heavy_check_mark:                                                                                                                                                             | Role details                                                                                                                                                                   |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.RoleResponse](../../models/roleresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| models.PermissionsErrorResponse | 400, 401, 403, 404, 409         | application/json                |
| models.PermissionsErrorResponse | 500                             | application/json                |
| models.SDKError                 | 4XX, 5XX                        | \*/\*                           |

## delete

Delete a specific custom role.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteRole" method="delete" path="/v2/accounts/{account_id}/permissions/roles/{role_id}" -->
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
  await cldProvisioning.roles.delete("<id>");


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CldProvisioningCore } from "@cloudinary/account-provisioning/core.js";
import { rolesDelete } from "@cloudinary/account-provisioning/funcs/rolesDelete.js";

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
  const res = await rolesDelete(cldProvisioning, "<id>");
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("rolesDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                               | Type                                                                                                                                                                                                                                                                                                    | Required                                                                                                                                                                                                                                                                                                | Description                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `roleId`                                                                                                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                                                                                      | A unique identifier for the role.                                                                                                                                                                                                                                                                       |
| `force`                                                                                                                                                                                                                                                                                                 | *boolean*                                                                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                                                      | Determines whether the role should be deleted when it has associated principals.<br/>- `true`: Deletes the role even if it has associated principals.<br/>- `false` (default): Prevents deletion if the role has associated principals. You must manually unassociate the principals before deleting the role.<br/> |
| `options`                                                                                                                                                                                                                                                                                               | RequestOptions                                                                                                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                                                                      | Used to set various options for making HTTP requests.                                                                                                                                                                                                                                                   |
| `options.fetchOptions`                                                                                                                                                                                                                                                                                  | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                                                                      | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                                                                          |
| `options.retries`                                                                                                                                                                                                                                                                                       | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                                      | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                                                                        |

### Response

**Promise\<void\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| models.PermissionsErrorResponse | 401, 403, 404                   | application/json                |
| models.SDKError                 | 4XX, 5XX                        | \*/\*                           |

## listPrincipals

Retrieve all principals associated with a specific role.

### Example Usage: GetRolePrincipalsExample

<!-- UsageSnippet language="typescript" operationID="getRolePrincipals" method="get" path="/v2/accounts/{account_id}/permissions/roles/{role_id}/principals" example="GetRolePrincipalsExample" -->
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
  const result = await cldProvisioning.roles.listPrincipals({
    roleId: "<id>",
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
import { rolesListPrincipals } from "@cloudinary/account-provisioning/funcs/rolesListPrincipals.js";

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
  const res = await rolesListPrincipals(cldProvisioning, {
    roleId: "<id>",
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
    console.log("rolesListPrincipals failed:", res.error);
  }
}

run();
```
### Example Usage: GetRolePrincipalsWithParamKeyValueExample

<!-- UsageSnippet language="typescript" operationID="getRolePrincipals" method="get" path="/v2/accounts/{account_id}/permissions/roles/{role_id}/principals" example="GetRolePrincipalsWithParamKeyValueExample" -->
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
  const result = await cldProvisioning.roles.listPrincipals({
    roleId: "<id>",
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
import { rolesListPrincipals } from "@cloudinary/account-provisioning/funcs/rolesListPrincipals.js";

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
  const res = await rolesListPrincipals(cldProvisioning, {
    roleId: "<id>",
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
    console.log("rolesListPrincipals failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.GetRolePrincipalsRequest](../../models/getroleprincipalsrequest.md)                                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PrincipalsResponse](../../models/principalsresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| models.PermissionsErrorResponse | 401, 403, 404                   | application/json                |
| models.SDKError                 | 4XX, 5XX                        | \*/\*                           |

## updatePrincipals

Add or remove principals associated with a role.

### Example Usage: invalidOperationFieldErrorExample

<!-- UsageSnippet language="typescript" operationID="updateRolePrincipals" method="put" path="/v2/accounts/{account_id}/permissions/roles/{role_id}/principals" example="invalidOperationFieldErrorExample" -->
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
  await cldProvisioning.roles.updatePrincipals("<id>", {
    operation: "add",
    principals: [
      {
        principalType: "user",
        principalId: "1234abc",
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
import { rolesUpdatePrincipals } from "@cloudinary/account-provisioning/funcs/rolesUpdatePrincipals.js";

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
  const res = await rolesUpdatePrincipals(cldProvisioning, "<id>", {
    operation: "add",
    principals: [
      {
        principalType: "user",
        principalId: "1234abc",
        scopeId: "975l29lz02jt0836fhwi",
        policyParameters: {},
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("rolesUpdatePrincipals failed:", res.error);
  }
}

run();
```
### Example Usage: missingFieldsErrorExample

<!-- UsageSnippet language="typescript" operationID="updateRolePrincipals" method="put" path="/v2/accounts/{account_id}/permissions/roles/{role_id}/principals" example="missingFieldsErrorExample" -->
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
  await cldProvisioning.roles.updatePrincipals("<id>", {
    operation: "add",
    principals: [
      {
        principalType: "user",
        principalId: "1234abc",
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
import { rolesUpdatePrincipals } from "@cloudinary/account-provisioning/funcs/rolesUpdatePrincipals.js";

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
  const res = await rolesUpdatePrincipals(cldProvisioning, "<id>", {
    operation: "add",
    principals: [
      {
        principalType: "user",
        principalId: "1234abc",
        scopeId: "975l29lz02jt0836fhwi",
        policyParameters: {},
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("rolesUpdatePrincipals failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `roleId`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | A unique identifier for the role.                                                                                                                                              |
| `updateRolePrincipalsRequest`                                                                                                                                                  | [models.UpdateRolePrincipalsRequest](../../models/updateroleprincipalsrequest.md)                                                                                              | :heavy_check_mark:                                                                                                                                                             | Principals details.                                                                                                                                                            |
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