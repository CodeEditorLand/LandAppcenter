const models = require("./index");

/**
 * Apple notification auth token configuration.
 *
 * @extends models['NotificationConfig']
 */
class NotificationConfigAppleToken extends models["NotificationConfig"] {
	/**
	 * Create a NotificationConfigAppleToken.
	 * @member {string} keyId A 10-character key identifier (kid).
	 * @member {string} id Application ID.
	 * @member {string} prefix Application prefix.
	 * @member {string} token Provider Authentication Token.
	 * @member {string} endpointType Possible values include: 'production',
	 * 'sandbox'
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of NotificationConfigAppleToken
	 *
	 * @returns {object} metadata of NotificationConfigAppleToken
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
				uberParent: "NotificationConfig",
				className: "NotificationConfigAppleToken",
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
					token: {
						required: true,
						serializedName: "token",
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

module.exports = NotificationConfigAppleToken;
