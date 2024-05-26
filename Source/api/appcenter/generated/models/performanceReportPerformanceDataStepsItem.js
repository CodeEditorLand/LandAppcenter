const models = require("./index");

/**
 * Class representing a PerformanceReportPerformanceDataStepsItem.
 */
class PerformanceReportPerformanceDataStepsItem {
	/**
	 * Create a PerformanceReportPerformanceDataStepsItem.
	 * @member {number} [avgCpu]
	 * @member {number} [avgMem]
	 * @member {array} [samples]
	 * @member {number} [elapsedSecsEnd]
	 * @member {number} [elapsedSecsStart]
	 * @member {number} [elapsedSecs]
	 * @member {string} [name]
	 * @member {string} [id]
	 */
	constructor() {}

	/**
	 * Defines the metadata of PerformanceReportPerformanceDataStepsItem
	 *
	 * @returns {object} metadata of PerformanceReportPerformanceDataStepsItem
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "PerformanceReport_performance_data_stepsItem",
			type: {
				name: "Composite",
				className: "PerformanceReportPerformanceDataStepsItem",
				modelProperties: {
					avgCpu: {
						required: false,
						serializedName: "avg-cpu",
						type: {
							name: "Number",
						},
					},
					avgMem: {
						required: false,
						serializedName: "avg-mem",
						type: {
							name: "Number",
						},
					},
					samples: {
						required: false,
						serializedName: "samples",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName:
									"PerformanceReportPerformanceDataStepsItemSamplesItemElementType",
								type: {
									name: "Composite",
									className:
										"PerformanceReportPerformanceDataStepsItemSamplesItem",
								},
							},
						},
					},
					elapsedSecsEnd: {
						required: false,
						serializedName: "elapsed-secs-end",
						type: {
							name: "Number",
						},
					},
					elapsedSecsStart: {
						required: false,
						serializedName: "elapsed-secs-start",
						type: {
							name: "Number",
						},
					},
					elapsedSecs: {
						required: false,
						serializedName: "elapsed-secs",
						type: {
							name: "Number",
						},
					},
					name: {
						required: false,
						serializedName: "name",
						type: {
							name: "String",
						},
					},
					id: {
						required: false,
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

module.exports = PerformanceReportPerformanceDataStepsItem;
