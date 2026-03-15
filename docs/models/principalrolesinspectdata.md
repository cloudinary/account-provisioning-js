# PrincipalRolesInspectData

## Example Usage

```typescript
import { PrincipalRolesInspectData } from "@cloudinary/account-provisioning";

let value: PrincipalRolesInspectData = {
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
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `type`                                                         | [models.PrincipalTypeEnum](../models/principaltypeenum.md)     | :heavy_check_mark:                                             | The type of principal.                                         | user                                                           |
| `id`                                                           | *string*                                                       | :heavy_check_mark:                                             | The unique identifier of the principal.                        |                                                                |
| `roles`                                                        | [models.PrincipalRolesData](../models/principalrolesdata.md)[] | :heavy_check_mark:                                             | N/A                                                            |                                                                |