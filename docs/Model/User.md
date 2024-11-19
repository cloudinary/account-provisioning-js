# .User

## Properties

| Name         | Type          | Description   | Notes         |
| ------------ | ------------- | ------------- | ------------- |
| **id** | **string** | The user\&#39;s ID. | [optional]  |
| **name** | **string** | The user\&#39;s name. | [optional]  |
| **role** | **string** | The user\&#39;s role. | [optional]  |
| **email** | **string** | The user\&#39;s email. | [optional]  |
| **pending** | **boolean** | Whether the user is pending. | [optional]  |
| **enabled** | **boolean** | Whether the user is enabled. | [optional]  |
| **createdAt** | **Date** | The date when the user was created. | [optional]  |
| **updatedAt** | **Date** | The date when the user was last updated. | [optional]  |
| **lastLogin** | **Date** | The date when the user was last logged in. | [optional]  |
| **allSubAccounts** | **boolean** |  | [optional]  |
| **groups** | [**Array&lt;UserGroupSummary&gt;**](UserGroupSummary.md) | The list of user groups. | [optional]  |
| **subAccountIds** | **string** | The list of the product environments IDs. | [optional]  |


