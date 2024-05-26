/**
 * Class representing a AppVersion.
 */
class AppVersion {
	/**
	 * Create a AppVersion.
	 * @member {string} appVersionId
	 * @member {string} appId
	 * @member {string} displayName
	 * @member {string} appVersion
	 * @member {string} [buildNumber]
	 */
	constructor() {}

	/**
	 * Defines the metadata of AppVersion
	 *
	 * @returns {object} metadata of AppVersion
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AppVersion",
			type: {
				name: "Composite",
				className: "AppVersion",
				modelProperties: {
					appVersionId: {
						required: true,
						serializedName: "app_version_id",
						type: {
							name: "String",
						},
					},
					appId: {
						required: true,
						serializedName: "app_id",
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
					appVersion: {
						required: true,
						serializedName: "app_version",
						type: {
							name: "String",
						},
					},
					buildNumber: {
						required: false,
						serializedName: "build_number",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = AppVersion;
