const models = require("./index");

/**
 * Alerting Email Settings
 *
 */
class AlertEmailSettings {
	/**
	 * Create a AlertEmailSettings.
	 * @member {array} settings The settings the user has for the app
	 */
	constructor() {}

	/**
	 * Defines the metadata of AlertEmailSettings
	 *
	 * @returns {object} metadata of AlertEmailSettings
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AlertEmailSettings",
			type: {
				name: "Composite",
				className: "AlertEmailSettings",
				modelProperties: {
					settings: {
						required: true,
						serializedName: "settings",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "EventSettingElementType",
								type: {
									name: "Composite",
									className: "EventSetting",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = AlertEmailSettings;
