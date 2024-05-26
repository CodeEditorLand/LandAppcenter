const models = require("./index");

/**
 * Set or remove custom properties.
 *
 * @extends models['Log']
 */
class CustomPropertyLog extends models["Log"] {
	/**
	 * Create a CustomPropertyLog.
	 * @member {array} [properties] Custom property changes.
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of CustomPropertyLog
	 *
	 * @returns {object} metadata of CustomPropertyLog
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "custom_properties",
			type: {
				name: "Composite",
				polymorphicDiscriminator: {
					serializedName: "type",
					clientName: "type",
				},
				uberParent: "Log",
				className: "CustomPropertyLog",
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
						constraints: {
							MaxItems: 60,
							MinItems: 1,
						},
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "CustomPropertyElementType",
								type: {
									name: "Composite",
									polymorphicDiscriminator: {
										serializedName: "type",
										clientName: "type",
									},
									uberParent: "CustomProperty",
									className: "CustomProperty",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = CustomPropertyLog;
