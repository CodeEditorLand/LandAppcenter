/**
 * Class representing a ApiTokensPostRequest.
 */
class ApiTokensPostRequest {
	/**
	 * Create a ApiTokensPostRequest.
	 * @member {string} [description] The description of the token
	 * @member {string} [encryptedToken] An encrypted value of the token.
	 * @member {array} [scope] The scope for this token. An array of supported
	 * roles.
	 * @member {string} [tokenHash] The hashed value of api token
	 * @member {string} [tokenType] The token's type. public:managed by the user;
	 * in_app_update:special token for in-app update scenario; buid:dedicated for
	 * CI usage for now; session:for CLI session management; tester_app: used for
	 * tester mobile app; default is "public".'. Possible values include:
	 * 'public', 'in_app_update', 'build', 'session', 'tester_app'
	 */
	constructor() {}

	/**
	 * Defines the metadata of ApiTokensPostRequest
	 *
	 * @returns {object} metadata of ApiTokensPostRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ApiTokensPostRequest",
			type: {
				name: "Composite",
				className: "ApiTokensPostRequest",
				modelProperties: {
					description: {
						required: false,
						serializedName: "description",
						type: {
							name: "String",
						},
					},
					encryptedToken: {
						required: false,
						serializedName: "encrypted_token",
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
					tokenHash: {
						required: false,
						serializedName: "token_hash",
						type: {
							name: "String",
						},
					},
					tokenType: {
						required: false,
						serializedName: "token_type",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = ApiTokensPostRequest;
