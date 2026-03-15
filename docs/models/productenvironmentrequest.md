# ProductEnvironmentRequest

## Example Usage

```typescript
import { ProductEnvironmentRequest } from "@cloudinary/account-provisioning";

let value: ProductEnvironmentRequest = {
  name: "Product3 Application",
  cloudName: "product3",
  baseSubAccountId: "0aaaaa1bbbbb2ccccc3ddddd4eeeee5f",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `name`                                                                  | *string*                                                                | :heavy_check_mark:                                                      | The display name for the product environment.                           | Product3 Application                                                    |
| `cloudName`                                                             | *string*                                                                | :heavy_minus_sign:                                                      | The Cloudinary cloud name (optional, default is auto-generated).        | product3                                                                |
| `baseSubAccountId`                                                      | *string*                                                                | :heavy_minus_sign:                                                      | The ID of another product environment to copy settings from (optional). | 0aaaaa1bbbbb2ccccc3ddddd4eeeee5f                                        |
| `customAttributes`                                                      | [models.CustomAttributes](../models/customattributes.md)                | :heavy_minus_sign:                                                      | Custom attributes associated with the product environment (optional).   |                                                                         |