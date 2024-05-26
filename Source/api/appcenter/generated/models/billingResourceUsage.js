const models = require("./index");

/**
 * Usage section in the Billing Information
 *
 */
class BillingResourceUsage {
	/**
	 * Create a BillingResourceUsage.
	 * @member {object} [buildService]
	 * @member {object} [buildService.currentUsagePeriod]
	 * @member {string} [buildService.currentUsagePeriod.startTime] Inclusive
	 * start time of the usage period
	 * @member {string} [buildService.currentUsagePeriod.endTime] Exclusive end
	 * time of the usage period.
	 * @member {object} [buildService.currentUsagePeriod.byAccount]
	 * @member {object} [buildService.currentUsagePeriod.byApp]
	 * @member {object} [pushService]
	 * @member {object} [pushService.currentUsagePeriod]
	 * @member {string} [pushService.currentUsagePeriod.startTime] Inclusive
	 * start time of the usage period
	 * @member {string} [pushService.currentUsagePeriod.endTime] Exclusive end
	 * time of the usage period.
	 * @member {object} [pushService.currentUsagePeriod.byAccount]
	 * @member {object} [pushService.currentUsagePeriod.byApp]
	 * @member {object} [testService]
	 * @member {object} [testService.currentUsagePeriod]
	 * @member {string} [testService.currentUsagePeriod.startTime] Inclusive
	 * start time of the usage period
	 * @member {string} [testService.currentUsagePeriod.endTime] Exclusive end
	 * time of the usage period.
	 * @member {object} [testService.currentUsagePeriod.byAccount]
	 * @member {object} [testService.currentUsagePeriod.byApp]
	 */
	constructor() {}

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
