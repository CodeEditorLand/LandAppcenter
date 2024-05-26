const models = require("./index");

/**
 * Class representing a TestReportFeaturesItemTestsItemRunsItem.
 */
class TestReportFeaturesItemTestsItemRunsItem {
	/**
	 * Create a TestReportFeaturesItemTestsItemRunsItem.
	 * @member {number} [number]
	 * @member {array} [steps]
	 * @member {number} [failed]
	 * @member {number} [skipped]
	 * @member {string} [reportUrl]
	 * @member {string} [id]
	 */
	constructor() {}

	/**
	 * Defines the metadata of TestReportFeaturesItemTestsItemRunsItem
	 *
	 * @returns {object} metadata of TestReportFeaturesItemTestsItemRunsItem
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "TestReport_featuresItem_testsItem_runsItem",
			type: {
				name: "Composite",
				className: "TestReportFeaturesItemTestsItemRunsItem",
				modelProperties: {
					number: {
						required: false,
						serializedName: "number",
						type: {
							name: "Number",
						},
					},
					steps: {
						required: false,
						serializedName: "steps",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName:
									"TestReportFeaturesItemTestsItemRunsItemStepsItemElementType",
								type: {
									name: "Composite",
									className:
										"TestReportFeaturesItemTestsItemRunsItemStepsItem",
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
					reportUrl: {
						required: false,
						serializedName: "report_url",
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

module.exports = TestReportFeaturesItemTestsItemRunsItem;
