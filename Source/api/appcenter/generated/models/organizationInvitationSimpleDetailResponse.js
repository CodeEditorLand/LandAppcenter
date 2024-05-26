/**
 * Class representing a OrganizationInvitationSimpleDetailResponse.
 */
class OrganizationInvitationSimpleDetailResponse {
	/**
	 * Create a OrganizationInvitationSimpleDetailResponse.
	 * @member {string} id The unique ID (UUID) of the invitation
	 * @member {string} email The email address of the invited user
	 * @member {object} role The role assigned to the invited user
	 */
	constructor() {}

	/**
	 * Defines the metadata of OrganizationInvitationSimpleDetailResponse
	 *
	 * @returns {object} metadata of OrganizationInvitationSimpleDetailResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "OrganizationInvitationSimpleDetailResponse",
			type: {
				name: "Composite",
				className: "OrganizationInvitationSimpleDetailResponse",
				modelProperties: {
					id: {
						required: true,
						serializedName: "id",
						type: {
							name: "String",
						},
					},
					email: {
						required: true,
						serializedName: "email",
						type: {
							name: "String",
						},
					},
					role: {
						required: true,
						serializedName: "role",
						type: {
							name: "Object",
						},
					},
				},
			},
		};
	}
}

module.exports = OrganizationInvitationSimpleDetailResponse;
