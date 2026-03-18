# GetUserGroupRequest

## Example Usage

```typescript
import { GetUserGroupRequest } from "@cloudinary/account-provisioning";

let value: GetUserGroupRequest = {
  groupId: "7f08f1f1fc910bf1f25274aef11d27",
  extendedDetails: true,
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               | Example                                                                                                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `groupId`                                                                                                 | *string*                                                                                                  | :heavy_check_mark:                                                                                        | The ID of the user group.                                                                                 | 7f08f1f1fc910bf1f25274aef11d27                                                                            |
| `extendedDetails`                                                                                         | *boolean*                                                                                                 | :heavy_minus_sign:                                                                                        | Whether to only return extended (true) or basic information about the group (false).<br/>**Default**: false.<br/> | true                                                                                                      |