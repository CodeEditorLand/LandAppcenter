const models = require("./index");

/**
 * Google notification configuration.
 *
 * @extends models['NotificationConfig']
 */
class NotificationConfigGoogle extends models["NotificationConfig"] {
	/**
	 * Create a NotificationConfigGoogle.
	 * @member {string} googleApiKey GCM API key.
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of NotificationConfigGoogle
	 *
	 * @returns {object} metadata of NotificationConfigGoogle
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "gcm_config",
			type: {
				name: "Composite",
				polymorphicDiscriminator: {
					serializedName: "type",
					clientName: "type",
				},
				uberParent: "NotificationConfig",
				className: "NotificationConfigGoogle",
				modelProperties: {
					type: {
						required: true,
						serializedName: "type",
						isPolymorphicDiscriminator: true,
						type: {
							name: "String",
						},
					},
					googleApiKey: {
						required: true,
						serializedName: "google_api_key",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = NotificationConfigGoogle;
