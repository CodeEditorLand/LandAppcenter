const models = require("./index");

/**
 * Class representing a TestReportFeaturesItem.
 */
class TestReportFeaturesItem {
	/**
	 * Create a TestReportFeaturesItem.
	 * @member {string} [name]
	 * @member {array} [tests]
	 * @member {number} [failed]
	 * @member {number} [skipped]
	 * @member {number} [peakMemory]
	 * @member {number} [peakDuration]
	 */
	constructor() {}

	/**
	 * Defines the metadata of TestReportFeaturesItem
	 *
	 * @returns {object} metadata of TestReportFeaturesItem
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "TestReport_featuresItem",
			type: {
				name: "Composite",
				className: "TestReportFeaturesItem",
				modelProperties: {
					name: {
						required: false,
						serializedName: "name",
						type: {
							name: "String",
						},
					},
					tests: {
						required: false,
						serializedName: "tests",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName:
									"TestReportFeaturesItemTestsItemElementType",
								type: {
									name: "Composite",
									className:
										"TestReportFeaturesItemTestsItem",
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

module.exports = TestReportFeaturesItem;
