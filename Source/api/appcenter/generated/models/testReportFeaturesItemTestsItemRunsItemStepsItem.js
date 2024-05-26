const models = require("./index");

/**
 * Class representing a TestReportFeaturesItemTestsItemRunsItemStepsItem.
 */
class TestReportFeaturesItemTestsItemRunsItemStepsItem {
	/**
	 * Create a TestReportFeaturesItemTestsItemRunsItemStepsItem.
	 * @member {string} [stepName]
	 * @member {string} [id]
	 * @member {array} [stepExecutions]
	 * @member {number} [failed]
	 * @member {number} [skipped]
	 * @member {string} [stepReportUrl]
	 */
	constructor() {}

	/**
	 * Defines the metadata of TestReportFeaturesItemTestsItemRunsItemStepsItem
	 *
	 * @returns {object} metadata of TestReportFeaturesItemTestsItemRunsItemStepsItem
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName:
				"TestReport_featuresItem_testsItem_runsItem_stepsItem",
			type: {
				name: "Composite",
				className: "TestReportFeaturesItemTestsItemRunsItemStepsItem",
				modelProperties: {
					stepName: {
						required: false,
						serializedName: "stepName",
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
					stepExecutions: {
						required: false,
						serializedName: "stepExecutions",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName:
									"TestReportFeaturesItemTestsItemRunsItemStepsItemStepExecutionsItemElementType",
								type: {
									name: "Composite",
									className:
										"TestReportFeaturesItemTestsItemRunsItemStepsItemStepExecutionsItem",
								},
							},
						},
					},
					failed: {
						required: false,
						serializedName: "failed",
						type: {
							name: "Number",
						},
					},
					skipped: {
						required: false,
						serializedName: "skipped",
						type: {
							name: "Number",
						},
					},
					stepReportUrl: {
						required: false,
						serializedName: "step_report_url",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = TestReportFeaturesItemTestsItemRunsItemStepsItem;
