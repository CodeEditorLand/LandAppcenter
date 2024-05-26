const models = require("./index");

/**
 * Class representing a ActiveDeviceCounts.
 */
class ActiveDeviceCounts {
	/**
	 * Create a ActiveDeviceCounts.
	 * @member {array} [daily] the active device count for each interval
	 * @member {array} [weekly] the active device count for each interval with a
	 * week's retention
	 * @member {array} [monthly] the active device count for each interval with a
	 * month's retention
	 */
	constructor() {}

	/**
	 * Defines the metadata of ActiveDeviceCounts
	 *
	 * @returns {object} metadata of ActiveDeviceCounts
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ActiveDeviceCounts",
			type: {
				name: "Composite",
				className: "ActiveDeviceCounts",
				modelProperties: {
					daily: {
						required: false,
						serializedName: "daily",
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
					weekly: {
						required: false,
						serializedName: "weekly",
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
					monthly: {
						required: false,
						serializedName: "monthly",
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

module.exports = ActiveDeviceCounts;
