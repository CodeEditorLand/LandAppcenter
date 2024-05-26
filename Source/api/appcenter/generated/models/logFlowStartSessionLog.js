const models = require("./index");

/**
 * Required explicit begin session log (a marker event for analytics service).
 *
 * @extends models['LogFlowLog']
 */
class LogFlowStartSessionLog extends models["LogFlowLog"] {
	/**
	 * Create a LogFlowStartSessionLog.
	 * @member {uuid} sessionId Session ID.
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of LogFlowStartSessionLog
	 *
	 * @returns {object} metadata of LogFlowStartSessionLog
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "start_session",
			type: {
				name: "Composite",
				polymorphicDiscriminator: {
					serializedName: "type",
					clientName: "type",
				},
				uberParent: "LogFlowLog",
				className: "LogFlowStartSessionLog",
				modelProperties: {
					timestamp: {
						required: true,
						serializedName: "timestamp",
						type: {
							name: "DateTime",
						},
					},
					installId: {
						required: true,
						serializedName: "install_id",
						type: {
							name: "String",
						},
					},
					device: {
						required: true,
						serializedName: "device",
						type: {
							name: "Composite",
							className: "LogFlowDevice",
						},
					},
					type: {
						required: true,
						serializedName: "type",
						isPolymorphicDiscriminator: true,
						type: {
							name: "String",
						},
					},
					sessionId: {
						required: true,
						serializedName: "session_id",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = LogFlowStartSessionLog;
