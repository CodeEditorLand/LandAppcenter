/**
 * Class representing a AzureSubscriptionPatchRequest.
 */
class AzureSubscriptionPatchRequest {
	/**
	 * Create a AzureSubscriptionPatchRequest.
	 * @member {boolean} isBilling If the subscription is used for billing
	 */
	constructor() {}

	/**
	 * Defines the metadata of AzureSubscriptionPatchRequest
	 *
	 * @returns {object} metadata of AzureSubscriptionPatchRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AzureSubscriptionPatchRequest",
			type: {
				name: "Composite",
				className: "AzureSubscriptionPatchRequest",
				modelProperties: {
					isBilling: {
						required: true,
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

module.exports = AzureSubscriptionPatchRequest;
