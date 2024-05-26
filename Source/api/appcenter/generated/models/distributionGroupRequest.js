/**
 * Class representing a DistributionGroupRequest.
 */
class DistributionGroupRequest {
	/**
	 * Create a DistributionGroupRequest.
	 * @member {string} name The name of the distribution group
	 */
	constructor() {}

	/**
	 * Defines the metadata of DistributionGroupRequest
	 *
	 * @returns {object} metadata of DistributionGroupRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "DistributionGroupRequest",
			type: {
				name: "Composite",
				className: "DistributionGroupRequest",
				modelProperties: {
					name: {
						required: true,
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

module.exports = DistributionGroupRequest;
