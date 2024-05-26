/**
 * Apple credentials needed to log into the Apple Developer Portal
 *
 */
class AppleLoginRequest {
	/**
	 * Create a AppleLoginRequest.
	 * @member {string} username The username for the Apple Developer account.
	 * @member {string} password The password for the Apple Developer account.
	 * @member {string} [teamIdentifier] Identifier of the team to use when
	 * logged in.
	 */
	constructor() {}

	/**
	 * Defines the metadata of AppleLoginRequest
	 *
	 * @returns {object} metadata of AppleLoginRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AppleLoginRequest",
			type: {
				name: "Composite",
				className: "AppleLoginRequest",
				modelProperties: {
					username: {
						required: true,
						serializedName: "username",
						type: {
							name: "String",
						},
					},
					password: {
						required: true,
						serializedName: "password",
						type: {
							name: "String",
						},
					},
					teamIdentifier: {
						required: false,
						serializedName: "team_identifier",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = AppleLoginRequest;
