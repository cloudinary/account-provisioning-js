# PolicyParameters

For roles with `permission_type` set to `content`, this defines the type of content the role's policies apply to:
- The content type can be: `folder_id` or `collection_id`.
- When assigning the role, provide the instance, e.g. `{"folder_id":"asdfjkl12347890"}`. This specification is passed to the `policy_statement` (Cedar).


## Example Usage

```typescript
import { PolicyParameters } from "@cloudinary/account-provisioning";

let value: PolicyParameters = {};
```

## Fields

| Field       | Type        | Required    | Description |
| ----------- | ----------- | ----------- | ----------- |