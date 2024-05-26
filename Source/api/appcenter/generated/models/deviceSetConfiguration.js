const models = require("./index");

/**
 * Class representing a DeviceSetConfiguration.
 */
class DeviceSetConfiguration {
	/**
	 * Create a DeviceSetConfiguration.
	 * @member {uuid} [id] The unique id of the device configuration
	 * @member {object} [image]
	 * @member {string} [image.thumb]
	 * @member {object} [model]
	 * @member {string} [model.name]
	 * @member {string} [model.manufacturer]
	 * @member {string} [model.releaseDate]
	 * @member {string} [model.formFactor]
	 * @member {string} [os]
	 * @member {string} [osName]
	 */
	constructor() {}

	/**
	 * Defines the metadata of DeviceSetConfiguration
	 *
	 * @returns {object} metadata of DeviceSetConfiguration
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "DeviceSetConfiguration",
			type: {
				name: "Composite",
				className: "DeviceSetConfiguration",
				modelProperties: {
					id: {
						required: false,
						serializedName: "id",
						type: {
							name: "String",
						},
					},
					image: {
						required: false,
						serializedName: "image",
						type: {
							name: "Composite",
							className: "DeviceSetConfigurationImage",
						},
					},
					model: {
						required: false,
						serializedName: "model",
						type: {
							name: "Composite",
							className: "DeviceSetModel",
						},
					},
					os: {
						required: false,
						serializedName: "os",
						type: {
							name: "String",
						},
					},
					osName: {
						required: false,
						serializedName: "osName",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = DeviceSetConfiguration;
