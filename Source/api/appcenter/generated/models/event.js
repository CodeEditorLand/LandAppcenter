/**
 * Class representing a Event.
 */
class Event {
	/**
	 * Create a Event.
	 * @member {string} [id]
	 * @member {string} [name]
	 * @member {number} [deviceCount]
	 * @member {number} [previousDeviceCount] the device count of previous time
	 * range of the event
	 * @member {number} [count]
	 * @member {number} [previousCount] the event count of previous time range of
	 * the event
	 * @member {number} [countPerDevice]
	 * @member {number} [countPerSession]
	 */
	constructor() {}

	/**
	 * Defines the metadata of Event
	 *
	 * @returns {object} metadata of Event
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "Event",
			type: {
				name: "Composite",
				className: "Event",
				modelProperties: {
					id: {
						required: false,
						serializedName: "id",
						type: {
							name: "String",
						},
					},
					name: {
						required: false,
						serializedName: "name",
						type: {
							name: "String",
						},
					},
					deviceCount: {
						required: false,
						serializedName: "device_count",
						type: {
							name: "Number",
						},
					},
					previousDeviceCount: {
						required: false,
						serializedName: "previous_device_count",
						type: {
							name: "Number",
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
					countPerDevice: {
						required: false,
						serializedName: "count_per_device",
						type: {
							name: "Number",
						},
					},
					countPerSession: {
						required: false,
						serializedName: "count_per_session",
						type: {
							name: "Number",
						},
					},
				},
			},
		};
	}
}

module.exports = Event;
