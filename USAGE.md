<!-- Start SDK Example Usage [usage] -->
```typescript
import { CldProvisioning } from "@cloudinary/account-provisioning";

const cldProvisioning = new CldProvisioning();

async function run() {
  const result = await cldProvisioning.productEnvironments.list({
    enabled: true,
    prefix: "product",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->