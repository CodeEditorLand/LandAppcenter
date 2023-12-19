/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

const models = require("./index");

/**
 * Class representing a LogFlowLogContainer.
 */
class LogFlowLogContainer {
	/**
	 * Defines the metadata of LogFlowLogContainer
	 *
	 * @returns {object} metadata of LogFlowLogContainer
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "LogFlowLogContainer",
			type: {
				name: "Composite",
				className: "LogFlowLogContainer",
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
								serializedName: "LogFlowLogElementType",
								type: {
									name: "Composite",
									polymorphicDiscriminator: {
										serializedName: "type",
										clientName: "type",
									},
									uberParent: "LogFlowLog",
									className: "LogFlowLog",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = LogFlowLogContainer;
