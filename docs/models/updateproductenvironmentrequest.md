# UpdateProductEnvironmentRequest

## Example Usage

```typescript
import { UpdateProductEnvironmentRequest } from "@cloudinary/account-provisioning";

let value: UpdateProductEnvironmentRequest = {
  subAccountId: "abcde1fghij2klmno3pqrst4uvwxy5z",
  productEnvironmentUpdateRequest: {
    name: "Product3 Application",
    cloudName: "product3",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `subAccountId`                                                                         | *string*                                                                               | :heavy_check_mark:                                                                     | The ID of the product environment.                                                     | abcde1fghij2klmno3pqrst4uvwxy5z                                                        |
| `productEnvironmentUpdateRequest`                                                      | [models.ProductEnvironmentUpdateRequest](../models/productenvironmentupdaterequest.md) | :heavy_check_mark:                                                                     | Product environment details to update.                                                 |                                                                                        |