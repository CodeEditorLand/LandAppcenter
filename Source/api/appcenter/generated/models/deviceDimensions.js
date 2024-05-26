/**
 * Physical device dimensions
 *
 */
class DeviceDimensions {
	/**
	 * Create a DeviceDimensions.
	 * @member {object} [depth]
	 * @member {object} [height]
	 * @member {object} [width]
	 */
	constructor() {}

	/**
	 * Defines the metadata of DeviceDimensions
	 *
	 * @returns {object} metadata of DeviceDimensions
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "DeviceDimensions",
			type: {
				name: "Composite",
				className: "DeviceDimensions",
				modelProperties: {
					depth: {
						required: false,
						serializedName: "depth",
						type: {
							name: "Object",
						},
					},
					height: {
						required: false,
						serializedName: "height",
						type: {
							name: "Object",
						},
					},
					width: {
						required: false,
						serializedName: "width",
						type: {
							name: "Object",
						},
					},
				},
			},
		};
	}
}

module.exports = DeviceDimensions;
