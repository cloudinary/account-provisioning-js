# Users

## Overview

Manage the users for your account.


Learn more about users management.
<https://cloudinary.com/documentation/provisioning_api#users>

### Available Operations

* [list](#list) - Get users
* [create](#create) - Create user
* [get](#get) - Get user
* [update](#update) - Update user
* [delete](#delete) - Delete user
* [getGroups](#getgroups) - Get user groups
* [listSubAccounts](#listsubaccounts) - Get user sub-accounts

## list

Returns an array of all users in the account, or if conditions are specified, returns the relevant users.


Learn more about retrieving users.
<https://cloudinary.com/documentation/provisioning_api#get_users>

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getUsers" method="get" path="/v1_1/provisioning/accounts/{account_id}/users" example="Users" -->
```typescript
import { CldProvisioning } from "@cloudinary/account-provisioning";

const cldProvisioning = new CldProvisioning();

async function run() {
  const result = await cldProvisioning.users.list({
    pending: false,
    prefix: "john",
    from: new Date("2023-01-01T00:00:00Z"),
    to: new Date("2024-12-31T00:00:00Z"),
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CldProvisioningCore } from "@cloudinary/account-provisioning/core.js";
import { usersList } from "@cloudinary/account-provisioning/funcs/users-list.js";

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
  const res = await usersList(cldProvisioning, {
    pending: false,
    prefix: "john",
    from: new Date("2023-01-01T00:00:00Z"),
    to: new Date("2024-12-31T00:00:00Z"),
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("usersList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.GetUsersRequest](../../models/get-users-request.md)                                                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.UsersResponse](../../models/users-response.md)\>**

### Errors

| Error Type           | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| models.ErrorResponse | 401, 404, 420, 429   | application/json     |
| models.SDKError      | 4XX, 5XX             | \*/\*                |

## create

Create a new user.

Learn more about creating users.
<https://cloudinary.com/documentation/provisioning_api#create_user>

### Example Usage: CreateUserExample

<!-- UsageSnippet language="typescript" operationID="createUser" method="post" path="/v1_1/provisioning/accounts/{account_id}/users" example="CreateUserExample" -->
```typescript
import { CldProvisioning } from "@cloudinary/account-provisioning";

const cldProvisioning = new CldProvisioning();

async function run() {
  const result = await cldProvisioning.users.create({
    name: "jenny_bar",
    email: "jenny_bar@example.com",
    role: "master_admin",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CldProvisioningCore } from "@cloudinary/account-provisioning/core.js";
import { usersCreate } from "@cloudinary/account-provisioning/funcs/users-create.js";

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
  const res = await usersCreate(cldProvisioning, {
    name: "jenny_bar",
    email: "jenny_bar@example.com",
    role: "master_admin",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("usersCreate failed:", res.error);
  }
}

run();
```
### Example Usage: UserResponseExample

<!-- UsageSnippet language="typescript" operationID="createUser" method="post" path="/v1_1/provisioning/accounts/{account_id}/users" example="UserResponseExample" -->
```typescript
import { CldProvisioning } from "@cloudinary/account-provisioning";

const cldProvisioning = new CldProvisioning();

async function run() {
  const result = await cldProvisioning.users.create({
    name: "John",
    email: "john@example.com",
    role: "technical_admin",
    enabled: true,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CldProvisioningCore } from "@cloudinary/account-provisioning/core.js";
import { usersCreate } from "@cloudinary/account-provisioning/funcs/users-create.js";

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
  const res = await usersCreate(cldProvisioning, {
    name: "John",
    email: "john@example.com",
    role: "technical_admin",
    enabled: true,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("usersCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CreateUserRequestBody](../../models/create-user-request-body.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.User](../../models/user.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| models.ErrorResponse              | 400, 401, 403, 404, 409, 420, 429 | application/json                  |
| models.SDKError                   | 4XX, 5XX                          | \*/\*                             |

## get

Retrieve a specific user.

Learn more about retrieving a specific user.
<https://cloudinary.com/documentation/provisioning_api#get_user>

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getUser" method="get" path="/v1_1/provisioning/accounts/{account_id}/users/{user_id}" example="UserResponseExample" -->
```typescript
import { CldProvisioning } from "@cloudinary/account-provisioning";

const cldProvisioning = new CldProvisioning();

async function run() {
  const result = await cldProvisioning.users.get({
    userId: "0abed8dfcc039ea05e2a1d494fd442",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CldProvisioningCore } from "@cloudinary/account-provisioning/core.js";
import { usersGet } from "@cloudinary/account-provisioning/funcs/users-get.js";

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
  const res = await usersGet(cldProvisioning, {
    userId: "0abed8dfcc039ea05e2a1d494fd442",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("usersGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.GetUserRequest](../../models/get-user-request.md)                                                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.User](../../models/user.md)\>**

### Errors

| Error Type           | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| models.ErrorResponse | 401, 404, 420, 429   | application/json     |
| models.SDKError      | 4XX, 5XX             | \*/\*                |

## update

Update the details of a user.

Learn more about updating a specific user.
<https://cloudinary.com/documentation/provisioning_api#update_user>

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateUser" method="put" path="/v1_1/provisioning/accounts/{account_id}/users/{user_id}" example="UserJohn" -->
```typescript
import { CldProvisioning } from "@cloudinary/account-provisioning";

const cldProvisioning = new CldProvisioning();

async function run() {
  const result = await cldProvisioning.users.update({
    userId: "0abed8dfcc039ea05e2a1d494fd442",
    userRequest: {
      name: "John",
      email: "john@example.com",
      role: "technical_admin",
      enabled: true,
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
import { usersUpdate } from "@cloudinary/account-provisioning/funcs/users-update.js";

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
  const res = await usersUpdate(cldProvisioning, {
    userId: "0abed8dfcc039ea05e2a1d494fd442",
    userRequest: {
      name: "John",
      email: "john@example.com",
      role: "technical_admin",
      enabled: true,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("usersUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.UpdateUserRequest](../../models/update-user-request.md)                                                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.User](../../models/user.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| models.ErrorResponse              | 400, 401, 403, 404, 409, 420, 429 | application/json                  |
| models.SDKError                   | 4XX, 5XX                          | \*/\*                             |

## delete

Delete a specific user.

Learn more about deleting a specific user.
<https://cloudinary.com/documentation/provisioning_api#delete_user>

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteUser" method="delete" path="/v1_1/provisioning/accounts/{account_id}/users/{user_id}" -->
```typescript
import { CldProvisioning } from "@cloudinary/account-provisioning";

const cldProvisioning = new CldProvisioning();

async function run() {
  const result = await cldProvisioning.users.delete({
    userId: "0abed8dfcc039ea05e2a1d494fd442",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CldProvisioningCore } from "@cloudinary/account-provisioning/core.js";
import { usersDelete } from "@cloudinary/account-provisioning/funcs/users-delete.js";

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
  const res = await usersDelete(cldProvisioning, {
    userId: "0abed8dfcc039ea05e2a1d494fd442",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("usersDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.DeleteUserRequest](../../models/delete-user-request.md)                                                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SuccessResponse](../../models/success-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| models.ErrorResponse         | 400, 401, 403, 404, 420, 429 | application/json             |
| models.SDKError              | 4XX, 5XX                     | \*/\*                        |

## getGroups

Retrieve the groups that a specific user belongs to.

Learn more about retrieving user groups.
<https://cloudinary.com/documentation/provisioning_api#get_users_groups>

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getGroupsForUser" method="get" path="/v1_1/provisioning/accounts/{account_id}/users/{user_id}/groups" example="UserGroupsList" -->
```typescript
import { CldProvisioning } from "@cloudinary/account-provisioning";

const cldProvisioning = new CldProvisioning();

async function run() {
  const result = await cldProvisioning.users.getGroups({
    userId: "0abed8dfcc039ea05e2a1d494fd442",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CldProvisioningCore } from "@cloudinary/account-provisioning/core.js";
import { usersGetGroups } from "@cloudinary/account-provisioning/funcs/users-get-groups.js";

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
  const res = await usersGetGroups(cldProvisioning, {
    userId: "0abed8dfcc039ea05e2a1d494fd442",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("usersGetGroups failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.GetGroupsForUserRequest](../../models/get-groups-for-user-request.md)                                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.UserGroupsListResponse](../../models/user-groups-list-response.md)\>**

### Errors

| Error Type           | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| models.ErrorResponse | 401, 404, 420, 429   | application/json     |
| models.SDKError      | 4XX, 5XX             | \*/\*                |

## listSubAccounts

Retrieve the product environments (sub-accounts) that a specific user has access to.

Learn more about retrieving user sub-accounts.
<https://cloudinary.com/documentation/provisioning_api#get_user_sub_accounts>

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getSubAccountsForUser" method="get" path="/v1_1/provisioning/accounts/{account_id}/users/{user_id}/sub_accounts" example="UserSubAccounts" -->
```typescript
import { CldProvisioning } from "@cloudinary/account-provisioning";

const cldProvisioning = new CldProvisioning();

async function run() {
  const result = await cldProvisioning.users.listSubAccounts({
    userId: "0abed8dfcc039ea05e2a1d494fd442",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CldProvisioningCore } from "@cloudinary/account-provisioning/core.js";
import { usersListSubAccounts } from "@cloudinary/account-provisioning/funcs/users-list-sub-accounts.js";

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
  const res = await usersListSubAccounts(cldProvisioning, {
    userId: "0abed8dfcc039ea05e2a1d494fd442",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("usersListSubAccounts failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.GetSubAccountsForUserRequest](../../models/get-sub-accounts-for-user-request.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.UserSubAccountsResponse](../../models/user-sub-accounts-response.md)\>**

### Errors

| Error Type           | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| models.ErrorResponse | 401, 404, 420, 429   | application/json     |
| models.SDKError      | 4XX, 5XX             | \*/\*                |