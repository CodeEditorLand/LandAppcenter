/**
 * Class representing a BillingErrorError.
 */
class BillingErrorError {
	/**
	 * Create a BillingErrorError.
	 * @member {number} [code] The status code return by the API. It can be 400
	 * or 403 or 500.
	 * @member {string} [message] The reason for the request failed
	 */
	constructor() {}

	/**
	 * Defines the metadata of BillingErrorError
	 *
	 * @returns {object} metadata of BillingErrorError
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "BillingError_error",
			type: {
				name: "Composite",
				className: "BillingErrorError",
				modelProperties: {
					code: {
						required: false,
						serializedName: "code",
						type: {
							name: "Number",
						},
					},
					message: {
						required: false,
						serializedName: "message",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = BillingErrorError;
