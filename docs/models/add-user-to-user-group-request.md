# AddUserToUserGroupRequest

## Example Usage

```typescript
import { AddUserToUserGroupRequest } from "@cloudinary/account-provisioning";

let value: AddUserToUserGroupRequest = {
  groupId: "7f08f1f1fc910bf1f25274aef11d27",
  userId: "0abed8dfcc039ea05e2a1d494fd442",
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    | Example                        |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `groupId`                      | *string*                       | :heavy_check_mark:             | The ID of the user group.      | 7f08f1f1fc910bf1f25274aef11d27 |
| `userId`                       | *string*                       | :heavy_check_mark:             | The ID of the user.            | 0abed8dfcc039ea05e2a1d494fd442 |