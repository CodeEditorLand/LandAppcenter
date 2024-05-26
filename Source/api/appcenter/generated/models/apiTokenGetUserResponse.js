/**
 * Class representing a ApiTokenGetUserResponse.
 */
class ApiTokenGetUserResponse {
	/**
	 * Create a ApiTokenGetUserResponse.
	 * @member {string} tokenId The token's unique id (UUID)
	 * @member {array} tokenScope The token's scope. A list of allowed roles.
	 * @member {string} userEmail The user email
	 * @member {string} userId The unique id (UUID) of the user
	 * @member {string} userOrigin The creation origin of the user who created
	 * this api token. Possible values include: 'appcenter', 'hockeyapp',
	 * 'codepush'
	 */
	constructor() {}

	/**
	 * Defines the metadata of ApiTokenGetUserResponse
	 *
	 * @returns {object} metadata of ApiTokenGetUserResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ApiTokenGetUserResponse",
			type: {
				name: "Composite",
				className: "ApiTokenGetUserResponse",
				modelProperties: {
					tokenId: {
						required: true,
						serializedName: "token_id",
						type: {
							name: "String",
						},
					},
					tokenScope: {
						required: true,
						serializedName: "token_scope",
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
					userEmail: {
						required: true,
						serializedName: "user_email",
						type: {
							name: "String",
						},
					},
					userId: {
						required: true,
						serializedName: "user_id",
						type: {
							name: "String",
						},
					},
					userOrigin: {
						required: true,
						serializedName: "user_origin",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = ApiTokenGetUserResponse;
