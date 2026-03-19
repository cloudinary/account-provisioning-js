# GetAccessKeysRequest

## Example Usage

```typescript
import { GetAccessKeysRequest } from "@cloudinary/account-provisioning";

let value: GetAccessKeysRequest = {
  subAccountId: "abcde1fghij2klmno3pqrst4uvwxy5z",
  sortBy: "created_at",
  sortOrder: "asc",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `subAccountId`                                                                                         | *string*                                                                                               | :heavy_check_mark:                                                                                     | The ID of the product environment.                                                                     | abcde1fghij2klmno3pqrst4uvwxy5z                                                                        |
| `pageSize`                                                                                             | *number*                                                                                               | :heavy_minus_sign:                                                                                     | How many entries to display on each page.                                                              |                                                                                                        |
| `page`                                                                                                 | *number*                                                                                               | :heavy_minus_sign:                                                                                     | Which page to return (maximum pages 100). **Default**: All pages are returned.<br/>                    |                                                                                                        |
| `sortBy`                                                                                               | [models.SortBy](../models/sort-by.md)                                                                  | :heavy_minus_sign:                                                                                     | Which response parameter to sort by. **Possible values**: `api_key`, `created_at`, `name`, `enabled`.<br/> | created_at                                                                                             |
| `sortOrder`                                                                                            | [models.SortOrder](../models/sort-order.md)                                                            | :heavy_minus_sign:                                                                                     | Control the order of returned keys. **Possible values**: `desc` (default), `asc`.<br/>                 | asc                                                                                                    |