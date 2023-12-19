/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/**
 * Class representing a OrganizationResponse.
 */
class OrganizationResponse {
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
