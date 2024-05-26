/**
 * Apple details for fetching test flight groups from Apple Developer Portal.
 * pass either apple_id or bundle_identifier to get the test flight groups. if
 * both are passed than apple_id will take preference
 *
 */
class AppleTestFlightGroupRequest {
	/**
	 * Create a AppleTestFlightGroupRequest.
	 * @member {string} username The username for the Apple Developer account.
	 * @member {string} password The password for the Apple Developer account.
	 * @member {string} [appleId] apple_id of the app for which test flight
	 * groups need to be fetched.
	 * @member {string} [bundleIdentifier] apple_id of the app for which test
	 * flight groups need to be fetched.
	 * @member {string} [teamIdentifier] Identifier of the team to use when
	 * logged in.
	 */
	constructor() {}

	/**
	 * Defines the metadata of AppleTestFlightGroupRequest
	 *
	 * @returns {object} metadata of AppleTestFlightGroupRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AppleTestFlightGroupRequest",
			type: {
				name: "Composite",
				className: "AppleTestFlightGroupRequest",
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
					appleId: {
						required: false,
						serializedName: "apple_id",
						type: {
							name: "String",
						},
					},
					bundleIdentifier: {
						required: false,
						serializedName: "bundle_identifier",
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

module.exports = AppleTestFlightGroupRequest;
