# RoleAssignment

A role assignment with optional scope and policy parameters.

## Example Usage

```typescript
import { RoleAssignment } from "@cloudinary/account-provisioning";

let value: RoleAssignment = {
  id: "media_library_admin",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               | Example                                                   |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `id`                                                      | *string*                                                  | :heavy_check_mark:                                        | The role ID.                                              | media_library_admin                                       |
| `scopeId`                                                 | *string*                                                  | :heavy_minus_sign:                                        | The scope (product environment) ID the role applies to.   |                                                           |
| `policyParameters`                                        | [models.PolicyParameters](../models/policy-parameters.md) | :heavy_minus_sign:                                        | Optional content-scope policy parameters.                 |                                                           |
| `additionalProperties`                                    | Record<string, *any*>                                     | :heavy_minus_sign:                                        | N/A                                                       |                                                           |