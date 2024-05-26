/**
 * Class representing a OrganizationResponse.
 */
class OrganizationResponse {
	/**
	 * Create a OrganizationResponse.
	 * @member {string} id The internal unique id (UUID) of the organization.
	 * @member {string} displayName The display name of the organization
	 * @member {string} name The slug name of the organization
	 * @member {string} origin The creation origin of this organization. Possible
	 * values include: 'appcenter', 'hockeyapp'
	 * @member {string} createdAt The creation date of this organization
	 * @member {string} updatedAt The date the organization was last updated at
	 */
	constructor() {}

	/**
	 * Defines the metadata of OrganizationResponse
	 *
	 * @returns {object} metadata of OrganizationResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "OrganizationResponse",
			type: {
				name: "Composite",
				className: "OrganizationResponse",
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
					createdAt: {
						required: true,
						serializedName: "created_at",
						type: {
							name: "String",
						},
					},
					updatedAt: {
						required: true,
						serializedName: "updated_at",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = OrganizationResponse;
