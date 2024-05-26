const models = require("./index");

/**
 * Page view log (as in screens or activities).
 *
 * @extends models['LogFlowLogWithProperties']
 */
class LogFlowPageLog extends models["LogFlowLogWithProperties"] {
	/**
	 * Create a LogFlowPageLog.
	 * @member {uuid} sessionId Session ID.
	 * @member {string} name Name of the page.
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of LogFlowPageLog
	 *
	 * @returns {object} metadata of LogFlowPageLog
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "page",
			type: {
				name: "Composite",
				polymorphicDiscriminator: {
					serializedName: "type",
					clientName: "type",
				},
				uberParent: "LogFlowLog",
				className: "LogFlowPageLog",
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
					properties: {
						required: false,
						serializedName: "properties",
						type: {
							name: "Dictionary",
							value: {
								required: false,
								serializedName: "StringElementType",
								type: {
									name: "String",
								},
							},
						},
					},
					sessionId: {
						required: true,
						serializedName: "session_id",
						type: {
							name: "String",
						},
					},
					name: {
						required: true,
						serializedName: "name",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = LogFlowPageLog;
