/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/**
 * @summary Device List
 *
 * A list of device IDs
 *
 */
class DeviceList {
	/**
	 * Defines the metadata of DeviceList
	 *
	 * @returns {object} metadata of DeviceList
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "DeviceList",
			type: {
				name: "Composite",
				className: "DeviceList",
				modelProperties: {
					devices: {
						required: true,
						serializedName: "devices",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "StringElementType",
								type: {
									name: "String",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = DeviceList;
