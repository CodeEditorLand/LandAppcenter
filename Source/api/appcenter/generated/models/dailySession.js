/**
 * Class representing a DailySession.
 */
class DailySession {
	/**
	 * Create a DailySession.
	 * @member {string} [datetime] the ISO 8601 datetime
	 * @member {number} [count]
	 */
	constructor() {}

	/**
	 * Defines the metadata of DailySession
	 *
	 * @returns {object} metadata of DailySession
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "DailySession",
			type: {
				name: "Composite",
				className: "DailySession",
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

module.exports = DailySession;
