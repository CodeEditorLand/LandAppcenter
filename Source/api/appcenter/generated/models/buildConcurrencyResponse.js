/**
 * Number of pipelines
 *
 */
class BuildConcurrencyResponse {
	/**
	 * Create a BuildConcurrencyResponse.
	 * @member {number} [quantity] The number of pipelines set by the billing
	 * plan
	 * @member {number} [committedQuantity] The number of pipelines committed,
	 * which can be equal or greater than the number from the billing plan
	 */
	constructor() {}

	/**
	 * Defines the metadata of BuildConcurrencyResponse
	 *
	 * @returns {object} metadata of BuildConcurrencyResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "BuildConcurrencyResponse",
			type: {
				name: "Composite",
				className: "BuildConcurrencyResponse",
				modelProperties: {
					quantity: {
						required: false,
						serializedName: "quantity",
						type: {
							name: "Number",
						},
					},
					committedQuantity: {
						required: false,
						serializedName: "committed_quantity",
						type: {
							name: "Number",
						},
					},
				},
			},
		};
	}
}

module.exports = BuildConcurrencyResponse;
