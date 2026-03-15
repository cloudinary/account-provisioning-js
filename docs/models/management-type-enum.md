# ManagementTypeEnum

Specifies whether the role's policies are managed by Cloudinary (`system`) or by the user (`custom`).

## Example Usage

```typescript
import { ManagementTypeEnum } from "@cloudinary/account-provisioning";

let value: ManagementTypeEnum = "system";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"system" | "custom" | Unrecognized<string>
```