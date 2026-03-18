# UpdateCustomPolicyRequest

## Example Usage

```typescript
import { UpdateCustomPolicyRequest } from "@cloudinary/account-provisioning";

let value: UpdateCustomPolicyRequest = {
  policyId: "<id>",
  updateCustomPolicy: {
    policyStatement:
      "permit(principal == Cloudinary::APIKey::\\\"1234\\\",action==Cloudinary::Action::\\\"read\\\",resource is Cloudinary::Folder ) when {resource.ancestor_ids.contains(\\\"asdfjkl12347890\\\")} ;\n",
    description:
      "Permit read access to the Clothing folder with external ID asdfjkl12347890.",
    scopeType: "prodenv",
    scopeId: "975l29lz02jt0836fhwi",
    name: "Read access to Clothing folder",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `policyId`                                                     | *string*                                                       | :heavy_check_mark:                                             | A unique identifier for the custom permission policy.          |
| `updateCustomPolicy`                                           | [models.UpdateCustomPolicy](../models/update-custom-policy.md) | :heavy_check_mark:                                             | Policy details                                                 |