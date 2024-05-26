const models = require("./index");

/**
 * Class representing a DateTimeDownloadReleaseCounts.
 */
class DateTimeDownloadReleaseCounts {
	/**
	 * Create a DateTimeDownloadReleaseCounts.
	 * @member {number} [total]
	 * @member {number} [unique]
	 * @member {array} [counts] Release Counts per day
	 */
	constructor() {}

	/**
	 * Defines the metadata of DateTimeDownloadReleaseCounts
	 *
	 * @returns {object} metadata of DateTimeDownloadReleaseCounts
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "DateTimeDownloadReleaseCounts",
			type: {
				name: "Composite",
				className: "DateTimeDownloadReleaseCounts",
				modelProperties: {
					total: {
						required: false,
						serializedName: "total",
						type: {
							name: "Number",
						},
					},
					unique: {
						required: false,
						serializedName: "unique",
						type: {
							name: "Number",
						},
					},
					counts: {
						required: false,
						serializedName: "counts",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName:
									"DateTimeDownloadReleaseCountElementType",
								type: {
									name: "Composite",
									className: "DateTimeDownloadReleaseCount",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = DateTimeDownloadReleaseCounts;
