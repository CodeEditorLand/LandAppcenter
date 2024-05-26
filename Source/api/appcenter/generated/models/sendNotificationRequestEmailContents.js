/**
 * latest email content
 *
 */
class SendNotificationRequestEmailContents {
	/**
	 * Create a SendNotificationRequestEmailContents.
	 * @member {string} [releaseId]
	 * @member {string} [appName]
	 * @member {string} [platform]
	 * @member {string} [build]
	 * @member {string} [version]
	 * @member {string} installLink
	 */
	constructor() {}

	/**
	 * Defines the metadata of SendNotificationRequestEmailContents
	 *
	 * @returns {object} metadata of SendNotificationRequestEmailContents
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "SendNotificationRequest_emailContents",
			type: {
				name: "Composite",
				className: "SendNotificationRequestEmailContents",
				modelProperties: {
					releaseId: {
						required: false,
						serializedName: "release_id",
						type: {
							name: "String",
						},
					},
					appName: {
						required: false,
						serializedName: "app_name",
						type: {
							name: "String",
						},
					},
					platform: {
						required: false,
						serializedName: "platform",
						type: {
							name: "String",
						},
					},
					build: {
						required: false,
						serializedName: "build",
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
					installLink: {
						required: true,
						serializedName: "install_link",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = SendNotificationRequestEmailContents;
