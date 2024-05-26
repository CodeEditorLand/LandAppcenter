const models = require("./index");

/**
 * Class representing a EventCount.
 */
class EventCount {
	/**
	 * Create a EventCount.
	 * @member {number} [totalCount]
	 * @member {number} [previousTotalCount]
	 * @member {array} [count]
	 */
	constructor() {}

	/**
	 * Defines the metadata of EventCount
	 *
	 * @returns {object} metadata of EventCount
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "EventCount",
			type: {
				name: "Composite",
				className: "EventCount",
				modelProperties: {
					totalCount: {
						required: false,
						serializedName: "total_count",
						type: {
							name: "Number",
						},
					},
					previousTotalCount: {
						required: false,
						serializedName: "previous_total_count",
						type: {
							name: "Number",
						},
					},
					count: {
						required: false,
						serializedName: "count",
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

module.exports = EventCount;
