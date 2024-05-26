const models = require("./index");

/**
 * Class representing a DeviceModel.
 */
class DeviceModel {
	/**
	 * Create a DeviceModel.
	 * @member {string} [name]
	 * @member {string} [manufacturer]
	 * @member {string} [model]
	 * @member {string} [platform]
	 * @member {object} [dimensions]
	 * @member {object} [dimensions.depth]
	 * @member {object} [dimensions.height]
	 * @member {object} [dimensions.width]
	 * @member {object} [resolution]
	 * @member {string} [resolution.height]
	 * @member {string} [resolution.width]
	 * @member {string} [resolution.ppi]
	 * @member {string} [releaseDate]
	 * @member {string} [formFactor]
	 * @member {object} [screenSize]
	 * @member {string} [screenSize.cm]
	 * @member {string} [screenSize.inProperty]
	 * @member {object} [cpu]
	 * @member {string} [cpu.frequency]
	 * @member {string} [cpu.core]
	 * @member {object} [memory]
	 * @member {string} [memory.formattedSize]
	 * @member {number} [screenRotation]
	 * @member {object} [deviceFrame]
	 * @member {object} [deviceFrame.grid]
	 * @member {number} [deviceFrame.grid.width]
	 * @member {number} [deviceFrame.grid.height]
	 * @member {string} [deviceFrame.grid.frameUrl]
	 * @member {array} [deviceFrame.grid.screen]
	 * @member {object} [deviceFrame.full]
	 * @member {number} [deviceFrame.full.width]
	 * @member {number} [deviceFrame.full.height]
	 * @member {string} [deviceFrame.full.frameUrl]
	 * @member {array} [deviceFrame.full.screen]
	 * @member {number} [availabilityCount]
	 */
	constructor() {}

	/**
	 * Defines the metadata of DeviceModel
	 *
	 * @returns {object} metadata of DeviceModel
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "DeviceModel",
			type: {
				name: "Composite",
				className: "DeviceModel",
				modelProperties: {
					name: {
						required: false,
						serializedName: "name",
						type: {
							name: "String",
						},
					},
					manufacturer: {
						required: false,
						serializedName: "manufacturer",
						type: {
							name: "String",
						},
					},
					model: {
						required: false,
						serializedName: "model",
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
					dimensions: {
						required: false,
						serializedName: "dimensions",
						type: {
							name: "Composite",
							className: "DeviceDimensions",
						},
					},
					resolution: {
						required: false,
						serializedName: "resolution",
						type: {
							name: "Composite",
							className: "DeviceResolution",
						},
					},
					releaseDate: {
						required: false,
						serializedName: "releaseDate",
						type: {
							name: "String",
						},
					},
					formFactor: {
						required: false,
						serializedName: "formFactor",
						type: {
							name: "String",
						},
					},
					screenSize: {
						required: false,
						serializedName: "screenSize",
						type: {
							name: "Composite",
							className: "DeviceScreenSize",
						},
					},
					cpu: {
						required: false,
						serializedName: "cpu",
						type: {
							name: "Composite",
							className: "DeviceCpu",
						},
					},
					memory: {
						required: false,
						serializedName: "memory",
						type: {
							name: "Composite",
							className: "DeviceMemory",
						},
					},
					screenRotation: {
						required: false,
						serializedName: "screenRotation",
						type: {
							name: "Number",
						},
					},
					deviceFrame: {
						required: false,
						serializedName: "deviceFrame",
						type: {
							name: "Composite",
							className: "DeviceFrame",
						},
					},
					availabilityCount: {
						required: false,
						serializedName: "availabilityCount",
						type: {
							name: "Number",
						},
					},
				},
			},
		};
	}
}

module.exports = DeviceModel;
