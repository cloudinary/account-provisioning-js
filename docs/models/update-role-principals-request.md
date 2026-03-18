# UpdateRolePrincipalsRequest

## Example Usage

```typescript
import { UpdateRolePrincipalsRequest } from "@cloudinary/account-provisioning";

let value: UpdateRolePrincipalsRequest = {
  operation: "add",
  principals: [
    {
      principalType: "user",
      principalId: "1234abc",
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
| `principals`                                                                            | [models.UpdateRolePrincipal](../models/update-role-principal.md)[]                      | :heavy_minus_sign:                                                                      | N/A                                                                                     |                                                                                         |