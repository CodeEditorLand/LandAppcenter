/**
 * Class representing a ApiTokensCreateResponse.
 */
class ApiTokensCreateResponse {
	/**
	 * Create a ApiTokensCreateResponse.
	 * @member {string} id The unique id (UUID) of the api token
	 * @member {string} apiToken The api token generated will not be accessible
	 * again
	 * @member {string} [description] The description of the token
	 * @member {array} [scope] The scope for this token.
	 * @member {string} createdAt The creation time
	 */
	constructor() {}

	/**
	 * Defines the metadata of ApiTokensCreateResponse
	 *
	 * @returns {object} metadata of ApiTokensCreateResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ApiTokensCreateResponse",
			type: {
				name: "Composite",
				className: "ApiTokensCreateResponse",
				modelProperties: {
					id: {
						required: true,
						serializedName: "id",
						type: {
							name: "String",
						},
					},
					apiToken: {
						required: true,
						serializedName: "api_token",
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
					scope: {
						required: false,
						serializedName: "scope",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "StringElementType",
								type: {
									name: "String",
								},
							},
						},
					},
					createdAt: {
						required: true,
						serializedName: "created_at",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = ApiTokensCreateResponse;
