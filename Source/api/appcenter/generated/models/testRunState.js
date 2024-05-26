/**
 * @summary Test Run State
 *
 * Current status of a test run
 *
 */
class TestRunState {
	/**
	 * Create a TestRunState.
	 * @member {array} [message] Multi-line message that describes the status
	 * @member {number} [waitTime] Time (in seconds) that the client should wait
	 * for before checking the status again
	 * @member {number} [exitCode] The exit code that the client should use when
	 * exiting. Used for indicating status to the caller of the client.
	 * 0: test run completes with no failing tests
	 * 1: test run completes with at least one failing test
	 * 2: test run failed to complete. Status for test run is unknown
	 */
	constructor() {}

	/**
	 * Defines the metadata of TestRunState
	 *
	 * @returns {object} metadata of TestRunState
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "TestRunState",
			type: {
				name: "Composite",
				className: "TestRunState",
				modelProperties: {
					message: {
						required: false,
						serializedName: "message",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "StringElementType",
								type: {
									name: "String",
								},
							},
						},
					},
					waitTime: {
						required: false,
						serializedName: "wait_time",
						type: {
							name: "Number",
						},
					},
					exitCode: {
						required: false,
						serializedName: "exit_code",
						type: {
							name: "Number",
						},
					},
				},
			},
		};
	}
}

module.exports = TestRunState;
