const models = require("./index");

/**
 * Class representing a ReleaseCounts.
 */
class ReleaseCounts {
	/**
	 * Create a ReleaseCounts.
	 * @member {number} [total]
	 * @member {array} counts
	 */
	constructor() {}

	/**
	 * Defines the metadata of ReleaseCounts
	 *
	 * @returns {object} metadata of ReleaseCounts
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ReleaseCounts",
			type: {
				name: "Composite",
				className: "ReleaseCounts",
				modelProperties: {
					total: {
						required: false,
						serializedName: "total",
						type: {
							name: "Number",
						},
					},
					counts: {
						required: true,
						serializedName: "counts",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "ReleaseCountElementType",
								type: {
									name: "Composite",
									className: "ReleaseCount",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = ReleaseCounts;
