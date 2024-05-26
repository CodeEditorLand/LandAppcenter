/**
 * Class representing a OrganizationPatchRequest.
 */
class OrganizationPatchRequest {
	/**
	 * Create a OrganizationPatchRequest.
	 * @member {string} [displayName] The full (friendly) name of the
	 * organization.
	 * @member {string} [name] The name of the organization used in URLs
	 */
	constructor() {}

	/**
	 * Defines the metadata of OrganizationPatchRequest
	 *
	 * @returns {object} metadata of OrganizationPatchRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "OrganizationPatchRequest",
			type: {
				name: "Composite",
				className: "OrganizationPatchRequest",
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

module.exports = OrganizationPatchRequest;
