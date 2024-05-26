/**
 * Class representing a LogFlowCustomProperty.
 */
class LogFlowCustomProperty {
	/**
	 * Create a LogFlowCustomProperty.
	 * @member {string} name
	 * @member {string} type Polymorphic Discriminator
	 */
	constructor() {}

	/**
	 * Defines the metadata of LogFlowCustomProperty
	 *
	 * @returns {object} metadata of LogFlowCustomProperty
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "LogFlowCustomProperty",
			type: {
				name: "Composite",
				polymorphicDiscriminator: {
					serializedName: "type",
					clientName: "type",
				},
				uberParent: "LogFlowCustomProperty",
				className: "LogFlowCustomProperty",
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

module.exports = LogFlowCustomProperty;
