/**
 * Class representing a OrganizationRequest.
 */
class OrganizationRequest {
	/**
	 * Create a OrganizationRequest.
	 * @member {string} [displayName] The display name of the organization
	 * @member {string} [name] The name of the organization used in URLs
	 */
	constructor() {}

	/**
	 * Defines the metadata of OrganizationRequest
	 *
	 * @returns {object} metadata of OrganizationRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "OrganizationRequest",
			type: {
				name: "Composite",
				className: "OrganizationRequest",
				modelProperties: {
					displayName: {
						required: false,
						serializedName: "display_name",
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

module.exports = OrganizationRequest;
