const models = require("./index");

/**
 * Class representing a TestReportFeaturesItemTestsItem.
 */
class TestReportFeaturesItemTestsItem {
	/**
	 * Create a TestReportFeaturesItemTestsItem.
	 * @member {string} [testName]
	 * @member {array} [runs]
	 * @member {number} [peakMemory]
	 * @member {number} [peakDuration]
	 */
	constructor() {}

	/**
	 * Defines the metadata of TestReportFeaturesItemTestsItem
	 *
	 * @returns {object} metadata of TestReportFeaturesItemTestsItem
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "TestReport_featuresItem_testsItem",
			type: {
				name: "Composite",
				className: "TestReportFeaturesItemTestsItem",
				modelProperties: {
					testName: {
						required: false,
						serializedName: "testName",
						type: {
							name: "String",
						},
					},
					runs: {
						required: false,
						serializedName: "runs",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName:
									"TestReportFeaturesItemTestsItemRunsItemElementType",
								type: {
									name: "Composite",
									className:
										"TestReportFeaturesItemTestsItemRunsItem",
								},
							},
						},
					},
					peakMemory: {
						required: false,
						serializedName: "peakMemory",
						type: {
							name: "Number",
						},
					},
					peakDuration: {
						required: false,
						serializedName: "peakDuration",
						type: {
							name: "Number",
						},
					},
				},
			},
		};
	}
}

module.exports = TestReportFeaturesItemTestsItem;
