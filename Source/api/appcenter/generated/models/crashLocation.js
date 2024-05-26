/**
 * crash location information
 *
 */
class CrashLocation {
	/**
	 * Create a CrashLocation.
	 * @member {string} account azure account
	 * @member {string} container blob container
	 * @member {string} blob blob name
	 */
	constructor() {}

	/**
	 * Defines the metadata of CrashLocation
	 *
	 * @returns {object} metadata of CrashLocation
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "CrashLocation",
			type: {
				name: "Composite",
				className: "CrashLocation",
				modelProperties: {
					account: {
						required: true,
						serializedName: "account",
						type: {
							name: "String",
						},
					},
					container: {
						required: true,
						serializedName: "container",
						type: {
							name: "String",
						},
					},
					blob: {
						required: true,
						serializedName: "blob",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = CrashLocation;
