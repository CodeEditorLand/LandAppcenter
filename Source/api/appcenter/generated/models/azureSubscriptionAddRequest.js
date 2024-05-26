/**
 * Class representing a AzureSubscriptionAddRequest.
 */
class AzureSubscriptionAddRequest {
	/**
	 * Create a AzureSubscriptionAddRequest.
	 * @member {string} subscriptionId The azure subscription id
	 * @member {string} tenantId The tenant id of the azure subscription belongs
	 * to
	 * @member {string} subscriptionName The name of the azure subscription
	 * @member {boolean} [isBilling] If the subscription is used for billing
	 */
	constructor() {}

	/**
	 * Defines the metadata of AzureSubscriptionAddRequest
	 *
	 * @returns {object} metadata of AzureSubscriptionAddRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AzureSubscriptionAddRequest",
			type: {
				name: "Composite",
				className: "AzureSubscriptionAddRequest",
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
				},
			},
		};
	}
}

module.exports = AzureSubscriptionAddRequest;
