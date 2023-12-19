/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

const models = require("./index");

/**
 * Aggregated Billing Information for a user or an organization
 *
 */
class AggregatedBillingInformation {
	/**
	 * Defines the metadata of AggregatedBillingInformation
	 *
	 * @returns {object} metadata of AggregatedBillingInformation
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AggregatedBillingInformation",
			type: {
				name: "Composite",
				className: "AggregatedBillingInformation",
				modelProperties: {
					version: {
						required: false,
						serializedName: "version",
						type: {
							name: "String",
						},
					},
					timestamp: {
						required: false,
						serializedName: "timestamp",
						type: {
							name: "String",
						},
					},
					id: {
						required: false,
						serializedName: "id",
						type: {
							name: "String",
						},
					},
					billingPlans: {
						required: false,
						serializedName: "billingPlans",
						type: {
							name: "Composite",
							className: "BillingInformationPlans",
						},
					},
					usage: {
						required: false,
						serializedName: "usage",
						type: {
							name: "Composite",
							className: "BillingResourceUsage",
						},
					},
				},
			},
		};
	}
}

module.exports = AggregatedBillingInformation;
