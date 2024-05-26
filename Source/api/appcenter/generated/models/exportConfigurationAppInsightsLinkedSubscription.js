const models = require("./index");

/**
 * Configuration for export to Application Insights resource with customer
 * linked subscription.
 *
 * @extends models['ExportConfiguration']
 */
class ExportConfigurationAppInsightsLinkedSubscription extends models[
	"ExportConfiguration"
] {
	/**
	 * Create a ExportConfigurationAppInsightsLinkedSubscription.
	 * @member {string} subscriptionId Id of customer subscription linked in App
	 * Center
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of ExportConfigurationAppInsightsLinkedSubscription
	 *
	 * @returns {object} metadata of ExportConfigurationAppInsightsLinkedSubscription
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "application_insights_linked_subscription",
			type: {
				name: "Composite",
				polymorphicDiscriminator: {
					serializedName: "type",
					clientName: "type",
				},
				uberParent: "ExportConfiguration",
				className: "ExportConfigurationAppInsightsLinkedSubscription",
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

module.exports = ExportConfigurationAppInsightsLinkedSubscription;
