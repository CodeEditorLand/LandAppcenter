const models = require("./index");

/**
 * Billing Plans section in the Billing Information
 *
 */
class BillingInformationPlans {
	/**
	 * Create a BillingInformationPlans.
	 * @member {object} [buildService]
	 * @member {boolean} [buildService.canSelectTrialPlan] Can customer select
	 * trial plan for that service (if it exists)?
	 * @member {string} [buildService.lastTrialPlanExpirationTime] Expiration
	 * time of the last selected trial plan. Will be null if trial plan was not
	 * used.
	 * @member {object} [buildService.currentBillingPeriod]
	 * @member {string} [buildService.currentBillingPeriod.startTime] Inclusive
	 * start of the period
	 * @member {string} [buildService.currentBillingPeriod.endTime] Exclusive end
	 * of the period.
	 * @member {object} [buildService.currentBillingPeriod.byAccount]
	 * @member {number} [buildService.currentBillingPeriod.byAccount.count]
	 * Number of instances of the billing plan.
	 * @member {object} [buildService.currentBillingPeriod.byAccount.plan]
	 * @member {string} [buildService.currentBillingPeriod.byAccount.plan.id] The
	 * Billing Plan ID
	 * @member {string}
	 * [buildService.currentBillingPeriod.byAccount.plan.version] Version of the
	 * Billing Plan schema
	 * @member {number}
	 * [buildService.currentBillingPeriod.byAccount.plan.priceBucket] Price
	 * bucket of the billing plan. Free plans start with 0, paid plans have
	 * higher price buckets
	 * @member {string}
	 * [buildService.currentBillingPeriod.byAccount.plan.service] Name of the
	 * service that the plan applies to. Possible values include: 'Build',
	 * 'Push', 'Test'
	 * @member {object} [buildService.currentBillingPeriod.byAccount.plan.limits]
	 * @member {object}
	 * [buildService.currentBillingPeriod.byAccount.plan.attributes]
	 * @member {object} [pushService]
	 * @member {boolean} [pushService.canSelectTrialPlan] Can customer select
	 * trial plan for that service (if it exists)?
	 * @member {string} [pushService.lastTrialPlanExpirationTime] Expiration time
	 * of the last selected trial plan. Will be null if trial plan was not used.
	 * @member {object} [pushService.currentBillingPeriod]
	 * @member {string} [pushService.currentBillingPeriod.startTime] Inclusive
	 * start of the period
	 * @member {string} [pushService.currentBillingPeriod.endTime] Exclusive end
	 * of the period.
	 * @member {object} [pushService.currentBillingPeriod.byAccount]
	 * @member {number} [pushService.currentBillingPeriod.byAccount.count] Number
	 * of instances of the billing plan.
	 * @member {object} [pushService.currentBillingPeriod.byAccount.plan]
	 * @member {string} [pushService.currentBillingPeriod.byAccount.plan.id] The
	 * Billing Plan ID
	 * @member {string} [pushService.currentBillingPeriod.byAccount.plan.version]
	 * Version of the Billing Plan schema
	 * @member {number}
	 * [pushService.currentBillingPeriod.byAccount.plan.priceBucket] Price bucket
	 * of the billing plan. Free plans start with 0, paid plans have higher price
	 * buckets
	 * @member {string} [pushService.currentBillingPeriod.byAccount.plan.service]
	 * Name of the service that the plan applies to. Possible values include:
	 * 'Build', 'Push', 'Test'
	 * @member {object} [pushService.currentBillingPeriod.byAccount.plan.limits]
	 * @member {object}
	 * [pushService.currentBillingPeriod.byAccount.plan.attributes]
	 * @member {object} [testService]
	 * @member {boolean} [testService.canSelectTrialPlan] Can customer select
	 * trial plan for that service (if it exists)?
	 * @member {string} [testService.lastTrialPlanExpirationTime] Expiration time
	 * of the last selected trial plan. Will be null if trial plan was not used.
	 * @member {object} [testService.currentBillingPeriod]
	 * @member {string} [testService.currentBillingPeriod.startTime] Inclusive
	 * start of the period
	 * @member {string} [testService.currentBillingPeriod.endTime] Exclusive end
	 * of the period.
	 * @member {object} [testService.currentBillingPeriod.byAccount]
	 * @member {number} [testService.currentBillingPeriod.byAccount.count] Number
	 * of instances of the billing plan.
	 * @member {object} [testService.currentBillingPeriod.byAccount.plan]
	 * @member {string} [testService.currentBillingPeriod.byAccount.plan.id] The
	 * Billing Plan ID
	 * @member {string} [testService.currentBillingPeriod.byAccount.plan.version]
	 * Version of the Billing Plan schema
	 * @member {number}
	 * [testService.currentBillingPeriod.byAccount.plan.priceBucket] Price bucket
	 * of the billing plan. Free plans start with 0, paid plans have higher price
	 * buckets
	 * @member {string} [testService.currentBillingPeriod.byAccount.plan.service]
	 * Name of the service that the plan applies to. Possible values include:
	 * 'Build', 'Push', 'Test'
	 * @member {object} [testService.currentBillingPeriod.byAccount.plan.limits]
	 * @member {object}
	 * [testService.currentBillingPeriod.byAccount.plan.attributes]
	 */
	constructor() {}

	/**
	 * Defines the metadata of BillingInformationPlans
	 *
	 * @returns {object} metadata of BillingInformationPlans
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "BillingInformationPlans",
			type: {
				name: "Composite",
				className: "BillingInformationPlans",
				modelProperties: {
					buildService: {
						required: false,
						serializedName: "buildService",
						type: {
							name: "Composite",
							className: "ServiceBillingPlans",
						},
					},
					pushService: {
						required: false,
						serializedName: "pushService",
						type: {
							name: "Composite",
							className: "ServiceBillingPlans",
						},
					},
					testService: {
						required: false,
						serializedName: "testService",
						type: {
							name: "Composite",
							className: "ServiceBillingPlans",
						},
					},
				},
			},
		};
	}
}

module.exports = BillingInformationPlans;
