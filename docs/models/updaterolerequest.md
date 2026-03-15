# UpdateRoleRequest

## Example Usage

```typescript
import { UpdateRoleRequest } from "@cloudinary/account-provisioning";

let value: UpdateRoleRequest = {
  roleId: "<id>",
  role: {
    name: "Upload manager",
    description:
      "Responsible for managing upload presets and uploading new assets.",
    systemPolicyIds: [
      "cld::policy::global::upload_presets::manage",
      "cld::policy::global::folder_and_asset_management::create_asset",
    ],
  },
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `roleId`                          | *string*                          | :heavy_check_mark:                | A unique identifier for the role. |
| `role`                            | [models.Role](../models/role.md)  | :heavy_check_mark:                | Role details                      |