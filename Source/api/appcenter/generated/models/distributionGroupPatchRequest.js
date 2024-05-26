/**
 * Class representing a DistributionGroupPatchRequest.
 */
class DistributionGroupPatchRequest {
	/**
	 * Create a DistributionGroupPatchRequest.
	 * @member {string} [name] The name of the distribution group
	 * @member {boolean} [isPublic] Whether the distribution group is public
	 */
	constructor() {}

	/**
	 * Defines the metadata of DistributionGroupPatchRequest
	 *
	 * @returns {object} metadata of DistributionGroupPatchRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "DistributionGroupPatchRequest",
			type: {
				name: "Composite",
				className: "DistributionGroupPatchRequest",
				modelProperties: {
					name: {
						required: false,
						serializedName: "name",
						type: {
							name: "String",
						},
					},
					isPublic: {
						required: false,
						serializedName: "is_public",
						type: {
							name: "Boolean",
						},
					},
				},
			},
		};
	}
}

module.exports = DistributionGroupPatchRequest;
