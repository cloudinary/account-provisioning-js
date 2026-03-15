# Data

## Example Usage

```typescript
import { Data } from "@cloudinary/account-provisioning";

let value: Data = {
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
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `principals`                                             | [models.PrincipalRole](../models/principalrole.md)[]     | :heavy_minus_sign:                                       | N/A                                                      |
| `customPolicies`                                         | [models.EffectivePolicy](../models/effectivepolicy.md)[] | :heavy_minus_sign:                                       | N/A                                                      |