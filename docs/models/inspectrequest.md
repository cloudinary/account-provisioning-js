# InspectRequest

## Example Usage

```typescript
import { InspectRequest } from "@cloudinary/account-provisioning";

let value: InspectRequest = {
  scopeType: "prodenv",
  principals: [
    {
      type: "user",
      id: "1234abc",
    },
  ],
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `scopeType`                                                                                             | [models.ScopeTypeEnum](../models/scopetypeenum.md)                                                      | :heavy_check_mark:                                                                                      | Specifies where the role/policy is applied, either at the account level or within product environments. | prodenv                                                                                                 |
| `scopeId`                                                                                               | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `principals`                                                                                            | [models.Principal](../models/principal.md)[]                                                            | :heavy_check_mark:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `policyParameters`                                                                                      | [models.InspectRequestPolicyParameters](../models/inspectrequestpolicyparameters.md)                    | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `cursor`                                                                                                | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |                                                                                                         |