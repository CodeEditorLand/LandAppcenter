const models = require("./index");

/**
 * Class representing a Versions.
 */
class Versions {
	/**
	 * Create a Versions.
	 * @member {array} [versions] list of version count
	 * @member {number} [total] the total count of versions
	 */
	constructor() {}

	/**
	 * Defines the metadata of Versions
	 *
	 * @returns {object} metadata of Versions
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "Versions",
			type: {
				name: "Composite",
				className: "Versions",
				modelProperties: {
					versions: {
						required: false,
						serializedName: "versions",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "VersionElementType",
								type: {
									name: "Composite",
									className: "Version",
								},
							},
						},
					},
					total: {
						required: false,
						serializedName: "total",
						type: {
							name: "Number",
						},
					},
				},
			},
		};
	}
}

module.exports = Versions;
