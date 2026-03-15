# RolesResponse

## Example Usage

```typescript
import { RolesResponse } from "@cloudinary/account-provisioning";

let value: RolesResponse = {
  data: [
    {
      id: "cld::role::prodenv::master_admin",
      name: "Master admin",
      description: "Full access.",
      managementType: "system",
      permissionType: "global",
      policyParameters: [
        "folder_id",
      ],
      scopeType: "prodenv",
      createdAt: 1719475216,
      updatedAt: 1719475216,
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `data`                                                     | [models.RoleResponseData](../models/roleresponsedata.md)[] | :heavy_minus_sign:                                         | An array of roles.                                         |