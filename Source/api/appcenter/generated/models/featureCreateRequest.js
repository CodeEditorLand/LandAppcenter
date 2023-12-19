/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/**
 * Class representing a FeatureCreateRequest.
 */
class FeatureCreateRequest {
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
