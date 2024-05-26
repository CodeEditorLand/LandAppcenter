const models = require("./index");

/**
 * Class representing a LogWithProperties.
 * @extends models['Log']
 */
class LogWithProperties extends models["Log"] {
	/**
	 * Create a LogWithProperties.
	 * @member {object} [properties] Additional key/value pair parameters.
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of LogWithProperties
	 *
	 * @returns {object} metadata of LogWithProperties
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "LogWithProperties",
			type: {
				name: "Composite",
				polymorphicDiscriminator: {
					serializedName: "type",
					clientName: "type",
				},
				uberParent: "Log",
				className: "LogWithProperties",
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
				},
			},
		};
	}
}

module.exports = LogWithProperties;
