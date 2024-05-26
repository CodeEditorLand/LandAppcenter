/**
 * Class representing a TeamUserResponse.
 */
class TeamUserResponse {
	/**
	 * Create a TeamUserResponse.
	 * @member {string} email The email address of the user
	 * @member {string} displayName The full name of the user. Might for example
	 * be first and last name
	 * @member {string} name The unique name that is used to identify the user.
	 * @member {object} role The role of the user has within the team
	 */
	constructor() {}

	/**
	 * Defines the metadata of TeamUserResponse
	 *
	 * @returns {object} metadata of TeamUserResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "TeamUserResponse",
			type: {
				name: "Composite",
				className: "TeamUserResponse",
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
							name: "Object",
						},
					},
				},
			},
		};
	}
}

module.exports = TeamUserResponse;
