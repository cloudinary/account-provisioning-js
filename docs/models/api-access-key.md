# ApiAccessKey

Brief details of a single API Access Key.

## Example Usage

```typescript
import { ApiAccessKey } from "@cloudinary/account-provisioning";

let value: ApiAccessKey = {};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `key`                                          | *string*                                       | :heavy_minus_sign:                             | The API key.                                   |
| `secret`                                       | *string*                                       | :heavy_minus_sign:                             | The API secret.                                |
| `enabled`                                      | *boolean*                                      | :heavy_minus_sign:                             | Whether the access key is enabled or disabled. |