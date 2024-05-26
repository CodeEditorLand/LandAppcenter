const models = require("./index");

/**
 * Class representing a Events.
 */
class Events {
	/**
	 * Create a Events.
	 * @member {array} [events]
	 * @member {number} [total] the total count of events
	 * @member {number} [totalDevices] the active device over this period
	 */
	constructor() {}

	/**
	 * Defines the metadata of Events
	 *
	 * @returns {object} metadata of Events
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "Events",
			type: {
				name: "Composite",
				className: "Events",
				modelProperties: {
					events: {
						required: false,
						serializedName: "events",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "EventElementType",
								type: {
									name: "Composite",
									className: "Event",
								},
							},
						},
					},
					total: {
						required: false,
						serializedName: "total",
						type: {
							name: "Number",
						},
					},
					totalDevices: {
						required: false,
						serializedName: "total_devices",
						type: {
							name: "Number",
						},
					},
				},
			},
		};
	}
}

module.exports = Events;
