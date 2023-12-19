/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/**
 * Alerting webhook
 *
 */
class AlertWebhook {
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
