/**
 * Class representing a CrashGroupChange.
 */
class CrashGroupChange {
	/**
	 * Create a CrashGroupChange.
	 * @member {object} [status]
	 * @member {string} [annotation]
	 */
	constructor() {}

	/**
	 * Defines the metadata of CrashGroupChange
	 *
	 * @returns {object} metadata of CrashGroupChange
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "CrashGroupChange",
			type: {
				name: "Composite",
				className: "CrashGroupChange",
				modelProperties: {
					status: {
						required: false,
						serializedName: "status",
						type: {
							name: "Object",
						},
					},
					annotation: {
						required: false,
						serializedName: "annotation",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = CrashGroupChange;
