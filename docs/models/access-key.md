# AccessKey

## Example Usage

```typescript
import { AccessKey } from "@cloudinary/account-provisioning";

let value: AccessKey = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | The name of the access key.                                                                   |
| `apiKey`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | The API key.                                                                                  |
| `apiSecret`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The API secret.                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date when the access key was created.                                                     |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date when the access key was last updated.                                                |
| `enabled`                                                                                     | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Whether the access key is enabled or disabled.                                                |