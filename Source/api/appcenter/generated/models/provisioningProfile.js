/**
 * An object containing information about an iOS provisioning profile.
 *
 */
class ProvisioningProfile {
	/**
	 * Create a ProvisioningProfile.
	 * @member {string} name The name of the provisioning profile.
	 * @member {string} applicationIdentifier The application identifier.
	 * @member {string} teamIdentifier The team identifier.
	 * @member {string} profileType Possible values include: 'adhoc',
	 * 'enterprise', 'other'
	 * @member {date} expiredAt The profile's expiration date in RFC 3339 format,
	 * i.e. 2017-07-21T17:32:28Z
	 * @member {array} [udids]
	 */
	constructor() {}

	/**
	 * Defines the metadata of ProvisioningProfile
	 *
	 * @returns {object} metadata of ProvisioningProfile
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ProvisioningProfile",
			type: {
				name: "Composite",
				className: "ProvisioningProfile",
				modelProperties: {
					name: {
						required: true,
						serializedName: "name",
						type: {
							name: "String",
						},
					},
					applicationIdentifier: {
						required: true,
						serializedName: "application_identifier",
						type: {
							name: "String",
						},
					},
					teamIdentifier: {
						required: true,
						serializedName: "team_identifier",
						type: {
							name: "String",
						},
					},
					profileType: {
						required: true,
						serializedName: "profile_type",
						type: {
							name: "String",
						},
					},
					expiredAt: {
						required: true,
						serializedName: "expired_at",
						type: {
							name: "DateTime",
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
				},
			},
		};
	}
}

module.exports = ProvisioningProfile;
