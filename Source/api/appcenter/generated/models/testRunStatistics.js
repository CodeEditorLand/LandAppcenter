/**
 * @summary Test Run Statistics
 *
 * Summary single test run on Xamarin Test Cloud
 *
 */
class TestRunStatistics {
	/**
	 * Create a TestRunStatistics.
	 * @member {number} [devices] Number of devices running the test
	 * @member {number} [devicesFinished] Number of finished devices
	 * @member {number} [devicesFailed] Number of failed devices
	 * @member {number} [total] Number of tests in total
	 * @member {number} [passed] Number of passed tests
	 * @member {number} [failed] Number of failed tests
	 * @member {number} [skipped] Number of skipped tests
	 * @member {number} [peakMemory] The max amount of MB used during the test
	 * run
	 * @member {number} [totalDeviceMinutes] The number of minutes of device time
	 * the test has been runnign
	 */
	constructor() {}

	/**
	 * Defines the metadata of TestRunStatistics
	 *
	 * @returns {object} metadata of TestRunStatistics
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "TestRunStatistics",
			type: {
				name: "Composite",
				className: "TestRunStatistics",
				modelProperties: {
					devices: {
						required: false,
						serializedName: "devices",
						type: {
							name: "Number",
						},
					},
					devicesFinished: {
						required: false,
						serializedName: "devicesFinished",
						type: {
							name: "Number",
						},
					},
					devicesFailed: {
						required: false,
						serializedName: "devicesFailed",
						type: {
							name: "Number",
						},
					},
					total: {
						required: false,
						serializedName: "total",
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
					totalDeviceMinutes: {
						required: false,
						serializedName: "totalDeviceMinutes",
						type: {
							name: "Number",
						},
					},
				},
			},
		};
	}
}

module.exports = TestRunStatistics;
