# UpdateUserGroupRequest

## Example Usage

```typescript
import { UpdateUserGroupRequest } from "@cloudinary/account-provisioning";

let value: UpdateUserGroupRequest = {
  groupId: "7f08f1f1fc910bf1f25274aef11d27",
  userGroupRequest: {
    name: "Designers",
    extendedDetails: false,
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `groupId`                                                  | *string*                                                   | :heavy_check_mark:                                         | The ID of the user group.                                  | 7f08f1f1fc910bf1f25274aef11d27                             |
| `userGroupRequest`                                         | [models.UserGroupRequest](../models/user-group-request.md) | :heavy_check_mark:                                         | User group details to update.                              |                                                            |