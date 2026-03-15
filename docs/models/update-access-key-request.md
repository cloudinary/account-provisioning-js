# UpdateAccessKeyRequest

## Example Usage

```typescript
import { UpdateAccessKeyRequest } from "@cloudinary/account-provisioning";

let value: UpdateAccessKeyRequest = {
  subAccountId: "abcde1fghij2klmno3pqrst4uvwxy5z",
  key: "814814814814814",
  accessKeyUpdateRequest: {
    name: "main_key",
    enabled: true,
    dedicatedFor: "webhooks",
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `subAccountId`                                                          | *string*                                                                | :heavy_check_mark:                                                      | The ID of the product environment.                                      | abcde1fghij2klmno3pqrst4uvwxy5z                                         |
| `key`                                                                   | *string*                                                                | :heavy_check_mark:                                                      | The access key (api key).                                               | 814814814814814                                                         |
| `accessKeyUpdateRequest`                                                | [models.AccessKeyUpdateRequest](../models/access-key-update-request.md) | :heavy_check_mark:                                                      | Access key details for update.                                          |                                                                         |