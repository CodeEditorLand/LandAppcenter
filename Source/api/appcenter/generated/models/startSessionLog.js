const models = require("./index");

/**
 * Required explicit begin session log (a marker event for analytics service).
 *
 * @extends models['Log']
 */
class StartSessionLog extends models["Log"] {
	/**
	 * Create a StartSessionLog.
	 * @member {uuid} sessionId Session ID.
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of StartSessionLog
	 *
	 * @returns {object} metadata of StartSessionLog
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
				uberParent: "Log",
				className: "StartSessionLog",
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

module.exports = StartSessionLog;
