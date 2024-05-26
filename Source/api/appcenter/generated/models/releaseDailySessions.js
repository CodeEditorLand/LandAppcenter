const models = require("./index");

/**
 * Class representing a ReleaseDailySessions.
 */
class ReleaseDailySessions {
	/**
	 * Create a ReleaseDailySessions.
	 * @member {number} [totalSessionCounts]
	 * @member {number} [avgSessionsPerDay]
	 * @member {array} [sessions] Sessions per day
	 */
	constructor() {}

	/**
	 * Defines the metadata of ReleaseDailySessions
	 *
	 * @returns {object} metadata of ReleaseDailySessions
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ReleaseDailySessions",
			type: {
				name: "Composite",
				className: "ReleaseDailySessions",
				modelProperties: {
					totalSessionCounts: {
						required: false,
						serializedName: "totalSessionCounts",
						type: {
							name: "Number",
						},
					},
					avgSessionsPerDay: {
						required: false,
						serializedName: "avgSessionsPerDay",
						type: {
							name: "Number",
						},
					},
					sessions: {
						required: false,
						serializedName: "sessions",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "DailySessionElementType",
								type: {
									name: "Composite",
									className: "DailySession",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = ReleaseDailySessions;
