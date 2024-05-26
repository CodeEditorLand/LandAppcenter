const models = require("./index");

/**
 * A response containing information about an iOS provisioning profile.
 *
 */
class ProvisioningProfileResponse {
	/**
	 * Create a ProvisioningProfileResponse.
	 * @member {string} provisioningProfileType Possible values include: 'adhoc',
	 * 'enterprise', 'other'
	 * @member {array} [udids]
	 * @member {string} [provisioningProfileName] The name of the provisioning
	 * profile.
	 * @member {string} [teamIdentifier] The team identifier.
	 * @member {string} [provisioningBundleId] The bundle identifier associated
	 * with the profile.
	 * @member {array} [appexProfiles] Array of provisioning profiles for any app
	 * extensions
	 */
	constructor() {}

	/**
	 * Defines the metadata of ProvisioningProfileResponse
	 *
	 * @returns {object} metadata of ProvisioningProfileResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ProvisioningProfileResponse",
			type: {
				name: "Composite",
				className: "ProvisioningProfileResponse",
				modelProperties: {
					provisioningProfileType: {
						required: true,
						serializedName: "provisioning_profile_type",
						type: {
							name: "String",
						},
					},
					udids: {
						required: false,
						serializedName: "udids",
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
					provisioningProfileName: {
						required: false,
						serializedName: "provisioning_profile_name",
						type: {
							name: "String",
						},
					},
					teamIdentifier: {
						required: false,
						serializedName: "team_identifier",
						type: {
							name: "String",
						},
					},
					provisioningBundleId: {
						required: false,
						serializedName: "provisioning_bundle_id",
						type: {
							name: "String",
						},
					},
					appexProfiles: {
						required: false,
						serializedName: "appex_profiles",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName:
									"ProvisioningProfileResponseElementType",
								type: {
									name: "Composite",
									className: "ProvisioningProfileResponse",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = ProvisioningProfileResponse;
