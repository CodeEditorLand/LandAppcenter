/**
 * Notification send succeeded.
 *
 */
class NotificationSendSucceededResult {
	/**
	 * Create a NotificationSendSucceededResult.
	 * @member {string} notificationId The unique notification identifier.
	 */
	constructor() {}

	/**
	 * Defines the metadata of NotificationSendSucceededResult
	 *
	 * @returns {object} metadata of NotificationSendSucceededResult
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "NotificationSendSucceededResult",
			type: {
				name: "Composite",
				className: "NotificationSendSucceededResult",
				modelProperties: {
					notificationId: {
						required: true,
						serializedName: "notification_id",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = NotificationSendSucceededResult;
