const models = require("./index");

/**
 * Class representing a SessionDurationsDistribution.
 */
class SessionDurationsDistribution {
	/**
	 * Create a SessionDurationsDistribution.
	 * @member {array} [distribution] the count of sessions in these buckets
	 * @member {string} [previousAverageDuration] the previous average session
	 * duration for previous time range
	 * @member {string} [averageDuration] the average session duration for
	 * current time range
	 */
	constructor() {}

	/**
	 * Defines the metadata of SessionDurationsDistribution
	 *
	 * @returns {object} metadata of SessionDurationsDistribution
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "SessionDurationsDistribution",
			type: {
				name: "Composite",
				className: "SessionDurationsDistribution",
				modelProperties: {
					distribution: {
						required: false,
						serializedName: "distribution",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName:
									"SessionDurationsDistributionDistributionItemElementType",
								type: {
									name: "Composite",
									className:
										"SessionDurationsDistributionDistributionItem",
								},
							},
						},
					},
					previousAverageDuration: {
						required: false,
						serializedName: "previous_average_duration",
						type: {
							name: "String",
						},
					},
					averageDuration: {
						required: false,
						serializedName: "average_duration",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = SessionDurationsDistribution;
