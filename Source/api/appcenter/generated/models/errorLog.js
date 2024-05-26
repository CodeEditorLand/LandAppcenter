const models = require("./index");

/**
 * Error log.
 *
 * @extends models['Log']
 */
class ErrorLog extends models["Log"] {
	/**
	 * Create a ErrorLog.
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
	 * Defines the metadata of ErrorLog
	 *
	 * @returns {object} metadata of ErrorLog
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
				uberParent: "Log",
				className: "ErrorLog",
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

module.exports = ErrorLog;
