# UserGroupRequest

## Example Usage

```typescript
import { UserGroupRequest } from "@cloudinary/account-provisioning";

let value: UserGroupRequest = {
  name: "Designers",
  extendedDetails: false,
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               | Example                                                                                                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                    | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | The user group's name.                                                                                    | Designers                                                                                                 |
| `extendedDetails`                                                                                         | *boolean*                                                                                                 | :heavy_minus_sign:                                                                                        | Whether to only return extended (true) or basic information about the group (false).<br/>**Default**: false.<br/> | false                                                                                                     |