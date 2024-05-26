const models = require("./index");

/**
 * Class representing a CrashGroupOperatingSystems.
 */
class CrashGroupOperatingSystems {
	/**
	 * Create a CrashGroupOperatingSystems.
	 * @member {number} [crashCount]
	 * @member {array} [operatingSystems]
	 */
	constructor() {}

	/**
	 * Defines the metadata of CrashGroupOperatingSystems
	 *
	 * @returns {object} metadata of CrashGroupOperatingSystems
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "CrashGroupOperatingSystems",
			type: {
				name: "Composite",
				className: "CrashGroupOperatingSystems",
				modelProperties: {
					crashCount: {
						required: false,
						serializedName: "crash_count",
						type: {
							name: "Number",
						},
					},
					operatingSystems: {
						required: false,
						serializedName: "operating_systems",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName:
									"CrashGroupOperatingSystemElementType",
								type: {
									name: "Composite",
									className: "CrashGroupOperatingSystem",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = CrashGroupOperatingSystems;
