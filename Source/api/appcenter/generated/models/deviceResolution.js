/**
 * Device screen resolution
 *
 */
class DeviceResolution {
	/**
	 * Create a DeviceResolution.
	 * @member {string} [height]
	 * @member {string} [width]
	 * @member {string} [ppi]
	 */
	constructor() {}

	/**
	 * Defines the metadata of DeviceResolution
	 *
	 * @returns {object} metadata of DeviceResolution
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "DeviceResolution",
			type: {
				name: "Composite",
				className: "DeviceResolution",
				modelProperties: {
					height: {
						required: false,
						serializedName: "height",
						type: {
							name: "String",
						},
					},
					width: {
						required: false,
						serializedName: "width",
						type: {
							name: "String",
						},
					},
					ppi: {
						required: false,
						serializedName: "ppi",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = DeviceResolution;
