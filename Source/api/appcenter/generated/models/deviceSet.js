const models = require("./index");

/**
 * @summary Device Set
 *
 * The name and devices of the device set
 *
 */
class DeviceSet {
	/**
	 * Create a DeviceSet.
	 * @member {string} id Identifier of the device set
	 * @member {number} [manufacturerCount] The number of manufacturers in the
	 * device set's device selection
	 * @member {string} name Name of the device set
	 * @member {string} [slug] Slug of the device set
	 * @member {object} owner
	 * @member {string} [owner.type] Type of account
	 * @member {string} [owner.id] Account ID
	 * @member {string} [owner.displayName] Display name of the account
	 * @member {string} [owner.name] Name of the account
	 * @member {number} [osVersionCount] The number of os versions in the device
	 * set's device selection
	 * @member {array} deviceConfigurations
	 */
	constructor() {}

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
