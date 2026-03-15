# Cycles

## Example Usage

```typescript
import { Cycles } from "@cloudinary/account-provisioning";

let value: Cycles = {
  fromDay: new Date("2024-08-21"),
  toDay: new Date("2024-09-20"),
  usage: 25641.55,
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `fromDay`                                                                       | [Date](../types/rfcdate.md)                                                     | :heavy_minus_sign:                                                              | The start date of the billing cycle.                                            | 2024-08-21                                                                      |
| `toDay`                                                                         | [Date](../types/rfcdate.md)                                                     | :heavy_minus_sign:                                                              | The end date of the billing cycle.                                              | 2024-09-20                                                                      |
| `usage`                                                                         | *number*                                                                        | :heavy_minus_sign:                                                              | Total usage for this cycle.                                                     | 25641.55                                                                        |
| `breakdown`                                                                     | [models.Breakdown](../models/breakdown.md)                                      | :heavy_minus_sign:                                                              | Usage breakdown by asset type and operation.                                    |                                                                                 |
| `productEnvironmentBreakdown`                                                   | [models.CloudAssetTypeBreakdown](../models/cloud-asset-type-breakdown.md)[]     | :heavy_minus_sign:                                                              | Optional breakdown by product environment. May not be present in all responses. |                                                                                 |