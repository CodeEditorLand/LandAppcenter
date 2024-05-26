const models = require("./index");

/**
 * Clear an existing property.
 *
 * @extends models['CustomProperty']
 */
class ClearProperty extends models["CustomProperty"] {
	/**
	 * Create a ClearProperty.
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of ClearProperty
	 *
	 * @returns {object} metadata of ClearProperty
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
				uberParent: "CustomProperty",
				className: "ClearProperty",
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

module.exports = ClearProperty;
