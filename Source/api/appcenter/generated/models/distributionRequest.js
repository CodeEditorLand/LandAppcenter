/**
 * Class representing a DistributionRequest.
 */
class DistributionRequest {
	/**
	 * Create a DistributionRequest.
	 * @member {string} distributionGroupId A distribution group ID or a store
	 * group ID
	 * @member {string} [releaseNotes] The release notes
	 */
	constructor() {}

	/**
	 * Defines the metadata of DistributionRequest
	 *
	 * @returns {object} metadata of DistributionRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "DistributionRequest",
			type: {
				name: "Composite",
				className: "DistributionRequest",
				modelProperties: {
					distributionGroupId: {
						required: true,
						serializedName: "distributionGroupId",
						type: {
							name: "String",
						},
					},
					releaseNotes: {
						required: false,
						serializedName: "releaseNotes",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = DistributionRequest;
