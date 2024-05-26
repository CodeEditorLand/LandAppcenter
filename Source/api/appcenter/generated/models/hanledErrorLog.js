const models = require("./index");

/**
 * Required explicit begin session log (a marker event for analytics service).
 *
 * @extends models['Log']
 */
class HanledErrorLog extends models["Log"] {
	/**
	 * Create a HanledErrorLog.
	 * @member {uuid} errorId Error ID.
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of HanledErrorLog
	 *
	 * @returns {object} metadata of HanledErrorLog
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "handled_error",
			type: {
				name: "Composite",
				polymorphicDiscriminator: {
					serializedName: "type",
					clientName: "type",
				},
				uberParent: "Log",
				className: "HanledErrorLog",
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
					errorId: {
						required: true,
						serializedName: "error_id",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = HanledErrorLog;
