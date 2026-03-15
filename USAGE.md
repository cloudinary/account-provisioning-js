<!-- Start SDK Example Usage [usage] -->
```typescript
import { CldProvisioning } from "@cloudinary/account-provisioning";

const cldProvisioning = new CldProvisioning({
  accountId: "<id>",
  security: {
    provisioningApiKey: "CLOUDINARY_PROVISIONING_API_KEY",
    provisioningApiSecret: "CLOUDINARY_PROVISIONING_API_SECRET",
  },
});

async function run() {
  const result = await cldProvisioning.productEnvironments.list(
    true,
    undefined,
    undefined,
    "product",
  );

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->