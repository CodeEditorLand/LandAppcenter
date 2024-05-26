const models = require("./index");

/**
 * Alerting Email Settings of the user for a particular app
 *
 * @extends models['AlertUserEmailSettingsResult']
 */
class AlertUserAppEmailSettingsResult extends models[
	"AlertUserEmailSettingsResult"
] {
	/**
	 * Create a AlertUserAppEmailSettingsResult.
	 * @member {string} appId Application ID
	 * @member {boolean} userEnabled A flag indicating if settings are enabled at
	 * user/global level
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of AlertUserAppEmailSettingsResult
	 *
	 * @returns {object} metadata of AlertUserAppEmailSettingsResult
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AlertUserAppEmailSettingsResult",
			type: {
				name: "Composite",
				className: "AlertUserAppEmailSettingsResult",
				modelProperties: {
					requestId: {
						required: true,
						serializedName: "request_id",
						type: {
							name: "String",
						},
					},
					eTag: {
						required: true,
						serializedName: "eTag",
						type: {
							name: "String",
						},
					},
					enabled: {
						required: true,
						serializedName: "enabled",
						type: {
							name: "Boolean",
						},
					},
					userId: {
						required: true,
						serializedName: "userId",
						type: {
							name: "String",
						},
					},
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
					appId: {
						required: true,
						serializedName: "appId",
						type: {
							name: "String",
						},
					},
					userEnabled: {
						required: true,
						serializedName: "user_enabled",
						type: {
							name: "Boolean",
						},
					},
				},
			},
		};
	}
}

module.exports = AlertUserAppEmailSettingsResult;
