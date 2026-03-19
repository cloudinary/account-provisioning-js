# DeleteAccessKeyByNameRequest

## Example Usage

```typescript
import { DeleteAccessKeyByNameRequest } from "@cloudinary/account-provisioning";

let value: DeleteAccessKeyByNameRequest = {
  subAccountId: "abcde1fghij2klmno3pqrst4uvwxy5z",
  name: "main_key",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        | Example                            |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `subAccountId`                     | *string*                           | :heavy_check_mark:                 | The ID of the product environment. | abcde1fghij2klmno3pqrst4uvwxy5z    |
| `name`                             | *string*                           | :heavy_check_mark:                 | The access key name.               | main_key                           |