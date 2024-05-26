/**
 * Class representing a ApiTokenResponse.
 */
class ApiTokenResponse {
	/**
	 * Create a ApiTokenResponse.
	 * @member {string} id The unique id (UUID) of the api token
	 * @member {string} createdAt The creation time
	 * @member {array} [scope] The token's scope. A list of allowed roles.
	 * @member {object} [encryptedToken] The encrypted value of a token. This
	 * value will only be returned for token of type in_app_update.
	 * @member {string} [description] The description of the token
	 */
	constructor() {}

	/**
	 * Defines the metadata of ApiTokenResponse
	 *
	 * @returns {object} metadata of ApiTokenResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ApiTokenResponse",
			type: {
				name: "Composite",
				className: "ApiTokenResponse",
				modelProperties: {
					id: {
						required: true,
						serializedName: "id",
						type: {
							name: "String",
						},
					},
					createdAt: {
						required: true,
						serializedName: "created_at",
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
					encryptedToken: {
						required: false,
						serializedName: "encrypted_token",
						type: {
							name: "Object",
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

module.exports = ApiTokenResponse;
