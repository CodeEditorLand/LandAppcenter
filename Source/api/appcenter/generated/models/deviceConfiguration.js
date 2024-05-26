const models = require("./index");

/**
 * Class representing a DeviceConfiguration.
 */
class DeviceConfiguration {
	/**
	 * Create a DeviceConfiguration.
	 * @member {string} [name] The name of the device model and OS version
	 * @member {uuid} [id] The unique id of the device configuration
	 * @member {number} [tier] The tier
	 * @member {object} [image]
	 * @member {string} [image.full]
	 * @member {string} [image.thumb]
	 * @member {object} [model]
	 * @member {string} [model.name]
	 * @member {string} [model.manufacturer]
	 * @member {string} [model.model]
	 * @member {string} [model.platform]
	 * @member {object} [model.dimensions]
	 * @member {object} [model.dimensions.depth]
	 * @member {object} [model.dimensions.height]
	 * @member {object} [model.dimensions.width]
	 * @member {object} [model.resolution]
	 * @member {string} [model.resolution.height]
	 * @member {string} [model.resolution.width]
	 * @member {string} [model.resolution.ppi]
	 * @member {string} [model.releaseDate]
	 * @member {string} [model.formFactor]
	 * @member {object} [model.screenSize]
	 * @member {string} [model.screenSize.cm]
	 * @member {string} [model.screenSize.inProperty]
	 * @member {object} [model.cpu]
	 * @member {string} [model.cpu.frequency]
	 * @member {string} [model.cpu.core]
	 * @member {object} [model.memory]
	 * @member {string} [model.memory.formattedSize]
	 * @member {number} [model.screenRotation]
	 * @member {object} [model.deviceFrame]
	 * @member {object} [model.deviceFrame.grid]
	 * @member {number} [model.deviceFrame.grid.width]
	 * @member {number} [model.deviceFrame.grid.height]
	 * @member {string} [model.deviceFrame.grid.frameUrl]
	 * @member {array} [model.deviceFrame.grid.screen]
	 * @member {object} [model.deviceFrame.full]
	 * @member {number} [model.deviceFrame.full.width]
	 * @member {number} [model.deviceFrame.full.height]
	 * @member {string} [model.deviceFrame.full.frameUrl]
	 * @member {array} [model.deviceFrame.full.screen]
	 * @member {number} [model.availabilityCount]
	 * @member {string} [os]
	 * @member {string} [osName]
	 * @member {number} [marketShare]
	 */
	constructor() {}

	/**
	 * Defines the metadata of DeviceConfiguration
	 *
	 * @returns {object} metadata of DeviceConfiguration
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "DeviceConfiguration",
			type: {
				name: "Composite",
				className: "DeviceConfiguration",
				modelProperties: {
					name: {
						required: false,
						serializedName: "name",
						type: {
							name: "String",
						},
					},
					id: {
						required: false,
						serializedName: "id",
						type: {
							name: "String",
						},
					},
					tier: {
						required: false,
						serializedName: "tier",
						type: {
							name: "Number",
						},
					},
					image: {
						required: false,
						serializedName: "image",
						type: {
							name: "Composite",
							className: "DeviceConfigurationImage",
						},
					},
					model: {
						required: false,
						serializedName: "model",
						type: {
							name: "Composite",
							className: "DeviceModel",
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
					marketShare: {
						required: false,
						serializedName: "marketShare",
						type: {
							name: "Number",
						},
					},
				},
			},
		};
	}
}

module.exports = DeviceConfiguration;
