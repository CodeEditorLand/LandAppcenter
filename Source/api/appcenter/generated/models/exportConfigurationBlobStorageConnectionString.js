const models = require("./index");

/**
 * Configuration for export to Blob Storage with customer provided connection
 * string
 *
 * @extends models['ExportConfiguration']
 */
class ExportConfigurationBlobStorageConnectionString extends models[
	"ExportConfiguration"
] {
	/**
	 * Create a ExportConfigurationBlobStorageConnectionString.
	 * @member {string} connectionString Connection string for blob storage
	 * account
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of ExportConfigurationBlobStorageConnectionString
	 *
	 * @returns {object} metadata of ExportConfigurationBlobStorageConnectionString
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "blob_storage_connection_string",
			type: {
				name: "Composite",
				polymorphicDiscriminator: {
					serializedName: "type",
					clientName: "type",
				},
				uberParent: "ExportConfiguration",
				className: "ExportConfigurationBlobStorageConnectionString",
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
					connectionString: {
						required: true,
						serializedName: "connection_string",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = ExportConfigurationBlobStorageConnectionString;
