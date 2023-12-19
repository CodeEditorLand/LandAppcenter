/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

const models = require("./index");

/**
 * Error log.
 *
 * @extends models['LogFlowLog']
 */
class LogFlowErrorLog extends models["LogFlowLog"] {
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
