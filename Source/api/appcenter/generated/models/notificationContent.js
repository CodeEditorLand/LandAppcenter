/**
 * Notification definition object
 *
 */
class NotificationContent {
	/**
	 * Create a NotificationContent.
	 * @member {string} name Notification name
	 * @member {string} [title] Notification title
	 * @member {string} body Notification body
	 * @member {object} [customData] Notification custom data(priority,
	 * expiration, etc.)
	 */
	constructor() {}

	/**
	 * Defines the metadata of NotificationContent
	 *
	 * @returns {object} metadata of NotificationContent
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "NotificationContent",
			type: {
				name: "Composite",
				className: "NotificationContent",
				modelProperties: {
					name: {
						required: true,
						serializedName: "name",
						constraints: {
							MaxLength: 64,
							MinLength: 3,
						},
						type: {
							name: "String",
						},
					},
					title: {
						required: false,
						serializedName: "title",
						constraints: {
							MaxLength: 128,
						},
						type: {
							name: "String",
						},
					},
					body: {
						required: true,
						serializedName: "body",
						constraints: {
							MaxLength: 4000,
							MinLength: 1,
						},
						type: {
							name: "String",
						},
					},
					customData: {
						required: false,
						serializedName: "custom_data",
						type: {
							name: "Dictionary",
							value: {
								required: false,
								serializedName: "StringElementType",
								type: {
									name: "String",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = NotificationContent;
