# ScopeTypeEnum

Specifies where the role/policy is applied, either at the account level or within product environments.

## Example Usage

```typescript
import { ScopeTypeEnum } from "@cloudinary/account-provisioning";

let value: ScopeTypeEnum = "prodenv";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"account" | "prodenv" | Unrecognized<string>
```