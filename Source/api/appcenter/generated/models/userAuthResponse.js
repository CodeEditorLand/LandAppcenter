/**
 * Class representing a UserAuthResponse.
 */
class UserAuthResponse {
	/**
	 * Create a UserAuthResponse.
	 * @member {string} id The unique id (UUID) of the user
	 * @member {string} displayName The full name of the user. Might for example
	 * be first and last name
	 * @member {string} email The email address of the user
	 * @member {string} [externalProvider] The name of the external auth provider
	 * @member {string} [externalUserId] The user ID given by the external
	 * provider
	 * @member {string} name The unique name that is used to identify the user
	 * @member {string} origin The creation origin of this user. Possible values
	 * include: 'appcenter', 'hockeyapp', 'codepush'
	 */
	constructor() {}

	/**
	 * Defines the metadata of UserAuthResponse
	 *
	 * @returns {object} metadata of UserAuthResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "UserAuthResponse",
			type: {
				name: "Composite",
				className: "UserAuthResponse",
				modelProperties: {
					id: {
						required: true,
						serializedName: "id",
						type: {
							name: "String",
						},
					},
					displayName: {
						required: true,
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
					externalProvider: {
						required: false,
						serializedName: "external_provider",
						type: {
							name: "String",
						},
					},
					externalUserId: {
						required: false,
						serializedName: "external_user_id",
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
					origin: {
						required: true,
						serializedName: "origin",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = UserAuthResponse;
