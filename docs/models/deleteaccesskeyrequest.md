# DeleteAccessKeyRequest

## Example Usage

```typescript
import { DeleteAccessKeyRequest } from "@cloudinary/account-provisioning";

let value: DeleteAccessKeyRequest = {
  subAccountId: "abcde1fghij2klmno3pqrst4uvwxy5z",
  key: "814814814814814",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        | Example                            |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `subAccountId`                     | *string*                           | :heavy_check_mark:                 | The ID of the product environment. | abcde1fghij2klmno3pqrst4uvwxy5z    |
| `key`                              | *string*                           | :heavy_check_mark:                 | The access key (api key).          | 814814814814814                    |