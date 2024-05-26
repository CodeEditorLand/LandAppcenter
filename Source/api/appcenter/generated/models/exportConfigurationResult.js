const models = require("./index");

/**
 * Export configuration result
 *
 */
class ExportConfigurationResult {
	/**
	 * Create a ExportConfigurationResult.
	 * @member {string} id Export configuration id
	 * @member {string} exportType Target resource type of export configuration.
	 * Possible values include: 'BlobStorage', 'AppInsights'
	 * @member {string} creationTime Creation time in ISO 8601 format
	 * @member {string} [lastRunTime] Latest time in ISO 8601 format when export
	 * completed successfully
	 * @member {string} state State of the export job. Possible values include:
	 * 'Enabled', 'Disabled', 'Pending', 'Deleted', 'Invalid'
	 * @member {string} [stateInfo] Additional information about export
	 * configuration state
	 * @member {string} [resourceGroup] resource group for the storage
	 * account/App Insights resource
	 * @member {string} [resourceName] Storage accout or Appinsights resource
	 * name
	 * @member {object} [exportConfiguration]
	 * @member {string} [exportConfiguration.resourceName] The resource name on
	 * azure
	 * @member {string} [exportConfiguration.resourceGroup] The resource group
	 * name on azure
	 * @member {string} [exportConfiguration.type] Polymorphic Discriminator
	 */
	constructor() {}

	/**
	 * Defines the metadata of ExportConfigurationResult
	 *
	 * @returns {object} metadata of ExportConfigurationResult
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ExportConfigurationResult",
			type: {
				name: "Composite",
				className: "ExportConfigurationResult",
				modelProperties: {
					id: {
						required: true,
						serializedName: "id",
						type: {
							name: "String",
						},
					},
					exportType: {
						required: true,
						serializedName: "export_type",
						type: {
							name: "Enum",
							allowedValues: ["BlobStorage", "AppInsights"],
						},
					},
					creationTime: {
						required: true,
						serializedName: "creation_time",
						type: {
							name: "String",
						},
					},
					lastRunTime: {
						required: false,
						serializedName: "last_run_time",
						type: {
							name: "String",
						},
					},
					state: {
						required: true,
						serializedName: "state",
						type: {
							name: "Enum",
							allowedValues: [
								"Enabled",
								"Disabled",
								"Pending",
								"Deleted",
								"Invalid",
							],
						},
					},
					stateInfo: {
						required: false,
						serializedName: "state_info",
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
					resourceName: {
						required: false,
						serializedName: "resource_name",
						type: {
							name: "String",
						},
					},
					exportConfiguration: {
						required: false,
						serializedName: "export_configuration",
						type: {
							name: "Composite",
							polymorphicDiscriminator: {
								serializedName: "type",
								clientName: "type",
							},
							uberParent: "ExportConfiguration",
							className: "ExportConfiguration",
						},
					},
				},
			},
		};
	}
}

module.exports = ExportConfigurationResult;
