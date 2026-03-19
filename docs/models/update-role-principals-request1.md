# UpdateRolePrincipalsRequest1

## Example Usage

```typescript
import { UpdateRolePrincipalsRequest1 } from "@cloudinary/account-provisioning";

let value: UpdateRolePrincipalsRequest1 = {
  roleId: "<id>",
  updateRolePrincipalsRequest: {
    operation: "add",
    principals: [
      {
        principalType: "user",
        principalId: "1234abc",
        scopeId: "975l29lz02jt0836fhwi",
        policyParameters: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `roleId`                                                                          | *string*                                                                          | :heavy_check_mark:                                                                | A unique identifier for the role.                                                 |
| `updateRolePrincipalsRequest`                                                     | [models.UpdateRolePrincipalsRequest](../models/update-role-principals-request.md) | :heavy_check_mark:                                                                | Principals details.                                                               |