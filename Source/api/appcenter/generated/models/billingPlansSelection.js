const models = require("./index");

/**
 * Selection of a billing plan for one or more services
 *
 */
class BillingPlansSelection {
	/**
	 * Create a BillingPlansSelection.
	 * @member {object} [buildService]
	 * @member {number} [buildService.count] Number of instances of the billing
	 * plan.
	 * @member {object} [buildService.plan]
	 * @member {string} [buildService.plan.id] The Billing Plan ID
	 * @member {string} [buildService.plan.version] Version of the Billing Plan
	 * schema
	 * @member {number} [buildService.plan.priceBucket] Price bucket of the
	 * billing plan. Free plans start with 0, paid plans have higher price
	 * buckets
	 * @member {string} [buildService.plan.service] Name of the service that the
	 * plan applies to. Possible values include: 'Build', 'Push', 'Test'
	 * @member {object} [buildService.plan.limits]
	 * @member {object} [buildService.plan.attributes]
	 * @member {object} [pushService]
	 * @member {number} [pushService.count] Number of instances of the billing
	 * plan.
	 * @member {object} [pushService.plan]
	 * @member {string} [pushService.plan.id] The Billing Plan ID
	 * @member {string} [pushService.plan.version] Version of the Billing Plan
	 * schema
	 * @member {number} [pushService.plan.priceBucket] Price bucket of the
	 * billing plan. Free plans start with 0, paid plans have higher price
	 * buckets
	 * @member {string} [pushService.plan.service] Name of the service that the
	 * plan applies to. Possible values include: 'Build', 'Push', 'Test'
	 * @member {object} [pushService.plan.limits]
	 * @member {object} [pushService.plan.attributes]
	 * @member {object} [testService]
	 * @member {number} [testService.count] Number of instances of the billing
	 * plan.
	 * @member {object} [testService.plan]
	 * @member {string} [testService.plan.id] The Billing Plan ID
	 * @member {string} [testService.plan.version] Version of the Billing Plan
	 * schema
	 * @member {number} [testService.plan.priceBucket] Price bucket of the
	 * billing plan. Free plans start with 0, paid plans have higher price
	 * buckets
	 * @member {string} [testService.plan.service] Name of the service that the
	 * plan applies to. Possible values include: 'Build', 'Push', 'Test'
	 * @member {object} [testService.plan.limits]
	 * @member {object} [testService.plan.attributes]
	 */
	constructor() {}

	/**
	 * Defines the metadata of BillingPlansSelection
	 *
	 * @returns {object} metadata of BillingPlansSelection
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "BillingPlansSelection",
			type: {
				name: "Composite",
				className: "BillingPlansSelection",
				modelProperties: {
					buildService: {
						required: false,
						serializedName: "buildService",
						type: {
							name: "Composite",
							className: "BillingPlanSelection",
						},
					},
					pushService: {
						required: false,
						serializedName: "pushService",
						type: {
							name: "Composite",
							className: "BillingPlanSelection",
						},
					},
					testService: {
						required: false,
						serializedName: "testService",
						type: {
							name: "Composite",
							className: "BillingPlanSelection",
						},
					},
				},
			},
		};
	}
}

module.exports = BillingPlansSelection;
