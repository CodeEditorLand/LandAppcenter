const models = require("./index");

/**
 * List of alerting webhooks wrapped as operation result
 *
 */
class AlertWebhookListResult {
	/**
	 * Create a AlertWebhookListResult.
	 * @member {array} values
	 */
	constructor() {}

	/**
	 * Defines the metadata of AlertWebhookListResult
	 *
	 * @returns {object} metadata of AlertWebhookListResult
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AlertWebhookListResult",
			type: {
				name: "Composite",
				className: "AlertWebhookListResult",
				modelProperties: {
					values: {
						required: true,
						serializedName: "values",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "AlertWebhookElementType",
								type: {
									name: "Composite",
									className: "AlertWebhook",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = AlertWebhookListResult;
