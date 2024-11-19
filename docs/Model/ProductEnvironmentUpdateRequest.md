# .ProductEnvironmentUpdateRequest

## Properties

| Name         | Type          | Description   | Notes         |
| ------------ | ------------- | ------------- | ------------- |
| **name** | **string** | The display name for the product environment. | [optional]  |
| **cloudName** | **string** | The Cloudinary cloud name. An error is returned if the requested name already exists. **Note**: Can only be changed for accounts with fewer than 1000 images.  | [optional]  |
| **customAttributes** | **object** | Custom attributes associated with the product environment. | [optional]  |
| **enabled** | **boolean** | Whether the product environment is enabled. **Default**: true.  | [optional]  |


