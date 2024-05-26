/**
 * Properties of new application release
 *
 */
class NewAppReleaseAlertingEventAppReleaseProperties {
	/**
	 * Create a NewAppReleaseAlertingEventAppReleaseProperties.
	 * @member {string} appName
	 * @member {string} appDisplayName
	 * @member {string} releaseId
	 * @member {string} platform
	 * @member {string} uploadedAt Date and time in ISO 8601 format
	 * @member {string} [fingerprint]
	 * @member {string} [releaseNotes]
	 * @member {string} version
	 * @member {string} shortVersion
	 * @member {string} [minOs]
	 * @member {boolean} [mandatoryUpdate]
	 * @member {number} size
	 * @member {string} [provisioningProfileName]
	 * @member {string} [provisioningProfileType]
	 * @member {string} bundleIdentifier
	 * @member {string} installLink
	 * @member {string} [iconLink]
	 * @member {string} [distributionGroupId]
	 */
	constructor() {}

	/**
	 * Defines the metadata of NewAppReleaseAlertingEventAppReleaseProperties
	 *
	 * @returns {object} metadata of NewAppReleaseAlertingEventAppReleaseProperties
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "NewAppReleaseAlertingEvent_app_release_properties",
			type: {
				name: "Composite",
				className: "NewAppReleaseAlertingEventAppReleaseProperties",
				modelProperties: {
					appName: {
						required: true,
						serializedName: "app_name",
						type: {
							name: "String",
						},
					},
					appDisplayName: {
						required: true,
						serializedName: "app_display_name",
						type: {
							name: "String",
						},
					},
					releaseId: {
						required: true,
						serializedName: "release_id",
						type: {
							name: "String",
						},
					},
					platform: {
						required: true,
						serializedName: "platform",
						type: {
							name: "String",
						},
					},
					uploadedAt: {
						required: true,
						serializedName: "uploaded_at",
						type: {
							name: "String",
						},
					},
					fingerprint: {
						required: false,
						serializedName: "fingerprint",
						type: {
							name: "String",
						},
					},
					releaseNotes: {
						required: false,
						serializedName: "release_notes",
						type: {
							name: "String",
						},
					},
					version: {
						required: true,
						serializedName: "version",
						type: {
							name: "String",
						},
					},
					shortVersion: {
						required: true,
						serializedName: "short_version",
						type: {
							name: "String",
						},
					},
					minOs: {
						required: false,
						serializedName: "min_os",
						type: {
							name: "String",
						},
					},
					mandatoryUpdate: {
						required: false,
						serializedName: "mandatory_update",
						type: {
							name: "Boolean",
						},
					},
					size: {
						required: true,
						serializedName: "size",
						type: {
							name: "Number",
						},
					},
					provisioningProfileName: {
						required: false,
						serializedName: "provisioning_profile_name",
						type: {
							name: "String",
						},
					},
					provisioningProfileType: {
						required: false,
						serializedName: "provisioning_profile_type",
						type: {
							name: "String",
						},
					},
					bundleIdentifier: {
						required: true,
						serializedName: "bundle_identifier",
						type: {
							name: "String",
						},
					},
					installLink: {
						required: true,
						serializedName: "install_link",
						type: {
							name: "String",
						},
					},
					iconLink: {
						required: false,
						serializedName: "icon_link",
						type: {
							name: "String",
						},
					},
					distributionGroupId: {
						required: false,
						serializedName: "distribution_group_id",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = NewAppReleaseAlertingEventAppReleaseProperties;
