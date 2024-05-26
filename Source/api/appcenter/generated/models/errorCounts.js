const models = require("./index");

/**
 * Class representing a ErrorCounts.
 */
class ErrorCounts {
	/**
	 * Create a ErrorCounts.
	 * @member {number} [count] total error count
	 * @member {array} [errors] the total error count for day
	 */
	constructor() {}

	/**
	 * Defines the metadata of ErrorCounts
	 *
	 * @returns {object} metadata of ErrorCounts
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ErrorCounts",
			type: {
				name: "Composite",
				className: "ErrorCounts",
				modelProperties: {
					count: {
						required: false,
						serializedName: "count",
						type: {
							name: "Number",
						},
					},
					errors: {
						required: false,
						serializedName: "errors",
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

module.exports = ErrorCounts;
