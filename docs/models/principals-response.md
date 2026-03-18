# PrincipalsResponse

## Example Usage

```typescript
import { PrincipalsResponse } from "@cloudinary/account-provisioning";

let value: PrincipalsResponse = {
  data: [
    {
      id: "1234abc",
      type: "user",
      scopeType: "prodenv",
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `data`                                                                 | [models.PrincipalResponseData](../models/principal-response-data.md)[] | :heavy_minus_sign:                                                     | An array of principals.                                                |