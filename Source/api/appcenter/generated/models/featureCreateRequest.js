/**
 * Class representing a FeatureCreateRequest.
 */
class FeatureCreateRequest {
	/**
	 * Create a FeatureCreateRequest.
	 * @member {string} name The unique name of the feature
	 * @member {string} displayName The full (friendly) name of the feature.
	 * @member {number} [state] The state of the feature
	 * @member {string} [description] The friendly name of the feature
	 */
	constructor() {}

	/**
	 * Defines the metadata of FeatureCreateRequest
	 *
	 * @returns {object} metadata of FeatureCreateRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "FeatureCreateRequest",
			type: {
				name: "Composite",
				className: "FeatureCreateRequest",
				modelProperties: {
					name: {
						required: true,
						serializedName: "name",
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
					state: {
						required: false,
						serializedName: "state",
						type: {
							name: "Number",
						},
					},
					description: {
						required: false,
						serializedName: "description",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = FeatureCreateRequest;
