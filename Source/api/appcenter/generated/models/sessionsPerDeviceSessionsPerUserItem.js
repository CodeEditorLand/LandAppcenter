/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/**
 * Class representing a SessionsPerDeviceSessionsPerUserItem.
 */
class SessionsPerDeviceSessionsPerUserItem {
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
