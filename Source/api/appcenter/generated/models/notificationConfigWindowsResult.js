const models = require("./index");

/**
 * WNS notification configuration result.
 *
 * @extends models['NotificationConfigResult']
 */
class NotificationConfigWindowsResult extends models[
	"NotificationConfigResult"
] {
	/**
	 * Create a NotificationConfigWindowsResult.
	 * @member {string} packageSid Package security identifier (SID).
	 * @member {string} [secretKey] windows push configuration secret key.
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of NotificationConfigWindowsResult
	 *
	 * @returns {object} metadata of NotificationConfigWindowsResult
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
				uberParent: "NotificationConfigResult",
				className: "NotificationConfigWindowsResult",
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
						required: false,
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

module.exports = NotificationConfigWindowsResult;
