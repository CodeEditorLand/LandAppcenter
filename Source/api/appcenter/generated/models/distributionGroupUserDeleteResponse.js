/**
 * Class representing a DistributionGroupUserDeleteResponse.
 */
class DistributionGroupUserDeleteResponse {
	/**
	 * Create a DistributionGroupUserDeleteResponse.
	 * @member {string} [code] The code of the result
	 * @member {number} [message] The message of the result
	 * @member {number} status The status code of the result
	 * @member {string} [userEmail] The email of the user
	 */
	constructor() {}

	/**
	 * Defines the metadata of DistributionGroupUserDeleteResponse
	 *
	 * @returns {object} metadata of DistributionGroupUserDeleteResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "DistributionGroupUserDeleteResponse",
			type: {
				name: "Composite",
				className: "DistributionGroupUserDeleteResponse",
				modelProperties: {
					code: {
						required: false,
						serializedName: "code",
						type: {
							name: "String",
						},
					},
					message: {
						required: false,
						serializedName: "message",
						type: {
							name: "Number",
						},
					},
					status: {
						required: true,
						serializedName: "status",
						type: {
							name: "Number",
						},
					},
					userEmail: {
						required: false,
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

module.exports = DistributionGroupUserDeleteResponse;
