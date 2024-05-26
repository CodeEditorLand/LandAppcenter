/**
 * The publising information.
 *
 */
class PublishDevicesRequest {
	/**
	 * Create a PublishDevicesRequest.
	 * @member {string} [username] The username for the Apple Developer account
	 * to publish the devices to.
	 * @member {string} [password] The password for the Apple Developer account
	 * to publish the devices to.
	 * @member {string} [accountServiceConnectionId] The service_connection_id of
	 * the stored Apple credentials instead of username, password.
	 * @member {boolean} [publishAllDevices] When set to true, all unprovisioned
	 * devices will be published to the Apple Developer account.  When false,
	 * only the provided devices will be published to the Apple Developer
	 * account.
	 * @member {array} [devices] Array of device UDID's to be published to the
	 * Apple Developer account.
	 */
	constructor() {}

	/**
	 * Defines the metadata of PublishDevicesRequest
	 *
	 * @returns {object} metadata of PublishDevicesRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "PublishDevicesRequest",
			type: {
				name: "Composite",
				className: "PublishDevicesRequest",
				modelProperties: {
					username: {
						required: false,
						serializedName: "username",
						type: {
							name: "String",
						},
					},
					password: {
						required: false,
						serializedName: "password",
						type: {
							name: "String",
						},
					},
					accountServiceConnectionId: {
						required: false,
						serializedName: "account_service_connection_id",
						type: {
							name: "String",
						},
					},
					publishAllDevices: {
						required: false,
						serializedName: "publish_all_devices",
						type: {
							name: "Boolean",
						},
					},
					devices: {
						required: false,
						serializedName: "devices",
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
				},
			},
		};
	}
}

module.exports = PublishDevicesRequest;
