const models = require("./index");

/**
 * Class representing a IntuneStoreRequest.
 */
class IntuneStoreRequest {
	/**
	 * Create a IntuneStoreRequest.
	 * @member {object} [secretJson]
	 * @member {string} [secretJson.idToken] the id token of user
	 * @member {string} [secretJson.refreshToken] the refresh token for user
	 * @member {string} [secretJson.refreshTokenExpiry] the expiry of refresh
	 * token
	 * @member {object} [targetAudience]
	 * @member {string} [targetAudience.name] display name for the target
	 * audience/group
	 * @member {object} [appCategory]
	 * @member {string} [appCategory.name] display name for the app category
	 * @member {string} [tenantId] tenant id of the intune store
	 */
	constructor() {}

	/**
	 * Defines the metadata of IntuneStoreRequest
	 *
	 * @returns {object} metadata of IntuneStoreRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "IntuneStoreRequest",
			type: {
				name: "Composite",
				className: "IntuneStoreRequest",
				modelProperties: {
					secretJson: {
						required: false,
						serializedName: "secret_json",
						type: {
							name: "Composite",
							className: "IntuneSecretDetails",
						},
					},
					targetAudience: {
						required: false,
						serializedName: "target_audience",
						type: {
							name: "Composite",
							className: "IntuneTargetAudience",
						},
					},
					appCategory: {
						required: false,
						serializedName: "app_category",
						type: {
							name: "Composite",
							className: "IntuneAppCategory",
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

module.exports = IntuneStoreRequest;
