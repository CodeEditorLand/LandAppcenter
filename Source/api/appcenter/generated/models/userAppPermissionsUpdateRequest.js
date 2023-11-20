/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

"use strict";

/**
 * Class representing a UserAppPermissionsUpdateRequest.
 */
class UserAppPermissionsUpdateRequest {
	/**
	 * Create a UserAppPermissionsUpdateRequest.
	 * @member {array} permissions The permissions the user has for the app
	 */
	constructor() {}

	/**
	 * Defines the metadata of UserAppPermissionsUpdateRequest
	 *
	 * @returns {object} metadata of UserAppPermissionsUpdateRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "UserAppPermissionsUpdateRequest",
			type: {
				name: "Composite",
				className: "UserAppPermissionsUpdateRequest",
				modelProperties: {
					permissions: {
						required: true,
						serializedName: "permissions",
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
				},
			},
		};
	}
}

module.exports = UserAppPermissionsUpdateRequest;
