/**
 * Class representing a CrashGroupOperatingSystem.
 */
class CrashGroupOperatingSystem {
	/**
	 * Create a CrashGroupOperatingSystem.
	 * @member {string} [operatingSystemName] OS name
	 * @member {number} [crashCount] count of OS
	 */
	constructor() {}

	/**
	 * Defines the metadata of CrashGroupOperatingSystem
	 *
	 * @returns {object} metadata of CrashGroupOperatingSystem
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "CrashGroupOperatingSystem",
			type: {
				name: "Composite",
				className: "CrashGroupOperatingSystem",
				modelProperties: {
					operatingSystemName: {
						required: false,
						serializedName: "operating_system_name",
						type: {
							name: "String",
						},
					},
					crashCount: {
						required: false,
						serializedName: "crash_count",
						type: {
							name: "Number",
						},
					},
				},
			},
		};
	}
}

module.exports = CrashGroupOperatingSystem;
