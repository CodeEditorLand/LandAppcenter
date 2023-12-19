/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

const models = require("./index");

/**
 * Number property.
 *
 * @extends models['LogFlowCustomProperty']
 */
class LogFlowNumberProperty extends models["LogFlowCustomProperty"] {
	/**
	 * Defines the metadata of LogFlowNumberProperty
	 *
	 * @returns {object} metadata of LogFlowNumberProperty
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "number",
			type: {
				name: "Composite",
				polymorphicDiscriminator: {
					serializedName: "type",
					clientName: "type",
				},
				uberParent: "LogFlowCustomProperty",
				className: "LogFlowNumberProperty",
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
						type: {
							name: "Number",
						},
					},
				},
			},
		};
	}
}

module.exports = LogFlowNumberProperty;
