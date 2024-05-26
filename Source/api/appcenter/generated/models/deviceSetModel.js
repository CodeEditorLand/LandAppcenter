/**
 * Class representing a DeviceSetModel.
 */
class DeviceSetModel {
	/**
	 * Create a DeviceSetModel.
	 * @member {string} [name]
	 * @member {string} [manufacturer]
	 * @member {string} [releaseDate]
	 * @member {string} [formFactor]
	 */
	constructor() {}

	/**
	 * Defines the metadata of DeviceSetModel
	 *
	 * @returns {object} metadata of DeviceSetModel
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "DeviceSetModel",
			type: {
				name: "Composite",
				className: "DeviceSetModel",
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
				},
			},
		};
	}
}

module.exports = DeviceSetModel;
