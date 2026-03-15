# GenerateAccessKeyRequest

## Example Usage

```typescript
import { GenerateAccessKeyRequest } from "@cloudinary/account-provisioning";

let value: GenerateAccessKeyRequest = {
  subAccountId: "abcde1fghij2klmno3pqrst4uvwxy5z",
  accessKeyRequest: {
    name: "main_key",
    enabled: true,
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `subAccountId`                                           | *string*                                                 | :heavy_check_mark:                                       | The ID of the product environment.                       | abcde1fghij2klmno3pqrst4uvwxy5z                          |
| `accessKeyRequest`                                       | [models.AccessKeyRequest](../models/accesskeyrequest.md) | :heavy_check_mark:                                       | Access key details.                                      |                                                          |