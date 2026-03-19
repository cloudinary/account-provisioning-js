# UpdateUserRequest

## Example Usage

```typescript
import { UpdateUserRequest } from "@cloudinary/account-provisioning";

let value: UpdateUserRequest = {
  userId: "0abed8dfcc039ea05e2a1d494fd442",
  userRequest: {
    name: "John",
    email: "john@example.com",
    role: "technical_admin",
    enabled: true,
  },
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     | Example                                         |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `userId`                                        | *string*                                        | :heavy_check_mark:                              | The ID of the user.                             | 0abed8dfcc039ea05e2a1d494fd442                  |
| `userRequest`                                   | [models.UserRequest](../models/user-request.md) | :heavy_check_mark:                              | User details to update.                         |                                                 |