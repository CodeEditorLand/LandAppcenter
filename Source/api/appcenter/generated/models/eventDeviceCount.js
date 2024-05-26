const models = require("./index");

/**
 * Class representing a EventDeviceCount.
 */
class EventDeviceCount {
	/**
	 * Create a EventDeviceCount.
	 * @member {number} [totalDevices]
	 * @member {number} [totalDevicesWithEvent]
	 * @member {number} [previousTotalDevicesWithEvent]
	 * @member {array} [devicesCount]
	 */
	constructor() {}

	/**
	 * Defines the metadata of EventDeviceCount
	 *
	 * @returns {object} metadata of EventDeviceCount
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "EventDeviceCount",
			type: {
				name: "Composite",
				className: "EventDeviceCount",
				modelProperties: {
					totalDevices: {
						required: false,
						serializedName: "total_devices",
						type: {
							name: "Number",
						},
					},
					totalDevicesWithEvent: {
						required: false,
						serializedName: "total_devices_with_event",
						type: {
							name: "Number",
						},
					},
					previousTotalDevicesWithEvent: {
						required: false,
						serializedName: "previous_total_devices_with_event",
						type: {
							name: "Number",
						},
					},
					devicesCount: {
						required: false,
						serializedName: "devices_count",
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

module.exports = EventDeviceCount;
