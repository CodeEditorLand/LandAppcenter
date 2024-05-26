/**
 * Billing Plan
 *
 */
class BillingPlan {
	/**
	 * Create a BillingPlan.
	 * @member {string} [id] The Billing Plan ID
	 * @member {string} [version] Version of the Billing Plan schema
	 * @member {number} [priceBucket] Price bucket of the billing plan. Free
	 * plans start with 0, paid plans have higher price buckets
	 * @member {string} [service] Name of the service that the plan applies to.
	 * Possible values include: 'Build', 'Push', 'Test'
	 * @member {object} [limits]
	 * @member {object} [attributes]
	 */
	constructor() {}

	/**
	 * Defines the metadata of BillingPlan
	 *
	 * @returns {object} metadata of BillingPlan
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "BillingPlan",
			type: {
				name: "Composite",
				className: "BillingPlan",
				modelProperties: {
					id: {
						required: false,
						serializedName: "id",
						type: {
							name: "String",
						},
					},
					version: {
						required: false,
						serializedName: "version",
						type: {
							name: "String",
						},
					},
					priceBucket: {
						required: false,
						serializedName: "priceBucket",
						type: {
							name: "Number",
						},
					},
					service: {
						required: false,
						serializedName: "service",
						type: {
							name: "String",
						},
					},
					limits: {
						required: false,
						serializedName: "limits",
						type: {
							name: "Dictionary",
							value: {
								required: false,
								serializedName: "NumberElementType",
								type: {
									name: "Number",
								},
							},
						},
					},
					attributes: {
						required: false,
						serializedName: "attributes",
						type: {
							name: "Dictionary",
							value: {
								required: false,
								serializedName: "ObjectElementType",
								type: {
									name: "Object",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = BillingPlan;
