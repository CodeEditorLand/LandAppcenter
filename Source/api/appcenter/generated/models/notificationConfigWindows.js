const models = require("./index");

/**
 * WNS notification configuration.
 *
 * @extends models['NotificationConfig']
 */
class NotificationConfigWindows extends models["NotificationConfig"] {
	/**
	 * Create a NotificationConfigWindows.
	 * @member {string} packageSid Package security identifier (SID).
	 * @member {string} secretKey Secret key.
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of NotificationConfigWindows
	 *
	 * @returns {object} metadata of NotificationConfigWindows
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "wns_config",
			type: {
				name: "Composite",
				polymorphicDiscriminator: {
					serializedName: "type",
					clientName: "type",
				},
				uberParent: "NotificationConfig",
				className: "NotificationConfigWindows",
				modelProperties: {
					type: {
						required: true,
						serializedName: "type",
						isPolymorphicDiscriminator: true,
						type: {
							name: "String",
						},
					},
					packageSid: {
						required: true,
						serializedName: "package_sid",
						type: {
							name: "String",
						},
					},
					secretKey: {
						required: true,
						serializedName: "secret_key",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = NotificationConfigWindows;
