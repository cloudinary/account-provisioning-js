# EffectivePoliciesResponse

## Example Usage

```typescript
import { EffectivePoliciesResponse } from "@cloudinary/account-provisioning";

let value: EffectivePoliciesResponse = {
  data: {
    principals: [
      {
        principalType: "user",
        principalId: "1234abc",
        roles: [
          {
            id: "custom::global::admin",
            systemPolicies: [
              {
                id: "cld::global::api_keys::manage",
                policyStatement:
                  "permit (principal, action, resource == Cloudinary::Feature::\"cld::global::api_keys::view\");",
              },
            ],
          },
        ],
      },
    ],
    customPolicies: [
      {
        id: "cld::global::api_keys::manage",
        policyStatement:
          "permit (principal, action, resource == Cloudinary::Feature::\"cld::global::api_keys::view\");",
      },
    ],
  },
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `data`                           | [models.Data](../models/data.md) | :heavy_minus_sign:               | N/A                              |