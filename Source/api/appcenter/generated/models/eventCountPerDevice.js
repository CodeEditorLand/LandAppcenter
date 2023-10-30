/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

"use strict";

const models = require("./index");

/**
 * Class representing a EventCountPerDevice.
 */
class EventCountPerDevice {
	/**
	 * Create a EventCountPerDevice.
	 * @member {number} [avgCountPerDevice]
	 * @member {number} [previousAvgCountPerDevice]
	 * @member {array} [countPerDevice]
	 */
	constructor() {}

	/**
	 * Defines the metadata of EventCountPerDevice
	 *
	 * @returns {object} metadata of EventCountPerDevice
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "EventCountPerDevice",
			type: {
				name: "Composite",
				className: "EventCountPerDevice",
				modelProperties: {
					avgCountPerDevice: {
						required: false,
						serializedName: "avg_count_per_device",
						type: {
							name: "Number",
						},
					},
					previousAvgCountPerDevice: {
						required: false,
						serializedName: "previous_avg_count_per_device",
						type: {
							name: "Number",
						},
					},
					countPerDevice: {
						required: false,
						serializedName: "count_per_device",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName:
									"DateTimeDecimalCountsElementType",
								type: {
									name: "Composite",
									className: "DateTimeDecimalCounts",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = EventCountPerDevice;
