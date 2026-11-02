# ~~UpdateUserRole~~

The legacy role to assign. Deprecated: use `roles` (create) or `role_management` (update) instead. Can't be combined with `roles` or `role_management`.

> :warning: **DEPRECATED**: Use `roles` (create) or `role_management` (update) instead..

## Example Usage

```typescript
import { UpdateUserRole } from "@cloudinary/account-provisioning";

let value: UpdateUserRole = "technical_admin";
```

## Values

```typescript
"master_admin" | "admin" | "billing" | "technical_admin" | "reports" | "media_library_admin" | "media_library_user"
```