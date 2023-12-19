/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

const models = require("./index");

/**
 * Class representing a UserProfileResponseInternal.
 * @extends models['UserProfileResponse']
 */
class UserProfileResponseInternal extends models["UserProfileResponse"] {
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
