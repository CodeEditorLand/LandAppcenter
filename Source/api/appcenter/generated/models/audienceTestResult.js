/**
 * Audience test result.
 *
 */
class AudienceTestResult {
	/**
	 * Create a AudienceTestResult.
	 * @member {string} [definition] Audience definition in OData format.
	 * @member {object} [customProperties] Custom properties used in the
	 * definition.
	 * @member {number} [estimatedCount] Estimated audience size.
	 * @member {number} [estimatedTotalCount] Estimated total audience size.
	 */
	constructor() {}

	/**
	 * Defines the metadata of AudienceTestResult
	 *
	 * @returns {object} metadata of AudienceTestResult
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AudienceTestResult",
			type: {
				name: "Composite",
				className: "AudienceTestResult",
				modelProperties: {
					definition: {
						required: false,
						serializedName: "definition",
						type: {
							name: "String",
						},
					},
					customProperties: {
						required: false,
						serializedName: "custom_properties",
						type: {
							name: "Dictionary",
							value: {
								required: false,
								serializedName: "DevicePropertyTypeElementType",
								type: {
									name: "Enum",
									allowedValues: [
										"string",
										"number",
										"boolean",
										"date_time",
									],
								},
							},
						},
					},
					estimatedCount: {
						required: false,
						serializedName: "estimated_count",
						type: {
							name: "Number",
						},
					},
					estimatedTotalCount: {
						required: false,
						serializedName: "estimated_total_count",
						type: {
							name: "Number",
						},
					},
				},
			},
		};
	}
}

module.exports = AudienceTestResult;
