const models = require("./index");

/**
 * Class representing a DeviceFrame.
 */
class DeviceFrame {
	/**
	 * Create a DeviceFrame.
	 * @member {object} [grid]
	 * @member {number} [grid.width]
	 * @member {number} [grid.height]
	 * @member {string} [grid.frameUrl]
	 * @member {array} [grid.screen]
	 * @member {object} [full]
	 * @member {number} [full.width]
	 * @member {number} [full.height]
	 * @member {string} [full.frameUrl]
	 * @member {array} [full.screen]
	 */
	constructor() {}

	/**
	 * Defines the metadata of DeviceFrame
	 *
	 * @returns {object} metadata of DeviceFrame
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "DeviceFrame",
			type: {
				name: "Composite",
				className: "DeviceFrame",
				modelProperties: {
					grid: {
						required: false,
						serializedName: "grid",
						type: {
							name: "Composite",
							className: "DeviceFrameDefinition",
						},
					},
					full: {
						required: false,
						serializedName: "full",
						type: {
							name: "Composite",
							className: "DeviceFrameDefinition",
						},
					},
				},
			},
		};
	}
}

module.exports = DeviceFrame;
