const models = require("./index");

/**
 * Alerting Default Email Settings of the user
 *
 * @extends models['AlertOperationResult']
 */
class AlertUserEmailSettingsResult extends models["AlertOperationResult"] {
	/**
	 * Create a AlertUserEmailSettingsResult.
	 * @member {string} eTag The ETag of the entity
	 * @member {boolean} enabled Allows to forcefully disable emails on app or
	 * user level
	 * @member {string} userId The unique id (UUID) of the user
	 * @member {array} settings The settings the user has for the app
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of AlertUserEmailSettingsResult
	 *
	 * @returns {object} metadata of AlertUserEmailSettingsResult
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AlertUserEmailSettingsResult",
			type: {
				name: "Composite",
				className: "AlertUserEmailSettingsResult",
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
				},
			},
		};
	}
}

module.exports = AlertUserEmailSettingsResult;
