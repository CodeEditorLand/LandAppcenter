const models = require("./index");

/**
 * Apple notification certificate configuration result.
 *
 * @extends models['NotificationConfigResult']
 */
class NotificationConfigAppleResult extends models["NotificationConfigResult"] {
	/**
	 * Create a NotificationConfigAppleResult.
	 * @member {string} endpointType Possible values include: 'production',
	 * 'sandbox'
	 * @member {date} certExpiration Certificate expiration date.
	 * @member {string} certFilename Certificate file name
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of NotificationConfigAppleResult
	 *
	 * @returns {object} metadata of NotificationConfigAppleResult
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "apns_config",
			type: {
				name: "Composite",
				polymorphicDiscriminator: {
					serializedName: "type",
					clientName: "type",
				},
				uberParent: "NotificationConfigResult",
				className: "NotificationConfigAppleResult",
				modelProperties: {
					type: {
						required: true,
						serializedName: "type",
						isPolymorphicDiscriminator: true,
						type: {
							name: "String",
						},
					},
					endpointType: {
						required: true,
						serializedName: "endpoint_type",
						type: {
							name: "String",
						},
					},
					certExpiration: {
						required: true,
						serializedName: "cert_expiration",
						type: {
							name: "DateTime",
						},
					},
					certFilename: {
						required: true,
						serializedName: "cert_filename",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = NotificationConfigAppleResult;
