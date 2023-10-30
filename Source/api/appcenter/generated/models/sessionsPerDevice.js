/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

"use strict";

const models = require("./index");

/**
 * Class representing a SessionsPerDevice.
 */
class SessionsPerDevice {
	/**
	 * Create a SessionsPerDevice.
	 * @member {number} [averageSessionsPerUser] average seesion per user
	 * @member {number} [previousAverageSessionsPerUser] previous average session
	 * per user
	 * @member {number} [totalCount] total session per device count
	 * @member {number} [previousTotalCount] previous total count
	 * @member {array} [sessionsPerUser] the session count for each interval per
	 * device
	 */
	constructor() {}

	/**
	 * Defines the metadata of SessionsPerDevice
	 *
	 * @returns {object} metadata of SessionsPerDevice
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "SessionsPerDevice",
			type: {
				name: "Composite",
				className: "SessionsPerDevice",
				modelProperties: {
					averageSessionsPerUser: {
						required: false,
						serializedName: "average_sessions_per_user",
						type: {
							name: "Number",
						},
					},
					previousAverageSessionsPerUser: {
						required: false,
						serializedName: "previous_average_sessions_per_user",
						type: {
							name: "Number",
						},
					},
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
					sessionsPerUser: {
						required: false,
						serializedName: "sessions_per_user",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName:
									"SessionsPerDeviceSessionsPerUserItemElementType",
								type: {
									name: "Composite",
									className:
										"SessionsPerDeviceSessionsPerUserItem",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = SessionsPerDevice;
