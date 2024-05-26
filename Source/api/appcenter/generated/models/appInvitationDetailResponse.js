const models = require("./index");

/**
 * Class representing a AppInvitationDetailResponse.
 */
class AppInvitationDetailResponse {
	/**
	 * Create a AppInvitationDetailResponse.
	 * @member {string} id The unique ID (UUID) of the invitation
	 * @member {object} app
	 * @member {string} [app.appSecret] A unique and secret key used to identify
	 * the app in communication with the ingestion endpoint for crash reporting
	 * and analytics
	 * @member {object} [app.azureSubscription]
	 * @member {string} [app.azureSubscription.subscriptionId] The azure
	 * subscription id
	 * @member {string} [app.azureSubscription.tenantId] The tenant id of the
	 * azure subscription belongs to
	 * @member {string} [app.azureSubscription.subscriptionName] The name of the
	 * azure subscription
	 * @member {boolean} [app.azureSubscription.isBilling] If the subscription is
	 * used for billing
	 * @member {boolean} [app.azureSubscription.isBillable] If the subscription
	 * can be used for billing
	 * @member {string} [app.platform] The platform of the app. Possible values
	 * include: 'Java', 'Objective-C-Swift', 'UWP', 'Cordova', 'React-Native',
	 * 'Unity', 'Xamarin', 'Unknown'
	 * @member {string} [app.origin] The creation origin of this app. Possible
	 * values include: 'appcenter', 'hockeyapp', 'codepush'
	 * @member {string} [app.createdAt] The created date of this app
	 * @member {string} [app.updatedAt] The last updated date of this app
	 * @member {array} [app.memberPermissions] The permissions of the calling
	 * user
	 * @member {string} email The email address of the invited user
	 * @member {string} inviteType The invitation type. Possible values include:
	 * 'developer', 'tester'
	 * @member {object} invitedBy
	 * @member {string} [invitedBy.id] The unique id (UUID) of the user
	 * @member {string} [invitedBy.avatarUrl] The avatar URL of the user
	 * @member {boolean} [invitedBy.canChangePassword] User is required to send
	 * an old password in order to change the password.
	 * @member {string} [invitedBy.displayName] The full name of the user. Might
	 * for example be first and last name
	 * @member {string} [invitedBy.email] The email address of the user
	 * @member {string} [invitedBy.name] The unique name that is used to identify
	 * the user.
	 * @member {array} [invitedBy.permissions] The permissions the user has for
	 * the app
	 * @member {string} [invitedBy.origin] The creation origin of this user.
	 * Possible values include: 'appcenter', 'hockeyapp', 'codepush'
	 * @member {boolean} isExistingUser Indicates whether the invited user
	 * already exists
	 * @member {array} [permissions] The permissions the user has for the app
	 */
	constructor() {}

	/**
	 * Defines the metadata of AppInvitationDetailResponse
	 *
	 * @returns {object} metadata of AppInvitationDetailResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AppInvitationDetailResponse",
			type: {
				name: "Composite",
				className: "AppInvitationDetailResponse",
				modelProperties: {
					id: {
						required: true,
						serializedName: "id",
						type: {
							name: "String",
						},
					},
					app: {
						required: true,
						serializedName: "app",
						type: {
							name: "Composite",
							className: "AppResponse",
						},
					},
					email: {
						required: true,
						serializedName: "email",
						type: {
							name: "String",
						},
					},
					inviteType: {
						required: true,
						serializedName: "invite_type",
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
					permissions: {
						required: false,
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

module.exports = AppInvitationDetailResponse;
