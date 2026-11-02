# RoleManagementRequest

A role management operation and the roles it applies to.

## Example Usage

```typescript
import { RoleManagementRequest } from "@cloudinary/account-provisioning";

let value: RoleManagementRequest = {
  operation: "add",
  roles: [],
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `operation`                                             | [models.Operation](../models/operation.md)              | :heavy_check_mark:                                      | Whether to add or remove the listed roles.              | add                                                     |
| `roles`                                                 | [models.RoleAssignment](../models/role-assignment.md)[] | :heavy_check_mark:                                      | The roles to add or remove.                             |                                                         |