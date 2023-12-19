/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

const models = require("./index");

/**
 * Class representing a OrganizationInvitationDetailResponse.
 */
class OrganizationInvitationDetailResponse {
	/**
	 * Defines the metadata of OrganizationInvitationDetailResponse
	 *
	 * @returns {object} metadata of OrganizationInvitationDetailResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "OrganizationInvitationDetailResponse",
			type: {
				name: "Composite",
				className: "OrganizationInvitationDetailResponse",
				modelProperties: {
					id: {
						required: true,
						serializedName: "id",
						type: {
							name: "String",
						},
					},
					organization: {
						required: true,
						serializedName: "organization",
						type: {
							name: "Composite",
							className: "OrganizationResponse",
						},
					},
					email: {
						required: true,
						serializedName: "email",
						type: {
							name: "String",
						},
					},
					invitedBy: {
						required: true,
						serializedName: "invited_by",
						type: {
							name: "Composite",
							className: "UserProfileResponse",
						},
					},
					isExistingUser: {
						required: true,
						serializedName: "is_existing_user",
						type: {
							name: "Boolean",
						},
					},
					role: {
						required: false,
						serializedName: "role",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = OrganizationInvitationDetailResponse;
