/**
 * Class representing a TestReportDeviceLogsItem.
 */
class TestReportDeviceLogsItem {
	/**
	 * Create a TestReportDeviceLogsItem.
	 * @member {string} [deviceSnapshotId]
	 * @member {string} [deviceLog]
	 * @member {string} [testLog]
	 * @member {string} [appiumLog]
	 */
	constructor() {}

	/**
	 * Defines the metadata of TestReportDeviceLogsItem
	 *
	 * @returns {object} metadata of TestReportDeviceLogsItem
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "TestReport_device_logsItem",
			type: {
				name: "Composite",
				className: "TestReportDeviceLogsItem",
				modelProperties: {
					deviceSnapshotId: {
						required: false,
						serializedName: "device_snapshot_id",
						type: {
							name: "String",
						},
					},
					deviceLog: {
						required: false,
						serializedName: "device_log",
						type: {
							name: "String",
						},
					},
					testLog: {
						required: false,
						serializedName: "test_log",
						type: {
							name: "String",
						},
					},
					appiumLog: {
						required: false,
						serializedName: "appium_log",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = TestReportDeviceLogsItem;
