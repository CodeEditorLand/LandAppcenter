const models = require("./index");

/**
 * Class representing a AppResponseInternal.
 * @extends models['AppResponse']
 */
class AppResponseInternal extends models["AppResponse"] {
	/**
	 * Create a AppResponseInternal.
	 * @member {array} [featureFlags] The feature flags that are enabled for this
	 * app
	 * @member {array} [repositories] The repositories associated with this app
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of AppResponseInternal
	 *
	 * @returns {object} metadata of AppResponseInternal
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AppResponseInternal",
			type: {
				name: "Composite",
				className: "AppResponseInternal",
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
					featureFlags: {
						required: false,
						serializedName: "feature_flags",
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
					repositories: {
						required: false,
						serializedName: "repositories",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName:
									"AppResponseInternalRepositoriesItemElementType",
								type: {
									name: "Composite",
									className:
										"AppResponseInternalRepositoriesItem",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = AppResponseInternal;
