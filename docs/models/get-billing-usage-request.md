# GetBillingUsageRequest

## Example Usage

```typescript
import { GetBillingUsageRequest } from "@cloudinary/account-provisioning";

let value: GetBillingUsageRequest = {
  year: 2024,
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `year`                                                                                     | *number*                                                                                   | :heavy_minus_sign:                                                                         | The year to retrieve billing usage for. Behavior depends on subscription type (see above). | 2024                                                                                       |
| `includeProdenvBreakdown`                                                                  | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | Whether to include usage details by product environment. **Default**: false.<br/>          |                                                                                            |