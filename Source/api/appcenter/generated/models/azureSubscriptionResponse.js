/**
 * Class representing a AzureSubscriptionResponse.
 */
class AzureSubscriptionResponse {
	/**
	 * Create a AzureSubscriptionResponse.
	 * @member {string} subscriptionId The azure subscription id
	 * @member {string} tenantId The tenant id of the azure subscription belongs
	 * to
	 * @member {string} subscriptionName The name of the azure subscription
	 * @member {boolean} [isBilling] If the subscription is used for billing
	 * @member {boolean} [isBillable] If the subscription can be used for billing
	 */
	constructor() {}

	/**
	 * Defines the metadata of AzureSubscriptionResponse
	 *
	 * @returns {object} metadata of AzureSubscriptionResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AzureSubscriptionResponse",
			type: {
				name: "Composite",
				className: "AzureSubscriptionResponse",
				modelProperties: {
					subscriptionId: {
						required: true,
						serializedName: "subscription_id",
						type: {
							name: "String",
						},
					},
					tenantId: {
						required: true,
						serializedName: "tenant_id",
						type: {
							name: "String",
						},
					},
					subscriptionName: {
						required: true,
						serializedName: "subscription_name",
						type: {
							name: "String",
						},
					},
					isBilling: {
						required: false,
						serializedName: "is_billing",
						type: {
							name: "Boolean",
						},
					},
					isBillable: {
						required: false,
						serializedName: "is_billable",
						type: {
							name: "Boolean",
						},
					},
				},
			},
		};
	}
}

module.exports = AzureSubscriptionResponse;
