/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

const models = require("./index");

/**
 * Alerting service error
 *
 * @extends models['AlertOperationResult']
 */
class AlertingError extends models["AlertOperationResult"] {
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
