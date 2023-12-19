/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

const models = require("./index");

/**
 * @summary Device Set
 *
 * The name and devices of the device set
 *
 */
class DeviceSet {
	/**
	 * Defines the metadata of DeviceSet
	 *
	 * @returns {object} metadata of DeviceSet
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "DeviceSet",
			type: {
				name: "Composite",
				className: "DeviceSet",
				modelProperties: {
					id: {
						required: true,
						serializedName: "id",
						type: {
							name: "String",
						},
					},
					manufacturerCount: {
						required: false,
						serializedName: "manufacturerCount",
						type: {
							name: "Number",
						},
					},
					name: {
						required: true,
						serializedName: "name",
						type: {
							name: "String",
						},
					},
					slug: {
						required: false,
						serializedName: "slug",
						type: {
							name: "String",
						},
					},
					owner: {
						required: true,
						serializedName: "owner",
						type: {
							name: "Composite",
							className: "DeviceSetOwner",
						},
					},
					osVersionCount: {
						required: false,
						serializedName: "osVersionCount",
						type: {
							name: "Number",
						},
					},
					deviceConfigurations: {
						required: true,
						serializedName: "deviceConfigurations",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName:
									"DeviceSetConfigurationElementType",
								type: {
									name: "Composite",
									className: "DeviceSetConfiguration",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = DeviceSet;
