const models = require("./index");

/**
 * Configuration for export to Application Insights resource with customer
 * provided intrumentation key
 *
 * @extends models['ExportConfiguration']
 */
class ExportConfigurationAppInsightsKey extends models["ExportConfiguration"] {
	/**
	 * Create a ExportConfigurationAppInsightsKey.
	 * @member {string} instrumentationKey Instrumentation key for Application
	 * Insights resource
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of ExportConfigurationAppInsightsKey
	 *
	 * @returns {object} metadata of ExportConfigurationAppInsightsKey
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "application_insights_instrumentation_key",
			type: {
				name: "Composite",
				polymorphicDiscriminator: {
					serializedName: "type",
					clientName: "type",
				},
				uberParent: "ExportConfiguration",
				className: "ExportConfigurationAppInsightsKey",
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
					instrumentationKey: {
						required: true,
						serializedName: "instrumentation_key",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = ExportConfigurationAppInsightsKey;
