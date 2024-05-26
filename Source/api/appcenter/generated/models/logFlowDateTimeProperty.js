const models = require("./index");

/**
 * Date and time property.
 *
 * @extends models['LogFlowCustomProperty']
 */
class LogFlowDateTimeProperty extends models["LogFlowCustomProperty"] {
	/**
	 * Create a LogFlowDateTimeProperty.
	 * @member {date} value Date time property value.
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of LogFlowDateTimeProperty
	 *
	 * @returns {object} metadata of LogFlowDateTimeProperty
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "date_time",
			type: {
				name: "Composite",
				polymorphicDiscriminator: {
					serializedName: "type",
					clientName: "type",
				},
				uberParent: "LogFlowCustomProperty",
				className: "LogFlowDateTimeProperty",
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
							name: "DateTime",
						},
					},
				},
			},
		};
	}
}

module.exports = LogFlowDateTimeProperty;
