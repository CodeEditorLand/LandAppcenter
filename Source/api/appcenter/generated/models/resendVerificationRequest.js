/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/**
 * Class representing a ResendVerificationRequest.
 */
class ResendVerificationRequest {
	/**
	 * Defines the metadata of ResendVerificationRequest
	 *
	 * @returns {object} metadata of ResendVerificationRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ResendVerificationRequest",
			type: {
				name: "Composite",
				className: "ResendVerificationRequest",
				modelProperties: {
					name: {
						required: true,
						serializedName: "name",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = ResendVerificationRequest;
