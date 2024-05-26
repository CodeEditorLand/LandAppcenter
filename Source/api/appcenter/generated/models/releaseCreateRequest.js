const models = require("./index");

/**
 * A request containing information for creating a release.
 *
 */
class ReleaseCreateRequest {
	/**
	 * Create a ReleaseCreateRequest.
	 * @member {string} [uploadedBy] The user that uploaded the build.
	 * @member {string} name The display name of the app, extracted from the
	 * build.
	 * @member {string} version The release's version.<br>
	 * For iOS: CFBundleVersion from info.plist.<br>
	 * For Android: android:versionCode from AppManifest.xml.
	 * @member {string} buildVersion The release's short version.<br>
	 * For iOS: CFBundleShortVersionString from info.plist.<br>
	 * For Android: android:versionName from AppManifest.xml.
	 * @member {string} uniqueIdentifier The identifier of the app's bundle.
	 * @member {string} minimumOsVersion The release's minimum required operating
	 * system.
	 * @member {string} [deviceFamily] The release's device family.
	 * @member {array} [languages] The languages supported by the release.
	 * @member {string} fingerprint MD5 checksum of the release binary.
	 * @member {number} size The release's size in bytes.
	 * @member {string} packageUrl The URL to the release's binary.
	 * @member {string} [iconUrl] The URL to the release's icon.
	 * @member {array} [ipaUuids] A list of UUIDs for architectures for an iOS
	 * app.
	 * @member {object} [provision]
	 * @member {string} [provision.name] The name of the provisioning profile.
	 * @member {string} [provision.applicationIdentifier] The application
	 * identifier.
	 * @member {string} [provision.teamIdentifier] The team identifier.
	 * @member {string} [provision.profileType] Possible values include: 'adhoc',
	 * 'enterprise', 'other'
	 * @member {date} [provision.expiredAt] The profile's expiration date in RFC
	 * 3339 format, i.e. 2017-07-21T17:32:28Z
	 * @member {array} [provision.udids]
	 * @member {array} [appexProvisioningProfiles] iOS app extension provisioning
	 * profiles included in the release.
	 */
	constructor() {}

	/**
	 * Defines the metadata of ReleaseCreateRequest
	 *
	 * @returns {object} metadata of ReleaseCreateRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ReleaseCreateRequest",
			type: {
				name: "Composite",
				className: "ReleaseCreateRequest",
				modelProperties: {
					uploadedBy: {
						required: false,
						serializedName: "uploaded_by",
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
					version: {
						required: true,
						serializedName: "version",
						type: {
							name: "String",
						},
					},
					buildVersion: {
						required: true,
						serializedName: "build_version",
						type: {
							name: "String",
						},
					},
					uniqueIdentifier: {
						required: true,
						serializedName: "unique_identifier",
						type: {
							name: "String",
						},
					},
					minimumOsVersion: {
						required: true,
						serializedName: "minimum_os_version",
						type: {
							name: "String",
						},
					},
					deviceFamily: {
						required: false,
						serializedName: "device_family",
						type: {
							name: "String",
						},
					},
					languages: {
						required: false,
						serializedName: "languages",
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
					fingerprint: {
						required: true,
						serializedName: "fingerprint",
						type: {
							name: "String",
						},
					},
					size: {
						required: true,
						serializedName: "size",
						type: {
							name: "Number",
						},
					},
					packageUrl: {
						required: true,
						serializedName: "package_url",
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
					ipaUuids: {
						required: false,
						serializedName: "ipa_uuids",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "ArchIdentifierElementType",
								type: {
									name: "Composite",
									className: "ArchIdentifier",
								},
							},
						},
					},
					provision: {
						required: false,
						serializedName: "provision",
						type: {
							name: "Composite",
							className: "ProvisioningProfile",
						},
					},
					appexProvisioningProfiles: {
						required: false,
						serializedName: "appex_provisioning_profiles",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName:
									"ProvisioningProfileElementType",
								type: {
									name: "Composite",
									className: "ProvisioningProfile",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = ReleaseCreateRequest;
