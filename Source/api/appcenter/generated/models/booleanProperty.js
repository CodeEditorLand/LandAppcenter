const models = require("./index");

/**
 * Boolean property.
 *
 * @extends models['CustomProperty']
 */
class BooleanProperty extends models["CustomProperty"] {
	/**
	 * Create a BooleanProperty.
	 * @member {boolean} value Boolean property value.
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of BooleanProperty
	 *
	 * @returns {object} metadata of BooleanProperty
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
				uberParent: "CustomProperty",
				className: "BooleanProperty",
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

module.exports = BooleanProperty;
