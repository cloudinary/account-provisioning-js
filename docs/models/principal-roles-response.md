# PrincipalRolesResponse

## Example Usage

```typescript
import { PrincipalRolesResponse } from "@cloudinary/account-provisioning";

let value: PrincipalRolesResponse = {
  data: [
    {
      id: "<id>",
      name: "<value>",
      managementType: "system",
      permissionType: "global",
      scopeType: "prodenv",
      createdAt: 73612,
      updatedAt: 236322,
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `data`                                                           | [models.PrincipalRolesData](../models/principal-roles-data.md)[] | :heavy_minus_sign:                                               | N/A                                                              |