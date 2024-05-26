const models = require("./index");

/**
 * Selection of a billing plan
 *
 */
class BillingPlanSelection {
	/**
	 * Create a BillingPlanSelection.
	 * @member {number} [count] Number of instances of the billing plan.
	 * @member {object} [plan]
	 * @member {string} [plan.id] The Billing Plan ID
	 * @member {string} [plan.version] Version of the Billing Plan schema
	 * @member {number} [plan.priceBucket] Price bucket of the billing plan. Free
	 * plans start with 0, paid plans have higher price buckets
	 * @member {string} [plan.service] Name of the service that the plan applies
	 * to. Possible values include: 'Build', 'Push', 'Test'
	 * @member {object} [plan.limits]
	 * @member {object} [plan.attributes]
	 */
	constructor() {}

	/**
	 * Defines the metadata of BillingPlanSelection
	 *
	 * @returns {object} metadata of BillingPlanSelection
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "BillingPlanSelection",
			type: {
				name: "Composite",
				className: "BillingPlanSelection",
				modelProperties: {
					count: {
						required: false,
						serializedName: "count",
						type: {
							name: "Number",
						},
					},
					plan: {
						required: false,
						serializedName: "plan",
						type: {
							name: "Composite",
							className: "BillingPlan",
						},
					},
				},
			},
		};
	}
}

module.exports = BillingPlanSelection;
