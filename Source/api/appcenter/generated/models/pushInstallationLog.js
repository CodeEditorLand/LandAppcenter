const models = require("./index");

/**
 * Push installation Information.
 *
 * @extends models['Log']
 */
class PushInstallationLog extends models["Log"] {
	/**
	 * Create a PushInstallationLog.
	 * @member {string} pushToken The PNS handle for this installation.
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of PushInstallationLog
	 *
	 * @returns {object} metadata of PushInstallationLog
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
				uberParent: "Log",
				className: "PushInstallationLog",
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

module.exports = PushInstallationLog;
