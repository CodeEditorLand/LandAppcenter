const models = require("./index");

/**
 * Billing plans for a given period
 *
 */
class BillingPeriod {
	/**
	 * Create a BillingPeriod.
	 * @member {string} [startTime] Inclusive start of the period
	 * @member {string} [endTime] Exclusive end of the period.
	 * @member {object} [byAccount]
	 * @member {number} [byAccount.count] Number of instances of the billing
	 * plan.
	 * @member {object} [byAccount.plan]
	 * @member {string} [byAccount.plan.id] The Billing Plan ID
	 * @member {string} [byAccount.plan.version] Version of the Billing Plan
	 * schema
	 * @member {number} [byAccount.plan.priceBucket] Price bucket of the billing
	 * plan. Free plans start with 0, paid plans have higher price buckets
	 * @member {string} [byAccount.plan.service] Name of the service that the
	 * plan applies to. Possible values include: 'Build', 'Push', 'Test'
	 * @member {object} [byAccount.plan.limits]
	 * @member {object} [byAccount.plan.attributes]
	 */
	constructor() {}

	/**
	 * Defines the metadata of BillingPeriod
	 *
	 * @returns {object} metadata of BillingPeriod
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "BillingPeriod",
			type: {
				name: "Composite",
				className: "BillingPeriod",
				modelProperties: {
					startTime: {
						required: false,
						serializedName: "startTime",
						type: {
							name: "String",
						},
					},
					endTime: {
						required: false,
						serializedName: "endTime",
						type: {
							name: "String",
						},
					},
					byAccount: {
						required: false,
						serializedName: "byAccount",
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

module.exports = BillingPeriod;
