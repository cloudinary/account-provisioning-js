# GetUserGroupsRequest

## Example Usage

```typescript
import { GetUserGroupsRequest } from "@cloudinary/account-provisioning";

let value: GetUserGroupsRequest = {
  extendedDetails: true,
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               | Example                                                                                                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `extendedDetails`                                                                                         | *boolean*                                                                                                 | :heavy_minus_sign:                                                                                        | Whether to only return extended (true) or basic information about the group (false).<br/>**Default**: false.<br/> | true                                                                                                      |