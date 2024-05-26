/**
 * Class representing a ErrorError.
 */
class ErrorError {
	/**
	 * Create a ErrorError.
	 * @member {number} [code] The status code return by the API. It can be 400
	 * or 403 or 500.
	 * @member {string} [message] The reason for the request failed
	 */
	constructor() {}

	/**
	 * Defines the metadata of ErrorError
	 *
	 * @returns {object} metadata of ErrorError
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "Error_error",
			type: {
				name: "Composite",
				className: "ErrorError",
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

module.exports = ErrorError;
