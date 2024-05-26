/**
 * Class representing a DeviceFrameDefinition.
 */
class DeviceFrameDefinition {
	/**
	 * Create a DeviceFrameDefinition.
	 * @member {number} [width]
	 * @member {number} [height]
	 * @member {string} [frameUrl]
	 * @member {array} [screen]
	 */
	constructor() {}

	/**
	 * Defines the metadata of DeviceFrameDefinition
	 *
	 * @returns {object} metadata of DeviceFrameDefinition
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "DeviceFrameDefinition",
			type: {
				name: "Composite",
				className: "DeviceFrameDefinition",
				modelProperties: {
					width: {
						required: false,
						serializedName: "width",
						type: {
							name: "Number",
						},
					},
					height: {
						required: false,
						serializedName: "height",
						type: {
							name: "Number",
						},
					},
					frameUrl: {
						required: false,
						serializedName: "frameUrl",
						type: {
							name: "String",
						},
					},
					screen: {
						required: false,
						serializedName: "screen",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "NumberElementType",
								type: {
									name: "Number",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = DeviceFrameDefinition;
