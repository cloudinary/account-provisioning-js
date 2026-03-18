

## 2026-03-15 00:00:00
### Changes
Based on:
- OpenAPI Doc  
- Speakeasy CLI latest https://github.com/speakeasy-api/speakeasy
### Generated
- [typescript v0.3.0] .

### ⚠ BREAKING CHANGES

* Rewrite SDK using Speakeasy code generation
* New package structure and API surface

### Features

* Full TypeScript SDK generated with Speakeasy
* Strongly typed models with Zod validation
* Support for all Provisioning API endpoints: users, user groups, product environments, access keys, billing usage, custom policies, system policies, effective policies
* OAuth2 and basic auth support
* Async/await based API

## 0.2.0 (19-11-2024)

### ⚠ BREAKING CHANGES

* Add description text for schema
* Fix Typescript Node string enums
* Add support for multiple API level schemas

### Features

* Add support for `cloud_names` parameter in `sub_accounts` API
* Add support for `emails` and pagination parameters in `users` API
* Add support for `extended details` in `user_groups` API
* Add support for multiple API level schemas

### Bug Fixes

* Add description text for schema
* Update classic reference link
* Fix `groups` property in `users` API
* Fix double `extended_details` in update user group API
* Fix examples
* Fix internal attributes
* Fix docs templates
* Fix Typescript Node string enums
