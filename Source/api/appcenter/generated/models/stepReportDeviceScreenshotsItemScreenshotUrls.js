/**
 * Class representing a StepReportDeviceScreenshotsItemScreenshotUrls.
 */
class StepReportDeviceScreenshotsItemScreenshotUrls {
	/**
	 * Create a StepReportDeviceScreenshotsItemScreenshotUrls.
	 * @member {string} original
	 * @member {string} small
	 * @member {string} medium
	 * @member {string} large
	 */
	constructor() {}

	/**
	 * Defines the metadata of StepReportDeviceScreenshotsItemScreenshotUrls
	 *
	 * @returns {object} metadata of StepReportDeviceScreenshotsItemScreenshotUrls
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "StepReport_deviceScreenshotsItem_screenshot_urls",
			type: {
				name: "Composite",
				className: "StepReportDeviceScreenshotsItemScreenshotUrls",
				modelProperties: {
					original: {
						required: true,
						serializedName: "original",
						type: {
							name: "String",
						},
					},
					small: {
						required: true,
						serializedName: "small",
						type: {
							name: "String",
						},
					},
					medium: {
						required: true,
						serializedName: "medium",
						type: {
							name: "String",
						},
					},
					large: {
						required: true,
						serializedName: "large",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = StepReportDeviceScreenshotsItemScreenshotUrls;
