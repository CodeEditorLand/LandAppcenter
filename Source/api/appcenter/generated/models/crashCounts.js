const models = require("./index");

/**
 * Class representing a CrashCounts.
 */
class CrashCounts {
	/**
	 * Create a CrashCounts.
	 * @member {number} [count] total crash count
	 * @member {array} [crashes] the total crash count for day
	 */
	constructor() {}

	/**
	 * Defines the metadata of CrashCounts
	 *
	 * @returns {object} metadata of CrashCounts
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "CrashCounts",
			type: {
				name: "Composite",
				className: "CrashCounts",
				modelProperties: {
					count: {
						required: false,
						serializedName: "count",
						type: {
							name: "Number",
						},
					},
					crashes: {
						required: false,
						serializedName: "crashes",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "DateTimeCountsElementType",
								type: {
									name: "Composite",
									className: "DateTimeCounts",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = CrashCounts;
