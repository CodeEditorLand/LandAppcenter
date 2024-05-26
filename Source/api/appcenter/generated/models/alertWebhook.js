/**
 * Alerting webhook
 *
 */
class AlertWebhook {
	/**
	 * Create a AlertWebhook.
	 * @member {string} [id] The unique id (UUID) of the webhook
	 * @member {string} name display name of the webhook
	 * @member {string} url target url of the webhook
	 * @member {boolean} [enabled] Allows eanble/disable webhook
	 * @member {array} eventTypes Event types enabled for webhook
	 */
	constructor() {}

	/**
	 * Defines the metadata of AlertWebhook
	 *
	 * @returns {object} metadata of AlertWebhook
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AlertWebhook",
			type: {
				name: "Composite",
				className: "AlertWebhook",
				modelProperties: {
					id: {
						required: false,
						serializedName: "id",
						type: {
							name: "String",
						},
					},
					name: {
						required: true,
						serializedName: "name",
						constraints: {
							MaxLength: 512,
						},
						type: {
							name: "String",
						},
					},
					url: {
						required: true,
						serializedName: "url",
						type: {
							name: "String",
						},
					},
					enabled: {
						required: false,
						serializedName: "enabled",
						type: {
							name: "Boolean",
						},
					},
					eventTypes: {
						required: true,
						serializedName: "event_types",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "StringElementType",
								type: {
									name: "String",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = AlertWebhook;
