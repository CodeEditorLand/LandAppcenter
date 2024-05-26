/**
 * Physical device screen dimensions
 *
 */
class DeviceScreenSize {
	/**
	 * Create a DeviceScreenSize.
	 * @member {string} [cm]
	 * @member {string} [inProperty]
	 */
	constructor() {}

	/**
	 * Defines the metadata of DeviceScreenSize
	 *
	 * @returns {object} metadata of DeviceScreenSize
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "DeviceScreenSize",
			type: {
				name: "Composite",
				className: "DeviceScreenSize",
				modelProperties: {
					cm: {
						required: false,
						serializedName: "cm",
						type: {
							name: "String",
						},
					},
					inProperty: {
						required: false,
						serializedName: "in",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = DeviceScreenSize;
