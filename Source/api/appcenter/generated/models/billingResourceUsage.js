/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

const models = require("./index");

/**
 * Usage section in the Billing Information
 *
 */
class BillingResourceUsage {
	/**
	 * Defines the metadata of BillingResourceUsage
	 *
	 * @returns {object} metadata of BillingResourceUsage
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "BillingResourceUsage",
			type: {
				name: "Composite",
				className: "BillingResourceUsage",
				modelProperties: {
					buildService: {
						required: false,
						serializedName: "buildService",
						type: {
							name: "Composite",
							className: "ServiceResourceUsage",
						},
					},
					pushService: {
						required: false,
						serializedName: "pushService",
						type: {
							name: "Composite",
							className: "ServiceResourceUsage",
						},
					},
					testService: {
						required: false,
						serializedName: "testService",
						type: {
							name: "Composite",
							className: "ServiceResourceUsage",
						},
					},
				},
			},
		};
	}
}

module.exports = BillingResourceUsage;
