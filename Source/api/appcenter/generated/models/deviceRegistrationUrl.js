/**
 * The url that can be navigated to in order to start the device registration
 * process.
 *
 */
class DeviceRegistrationUrl {
	/**
	 * Create a DeviceRegistrationUrl.
	 * @member {string} registrationUrl The url that can be navigated to in order
	 * to start the device registration process.
	 */
	constructor() {}

	/**
	 * Defines the metadata of DeviceRegistrationUrl
	 *
	 * @returns {object} metadata of DeviceRegistrationUrl
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "DeviceRegistrationUrl",
			type: {
				name: "Composite",
				className: "DeviceRegistrationUrl",
				modelProperties: {
					registrationUrl: {
						required: true,
						serializedName: "registration_url",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = DeviceRegistrationUrl;
