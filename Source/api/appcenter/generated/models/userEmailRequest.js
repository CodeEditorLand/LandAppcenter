/**
 * Class representing a UserEmailRequest.
 */
class UserEmailRequest {
	/**
	 * Create a UserEmailRequest.
	 * @member {string} userEmail The user's email address'
	 */
	constructor() {}

	/**
	 * Defines the metadata of UserEmailRequest
	 *
	 * @returns {object} metadata of UserEmailRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "UserEmailRequest",
			type: {
				name: "Composite",
				className: "UserEmailRequest",
				modelProperties: {
					userEmail: {
						required: true,
						serializedName: "user_email",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = UserEmailRequest;
