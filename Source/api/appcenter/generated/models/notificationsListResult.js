const models = require("./index");

/**
 * List of notifications
 *
 */
class NotificationsListResult {
	/**
	 * Create a NotificationsListResult.
	 * @member {array} values
	 * @member {number} [total] the total count of notifications
	 * @member {string} [nextLink]
	 */
	constructor() {}

	/**
	 * Defines the metadata of NotificationsListResult
	 *
	 * @returns {object} metadata of NotificationsListResult
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "NotificationsListResult",
			type: {
				name: "Composite",
				className: "NotificationsListResult",
				modelProperties: {
					values: {
						required: true,
						serializedName: "values",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName:
									"NotificationOverviewResultElementType",
								type: {
									name: "Composite",
									className: "NotificationOverviewResult",
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
					nextLink: {
						required: false,
						serializedName: "nextLink",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = NotificationsListResult;
