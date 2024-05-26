/**
 * Class representing a DeviceConfigurationImage.
 */
class DeviceConfigurationImage {
	/**
	 * Create a DeviceConfigurationImage.
	 * @member {string} [full]
	 * @member {string} [thumb]
	 */
	constructor() {}

	/**
	 * Defines the metadata of DeviceConfigurationImage
	 *
	 * @returns {object} metadata of DeviceConfigurationImage
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "DeviceConfiguration_image",
			type: {
				name: "Composite",
				className: "DeviceConfigurationImage",
				modelProperties: {
					full: {
						required: false,
						serializedName: "full",
						type: {
							name: "String",
						},
					},
					thumb: {
						required: false,
						serializedName: "thumb",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = DeviceConfigurationImage;
