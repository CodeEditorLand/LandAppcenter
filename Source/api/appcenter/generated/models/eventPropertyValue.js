/**
 * An event property value with counts
 *
 */
class EventPropertyValue {
	/**
	 * Create a EventPropertyValue.
	 * @member {string} [name] The event property value name
	 * @member {number} [count] The count of the the event property value
	 * @member {number} [previousCount] The count of previous time range of the
	 * event property value
	 */
	constructor() {}

	/**
	 * Defines the metadata of EventPropertyValue
	 *
	 * @returns {object} metadata of EventPropertyValue
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "EventPropertyValue",
			type: {
				name: "Composite",
				className: "EventPropertyValue",
				modelProperties: {
					name: {
						required: false,
						serializedName: "name",
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
					previousCount: {
						required: false,
						serializedName: "previous_count",
						type: {
							name: "Number",
						},
					},
				},
			},
		};
	}
}

module.exports = EventPropertyValue;
