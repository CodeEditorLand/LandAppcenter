/**
 * Response for retrieving user interaction metrics.
 *
 */
class UserInteractionMetricsResponse {
	/**
	 * Create a UserInteractionMetricsResponse.
	 * @member {boolean} [lessThan100Apps] check if the user has less than 100
	 * apps.
	 * @member {boolean} [hasMoreThan1Release] check if the user's whole apps has
	 * more than 1 releases.
	 */
	constructor() {}

	/**
	 * Defines the metadata of UserInteractionMetricsResponse
	 *
	 * @returns {object} metadata of UserInteractionMetricsResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "UserInteractionMetricsResponse",
			type: {
				name: "Composite",
				className: "UserInteractionMetricsResponse",
				modelProperties: {
					lessThan100Apps: {
						required: false,
						serializedName: "less_than_100_apps",
						type: {
							name: "Boolean",
						},
					},
					hasMoreThan1Release: {
						required: false,
						serializedName: "has_more_than_1_release",
						type: {
							name: "Boolean",
						},
					},
				},
			},
		};
	}
}

module.exports = UserInteractionMetricsResponse;
