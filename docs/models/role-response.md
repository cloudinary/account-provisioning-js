# RoleResponse

## Example Usage

```typescript
import { RoleResponse } from "@cloudinary/account-provisioning";

let value: RoleResponse = {
  data: {
    policies: [
      {
        id: "12jf789l12hwiuencl7aaqey",
        name: "Read access to Clothing folder",
        description:
          "Permit read access to the Clothing folder with external ID asdfjkl12347890.",
        scopeType: "prodenv",
        permissionType: "global",
        policyStatement:
          "permit(principal == Cloudinary::APIKey::\"1234\",action==Cloudinary::Action::\"read\",resource is Cloudinary::Folder ) when { resource.ancestor_ids.contains(\"\\<folder_id\\>\") };",
        policyParameters: [
          "folder_id",
        ],
        category: "Management",
        subCategory: "General operations",
        createdAt: 1719475216,
        updatedAt: 1719475216,
      },
    ],
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
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `data`                                                       | [models.RoleResponseData1](../models/role-response-data1.md) | :heavy_minus_sign:                                           | N/A                                                          |