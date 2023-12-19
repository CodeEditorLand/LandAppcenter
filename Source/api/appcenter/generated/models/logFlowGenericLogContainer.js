/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

const models = require("./index");

/**
 * Class representing a LogFlowGenericLogContainer.
 */
class LogFlowGenericLogContainer {
	/**
	 * Defines the metadata of LogFlowGenericLogContainer
	 *
	 * @returns {object} metadata of LogFlowGenericLogContainer
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "LogFlowGenericLogContainer",
			type: {
				name: "Composite",
				className: "LogFlowGenericLogContainer",
				modelProperties: {
					exceededMaxLimit: {
						required: false,
						serializedName: "exceeded_max_limit",
						type: {
							name: "Boolean",
						},
					},
					lastReceivedLogTimestamp: {
						required: false,
						serializedName: "last_received_log_timestamp",
						type: {
							name: "DateTime",
						},
					},
					logs: {
						required: true,
						serializedName: "logs",
						constraints: {
							MinItems: 0,
						},
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "LogFlowGenericLogElementType",
								type: {
									name: "Composite",
									className: "LogFlowGenericLog",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = LogFlowGenericLogContainer;
