# UserGroup

User group.

## Example Usage

```typescript
import { UserGroup } from "@cloudinary/account-provisioning";

let value: UserGroup = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The user group's ID.                                                                          |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | The user group's name.                                                                        |
| `users`                                                                                       | [models.UserGroupUser](../models/usergroupuser.md)[]                                          | :heavy_minus_sign:                                                                            | A list of user group users.<br/>Only returned in extended_details.<br/>                       |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date when the user group was created.<br/>Only returned in extended_details.<br/>         |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date when the user group was last updated.<br/>Only returned in extended_details.<br/>    |