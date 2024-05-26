/**
 * Class representing a OrganizationUserResponse.
 */
class OrganizationUserResponse {
	/**
	 * Create a OrganizationUserResponse.
	 * @member {string} email The email address of the user
	 * @member {string} displayName The full name of the user. Might for example
	 * be first and last name
	 * @member {string} joinedAt The date when the user joined the organization
	 * @member {string} name The unique name that is used to identify the user.
	 * @member {string} role The role the user has within the organization
	 */
	constructor() {}

	/**
	 * Defines the metadata of OrganizationUserResponse
	 *
	 * @returns {object} metadata of OrganizationUserResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "OrganizationUserResponse",
			type: {
				name: "Composite",
				className: "OrganizationUserResponse",
				modelProperties: {
					email: {
						required: true,
						serializedName: "email",
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
					joinedAt: {
						required: true,
						serializedName: "joined_at",
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
					role: {
						required: true,
						serializedName: "role",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = OrganizationUserResponse;
