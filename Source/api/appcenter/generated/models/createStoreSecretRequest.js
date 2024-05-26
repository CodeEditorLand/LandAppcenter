const models = require("./index");

/**
 * Class representing a CreateStoreSecretRequest.
 */
class CreateStoreSecretRequest {
	/**
	 * Create a CreateStoreSecretRequest.
	 * @member {object} [secretJson]
	 * @member {string} [secretJson.idToken] the id token of user
	 * @member {string} [secretJson.refreshToken] the refresh token for user
	 * @member {string} [secretJson.refreshTokenExpiry] the expiry of refresh
	 * token
	 * @member {string} [tenantId] the tenant id for user
	 */
	constructor() {}

	/**
	 * Defines the metadata of CreateStoreSecretRequest
	 *
	 * @returns {object} metadata of CreateStoreSecretRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "CreateStoreSecretRequest",
			type: {
				name: "Composite",
				className: "CreateStoreSecretRequest",
				modelProperties: {
					secretJson: {
						required: false,
						serializedName: "secret_json",
						type: {
							name: "Composite",
							className: "SecretDetails",
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

module.exports = CreateStoreSecretRequest;
