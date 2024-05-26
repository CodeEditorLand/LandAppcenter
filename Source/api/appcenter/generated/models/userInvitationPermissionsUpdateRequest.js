/**
 * Class representing a UserInvitationPermissionsUpdateRequest.
 */
class UserInvitationPermissionsUpdateRequest {
	/**
	 * Create a UserInvitationPermissionsUpdateRequest.
	 * @member {array} permissions The permissions the user has for the app in
	 * the invitation
	 */
	constructor() {}

	/**
	 * Defines the metadata of UserInvitationPermissionsUpdateRequest
	 *
	 * @returns {object} metadata of UserInvitationPermissionsUpdateRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "UserInvitationPermissionsUpdateRequest",
			type: {
				name: "Composite",
				className: "UserInvitationPermissionsUpdateRequest",
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

module.exports = UserInvitationPermissionsUpdateRequest;
