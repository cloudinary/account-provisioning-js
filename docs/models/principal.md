# Principal

## Example Usage

```typescript
import { Principal } from "@cloudinary/account-provisioning";

let value: Principal = {
  type: "user",
  id: "1234abc",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `type`                                                       | [models.PrincipalTypeEnum](../models/principal-type-enum.md) | :heavy_check_mark:                                           | The type of principal.                                       | user                                                         |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | The unique identifier of the principal.                      | 1234abc                                                      |