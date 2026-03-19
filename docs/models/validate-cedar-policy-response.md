# ValidateCedarPolicyResponse

## Example Usage

```typescript
import { ValidateCedarPolicyResponse } from "@cloudinary/account-provisioning";

let value: ValidateCedarPolicyResponse = {
  valid: false,
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     | Example                                         |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `valid`                                         | *boolean*                                       | :heavy_check_mark:                              | N/A                                             | false                                           |
| `errors`                                        | [models.CedarError](../models/cedar-error.md)[] | :heavy_minus_sign:                              | N/A                                             |                                                 |