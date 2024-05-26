/**
 * Audience definition.
 *
 */
class AudienceSummary {
	/**
	 * Create a AudienceSummary.
	 * @member {string} [name] Audience name.
	 * @member {string} [description] Audience description.
	 * @member {number} [estimatedCount] Estimated audience size.
	 * @member {string} [definition] Audience definition in OData format.
	 * @member {string} [state] Audience state. Possible values include:
	 * 'Calculating', 'Ready', 'Disabled'
	 */
	constructor() {}

	/**
	 * Defines the metadata of AudienceSummary
	 *
	 * @returns {object} metadata of AudienceSummary
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AudienceSummary",
			type: {
				name: "Composite",
				className: "AudienceSummary",
				modelProperties: {
					name: {
						required: false,
						serializedName: "name",
						type: {
							name: "String",
						},
					},
					description: {
						required: false,
						serializedName: "description",
						type: {
							name: "String",
						},
					},
					estimatedCount: {
						required: false,
						serializedName: "estimated_count",
						type: {
							name: "Number",
						},
					},
					definition: {
						required: false,
						serializedName: "definition",
						type: {
							name: "String",
						},
					},
					state: {
						required: false,
						serializedName: "state",
						type: {
							name: "Enum",
							allowedValues: ["Calculating", "Ready", "Disabled"],
						},
					},
				},
			},
		};
	}
}

module.exports = AudienceSummary;
