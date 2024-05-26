const models = require("./index");

/**
 * Class representing a LogFlowLogContainer.
 */
class LogFlowLogContainer {
	/**
	 * Create a LogFlowLogContainer.
	 * @member {boolean} [exceededMaxLimit] indicates if the number of available
	 * logs are more than the max allowed return limit(100).
	 * @member {date} [lastReceivedLogTimestamp] the timestamp of the last log
	 * received. This value can be used as the start time parameter in the
	 * consecutive API call.
	 * @member {array} logs the list of logs
	 */
	constructor() {}

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
