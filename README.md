# Cloudinary Account Provisioning JavaScript SDK

[![npm version](https://img.shields.io/npm/v/@cloudinary/account-provisioning)](https://www.npmjs.com/package/@cloudinary/account-provisioning)
[![npm downloads](https://img.shields.io/npm/dm/@cloudinary/account-provisioning)](https://www.npmjs.com/package/@cloudinary/account-provisioning)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Developer-friendly & type-safe TypeScript SDK specifically catered to leverage the *Cloudinary Account Provisioning* API.

<!-- Start Summary [summary] -->
## Summary

Cloudinary Account Provisioning API: Accounts with provisioning API access can create and manage their **product environments**, **users** and **user groups** using the RESTful Provisioning API.

Provisioning API access is available [upon request](https://cloudinary.com/contact?plan=enterprise) for accounts on an [Enterprise plan](https://cloudinary.com/pricing#pricing-enterprise).

The API uses **Basic Authentication** over HTTPS. Your **Account API Key** and **Account API Secret** (previously referred to as **Provisioning API keys**) are used for the authentication. These credentials (as well as your ACCOUNT_ID) are located in the [Cloudinary Console](https://console.cloudinary.com/pm) under **Settings > Account API Keys**.

The Provisioning API has dedicated SDKs for the following languages:

* [JavaScript](https://github.com/cloudinary/account-provisioning-js)
* [PHP](https://github.com/cloudinary/account-provisioning-php)
* [Java](https://github.com/cloudinary/account-provisioning-java)

Useful links:
* [Provisioning API reference (Classic)](https://cloudinary.com/documentation/provisioning_api_1) (includes SDKs for additional languages)

Accounts with Permissions API access can assign roles, made up of system policies, to control what principals (users, groups, and API keys) can do across the Cloudinary account and product environments. For more information about Cloudinary roles and permissions, see the [Role-based permissions](permissions_overview) guide.

Permissions API access is available [upon request](https://cloudinary.com/contact?plan=enterprise) for accounts on an [Enterprise plan](https://cloudinary.com/pricing#pricing-enterprise).

The API uses **Basic Authentication** over HTTPS. Your **Account API Key** and **Account API Secret** (previously referred to as **Provisioning API keys**) are used for the authentication. These credentials (as well as your ACCOUNT_ID) are located in the [Cloudinary Console](https://console.cloudinary.com/app/settings/account-api-keys) under **Settings > Account API Keys**.

_**Important:**_

_Cloudinary's **Roles and Permissions Management** is now available as a **Beta**. This is an early stage release, and while it's functional and ready for real-world testing, it's subject to change as we continue refining the experience based on what we learn, including your feedback.
During the Beta period, core functionality is considered stable, though some APIs, scopes, or response formats may evolve._

_**How you can help:**_

* _Use Roles and Permissions Management in real projects, prototypes, or tests._
* _Share feedback, issues, or ideas with our support team._

_Thank you for exploring this early release and helping us shape these tools to best meet your needs._
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [Cloudinary Account Provisioning JavaScript SDK](#cloudinary-account-provisioning-javascript-sdk)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [Configuration](#configuration)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Global Parameters](#global-parameters)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @cloudinary/account-provisioning
```

### PNPM

```bash
pnpm add @cloudinary/account-provisioning
```

### Bun

```bash
bun add @cloudinary/account-provisioning
```

### Yarn

```bash
yarn add @cloudinary/account-provisioning
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Custom Configuration [configuration] -->
## Configuration

### Environment Variables

The SDK loads credentials and configuration automatically from environment variables. The simplest way to configure the SDK is to set the `CLOUDINARY_ACCOUNT_URL` environment variable:

```bash
export CLOUDINARY_ACCOUNT_URL=account://<PROVISIONING_API_KEY>:<PROVISIONING_API_SECRET>@<ACCOUNT_ID>
```

This single URL provides all three required values. You can find these credentials in the [Cloudinary Console](https://console.cloudinary.com/pm) under **Settings > Account API Keys**.

Alternatively, you can set each value individually:

| Environment Variable                | Description              |
| ----------------------------------- | ------------------------ |
| `CLOUDINARY_ACCOUNT_URL`            | Account URL (recommended — provides all values below) |
| `CLOUDINARY_PROVISIONING_API_KEY`   | Account API Key          |
| `CLOUDINARY_PROVISIONING_API_SECRET`| Account API Secret       |
| `CLOUDINARY_ACCOUNT_ID`             | Account ID               |
| `CLOUDINARY_DEBUG`                  | Set to `true` to enable HTTP debug logging |

Individual environment variables take precedence over values parsed from `CLOUDINARY_ACCOUNT_URL`.

### Usage with Environment Variables

When environment variables are set, no constructor arguments are needed:

```typescript
import { CldProvisioning } from "@cloudinary/account-provisioning";

const cldProvisioning = new CldProvisioning();

const result = await cldProvisioning.productEnvironments.list({});
console.log(result);
```

### Explicit Configuration

You can also pass credentials directly:

```typescript
import { CldProvisioning } from "@cloudinary/account-provisioning";

const cldProvisioning = new CldProvisioning({
  security: {
    provisioningApiKey: "YOUR_API_KEY",
    provisioningApiSecret: "YOUR_API_SECRET",
  },
  accountId: "YOUR_ACCOUNT_ID",
});
```

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
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
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name                                             | Type | Scheme      | Environment Variable                                                       |
| ------------------------------------------------ | ---- | ----------- | -------------------------------------------------------------------------- |
| `provisioningApiKey`<br/>`provisioningApiSecret` | http | Custom HTTP | `CLOUDINARY_PROVISIONING_API_KEY`<br/>`CLOUDINARY_PROVISIONING_API_SECRET` |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. For example:
```typescript
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
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [ProductEnvironments](docs/sdks/productenvironments/README.md)

* [list](docs/sdks/productenvironments/README.md#list) - Get product environments
* [create](docs/sdks/productenvironments/README.md#create) - Create product environment
* [get](docs/sdks/productenvironments/README.md#get) - Get product environment
* [update](docs/sdks/productenvironments/README.md#update) - Update product environment
* [delete](docs/sdks/productenvironments/README.md#delete) - Delete product environment

### [AccessKeys](docs/sdks/accesskeys/README.md)

* [list](docs/sdks/accesskeys/README.md#list) - Get access keys
* [generate](docs/sdks/accesskeys/README.md#generate) - Generate an access key
* [deleteByName](docs/sdks/accesskeys/README.md#deletebyname) - Delete access key by name
* [update](docs/sdks/accesskeys/README.md#update) - Update an access key
* [delete](docs/sdks/accesskeys/README.md#delete) - Delete access key

### [Users](docs/sdks/users/README.md)

* [list](docs/sdks/users/README.md#list) - Get users
* [create](docs/sdks/users/README.md#create) - Create user
* [get](docs/sdks/users/README.md#get) - Get user
* [update](docs/sdks/users/README.md#update) - Update user
* [delete](docs/sdks/users/README.md#delete) - Delete user
* [getGroups](docs/sdks/users/README.md#getgroups) - Get user groups
* [listSubAccounts](docs/sdks/users/README.md#listsubaccounts) - Get user sub-accounts

### [UserGroups](docs/sdks/usergroups/README.md)

* [list](docs/sdks/usergroups/README.md#list) - Get User Groups
* [create](docs/sdks/usergroups/README.md#create) - Create User Group
* [get](docs/sdks/usergroups/README.md#get) - Get User Group
* [update](docs/sdks/usergroups/README.md#update) - Update User Group
* [delete](docs/sdks/usergroups/README.md#delete) - Delete User Group
* [listUsers](docs/sdks/usergroups/README.md#listusers) - Get Users in User Group
* [addUser](docs/sdks/usergroups/README.md#adduser) - Add User to User Group
* [removeUser](docs/sdks/usergroups/README.md#removeuser) - Remove User from User Group

### [BillingUsage](docs/sdks/billingusage/README.md)

* [get](docs/sdks/billingusage/README.md#get) - Get billing usage information

### [SystemPolicies](docs/sdks/systempolicies/README.md)

* [list](docs/sdks/systempolicies/README.md#list) - Get system policies

### [Roles](docs/sdks/roles/README.md)

* [list](docs/sdks/roles/README.md#list) - Get roles
* [create](docs/sdks/roles/README.md#create) - Create custom role
* [get](docs/sdks/roles/README.md#get) - Get role
* [update](docs/sdks/roles/README.md#update) - Update custom role
* [delete](docs/sdks/roles/README.md#delete) - Delete custom role
* [listPrincipals](docs/sdks/roles/README.md#listprincipals) - Get a role's principals
* [updatePrincipals](docs/sdks/roles/README.md#updateprincipals) - Assign principals to a role

### [CustomPolicies](docs/sdks/custompolicies/README.md)

* [list](docs/sdks/custompolicies/README.md#list) - Get custom policies
* [create](docs/sdks/custompolicies/README.md#create) - Create custom policy
* [get](docs/sdks/custompolicies/README.md#get) - Get custom policy
* [update](docs/sdks/custompolicies/README.md#update) - Update custom policy
* [delete](docs/sdks/custompolicies/README.md#delete) - Delete custom policy

### [EffectivePolicies](docs/sdks/effectivepolicies/README.md)

* [list](docs/sdks/effectivepolicies/README.md#list) - Get effective policies

### [Principals](docs/sdks/principals/README.md)

* [listRoles](docs/sdks/principals/README.md#listroles) - Get a principal's roles
* [updateRoles](docs/sdks/principals/README.md#updateroles) - Assign roles to a principal
* [inspect](docs/sdks/principals/README.md#inspect) - Inspect
* [inspectMultiple](docs/sdks/principals/README.md#inspectmultiple) - Inspect multiple

### [Public](docs/sdks/public/README.md)

* [getCatalog](docs/sdks/public/README.md#getcatalog) - Get system roles and policies catalog
* [validatePolicy](docs/sdks/public/README.md#validatepolicy) - Validate a Cedar policy
* [getSchema](docs/sdks/public/README.md#getschema) - Get Cedar schema

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`accessKeysDelete`](docs/sdks/accesskeys/README.md#delete) - Delete access key
- [`accessKeysDeleteByName`](docs/sdks/accesskeys/README.md#deletebyname) - Delete access key by name
- [`accessKeysGenerate`](docs/sdks/accesskeys/README.md#generate) - Generate an access key
- [`accessKeysList`](docs/sdks/accesskeys/README.md#list) - Get access keys
- [`accessKeysUpdate`](docs/sdks/accesskeys/README.md#update) - Update an access key
- [`billingUsageGet`](docs/sdks/billingusage/README.md#get) - Get billing usage information
- [`customPoliciesCreate`](docs/sdks/custompolicies/README.md#create) - Create custom policy
- [`customPoliciesDelete`](docs/sdks/custompolicies/README.md#delete) - Delete custom policy
- [`customPoliciesGet`](docs/sdks/custompolicies/README.md#get) - Get custom policy
- [`customPoliciesList`](docs/sdks/custompolicies/README.md#list) - Get custom policies
- [`customPoliciesUpdate`](docs/sdks/custompolicies/README.md#update) - Update custom policy
- [`effectivePoliciesList`](docs/sdks/effectivepolicies/README.md#list) - Get effective policies
- [`principalsInspect`](docs/sdks/principals/README.md#inspect) - Inspect
- [`principalsInspectMultiple`](docs/sdks/principals/README.md#inspectmultiple) - Inspect multiple
- [`principalsListRoles`](docs/sdks/principals/README.md#listroles) - Get a principal's roles
- [`principalsUpdateRoles`](docs/sdks/principals/README.md#updateroles) - Assign roles to a principal
- [`productEnvironmentsCreate`](docs/sdks/productenvironments/README.md#create) - Create product environment
- [`productEnvironmentsDelete`](docs/sdks/productenvironments/README.md#delete) - Delete product environment
- [`productEnvironmentsGet`](docs/sdks/productenvironments/README.md#get) - Get product environment
- [`productEnvironmentsList`](docs/sdks/productenvironments/README.md#list) - Get product environments
- [`productEnvironmentsUpdate`](docs/sdks/productenvironments/README.md#update) - Update product environment
- [`publicGetCatalog`](docs/sdks/public/README.md#getcatalog) - Get system roles and policies catalog
- [`publicGetSchema`](docs/sdks/public/README.md#getschema) - Get Cedar schema
- [`publicValidatePolicy`](docs/sdks/public/README.md#validatepolicy) - Validate a Cedar policy
- [`rolesCreate`](docs/sdks/roles/README.md#create) - Create custom role
- [`rolesDelete`](docs/sdks/roles/README.md#delete) - Delete custom role
- [`rolesGet`](docs/sdks/roles/README.md#get) - Get role
- [`rolesList`](docs/sdks/roles/README.md#list) - Get roles
- [`rolesListPrincipals`](docs/sdks/roles/README.md#listprincipals) - Get a role's principals
- [`rolesUpdate`](docs/sdks/roles/README.md#update) - Update custom role
- [`rolesUpdatePrincipals`](docs/sdks/roles/README.md#updateprincipals) - Assign principals to a role
- [`systemPoliciesList`](docs/sdks/systempolicies/README.md#list) - Get system policies
- [`userGroupsAddUser`](docs/sdks/usergroups/README.md#adduser) - Add User to User Group
- [`userGroupsCreate`](docs/sdks/usergroups/README.md#create) - Create User Group
- [`userGroupsDelete`](docs/sdks/usergroups/README.md#delete) - Delete User Group
- [`userGroupsGet`](docs/sdks/usergroups/README.md#get) - Get User Group
- [`userGroupsList`](docs/sdks/usergroups/README.md#list) - Get User Groups
- [`userGroupsListUsers`](docs/sdks/usergroups/README.md#listusers) - Get Users in User Group
- [`userGroupsRemoveUser`](docs/sdks/usergroups/README.md#removeuser) - Remove User from User Group
- [`userGroupsUpdate`](docs/sdks/usergroups/README.md#update) - Update User Group
- [`usersCreate`](docs/sdks/users/README.md#create) - Create user
- [`usersDelete`](docs/sdks/users/README.md#delete) - Delete user
- [`usersGet`](docs/sdks/users/README.md#get) - Get user
- [`usersGetGroups`](docs/sdks/users/README.md#getgroups) - Get user groups
- [`usersList`](docs/sdks/users/README.md#list) - Get users
- [`usersListSubAccounts`](docs/sdks/users/README.md#listsubaccounts) - Get user sub-accounts
- [`usersUpdate`](docs/sdks/users/README.md#update) - Update user

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Global Parameters [global-parameters] -->
## Global Parameters

A parameter is configured globally. This parameter may be set on the SDK client instance itself during initialization. When configured as an option during SDK initialization, This global value will be used as the default on the operations that use it. When such operations are called, there is a place in each to override the global value, if needed.

For example, you can set `account_id` to `"<id>"` at SDK initialization and then you do not have to pass the same value on calls to operations like `list`. But if you want to do so you may, which will locally override the global setting. See the example code below for a demonstration.


### Available Globals

The following global parameter is available.
Global parameters can also be set via environment variable.

| Name      | Type   | Description | Environment           |
| --------- | ------ | ----------- | --------------------- |
| accountId | string | Account ID  | CLOUDINARY_ACCOUNT_ID |

### Example

```typescript
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
<!-- End Global Parameters [global-parameters] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { CldProvisioning } from "@cloudinary/account-provisioning";

const cldProvisioning = new CldProvisioning();

async function run() {
  const result = await cldProvisioning.productEnvironments.list({
    enabled: true,
    prefix: "product",
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
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
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`CldProvisioningError`](./src/models/cld-provisioning-error.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import * as models from "@cloudinary/account-provisioning";
import { CldProvisioning } from "@cloudinary/account-provisioning";

const cldProvisioning = new CldProvisioning();

async function run() {
  try {
    const result = await cldProvisioning.productEnvironments.list({
      enabled: true,
      prefix: "product",
    });

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof models.CldProvisioningError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof models.ErrorResponse) {
        console.log(error.data$.error); // models.ErrorT
      }
    }
  }
}

run();

```

### Error Classes
**Primary error:**
* [`CldProvisioningError`](./src/models/cld-provisioning-error.ts): The base class for HTTP error responses.

<details><summary>Less common errors (8)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/http-client-errors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/http-client-errors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/http-client-errors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/http-client-errors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/http-client-errors.ts): Unrecognised or unexpected error.


**Inherit from [`CldProvisioningError`](./src/models/cld-provisioning-error.ts)**:
* [`ErrorResponse`](./src/models/error-response.ts): Bad request. Applicable to 26 of 47 methods.*
* [`PermissionsErrorResponse`](./src/models/permissions-error-response.ts): Applicable to 18 of 47 methods.*
* [`ResponseValidationError`](./src/models/response-validation-error.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| #   | Server                            | Variables | Description                                     |
| --- | --------------------------------- | --------- | ----------------------------------------------- |
| 0   | `https://{region}.cloudinary.com` | `region`  | Regional API endpoints for optimal performance. |
| 1   | `https://{host}`                  | `host`    | Custom domains for enterprise deployments.      |

If the selected server has variables, you may override its default values through the additional parameters made available in the SDK constructor:

| Variable | Parameter                     | Supported Values                            | Default                | Description                 |
| -------- | ----------------------------- | ------------------------------------------- | ---------------------- | --------------------------- |
| `region` | `region: models.ServerRegion` | - `"api"`<br/>- `"api-eu"`<br/>- `"api-ap"` | `"api"`                | Regional endpoint selection |
| `host`   | `host: string`                | string                                      | `"api.cloudinary.com"` | API host domain.            |

#### Example

```typescript
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

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
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
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to:
- route requests through a proxy server using [undici](https://www.npmjs.com/package/undici)'s ProxyAgent
- use the `"beforeRequest"` hook to add a custom header and a timeout to requests
- use the `"requestError"` hook to log errors

```typescript
import { CldProvisioning } from "@cloudinary/account-provisioning";
import { ProxyAgent } from "undici";
import { HTTPClient } from "@cloudinary/account-provisioning/lib/http";

const dispatcher = new ProxyAgent("http://proxy.example.com:8080");

const httpClient = new HTTPClient({
  // 'fetcher' takes a function that has the same signature as native 'fetch'.
  fetcher: (input, init) =>
    // 'dispatcher' is specific to undici and not part of the standard Fetch API.
    fetch(input, { ...init, dispatcher } as RequestInit),
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new CldProvisioning({ httpClient: httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { CldProvisioning } from "@cloudinary/account-provisioning";

const sdk = new CldProvisioning({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `CLOUDINARY_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=@cloudinary/account-provisioning&utm_campaign=typescript)
