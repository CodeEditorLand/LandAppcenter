/**
 * Class representing a InternalUserRequest.
 */
class InternalUserRequest {
	/**
	 * Create a InternalUserRequest.
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
	 * @member {string} name The unique name that is used to identify the user.
	 * @member {string} password The password of the user. Needs to be at least 8
	 * characters long and contain at least one lower- and one uppercase letter.
	 */
	constructor() {}

	/**
	 * Defines the metadata of InternalUserRequest
	 *
	 * @returns {object} metadata of InternalUserRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "InternalUserRequest",
			type: {
				name: "Composite",
				className: "InternalUserRequest",
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
						required: true,
						serializedName: "name",
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
				},
			},
		};
	}
}

module.exports = InternalUserRequest;
