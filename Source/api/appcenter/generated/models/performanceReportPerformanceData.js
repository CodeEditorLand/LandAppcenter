const models = require("./index");

/**
 * Class representing a PerformanceReportPerformanceData.
 */
class PerformanceReportPerformanceData {
	/**
	 * Create a PerformanceReportPerformanceData.
	 * @member {array} steps
	 * @member {number} elapsedSecsEnd
	 * @member {number} elapsedSecsStart
	 * @member {number} elapsedSecs
	 * @member {string} id
	 */
	constructor() {}

	/**
	 * Defines the metadata of PerformanceReportPerformanceData
	 *
	 * @returns {object} metadata of PerformanceReportPerformanceData
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "PerformanceReport_performance_data",
			type: {
				name: "Composite",
				className: "PerformanceReportPerformanceData",
				modelProperties: {
					steps: {
						required: true,
						serializedName: "steps",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName:
									"PerformanceReportPerformanceDataStepsItemElementType",
								type: {
									name: "Composite",
									className:
										"PerformanceReportPerformanceDataStepsItem",
								},
							},
						},
					},
					elapsedSecsEnd: {
						required: true,
						serializedName: "elapsed-secs-end",
						type: {
							name: "Number",
						},
					},
					elapsedSecsStart: {
						required: true,
						serializedName: "elapsed-secs-start",
						type: {
							name: "Number",
						},
					},
					elapsedSecs: {
						required: true,
						serializedName: "elapsed-secs",
						type: {
							name: "Number",
						},
					},
					id: {
						required: true,
						serializedName: "id",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = PerformanceReportPerformanceData;
