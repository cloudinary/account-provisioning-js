# BillingUsageResponse

## Example Usage

```typescript
import { BillingUsageResponse } from "@cloudinary/account-provisioning";
import { RFCDate } from "@cloudinary/account-provisioning/types";

let value: BillingUsageResponse = {
  metricUsage: [
    {
      cycles: [
        {
          fromDay: new RFCDate("2024-08-21"),
          toDay: new RFCDate("2024-09-20"),
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
| `metricUsage`                                             | [models.MetricUsage](../models/metricusage.md)[]          | :heavy_minus_sign:                                        | N/A                                                       |