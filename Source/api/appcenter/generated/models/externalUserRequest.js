/**
 * Class representing a ExternalUserRequest.
 */
class ExternalUserRequest {
	/**
	 * Create a ExternalUserRequest.
	 * @member {string} [appInvitation] The token of the app invitation which
	 * lead to signup
	 * @member {string} [testerInvitation] The token of the test invitation which
	 * lead to signup
	 * @member {string} [organizationInvitation] The token of the organization
	 * invitation which lead to signup
	 * @member {string} [avatarUrl] The avatar URL of the user
	 * @member {string} [displayName] The full name of the user. Might for
	 * example be first and last name
	 * @member {string} email The email address of the user
	 * @member {string} [name] The unique name that is used to identify the user.
	 * If no explicit value is given, a default will be auto-generated from the
	 * `display_name` value
	 */
	constructor() {}

	/**
	 * Defines the metadata of ExternalUserRequest
	 *
	 * @returns {object} metadata of ExternalUserRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ExternalUserRequest",
			type: {
				name: "Composite",
				className: "ExternalUserRequest",
				modelProperties: {
					appInvitation: {
						required: false,
						serializedName: "app_invitation",
						type: {
							name: "String",
						},
					},
					testerInvitation: {
						required: false,
						serializedName: "tester_invitation",
						type: {
							name: "String",
						},
					},
					organizationInvitation: {
						required: false,
						serializedName: "organization_invitation",
						type: {
							name: "String",
						},
					},
					avatarUrl: {
						required: false,
						serializedName: "avatar_url",
						type: {
							name: "String",
						},
					},
					displayName: {
						required: false,
						serializedName: "display_name",
						type: {
							name: "String",
						},
					},
					email: {
						required: true,
						serializedName: "email",
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
				},
			},
		};
	}
}

module.exports = ExternalUserRequest;
