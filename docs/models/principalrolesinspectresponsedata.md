# PrincipalRolesInspectResponseData

## Example Usage

```typescript
import { PrincipalRolesInspectResponseData } from "@cloudinary/account-provisioning";

let value: PrincipalRolesInspectResponseData = {
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
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `principals`                                                                 | [models.PrincipalRolesInspectData](../models/principalrolesinspectdata.md)[] | :heavy_minus_sign:                                                           | N/A                                                                          |