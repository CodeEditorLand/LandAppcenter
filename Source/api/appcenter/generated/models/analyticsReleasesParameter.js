/**
 * Class representing a AnalyticsReleasesParameter.
 */
class AnalyticsReleasesParameter {
	/**
	 * Create a AnalyticsReleasesParameter.
	 * @member {number} releaseId release id
	 * @member {string} distributionGroupId distribution group id
	 * @member {uuid} userId user id
	 */
	constructor() {}

	/**
	 * Defines the metadata of AnalyticsReleasesParameter
	 *
	 * @returns {object} metadata of AnalyticsReleasesParameter
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AnalyticsReleasesParameter",
			type: {
				name: "Composite",
				className: "AnalyticsReleasesParameter",
				modelProperties: {
					releaseId: {
						required: true,
						serializedName: "release_id",
						type: {
							name: "Number",
						},
					},
					distributionGroupId: {
						required: true,
						serializedName: "distribution_group_id",
						type: {
							name: "String",
						},
					},
					userId: {
						required: true,
						serializedName: "user_id",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = AnalyticsReleasesParameter;
