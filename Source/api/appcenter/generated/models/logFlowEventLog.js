const models = require("./index");

/**
 * Event log.
 *
 * @extends models['LogFlowLogWithProperties']
 */
class LogFlowEventLog extends models["LogFlowLogWithProperties"] {
	/**
	 * Create a LogFlowEventLog.
	 * @member {uuid} sessionId Session ID.
	 * @member {uuid} id Unique identifier for this event.
	 * @member {string} name Name of the event.
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of LogFlowEventLog
	 *
	 * @returns {object} metadata of LogFlowEventLog
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "event",
			type: {
				name: "Composite",
				polymorphicDiscriminator: {
					serializedName: "type",
					clientName: "type",
				},
				uberParent: "LogFlowLog",
				className: "LogFlowEventLog",
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
					id: {
						required: true,
						serializedName: "id",
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

module.exports = LogFlowEventLog;
