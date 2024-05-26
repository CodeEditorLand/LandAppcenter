const models = require("./index");

/**
 * Event log.
 *
 * @extends models['LogWithProperties']
 */
class EventLog extends models["LogWithProperties"] {
	/**
	 * Create a EventLog.
	 * @member {uuid} sessionId Session ID.
	 * @member {uuid} id Unique identifier for this event.
	 * @member {string} name Name of the event.
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of EventLog
	 *
	 * @returns {object} metadata of EventLog
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
				uberParent: "Log",
				className: "EventLog",
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
							className: "Device",
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

module.exports = EventLog;
