const models = require("./index");

/**
 * Notification definition object
 *
 */
class NotificationDefinition {
	/**
	 * Create a NotificationDefinition.
	 * @member {object} [notificationTarget]
	 * @member {string} [notificationTarget.type] Polymorphic Discriminator
	 * @member {object} notificationContent
	 * @member {string} [notificationContent.name] Notification name
	 * @member {string} [notificationContent.title] Notification title
	 * @member {string} [notificationContent.body] Notification body
	 * @member {object} [notificationContent.customData] Notification custom
	 * data(priority, expiration, etc.)
	 */
	constructor() {}

	/**
	 * Defines the metadata of NotificationDefinition
	 *
	 * @returns {object} metadata of NotificationDefinition
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "NotificationDefinition",
			type: {
				name: "Composite",
				className: "NotificationDefinition",
				modelProperties: {
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
					notificationContent: {
						required: true,
						serializedName: "notification_content",
						type: {
							name: "Composite",
							className: "NotificationContent",
						},
					},
				},
			},
		};
	}
}

module.exports = NotificationDefinition;
