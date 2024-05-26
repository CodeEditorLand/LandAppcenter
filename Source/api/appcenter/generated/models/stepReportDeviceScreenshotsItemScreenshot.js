const models = require("./index");

/**
 * Class representing a StepReportDeviceScreenshotsItemScreenshot.
 */
class StepReportDeviceScreenshotsItemScreenshot {
	/**
	 * Create a StepReportDeviceScreenshotsItemScreenshot.
	 * @member {object} urls
	 * @member {string} [urls.original]
	 * @member {string} [urls.small]
	 * @member {string} [urls.medium]
	 * @member {string} [urls.large]
	 * @member {number} rotation
	 * @member {boolean} landscape
	 */
	constructor() {}

	/**
	 * Defines the metadata of StepReportDeviceScreenshotsItemScreenshot
	 *
	 * @returns {object} metadata of StepReportDeviceScreenshotsItemScreenshot
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "StepReport_deviceScreenshotsItem_screenshot",
			type: {
				name: "Composite",
				className: "StepReportDeviceScreenshotsItemScreenshot",
				modelProperties: {
					urls: {
						required: true,
						serializedName: "urls",
						type: {
							name: "Composite",
							className:
								"StepReportDeviceScreenshotsItemScreenshotUrls",
						},
					},
					rotation: {
						required: true,
						serializedName: "rotation",
						type: {
							name: "Number",
						},
					},
					landscape: {
						required: true,
						serializedName: "landscape",
						type: {
							name: "Boolean",
						},
					},
				},
			},
		};
	}
}

module.exports = StepReportDeviceScreenshotsItemScreenshot;
