# PrincipalRolesInspectResponse

## Example Usage

```typescript
import { PrincipalRolesInspectResponse } from "@cloudinary/account-provisioning";

let value: PrincipalRolesInspectResponse = {
  data: {
    principals: [
      {
        type: "user",
        id: "<id>",
        roles: [
          {
            id: "<id>",
            name: "<value>",
            managementType: "system",
            permissionType: "global",
            scopeType: "prodenv",
            createdAt: 486812,
            updatedAt: 35252,
          },
        ],
      },
    ],
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `data`                                                                                     | [models.PrincipalRolesInspectResponseData](../models/principalrolesinspectresponsedata.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `nextCursor`                                                                               | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |