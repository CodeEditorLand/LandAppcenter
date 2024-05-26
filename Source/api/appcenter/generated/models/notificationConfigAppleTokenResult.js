const models = require("./index");

/**
 * Apple notification auth token configuration result.
 *
 * @extends models['NotificationConfigResult']
 */
class NotificationConfigAppleTokenResult extends models[
	"NotificationConfigResult"
] {
	/**
	 * Create a NotificationConfigAppleTokenResult.
	 * @member {string} keyId A 10-character key identifier (kid).
	 * @member {string} id Application ID.
	 * @member {string} prefix Application Prefix.
	 * @member {string} endpointType Possible values include: 'production',
	 * 'sandbox'
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of NotificationConfigAppleTokenResult
	 *
	 * @returns {object} metadata of NotificationConfigAppleTokenResult
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "apns_token_config",
			type: {
				name: "Composite",
				polymorphicDiscriminator: {
					serializedName: "type",
					clientName: "type",
				},
				uberParent: "NotificationConfigResult",
				className: "NotificationConfigAppleTokenResult",
				modelProperties: {
					type: {
						required: true,
						serializedName: "type",
						isPolymorphicDiscriminator: true,
						type: {
							name: "String",
						},
					},
					keyId: {
						required: true,
						serializedName: "key_id",
						type: {
							name: "String",
						},
					},
					id: {
						required: true,
						serializedName: "id",
						type: {
							name: "String",
						},
					},
					prefix: {
						required: true,
						serializedName: "prefix",
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
				},
			},
		};
	}
}

module.exports = NotificationConfigAppleTokenResult;
