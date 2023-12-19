/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/**
 * Class representing a EmailVerificationRequest.
 */
class EmailVerificationRequest {
	/**
	 * Defines the metadata of EmailVerificationRequest
	 *
	 * @returns {object} metadata of EmailVerificationRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "EmailVerificationRequest",
			type: {
				name: "Composite",
				className: "EmailVerificationRequest",
				modelProperties: {
					token: {
						required: true,
						serializedName: "token",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = EmailVerificationRequest;
