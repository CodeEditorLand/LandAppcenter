const models = require("./index");

/**
 * Alerting service error
 *
 * @extends models['AlertOperationResult']
 */
class AlertingError extends models["AlertOperationResult"] {
	/**
	 * Create a AlertingError.
	 * @member {number} code The status code return by the API. It can be 400 or
	 * 404 or 409 or 500.
	 * @member {string} [message] The reason for the request failed
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of AlertingError
	 *
	 * @returns {object} metadata of AlertingError
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AlertingError",
			type: {
				name: "Composite",
				className: "AlertingError",
				modelProperties: {
					requestId: {
						required: true,
						serializedName: "request_id",
						type: {
							name: "String",
						},
					},
					code: {
						required: true,
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

module.exports = AlertingError;
