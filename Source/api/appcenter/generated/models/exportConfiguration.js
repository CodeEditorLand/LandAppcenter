/**
 * Export configuration
 *
 */
class ExportConfiguration {
	/**
	 * Create a ExportConfiguration.
	 * @member {string} [resourceName] The resource name on azure
	 * @member {string} [resourceGroup] The resource group name on azure
	 * @member {string} type Polymorphic Discriminator
	 */
	constructor() {}

	/**
	 * Defines the metadata of ExportConfiguration
	 *
	 * @returns {object} metadata of ExportConfiguration
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ExportConfiguration",
			type: {
				name: "Composite",
				polymorphicDiscriminator: {
					serializedName: "type",
					clientName: "type",
				},
				uberParent: "ExportConfiguration",
				className: "ExportConfiguration",
				modelProperties: {
					resourceName: {
						required: false,
						serializedName: "resource_name",
						type: {
							name: "String",
						},
					},
					resourceGroup: {
						required: false,
						serializedName: "resource_group",
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

module.exports = ExportConfiguration;
