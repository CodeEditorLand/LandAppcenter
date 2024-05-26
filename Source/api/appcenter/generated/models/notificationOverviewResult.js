const models = require("./index");

/**
 * Notification statistics
 *
 */
class NotificationOverviewResult {
	/**
	 * Create a NotificationOverviewResult.
	 * @member {string} notificationId Notification id.
	 * @member {string} [name] Notification name
	 * @member {object} [notificationTarget]
	 * @member {string} [notificationTarget.type] Polymorphic Discriminator
	 * @member {date} [sendTime] Notification send time
	 * @member {number} [pnsSendFailure] Number of the notifications failed to
	 * send to the push provider.
	 * @member {number} [pnsSendSuccess] Number of the notifications successfully
	 * sent to push the provider.
	 * @member {string} state State of the notification. Possible values include:
	 * 'Cancelled', 'Completed', 'Enqueued', 'Processing', 'Unknown'
	 */
	constructor() {}

	/**
	 * Defines the metadata of NotificationOverviewResult
	 *
	 * @returns {object} metadata of NotificationOverviewResult
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "NotificationOverviewResult",
			type: {
				name: "Composite",
				className: "NotificationOverviewResult",
				modelProperties: {
					notificationId: {
						required: true,
						serializedName: "notification_id",
						type: {
							name: "String",
						},
					},
					name: {
						required: false,
						serializedName: "name",
						constraints: {
							MaxLength: 64,
						},
						type: {
							name: "String",
						},
					},
					notificationTarget: {
						required: false,
						serializedName: "notification_target",
						type: {
							name: "Composite",
							polymorphicDiscriminator: {
								serializedName: "type",
								clientName: "type",
							},
							uberParent: "NotificationTarget",
							className: "NotificationTarget",
						},
					},
					sendTime: {
						required: false,
						serializedName: "send_time",
						type: {
							name: "DateTime",
						},
					},
					pnsSendFailure: {
						required: false,
						serializedName: "pns_send_failure",
						type: {
							name: "Number",
						},
					},
					pnsSendSuccess: {
						required: false,
						serializedName: "pns_send_success",
						type: {
							name: "Number",
						},
					},
					state: {
						required: true,
						serializedName: "state",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = NotificationOverviewResult;
