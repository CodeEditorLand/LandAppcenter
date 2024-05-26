/**
 * Notification failure outcome count
 *
 */
class NotificationFailureOutcomeCount {
	/**
	 * Create a NotificationFailureOutcomeCount.
	 * @member {string} [failureReason] The reason of the notification failure
	 * @member {number} [count] count of this type of failure
	 */
	constructor() {}

	/**
	 * Defines the metadata of NotificationFailureOutcomeCount
	 *
	 * @returns {object} metadata of NotificationFailureOutcomeCount
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "NotificationFailureOutcomeCount",
			type: {
				name: "Composite",
				className: "NotificationFailureOutcomeCount",
				modelProperties: {
					failureReason: {
						required: false,
						serializedName: "failure_reason",
						type: {
							name: "String",
						},
					},
					count: {
						required: false,
						serializedName: "count",
						type: {
							name: "Number",
						},
					},
				},
			},
		};
	}
}

module.exports = NotificationFailureOutcomeCount;
