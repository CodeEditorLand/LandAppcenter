const models = require("./index");

/**
 * Class representing a ErrorFreeDevicePercentages.
 */
class ErrorFreeDevicePercentages {
	/**
	 * Create a ErrorFreeDevicePercentages.
	 * @member {number} [averagePercentage] Average percentage
	 * @member {array} [dailyPercentages] The error-free percentage per day.
	 */
	constructor() {}

	/**
	 * Defines the metadata of ErrorFreeDevicePercentages
	 *
	 * @returns {object} metadata of ErrorFreeDevicePercentages
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ErrorFreeDevicePercentages",
			type: {
				name: "Composite",
				className: "ErrorFreeDevicePercentages",
				modelProperties: {
					averagePercentage: {
						required: false,
						serializedName: "averagePercentage",
						type: {
							name: "Number",
						},
					},
					dailyPercentages: {
						required: false,
						serializedName: "dailyPercentages",
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

module.exports = ErrorFreeDevicePercentages;
