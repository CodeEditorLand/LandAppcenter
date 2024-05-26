/**
 * Class representing a IntuneSecretDetails.
 */
class IntuneSecretDetails {
	/**
	 * Create a IntuneSecretDetails.
	 * @member {string} [idToken] the id token of user
	 * @member {string} [refreshToken] the refresh token for user
	 * @member {string} [refreshTokenExpiry] the expiry of refresh token
	 */
	constructor() {}

	/**
	 * Defines the metadata of IntuneSecretDetails
	 *
	 * @returns {object} metadata of IntuneSecretDetails
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "IntuneSecretDetails",
			type: {
				name: "Composite",
				className: "IntuneSecretDetails",
				modelProperties: {
					idToken: {
						required: false,
						serializedName: "id_token",
						type: {
							name: "String",
						},
					},
					refreshToken: {
						required: false,
						serializedName: "refresh_token",
						type: {
							name: "String",
						},
					},
					refreshTokenExpiry: {
						required: false,
						serializedName: "refresh_token_expiry",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = IntuneSecretDetails;
