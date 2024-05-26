const models = require("./index");

/**
 * Error log.
 *
 * @extends models['LogFlowLog']
 */
class LogFlowErrorLog extends models["LogFlowLog"] {
	/**
	 * Create a LogFlowErrorLog.
	 * @member {uuid} sessionId Session ID.
	 * @member {uuid} id Error identifier.
	 * @member {number} [appLaunchToffset] Corresponds to the number of
	 * milliseconds elapsed between the time the error occurred and the app was
	 * launched.
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of LogFlowErrorLog
	 *
	 * @returns {object} metadata of LogFlowErrorLog
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "error",
			type: {
				name: "Composite",
				polymorphicDiscriminator: {
					serializedName: "type",
					clientName: "type",
				},
				uberParent: "LogFlowLog",
				className: "LogFlowErrorLog",
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
					id: {
						required: true,
						serializedName: "id",
						type: {
							name: "String",
						},
					},
					appLaunchToffset: {
						required: false,
						serializedName: "app_launch_toffset",
						type: {
							name: "Number",
						},
					},
				},
			},
		};
	}
}

module.exports = LogFlowErrorLog;
