# UpdateUserRequest

## Example Usage

```typescript
import { UpdateUserRequest } from "@cloudinary/account-provisioning";

let value: UpdateUserRequest = {
  userId: "0abed8dfcc039ea05e2a1d494fd442",
  requestBody: {
    name: "John",
    email: "john@example.com",
    enabled: true,
    roleManagement: {
      operation: "add",
      roles: [],
    },
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `userId`                                                              | *string*                                                              | :heavy_check_mark:                                                    | The ID of the user.                                                   | 0abed8dfcc039ea05e2a1d494fd442                                        |
| `requestBody`                                                         | [models.UpdateUserRequestBody](../models/update-user-request-body.md) | :heavy_check_mark:                                                    | User details to update.                                               |                                                                       |