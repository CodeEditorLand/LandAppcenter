const models = require("./index");

/**
 * Event property value counts during the time range in descending order
 *
 */
class EventPropertyValues {
	/**
	 * Create a EventPropertyValues.
	 * @member {number} [total] The total property value counts
	 * @member {array} [values] The event property values
	 */
	constructor() {}

	/**
	 * Defines the metadata of EventPropertyValues
	 *
	 * @returns {object} metadata of EventPropertyValues
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "EventPropertyValues",
			type: {
				name: "Composite",
				className: "EventPropertyValues",
				modelProperties: {
					total: {
						required: false,
						serializedName: "total",
						type: {
							name: "Number",
						},
					},
					values: {
						required: false,
						serializedName: "values",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "EventPropertyValueElementType",
								type: {
									name: "Composite",
									className: "EventPropertyValue",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = EventPropertyValues;
