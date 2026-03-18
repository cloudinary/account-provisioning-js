# SubAccountSummary

Product environment (sub-account) summary.

## Example Usage

```typescript
import { SubAccountSummary } from "@cloudinary/account-provisioning";

let value: SubAccountSummary = {};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `id`                                                  | *string*                                              | :heavy_minus_sign:                                    | The product environment's ID.                         |
| `name`                                                | *string*                                              | :heavy_minus_sign:                                    | The product environment's name.                       |
| `description`                                         | *string*                                              | :heavy_minus_sign:                                    | The product environment's description.                |
| `cloudName`                                           | *string*                                              | :heavy_minus_sign:                                    | The Cloudinary cloud name of the product environment. |
| `enabled`                                             | *boolean*                                             | :heavy_minus_sign:                                    | Whether the product environment is enabled.           |