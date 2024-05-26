const models = require("./index");

/**
 * Class representing a ErrorResponse.
 */
class ErrorResponse {
	/**
	 * Create a ErrorResponse.
	 * @member {object} error
	 * @member {string} [error.code] Possible values include: 'BadRequest',
	 * 'Conflict', 'NotAcceptable', 'NotFound', 'InternalServerError',
	 * 'Unauthorized', 'TooManyRequests'
	 * @member {string} [error.message]
	 */
	constructor() {}

	/**
	 * Defines the metadata of ErrorResponse
	 *
	 * @returns {object} metadata of ErrorResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ErrorResponse",
			type: {
				name: "Composite",
				className: "ErrorResponse",
				modelProperties: {
					error: {
						required: true,
						serializedName: "error",
						type: {
							name: "Composite",
							className: "ErrorDetails",
						},
					},
				},
			},
		};
	}
}

module.exports = ErrorResponse;
