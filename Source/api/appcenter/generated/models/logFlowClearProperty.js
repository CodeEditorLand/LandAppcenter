/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

"use strict";

const models = require("./index");

/**
 * Clear an existing property.
 *
 * @extends models['LogFlowCustomProperty']
 */
class LogFlowClearProperty extends models["LogFlowCustomProperty"] {
	/**
	 * Create a LogFlowClearProperty.
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of LogFlowClearProperty
	 *
	 * @returns {object} metadata of LogFlowClearProperty
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "clear",
			type: {
				name: "Composite",
				polymorphicDiscriminator: {
					serializedName: "type",
					clientName: "type",
				},
				uberParent: "LogFlowCustomProperty",
				className: "LogFlowClearProperty",
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
				},
			},
		};
	}
}

module.exports = LogFlowClearProperty;
