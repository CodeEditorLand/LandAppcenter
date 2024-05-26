/**
 * Class representing a ApiTokensGetResponse.
 */
class ApiTokensGetResponse {
	/**
	 * Create a ApiTokensGetResponse.
	 * @member {string} id The unique id (UUID) of the api token
	 * @member {string} [description] The description of the token
	 * @member {array} [scope] The scope for this token.
	 * @member {string} createdAt The creation time
	 */
	constructor() {}

	/**
	 * Defines the metadata of ApiTokensGetResponse
	 *
	 * @returns {object} metadata of ApiTokensGetResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ApiTokensGetResponse",
			type: {
				name: "Composite",
				className: "ApiTokensGetResponse",
				modelProperties: {
					id: {
						required: true,
						serializedName: "id",
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

module.exports = ApiTokensGetResponse;
