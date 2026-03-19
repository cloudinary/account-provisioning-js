# SystemPoliciesResponse

## Example Usage

```typescript
import { SystemPoliciesResponse } from "@cloudinary/account-provisioning";

let value: SystemPoliciesResponse = {
  data: [
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
};
```

## Fields

| Field                                                                                                                                                                                 | Type                                                                                                                                                                                  | Required                                                                                                                                                                              | Description                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                                                                | [models.SystemPolicyResponseData](../models/system-policy-response-data.md)[]                                                                                                         | :heavy_minus_sign:                                                                                                                                                                    | An array of system policies.                                                                                                                                                          |
| `nextCursor`                                                                                                                                                                          | *string*                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                    | When a request has more results to return, the next_cursor value is returned as part of the response. You can then specify this value as the cursor parameter of a following request. |