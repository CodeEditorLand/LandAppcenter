const models = require("./index");

/**
 * String property.
 *
 * @extends models['LogFlowCustomProperty']
 */
class LogFlowStringProperty extends models["LogFlowCustomProperty"] {
	/**
	 * Create a LogFlowStringProperty.
	 * @member {string} value String property value.
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of LogFlowStringProperty
	 *
	 * @returns {object} metadata of LogFlowStringProperty
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "string",
			type: {
				name: "Composite",
				polymorphicDiscriminator: {
					serializedName: "type",
					clientName: "type",
				},
				uberParent: "LogFlowCustomProperty",
				className: "LogFlowStringProperty",
				modelProperties: {
					name: {
						required: true,
						serializedName: "name",
						constraints: {
							MaxLength: 128,
							Pattern: "^[a-zA-Z][a-zA-Z0-9-_]*$",
						},
						type: {
							name: "String",
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
					value: {
						required: true,
						serializedName: "value",
						constraints: {
							MaxLength: 128,
						},
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = LogFlowStringProperty;
