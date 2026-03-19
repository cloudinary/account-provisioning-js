# ManagementTypeEnum

Specifies whether the role's policies are managed by Cloudinary (`system`) or by the user (`custom`).

## Example Usage

```typescript
import { ManagementTypeEnum } from "@cloudinary/account-provisioning";

let value: ManagementTypeEnum = "system";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"system" | "custom" | Unrecognized<string>
```