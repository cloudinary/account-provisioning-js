# ScopeTypeEnum

Specifies where the role/policy is applied, either at the account level or within product environments.

## Example Usage

```typescript
import { ScopeTypeEnum } from "@cloudinary/account-provisioning";

let value: ScopeTypeEnum = "prodenv";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"account" | "prodenv" | Unrecognized<string>
```