# AccessKeyRequest

## Example Usage

```typescript
import { AccessKeyRequest } from "@cloudinary/account-provisioning";

let value: AccessKeyRequest = {
  name: "main_key",
  enabled: true,
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    | Example                                        |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `name`                                         | *string*                                       | :heavy_minus_sign:                             | The name of the access key.                    | main_key                                       |
| `enabled`                                      | *boolean*                                      | :heavy_minus_sign:                             | Whether the access key is enabled or disabled. | true                                           |