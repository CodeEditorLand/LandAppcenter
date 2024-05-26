const models = require("./index");

/**
 * Class representing a UserProfileResponseInternal.
 * @extends models['UserProfileResponse']
 */
class UserProfileResponseInternal extends models["UserProfileResponse"] {
	/**
	 * Create a UserProfileResponseInternal.
	 * @member {array} [featureFlags] The feature flags that are enabled for this
	 * app
	 * @member {string} [adminRole] The new admin_role. Possible values include:
	 * 'superAdmin', 'admin', 'devOps', 'customerSupport', 'notAdmin'
	 * @member {object} [settings] The user's settings
	 * @member {string} [settings.marketingOptIn] The marketing opt-in setting
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of UserProfileResponseInternal
	 *
	 * @returns {object} metadata of UserProfileResponseInternal
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "UserProfileResponseInternal",
			type: {
				name: "Composite",
				className: "UserProfileResponseInternal",
				modelProperties: {
					id: {
						required: true,
						serializedName: "id",
						type: {
							name: "String",
						},
					},
					avatarUrl: {
						required: false,
						serializedName: "avatar_url",
						type: {
							name: "String",
						},
					},
					canChangePassword: {
						required: false,
						serializedName: "can_change_password",
						type: {
							name: "Boolean",
						},
					},
					displayName: {
						required: true,
						serializedName: "display_name",
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
					name: {
						required: true,
						serializedName: "name",
						type: {
							name: "String",
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
					origin: {
						required: true,
						serializedName: "origin",
						type: {
							name: "String",
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
					adminRole: {
						required: false,
						serializedName: "admin_role",
						type: {
							name: "String",
						},
					},
					settings: {
						required: false,
						serializedName: "settings",
						type: {
							name: "Composite",
							className: "UserProfileResponseInternalSettings",
						},
					},
				},
			},
		};
	}
}

module.exports = UserProfileResponseInternal;
