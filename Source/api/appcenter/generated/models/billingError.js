const models = require("./index");

/**
 * Error
 *
 */
class BillingError {
	/**
	 * Create a BillingError.
	 * @member {object} [error]
	 * @member {number} [error.code] The status code return by the API. It can be
	 * 400 or 403 or 500.
	 * @member {string} [error.message] The reason for the request failed
	 */
	constructor() {}

	/**
	 * Defines the metadata of BillingError
	 *
	 * @returns {object} metadata of BillingError
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "BillingError",
			type: {
				name: "Composite",
				className: "BillingError",
				modelProperties: {
					error: {
						required: false,
						serializedName: "error",
						type: {
							name: "Composite",
							className: "BillingErrorError",
						},
					},
				},
			},
		};
	}
}

module.exports = BillingError;
