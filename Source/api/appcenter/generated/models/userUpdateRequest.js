/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/**
 * Class representing a UserUpdateRequest.
 */
class UserUpdateRequest {
	/**
	 * Defines the metadata of UserUpdateRequest
	 *
	 * @returns {object} metadata of UserUpdateRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "UserUpdateRequest",
			type: {
				name: "Composite",
				className: "UserUpdateRequest",
				modelProperties: {
					displayName: {
						required: false,
						serializedName: "display_name",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = UserUpdateRequest;
