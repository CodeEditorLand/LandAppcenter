/**
 * Class representing a WindowsSecretDetails.
 */
class WindowsSecretDetails {
	/**
	 * Create a WindowsSecretDetails.
	 * @member {string} [idToken] the id token of user
	 * @member {string} [refreshToken] the refresh token for user
	 * @member {string} [refreshTokenExpiry] the expiry of refresh token
	 */
	constructor() {}

	/**
	 * Defines the metadata of WindowsSecretDetails
	 *
	 * @returns {object} metadata of WindowsSecretDetails
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "WindowsSecretDetails",
			type: {
				name: "Composite",
				className: "WindowsSecretDetails",
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

module.exports = WindowsSecretDetails;
