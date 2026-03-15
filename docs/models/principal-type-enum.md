# PrincipalTypeEnum

The type of principal.

## Example Usage

```typescript
import { PrincipalTypeEnum } from "@cloudinary/account-provisioning";

let value: PrincipalTypeEnum = "user";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"user" | "group" | "apiKey" | "provisioningKey" | Unrecognized<string>
```