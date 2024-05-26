/**
 * Class representing a Version.
 */
class Version {
	/**
	 * Create a Version.
	 * @member {string} [version] version
	 * @member {number} [count] version count
	 * @member {number} [previousCount] the count of previous time range of the
	 * version
	 */
	constructor() {}

	/**
	 * Defines the metadata of Version
	 *
	 * @returns {object} metadata of Version
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "Version",
			type: {
				name: "Composite",
				className: "Version",
				modelProperties: {
					version: {
						required: false,
						serializedName: "version",
						type: {
							name: "String",
						},
					},
					count: {
						required: false,
						serializedName: "count",
						type: {
							name: "Number",
						},
					},
					previousCount: {
						required: false,
						serializedName: "previous_count",
						type: {
							name: "Number",
						},
					},
				},
			},
		};
	}
}

module.exports = Version;
