# EffectiveRole

## Example Usage

```typescript
import { EffectiveRole } from "@cloudinary/account-provisioning";

let value: EffectiveRole = {
  id: "custom::global::admin",
  systemPolicies: [
    {
      id: "cld::global::api_keys::manage",
      policyStatement:
        "permit (principal, action, resource == Cloudinary::Feature::\"cld::global::api_keys::view\");",
    },
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_minus_sign:                                                                   | The unique identifier of the role.                                                   | custom::global::admin                                                                |
| `systemPolicies`                                                                     | [models.EffectivePolicy](../models/effective-policy.md)[]                            | :heavy_minus_sign:                                                                   | A list of all the predefined permission policies that are associated with this role. |                                                                                      |