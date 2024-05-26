/**
 * @summary Test Run Summary
 *
 * Most important information about a test run.
 *
 */
class TestRunSummary {
	/**
	 * Create a TestRunSummary.
	 * @member {string} [date] Date of the test run.
	 * @member {string} [statusDescription] Human-readable status of the test
	 * run.
	 * @member {number} [failed] Number of failed tests
	 * @member {number} [passed] Number of passed tests
	 * @member {boolean} [completed] Tells whether the test run has completed
	 */
	constructor() {}

	/**
	 * Defines the metadata of TestRunSummary
	 *
	 * @returns {object} metadata of TestRunSummary
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "TestRunSummary",
			type: {
				name: "Composite",
				className: "TestRunSummary",
				modelProperties: {
					date: {
						required: false,
						serializedName: "date",
						type: {
							name: "String",
						},
					},
					statusDescription: {
						required: false,
						serializedName: "statusDescription",
						type: {
							name: "String",
						},
					},
					failed: {
						required: false,
						serializedName: "failed",
						type: {
							name: "Number",
						},
					},
					passed: {
						required: false,
						serializedName: "passed",
						type: {
							name: "Number",
						},
					},
					completed: {
						required: false,
						serializedName: "completed",
						type: {
							name: "Boolean",
						},
					},
				},
			},
		};
	}
}

module.exports = TestRunSummary;
