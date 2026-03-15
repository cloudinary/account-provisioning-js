# PermissionTypeEnum

Specifies whether permissions apply globally or to specific content.

## Example Usage

```typescript
import { PermissionTypeEnum } from "@cloudinary/account-provisioning";

let value: PermissionTypeEnum = "global";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"global" | "content" | Unrecognized<string>
```