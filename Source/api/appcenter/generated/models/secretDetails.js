/**
 * Class representing a SecretDetails.
 */
class SecretDetails {
	/**
	 * Create a SecretDetails.
	 * @member {string} [idToken] the id token of user
	 * @member {string} [refreshToken] the refresh token for user
	 * @member {string} [refreshTokenExpiry] the expiry of refresh token
	 */
	constructor() {}

	/**
	 * Defines the metadata of SecretDetails
	 *
	 * @returns {object} metadata of SecretDetails
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "SecretDetails",
			type: {
				name: "Composite",
				className: "SecretDetails",
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

module.exports = SecretDetails;
