const models = require("./index");

/**
 * @summary Test Series
 *
 * Summary of a single test series
 *
 */
class TestSeries {
	/**
	 * Create a TestSeries.
	 * @member {string} slug Unique, human-readable identifier of the test series
	 * @member {string} name Name of the test series
	 * @member {string} [mostRecentActivity] Date of the latest test run that
	 * used this test series
	 * @member {array} [testRuns] Most recent test runs
	 */
	constructor() {}

	/**
	 * Defines the metadata of TestSeries
	 *
	 * @returns {object} metadata of TestSeries
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "TestSeries",
			type: {
				name: "Composite",
				className: "TestSeries",
				modelProperties: {
					slug: {
						required: true,
						serializedName: "slug",
						type: {
							name: "String",
						},
					},
					name: {
						required: true,
						serializedName: "name",
						type: {
							name: "String",
						},
					},
					mostRecentActivity: {
						required: false,
						serializedName: "mostRecentActivity",
						type: {
							name: "String",
						},
					},
					testRuns: {
						required: false,
						serializedName: "testRuns",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "TestRunSummaryElementType",
								type: {
									name: "Composite",
									className: "TestRunSummary",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = TestSeries;
