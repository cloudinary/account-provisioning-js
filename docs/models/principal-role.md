# PrincipalRole

## Example Usage

```typescript
import { PrincipalRole } from "@cloudinary/account-provisioning";

let value: PrincipalRole = {
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
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 | Example                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `principalType`                                                                                                             | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | The type of principal you want to retrieve roles or permission policies for.<br/><br/>- user<br/><br/>- group<br/><br/>- apiKey<br/><br/>- provisioningKey<br/> | user                                                                                                                        |
| `principalId`                                                                                                               | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | The unique identifier of the principal.                                                                                     | 1234abc                                                                                                                     |
| `roles`                                                                                                                     | [models.EffectiveRole](../models/effective-role.md)[]                                                                       | :heavy_minus_sign:                                                                                                          | A list of all the roles that are added to this principal.                                                                   |                                                                                                                             |