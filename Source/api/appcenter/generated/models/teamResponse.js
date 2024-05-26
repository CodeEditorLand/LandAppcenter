/**
 * Class representing a TeamResponse.
 */
class TeamResponse {
	/**
	 * Create a TeamResponse.
	 * @member {string} id The internal unique id (UUID) of the team.
	 * @member {string} name The name of the team
	 * @member {string} displayName The display name of the team
	 * @member {string} [description] The description of the team
	 */
	constructor() {}

	/**
	 * Defines the metadata of TeamResponse
	 *
	 * @returns {object} metadata of TeamResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "TeamResponse",
			type: {
				name: "Composite",
				className: "TeamResponse",
				modelProperties: {
					id: {
						required: true,
						serializedName: "id",
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
					displayName: {
						required: true,
						serializedName: "display_name",
						type: {
							name: "String",
						},
					},
					description: {
						required: false,
						serializedName: "description",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = TeamResponse;
