const models = require("./index");

/**
 * Class representing a StepReportDeviceScreenshotsItem.
 */
class StepReportDeviceScreenshotsItem {
	/**
	 * Create a StepReportDeviceScreenshotsItem.
	 * @member {string} [id]
	 * @member {string} [deviceSnapshotId]
	 * @member {array} [stacktrace]
	 * @member {array} [crashData]
	 * @member {string} [status]
	 * @member {string} [title]
	 * @member {object} [screenshot]
	 * @member {object} [screenshot.urls]
	 * @member {string} [screenshot.urls.original]
	 * @member {string} [screenshot.urls.small]
	 * @member {string} [screenshot.urls.medium]
	 * @member {string} [screenshot.urls.large]
	 * @member {number} [screenshot.rotation]
	 * @member {boolean} [screenshot.landscape]
	 * @member {string} [logFile]
	 * @member {string} [appiumLogFile]
	 */
	constructor() {}

	/**
	 * Defines the metadata of StepReportDeviceScreenshotsItem
	 *
	 * @returns {object} metadata of StepReportDeviceScreenshotsItem
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "StepReport_deviceScreenshotsItem",
			type: {
				name: "Composite",
				className: "StepReportDeviceScreenshotsItem",
				modelProperties: {
					id: {
						required: false,
						serializedName: "id",
						type: {
							name: "String",
						},
					},
					deviceSnapshotId: {
						required: false,
						serializedName: "device_snapshot_id",
						type: {
							name: "String",
						},
					},
					stacktrace: {
						required: false,
						serializedName: "stacktrace",
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
					crashData: {
						required: false,
						serializedName: "crash_data",
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
					status: {
						required: false,
						serializedName: "status",
						type: {
							name: "String",
						},
					},
					title: {
						required: false,
						serializedName: "title",
						type: {
							name: "String",
						},
					},
					screenshot: {
						required: false,
						serializedName: "screenshot",
						type: {
							name: "Composite",
							className:
								"StepReportDeviceScreenshotsItemScreenshot",
						},
					},
					logFile: {
						required: false,
						serializedName: "log_file",
						type: {
							name: "String",
						},
					},
					appiumLogFile: {
						required: false,
						serializedName: "appium_log_file",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = StepReportDeviceScreenshotsItem;
