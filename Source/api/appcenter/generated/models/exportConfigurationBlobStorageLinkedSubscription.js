const models = require("./index");

/**
 * Configuration for export to Blob Storage with customer linked subscription.
 *
 * @extends models['ExportConfiguration']
 */
class ExportConfigurationBlobStorageLinkedSubscription extends models[
	"ExportConfiguration"
] {
	/**
	 * Create a ExportConfigurationBlobStorageLinkedSubscription.
	 * @member {string} subscriptionId Id of customer subscription linked in App
	 * Center
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of ExportConfigurationBlobStorageLinkedSubscription
	 *
	 * @returns {object} metadata of ExportConfigurationBlobStorageLinkedSubscription
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "blob_storage_linked_subscription",
			type: {
				name: "Composite",
				polymorphicDiscriminator: {
					serializedName: "type",
					clientName: "type",
				},
				uberParent: "ExportConfiguration",
				className: "ExportConfigurationBlobStorageLinkedSubscription",
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
					subscriptionId: {
						required: true,
						serializedName: "subscription_id",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = ExportConfigurationBlobStorageLinkedSubscription;
