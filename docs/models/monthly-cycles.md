# MonthlyCycles

## Example Usage

```typescript
import { MonthlyCycles } from "@cloudinary/account-provisioning";

let value: MonthlyCycles = {};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `fromDay`                                                                                             | [Date](../types/rfcdate.md)                                                                           | :heavy_minus_sign:                                                                                    | The start date of the monthly billing cycle.                                                          |
| `toDay`                                                                                               | [Date](../types/rfcdate.md)                                                                           | :heavy_minus_sign:                                                                                    | The end date of the monthly billing cycle.                                                            |
| `usage`                                                                                               | *number*                                                                                              | :heavy_minus_sign:                                                                                    | Total usage for this monthly cycle.                                                                   |
| `breakdown`                                                                                           | [models.BillingUsageResponseBreakdown](../models/billing-usage-response-breakdown.md)                 | :heavy_minus_sign:                                                                                    | Usage breakdown by asset type and operation for the monthly cycle.                                    |
| `productEnvironmentBreakdown`                                                                         | [models.CloudAssetTypeBreakdown](../models/cloud-asset-type-breakdown.md)[]                           | :heavy_minus_sign:                                                                                    | Optional breakdown by product environment for the monthly cycle. May not be present in all responses. |