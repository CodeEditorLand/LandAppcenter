/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

"use strict";

const models = require("./index");

/**
 * Boolean property.
 *
 * @extends models['LogFlowCustomProperty']
 */
class LogFlowBooleanProperty extends models["LogFlowCustomProperty"] {
	/**
	 * Create a LogFlowBooleanProperty.
	 * @member {boolean} value Boolean property value.
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of LogFlowBooleanProperty
	 *
	 * @returns {object} metadata of LogFlowBooleanProperty
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "boolean",
			type: {
				name: "Composite",
				polymorphicDiscriminator: {
					serializedName: "type",
					clientName: "type",
				},
				uberParent: "LogFlowCustomProperty",
				className: "LogFlowBooleanProperty",
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
							name: "Boolean",
						},
					},
				},
			},
		};
	}
}

module.exports = LogFlowBooleanProperty;
