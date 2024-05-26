/**
 * Class representing a SessionsPerDeviceSessionsPerUserItem.
 */
class SessionsPerDeviceSessionsPerUserItem {
	/**
	 * Create a SessionsPerDeviceSessionsPerUserItem.
	 * @member {string} [datetime] the ISO 8601 datetime
	 * @member {number} [count] count
	 */
	constructor() {}

	/**
	 * Defines the metadata of SessionsPerDeviceSessionsPerUserItem
	 *
	 * @returns {object} metadata of SessionsPerDeviceSessionsPerUserItem
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "SessionsPerDevice_sessions_per_userItem",
			type: {
				name: "Composite",
				className: "SessionsPerDeviceSessionsPerUserItem",
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

module.exports = SessionsPerDeviceSessionsPerUserItem;
