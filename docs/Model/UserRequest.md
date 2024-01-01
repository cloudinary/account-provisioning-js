# .UserRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The user\&#39;s name. | [optional] 
**email** | **string** | A unique email address, which serves as the login name and notification address. | [optional] 
**role** | **string** | The role to assign. | [optional] 
**subAccountIds** | **Array&lt;string&gt;** | A list of product environment IDs that this user can access. Ignored if the role is &#x60;master_admin&#x60;.  **Default**: all product environments.  | [optional] 
**enabled** | **boolean** | Whether the user is enabled. **Default**: true.  | [optional] 


    ## Enum: UserRequest.RoleEnum

    Name | Value | Description
    ------------ | ------------- | -------------
    
        **MasterAdmin** | `'master_admin'` | The role to assign.
    
        **Admin** | `'admin'` | The role to assign.
    
        **Billing** | `'billing'` | The role to assign.
    
        **TechnicalAdmin** | `'technical_admin'` | The role to assign.
    
        **Reports** | `'reports'` | The role to assign.
    
        **MediaLibraryAdmin** | `'media_library_admin'` | The role to assign.
    
        **MediaLibraryUser** | `'media_library_user'` | The role to assign.
    



