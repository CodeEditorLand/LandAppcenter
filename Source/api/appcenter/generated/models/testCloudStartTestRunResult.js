/**
 * @summary Test Cloud Test Run Start Result
 *
 * Result of starting a test run
 *
 */
class TestCloudStartTestRunResult {
	/**
	 * Create a TestCloudStartTestRunResult.
	 * @member {array} [acceptedDevices] List with names of accepted devices
	 * @member {array} [rejectedDevices] List with names and descriptions of
	 * rejected devices
	 */
	constructor() {}

	/**
	 * Defines the metadata of TestCloudStartTestRunResult
	 *
	 * @returns {object} metadata of TestCloudStartTestRunResult
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "TestCloudStartTestRunResult",
			type: {
				name: "Composite",
				className: "TestCloudStartTestRunResult",
				modelProperties: {
					acceptedDevices: {
						required: false,
						serializedName: "accepted_devices",
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
					rejectedDevices: {
						required: false,
						serializedName: "rejected_devices",
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
				},
			},
		};
	}
}

module.exports = TestCloudStartTestRunResult;
