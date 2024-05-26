/**
 * Status of the usage record creation
 *
 */
class UsageRecordStatus {
	/**
	 * Create a UsageRecordStatus.
	 * @member {boolean} [expectedLatestBuildExists] Is the age of the most
	 * recent Build service usage record within expected limits
	 * @member {boolean} [expectedLatestPushExists] Is the age of the most recent
	 * Push service usage record within expected limits
	 * @member {boolean} [expectedLatestTestExists] Is the age of the most recent
	 * Test service usage record within expected limits
	 * @member {string} [latestBuildUsageRecordTime] The time of the most recent
	 * Build service usage record
	 * @member {string} [latestPushUsageRecordTime] The time of the most recent
	 * Push service usage record
	 * @member {string} [latestTestUsageRecordTime] The time of the most recent
	 * Test service usage record
	 */
	constructor() {}

	/**
	 * Defines the metadata of UsageRecordStatus
	 *
	 * @returns {object} metadata of UsageRecordStatus
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "UsageRecordStatus",
			type: {
				name: "Composite",
				className: "UsageRecordStatus",
				modelProperties: {
					expectedLatestBuildExists: {
						required: false,
						serializedName: "expectedLatestBuildExists",
						type: {
							name: "Boolean",
						},
					},
					expectedLatestPushExists: {
						required: false,
						serializedName: "expectedLatestPushExists",
						type: {
							name: "Boolean",
						},
					},
					expectedLatestTestExists: {
						required: false,
						serializedName: "expectedLatestTestExists",
						type: {
							name: "Boolean",
						},
					},
					latestBuildUsageRecordTime: {
						required: false,
						serializedName: "latestBuildUsageRecordTime",
						type: {
							name: "String",
						},
					},
					latestPushUsageRecordTime: {
						required: false,
						serializedName: "latestPushUsageRecordTime",
						type: {
							name: "String",
						},
					},
					latestTestUsageRecordTime: {
						required: false,
						serializedName: "latestTestUsageRecordTime",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = UsageRecordStatus;
