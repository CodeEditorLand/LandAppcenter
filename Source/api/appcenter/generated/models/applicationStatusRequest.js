/**
 * The information needed to fetch the status of an application
 *
 */
class ApplicationStatusRequest {
	/**
	 * Create a ApplicationStatusRequest.
	 * @member {string} username The username for the Apple Developer account.
	 * @member {string} password The password for the Apple Developer account.
	 * @member {string} bundleIdentifier Bundle Identifier of application in
	 * Apple Itunes portal.
	 * @member {string} trackIdentifier Track Identifier for which the status is
	 * to be fetched.
	 * @member {string} [buildVersion] The version of build for which real time
	 * status is to be fetched.
	 * @member {string} [teamIdentifier] Identifier of the team to use when
	 * logged in.
	 * @member {string} [trainVersion] The Train version for which the status is
	 * to be fetched.
	 */
	constructor() {}

	/**
	 * Defines the metadata of ApplicationStatusRequest
	 *
	 * @returns {object} metadata of ApplicationStatusRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ApplicationStatusRequest",
			type: {
				name: "Composite",
				className: "ApplicationStatusRequest",
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
					bundleIdentifier: {
						required: true,
						serializedName: "bundle_identifier",
						type: {
							name: "String",
						},
					},
					trackIdentifier: {
						required: true,
						serializedName: "track_identifier",
						type: {
							name: "String",
						},
					},
					buildVersion: {
						required: false,
						serializedName: "build_version",
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
					trainVersion: {
						required: false,
						serializedName: "train_version",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = ApplicationStatusRequest;
