const models = require("./index");

/**
 * Push installation Information.
 *
 * @extends models['LogFlowLog']
 */
class LogFlowPushInstallationLog extends models["LogFlowLog"] {
	/**
	 * Create a LogFlowPushInstallationLog.
	 * @member {string} pushToken The PNS handle for this installation.
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of LogFlowPushInstallationLog
	 *
	 * @returns {object} metadata of LogFlowPushInstallationLog
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "push_installation",
			type: {
				name: "Composite",
				polymorphicDiscriminator: {
					serializedName: "type",
					clientName: "type",
				},
				uberParent: "LogFlowLog",
				className: "LogFlowPushInstallationLog",
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
					pushToken: {
						required: true,
						serializedName: "push_token",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = LogFlowPushInstallationLog;
