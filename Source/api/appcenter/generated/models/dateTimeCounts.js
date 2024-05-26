/**
 * Class representing a DateTimeCounts.
 */
class DateTimeCounts {
	/**
	 * Create a DateTimeCounts.
	 * @member {string} [datetime] the ISO 8601 datetime
	 * @member {number} [count] count of the object
	 */
	constructor() {}

	/**
	 * Defines the metadata of DateTimeCounts
	 *
	 * @returns {object} metadata of DateTimeCounts
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "DateTimeCounts",
			type: {
				name: "Composite",
				className: "DateTimeCounts",
				modelProperties: {
					datetime: {
						required: false,
						serializedName: "datetime",
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
				},
			},
		};
	}
}

module.exports = DateTimeCounts;
