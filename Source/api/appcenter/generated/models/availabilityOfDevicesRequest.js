/**
 * Apple credentials needed to log into the Apple Developer Portal and access
 * provisioning profiles
 *
 */
class AvailabilityOfDevicesRequest {
	/**
	 * Create a AvailabilityOfDevicesRequest.
	 * @member {string} [username] The username for the Apple Developer account.
	 * @member {string} [password] The password for the Apple Developer account.
	 * @member {string} [serviceConnectionId] The service_connection_id of the
	 * stored Apple credentials instad of username, password.
	 */
	constructor() {}

	/**
	 * Defines the metadata of AvailabilityOfDevicesRequest
	 *
	 * @returns {object} metadata of AvailabilityOfDevicesRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AvailabilityOfDevicesRequest",
			type: {
				name: "Composite",
				className: "AvailabilityOfDevicesRequest",
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
					serviceConnectionId: {
						required: false,
						serializedName: "service_connection_id",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = AvailabilityOfDevicesRequest;
