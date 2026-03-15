# ProductEnvironment

Product Environment

## Example Usage

```typescript
import { ProductEnvironment } from "@cloudinary/account-provisioning";

let value: ProductEnvironment = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `cloudName`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | The cloud name of the product environment.                                                    |
| `enabled`                                                                                     | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Whether the product environment is enabled or disabled.                                       |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the product environment.                                                            |
| `apiAccessKeys`                                                                               | [models.ApiAccessKey](../models/apiaccesskey.md)[]                                            | :heavy_minus_sign:                                                                            | The list of the product environment's access keys.                                            |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date when the product environment was created.                                            |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date when the product environment was last updated.                                       |