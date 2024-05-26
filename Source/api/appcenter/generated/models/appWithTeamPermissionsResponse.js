const models = require("./index");

/**
 * Class representing a AppWithTeamPermissionsResponse.
 * @extends models['AppResponse']
 */
class AppWithTeamPermissionsResponse extends models["AppResponse"] {
	/**
	 * Create a AppWithTeamPermissionsResponse.
	 * @member {array} [teamPermissions] The permissions the team has for the app
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of AppWithTeamPermissionsResponse
	 *
	 * @returns {object} metadata of AppWithTeamPermissionsResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AppWithTeamPermissionsResponse",
			type: {
				name: "Composite",
				className: "AppWithTeamPermissionsResponse",
				modelProperties: {
					id: {
						required: true,
						serializedName: "id",
						type: {
							name: "String",
						},
					},
					description: {
						required: false,
						serializedName: "description",
						type: {
							name: "String",
						},
					},
					displayName: {
						required: true,
						serializedName: "display_name",
						type: {
							name: "String",
						},
					},
					iconUrl: {
						required: false,
						serializedName: "icon_url",
						type: {
							name: "String",
						},
					},
					name: {
						required: true,
						serializedName: "name",
						type: {
							name: "String",
						},
					},
					os: {
						required: true,
						serializedName: "os",
						type: {
							name: "String",
						},
					},
					owner: {
						required: true,
						serializedName: "owner",
						type: {
							name: "Composite",
							className: "Owner",
						},
					},
					appSecret: {
						required: true,
						serializedName: "app_secret",
						type: {
							name: "String",
						},
					},
					azureSubscription: {
						required: false,
						serializedName: "azure_subscription",
						type: {
							name: "Composite",
							className: "AzureSubscriptionResponse",
						},
					},
					platform: {
						required: true,
						serializedName: "platform",
						type: {
							name: "String",
						},
					},
					origin: {
						required: true,
						serializedName: "origin",
						type: {
							name: "String",
						},
					},
					createdAt: {
						required: false,
						serializedName: "created_at",
						type: {
							name: "String",
						},
					},
					updatedAt: {
						required: false,
						serializedName: "updated_at",
						type: {
							name: "String",
						},
					},
					memberPermissions: {
						required: false,
						serializedName: "member_permissions",
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
					teamPermissions: {
						required: false,
						serializedName: "team_permissions",
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

module.exports = AppWithTeamPermissionsResponse;
