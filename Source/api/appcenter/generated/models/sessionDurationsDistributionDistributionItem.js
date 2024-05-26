/**
 * Class representing a SessionDurationsDistributionDistributionItem.
 */
class SessionDurationsDistributionDistributionItem {
	/**
	 * Create a SessionDurationsDistributionDistributionItem.
	 * @member {string} [bucket] the bucket name
	 * @member {number} [count] the count of sessions in current bucket
	 */
	constructor() {}

	/**
	 * Defines the metadata of SessionDurationsDistributionDistributionItem
	 *
	 * @returns {object} metadata of SessionDurationsDistributionDistributionItem
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "SessionDurationsDistribution_distributionItem",
			type: {
				name: "Composite",
				className: "SessionDurationsDistributionDistributionItem",
				modelProperties: {
					bucket: {
						required: false,
						serializedName: "bucket",
						type: {
							name: "String",
						},
					},
					count: {
						required: false,
						serializedName: "count",
						type: {
							name: "Number",
						},
					},
				},
			},
		};
	}
}

module.exports = SessionDurationsDistributionDistributionItem;
