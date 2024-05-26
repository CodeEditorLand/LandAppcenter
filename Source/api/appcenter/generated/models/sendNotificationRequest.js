const models = require("./index");

/**
 * Class representing a SendNotificationRequest.
 */
class SendNotificationRequest {
	/**
	 * Create a SendNotificationRequest.
	 * @member {array} userIds user list to send email notification
	 * @member {object} emailContents latest email content
	 * @member {string} [emailContents.releaseId]
	 * @member {string} [emailContents.appName]
	 * @member {string} [emailContents.platform]
	 * @member {string} [emailContents.build]
	 * @member {string} [emailContents.version]
	 * @member {string} [emailContents.installLink]
	 */
	constructor() {}

	/**
	 * Defines the metadata of SendNotificationRequest
	 *
	 * @returns {object} metadata of SendNotificationRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "SendNotificationRequest",
			type: {
				name: "Composite",
				className: "SendNotificationRequest",
				modelProperties: {
					userIds: {
						required: true,
						serializedName: "userIds",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "StringElementType",
								type: {
									name: "String",
								},
							},
						},
					},
					emailContents: {
						required: true,
						serializedName: "emailContents",
						type: {
							name: "Composite",
							className: "SendNotificationRequestEmailContents",
						},
					},
				},
			},
		};
	}
}

module.exports = SendNotificationRequest;
