/**
 * StoreSecretResponse
 *
 */
class StoreSecretResponse {
	/**
	 * Create a StoreSecretResponse.
	 * @member {string} [id] Store id
	 * @member {string} [name] Store Name
	 * @member {string} [type] Store Type
	 * @member {string} [secret] Secret Json
	 * @member {string} [tenantId] Tenant Id for Intune
	 */
	constructor() {}

	/**
	 * Defines the metadata of StoreSecretResponse
	 *
	 * @returns {object} metadata of StoreSecretResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "StoreSecretResponse",
			type: {
				name: "Composite",
				className: "StoreSecretResponse",
				modelProperties: {
					id: {
						required: false,
						serializedName: "id",
						type: {
							name: "String",
						},
					},
					name: {
						required: false,
						serializedName: "name",
						type: {
							name: "String",
						},
					},
					type: {
						required: false,
						serializedName: "type",
						type: {
							name: "String",
						},
					},
					secret: {
						required: false,
						serializedName: "secret",
						type: {
							name: "String",
						},
					},
					tenantId: {
						required: false,
						serializedName: "tenant_id",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = StoreSecretResponse;
