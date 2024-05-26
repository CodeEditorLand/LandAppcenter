/**
 * Usage for a single period
 *
 */
class UsagePeriod {
	/**
	 * Create a UsagePeriod.
	 * @member {string} [startTime] Inclusive start time of the usage period
	 * @member {string} [endTime] Exclusive end time of the usage period.
	 * @member {object} [byAccount]
	 * @member {object} [byApp]
	 */
	constructor() {}

	/**
	 * Defines the metadata of UsagePeriod
	 *
	 * @returns {object} metadata of UsagePeriod
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "UsagePeriod",
			type: {
				name: "Composite",
				className: "UsagePeriod",
				modelProperties: {
					startTime: {
						required: false,
						serializedName: "startTime",
						type: {
							name: "String",
						},
					},
					endTime: {
						required: false,
						serializedName: "endTime",
						type: {
							name: "String",
						},
					},
					byAccount: {
						required: false,
						serializedName: "byAccount",
						type: {
							name: "Dictionary",
							value: {
								required: false,
								serializedName: "NumberElementType",
								type: {
									name: "Number",
								},
							},
						},
					},
					byApp: {
						required: false,
						serializedName: "byApp",
						type: {
							name: "Dictionary",
							value: {
								required: false,
								serializedName: "ObjectElementType",
								type: {
									name: "Dictionary",
									value: {
										required: false,
										serializedName: "NumberElementType",
										type: {
											name: "Number",
										},
									},
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = UsagePeriod;
