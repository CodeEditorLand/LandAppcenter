const models = require("./index");

/**
 * Describe a AppCenter.Start API call from the SDK.
 *
 * @extends models['LogFlowLog']
 */
class LogFlowStartServiceLog extends models["LogFlowLog"] {
	/**
	 * Create a LogFlowStartServiceLog.
	 * @member {array} [services] The list of services of the App Center Start API
	 * call.
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of LogFlowStartServiceLog
	 *
	 * @returns {object} metadata of LogFlowStartServiceLog
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "start_service",
			type: {
				name: "Composite",
				polymorphicDiscriminator: {
					serializedName: "type",
					clientName: "type",
				},
				uberParent: "LogFlowLog",
				className: "LogFlowStartServiceLog",
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
					services: {
						required: false,
						serializedName: "services",
						constraints: {
							MinItems: 1,
						},
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "StringElementType",
								type: {
									name: "String",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = LogFlowStartServiceLog;
