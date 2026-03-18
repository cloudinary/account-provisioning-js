# MetricUsage

## Example Usage

```typescript
import { MetricUsage } from "@cloudinary/account-provisioning";

let value: MetricUsage = {
  cycles: [
    {
      fromDay: new Date("2024-08-21"),
      toDay: new Date("2024-09-20"),
      usage: 25641.55,
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `metric`                                                                     | *string*                                                                     | :heavy_minus_sign:                                                           | The type of metric being measured (e.g., "credit").                          |
| `limit`                                                                      | *number*                                                                     | :heavy_minus_sign:                                                           | The limit for this metric in the plan.                                       |
| `cycles`                                                                     | [models.Cycles](../models/cycles.md)[]                                       | :heavy_minus_sign:                                                           | Full usage details per billing cycle (monthly or annual, depending on plan). |
| `monthlyCycles`                                                              | [models.MonthlyCycles](../models/monthly-cycles.md)[]                        | :heavy_minus_sign:                                                           | Monthly-level breakdown within a single annual cycle.                        |