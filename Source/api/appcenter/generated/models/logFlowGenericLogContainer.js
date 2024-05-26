const models = require("./index");

/**
 * Class representing a LogFlowGenericLogContainer.
 */
class LogFlowGenericLogContainer {
	/**
	 * Create a LogFlowGenericLogContainer.
	 * @member {boolean} [exceededMaxLimit] indicates if the number of available
	 * logs are more than the max allowed return limit(100).
	 * @member {date} [lastReceivedLogTimestamp] the timestamp of the last log
	 * received. This value can be used as the start time parameter in the
	 * consecutive API call.
	 * @member {array} logs the list of logs
	 */
	constructor() {}

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
