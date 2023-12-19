/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/**
 * Class representing a ApiTokenGetUserResponse.
 */
class ApiTokenGetUserResponse {
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
