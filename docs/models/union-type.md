# UnionType

Whether to return users who last logged in within the specified date range (include) or those who didn't
last log in within the range (exclude). **Possible values**: `include`, `exclude`. **Default**: `include`.


## Example Usage

```typescript
import { UnionType } from "@cloudinary/account-provisioning";

let value: UnionType = "exclude";
```

## Values

```typescript
"include" | "exclude"
```