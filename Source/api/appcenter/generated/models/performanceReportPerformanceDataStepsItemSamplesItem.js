/**
 * Class representing a PerformanceReportPerformanceDataStepsItemSamplesItem.
 */
class PerformanceReportPerformanceDataStepsItemSamplesItem {
	/**
	 * Create a PerformanceReportPerformanceDataStepsItemSamplesItem.
	 * @member {number} [cpu]
	 * @member {number} [mem]
	 * @member {number} [elapsedSecs]
	 */
	constructor() {}

	/**
	 * Defines the metadata of PerformanceReportPerformanceDataStepsItemSamplesItem
	 *
	 * @returns {object} metadata of PerformanceReportPerformanceDataStepsItemSamplesItem
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName:
				"PerformanceReport_performance_data_stepsItem_samplesItem",
			type: {
				name: "Composite",
				className:
					"PerformanceReportPerformanceDataStepsItemSamplesItem",
				modelProperties: {
					cpu: {
						required: false,
						serializedName: "cpu",
						type: {
							name: "Number",
						},
					},
					mem: {
						required: false,
						serializedName: "mem",
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
				},
			},
		};
	}
}

module.exports = PerformanceReportPerformanceDataStepsItemSamplesItem;
