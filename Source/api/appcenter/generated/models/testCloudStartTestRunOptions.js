/**
 * @summary Test Cloud Start Test Run Options
 *
 * Options required to start the test run
 *
 */
class TestCloudStartTestRunOptions {
	/**
	 * Create a TestCloudStartTestRunOptions.
	 * @member {string} testFramework Test framework used by tests.
	 * @member {string} deviceSelection Device selection string.
	 * @member {string} [language] Language that should be used to run tests.
	 * @member {string} [locale] Locale that should be used to run tests.
	 * @member {string} [testSeries] Name of the test series.
	 * @member {object} [testParameters] A JSON dictionary with additional test
	 * parameters
	 */
	constructor() {}

	/**
	 * Defines the metadata of TestCloudStartTestRunOptions
	 *
	 * @returns {object} metadata of TestCloudStartTestRunOptions
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "TestCloudStartTestRunOptions",
			type: {
				name: "Composite",
				className: "TestCloudStartTestRunOptions",
				modelProperties: {
					testFramework: {
						required: true,
						serializedName: "test_framework",
						type: {
							name: "String",
						},
					},
					deviceSelection: {
						required: true,
						serializedName: "device_selection",
						type: {
							name: "String",
						},
					},
					language: {
						required: false,
						serializedName: "language",
						type: {
							name: "String",
						},
					},
					locale: {
						required: false,
						serializedName: "locale",
						type: {
							name: "String",
						},
					},
					testSeries: {
						required: false,
						serializedName: "test_series",
						type: {
							name: "String",
						},
					},
					testParameters: {
						required: false,
						serializedName: "test_parameters",
						type: {
							name: "Object",
						},
					},
				},
			},
		};
	}
}

module.exports = TestCloudStartTestRunOptions;
