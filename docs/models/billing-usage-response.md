# BillingUsageResponse

## Example Usage

```typescript
import { BillingUsageResponse } from "@cloudinary/account-provisioning";

let value: BillingUsageResponse = {
  metricUsage: [
    {
      cycles: [
        {
          fromDay: new Date("2024-08-21"),
          toDay: new Date("2024-09-20"),
          usage: 25641.55,
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `planName`                                                | *string*                                                  | :heavy_minus_sign:                                        | The name of the plan (e.g., "Pro PAYG", "Advanced PAYG"). |
| `metricUsage`                                             | [models.MetricUsage](../models/metric-usage.md)[]         | :heavy_minus_sign:                                        | N/A                                                       |