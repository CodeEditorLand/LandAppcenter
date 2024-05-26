/**
 * Response for getting a list of releases in a distribution group
 *
 */
class DistributionGroupRelease {
	/**
	 * Create a DistributionGroupRelease.
	 * @member {number} [id] ID identifying this unique release.
	 * @member {string} [version] The release's version.<br>
	 * For iOS: CFBundleVersion from info.plist.<br>
	 * For Android: android:versionCode from AppManifest.xml.
	 * @member {string} [shortVersion] The release's short version.<br>
	 * For iOS: CFBundleShortVersionString from info.plist.<br>
	 * For Android: android:versionName from AppManifest.xml.
	 * @member {string} [uploadedAt] UTC time in ISO 8601 format of the uploaded
	 * time.
	 */
	constructor() {}

	/**
	 * Defines the metadata of DistributionGroupRelease
	 *
	 * @returns {object} metadata of DistributionGroupRelease
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "DistributionGroupRelease",
			type: {
				name: "Composite",
				className: "DistributionGroupRelease",
				modelProperties: {
					id: {
						required: false,
						serializedName: "id",
						type: {
							name: "Number",
						},
					},
					version: {
						required: false,
						serializedName: "version",
						type: {
							name: "String",
						},
					},
					shortVersion: {
						required: false,
						serializedName: "short_version",
						type: {
							name: "String",
						},
					},
					uploadedAt: {
						required: false,
						serializedName: "uploaded_at",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = DistributionGroupRelease;
