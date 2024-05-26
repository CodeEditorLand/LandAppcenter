/**
 * Class representing a FeatureResponse.
 */
class FeatureResponse {
	/**
	 * Create a FeatureResponse.
	 * @member {string} [description] The description of the feature
	 * @member {string} displayName The friendly name of the feature
	 * @member {string} name The unique name of the feature
	 * @member {number} state The state (unset, enabled, disabled) of the feature
	 */
	constructor() {}

	/**
	 * Defines the metadata of FeatureResponse
	 *
	 * @returns {object} metadata of FeatureResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "FeatureResponse",
			type: {
				name: "Composite",
				className: "FeatureResponse",
				modelProperties: {
					description: {
						required: false,
						serializedName: "description",
						type: {
							name: "String",
						},
					},
					displayName: {
						required: true,
						serializedName: "display_name",
						type: {
							name: "String",
						},
					},
					name: {
						required: true,
						serializedName: "name",
						type: {
							name: "String",
						},
					},
					state: {
						required: true,
						serializedName: "state",
						type: {
							name: "Number",
						},
					},
				},
			},
		};
	}
}

module.exports = FeatureResponse;
