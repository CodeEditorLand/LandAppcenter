/**
 * Class representing a ResendVerificationRequest.
 */
class ResendVerificationRequest {
	/**
	 * Create a ResendVerificationRequest.
	 * @member {string} name The email or name of the user to resend verification
	 */
	constructor() {}

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
