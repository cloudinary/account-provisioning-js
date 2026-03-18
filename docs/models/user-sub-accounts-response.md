# UserSubAccountsResponse

## Example Usage

```typescript
import { UserSubAccountsResponse } from "@cloudinary/account-provisioning";

let value: UserSubAccountsResponse = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `subAccounts`                                                              | [models.SubAccountSummary](../models/sub-account-summary.md)[]             | :heavy_minus_sign:                                                         | A list of product environments (sub-accounts) that the user has access to. |