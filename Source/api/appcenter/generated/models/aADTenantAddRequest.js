/**
 * Class representing a AADTenantAddRequest.
 */
class AADTenantAddRequest {
	/**
	 * Create a AADTenantAddRequest.
	 * @member {string} userId The user wanting to add this tenant to the
	 * organization, must be an admin of the organization
	 * @member {string} aadTenantId The AAD tenant id
	 * @member {string} displayName The name of the AAD Tenant
	 */
	constructor() {}

	/**
	 * Defines the metadata of AADTenantAddRequest
	 *
	 * @returns {object} metadata of AADTenantAddRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AADTenantAddRequest",
			type: {
				name: "Composite",
				className: "AADTenantAddRequest",
				modelProperties: {
					userId: {
						required: true,
						serializedName: "user_id",
						type: {
							name: "String",
						},
					},
					aadTenantId: {
						required: true,
						serializedName: "aad_tenant_id",
						type: {
							name: "String",
						},
					},
					displayName: {
						required: true,
						serializedName: "display_name",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = AADTenantAddRequest;
