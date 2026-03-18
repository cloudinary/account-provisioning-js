# UpdatePrincipalRolesRequest

## Example Usage

```typescript
import { UpdatePrincipalRolesRequest } from "@cloudinary/account-provisioning";

let value: UpdatePrincipalRolesRequest = {
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
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             | Example                                                                                 |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `operation`                                                                             | [models.OperationEnum](../models/operation-enum.md)                                     | :heavy_minus_sign:                                                                      | Specifies the operation to perform. Use `add` to associate or `remove` to disassociate. | add                                                                                     |
| `principal`                                                                             | [models.Principal](../models/principal.md)                                              | :heavy_minus_sign:                                                                      | N/A                                                                                     |                                                                                         |
| `roles`                                                                                 | [models.RoleToManage](../models/role-to-manage.md)[]                                    | :heavy_minus_sign:                                                                      | N/A                                                                                     |                                                                                         |