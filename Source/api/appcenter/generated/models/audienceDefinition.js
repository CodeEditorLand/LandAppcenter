/**
 * Audience definition.
 *
 */
class AudienceDefinition {
	/**
	 * Create a AudienceDefinition.
	 * @member {string} [description] Audience description.
	 * @member {string} definition Audience definition in OData format.
	 * @member {boolean} [enabled] Default value: true .
	 * @member {object} [customProperties] Custom properties used in the
	 * definition.
	 */
	constructor() {}

	/**
	 * Defines the metadata of AudienceDefinition
	 *
	 * @returns {object} metadata of AudienceDefinition
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AudienceDefinition",
			type: {
				name: "Composite",
				className: "AudienceDefinition",
				modelProperties: {
					description: {
						required: false,
						serializedName: "description",
						constraints: {
							MaxLength: 128,
						},
						type: {
							name: "String",
						},
					},
					definition: {
						required: true,
						serializedName: "definition",
						constraints: {
							MaxLength: 2000,
						},
						type: {
							name: "String",
						},
					},
					enabled: {
						required: false,
						serializedName: "enabled",
						defaultValue: true,
						type: {
							name: "Boolean",
						},
					},
					customProperties: {
						required: false,
						serializedName: "custom_properties",
						type: {
							name: "Dictionary",
							value: {
								required: false,
								serializedName: "DevicePropertyTypeElementType",
								type: {
									name: "Enum",
									allowedValues: [
										"string",
										"number",
										"boolean",
										"date_time",
									],
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = AudienceDefinition;
