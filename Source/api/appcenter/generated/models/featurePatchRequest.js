/**
 * Class representing a FeaturePatchRequest.
 */
class FeaturePatchRequest {
	/**
	 * Create a FeaturePatchRequest.
	 * @member {string} [description] The friendly name of the feature
	 * @member {string} [displayName] The full (friendly) name of the feature.
	 * @member {number} [state] The state of the feature
	 */
	constructor() {}

	/**
	 * Defines the metadata of FeaturePatchRequest
	 *
	 * @returns {object} metadata of FeaturePatchRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "FeaturePatchRequest",
			type: {
				name: "Composite",
				className: "FeaturePatchRequest",
				modelProperties: {
					description: {
						required: false,
						serializedName: "description",
						type: {
							name: "String",
						},
					},
					displayName: {
						required: false,
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
				},
			},
		};
	}
}

module.exports = FeaturePatchRequest;
