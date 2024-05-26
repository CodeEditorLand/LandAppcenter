const models = require("./index");

/**
 * Class representing a CrashFreeDevicePercentages.
 */
class CrashFreeDevicePercentages {
	/**
	 * Create a CrashFreeDevicePercentages.
	 * @member {number} [averagePercentage] Average percentage
	 * @member {array} [dailyPercentages] The crash-free percentage per day.
	 */
	constructor() {}

	/**
	 * Defines the metadata of CrashFreeDevicePercentages
	 *
	 * @returns {object} metadata of CrashFreeDevicePercentages
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "CrashFreeDevicePercentages",
			type: {
				name: "Composite",
				className: "CrashFreeDevicePercentages",
				modelProperties: {
					averagePercentage: {
						required: false,
						serializedName: "average_percentage",
						type: {
							name: "Number",
						},
					},
					dailyPercentages: {
						required: false,
						serializedName: "daily_percentages",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName:
									"DateTimePercentagesElementType",
								type: {
									name: "Composite",
									className: "DateTimePercentages",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = CrashFreeDevicePercentages;
