/**
 * @summary Device Set Owner
 *
 * The owner of a device set
 *
 */
class DeviceSetOwner {
	/**
	 * Create a DeviceSetOwner.
	 * @member {string} type Type of account
	 * @member {string} id Account ID
	 * @member {string} [displayName] Display name of the account
	 * @member {string} name Name of the account
	 */
	constructor() {}

	/**
	 * Defines the metadata of DeviceSetOwner
	 *
	 * @returns {object} metadata of DeviceSetOwner
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "DeviceSetOwner",
			type: {
				name: "Composite",
				className: "DeviceSetOwner",
				modelProperties: {
					type: {
						required: true,
						serializedName: "type",
						type: {
							name: "String",
						},
					},
					id: {
						required: true,
						serializedName: "id",
						type: {
							name: "String",
						},
					},
					displayName: {
						required: false,
						serializedName: "displayName",
						type: {
							name: "String",
						},
					},
					name: {
						required: true,
						serializedName: "name",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = DeviceSetOwner;
