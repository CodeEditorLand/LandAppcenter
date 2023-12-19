/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/**
 * @summary Test Run Statistics
 *
 * Summary single test run on Xamarin Test Cloud
 *
 */
class TestRunStatistics {
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
