const models = require("./index");

/**
 * Error
 *
 */
class ErrorModel {
	/**
	 * Create a ErrorModel.
	 * @member {object} [error]
	 * @member {number} [error.code] The status code return by the API. It can be
	 * 400 or 403 or 500.
	 * @member {string} [error.message] The reason for the request failed
	 */
	constructor() {}

	/**
	 * Defines the metadata of ErrorModel
	 *
	 * @returns {object} metadata of ErrorModel
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "Error",
			type: {
				name: "Composite",
				className: "ErrorModel",
				modelProperties: {
					error: {
						required: false,
						serializedName: "error",
						type: {
							name: "Composite",
							className: "ErrorError",
						},
					},
				},
			},
		};
	}
}

module.exports = ErrorModel;
