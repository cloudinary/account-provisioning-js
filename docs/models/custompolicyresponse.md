# CustomPolicyResponse

## Example Usage

```typescript
import { CustomPolicyResponse } from "@cloudinary/account-provisioning";

let value: CustomPolicyResponse = {
  data: {
    id: "12jf789l12hwiuencl7aaqey",
    policyStatement:
      "permit(principal == Cloudinary::APIKey::\"1234\",action==Cloudinary::Action::\"read\",resource is Cloudinary::Folder ) when {resource.ancestor_ids.contains(\"asdfjkl12347890\")} ;",
    description:
      "Permit read access to the Clothing folder with external ID asdfjkl12347890.",
    scopeType: "prodenv",
    scopeId: "975l29lz02jt0836fhwi",
    name: "Read access to Clothing folder",
    enabled: true,
    createdAt: 1719475216,
    updatedAt: 1719475216,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `data`                                                                   | [models.CustomPolicyResponseData](../models/custompolicyresponsedata.md) | :heavy_minus_sign:                                                       | N/A                                                                      |