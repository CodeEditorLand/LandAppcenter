/**
 * Build configuration for Xamarin projects
 *
 */
class XamarinBranchConfigurationProperties {
	/**
	 * Create a XamarinBranchConfigurationProperties.
	 * @member {string} slnPath
	 * @member {string} isSimBuild
	 * @member {string} args
	 * @member {string} configuration
	 * @member {string} p12File
	 * @member {string} p12Pwd
	 * @member {string} provProfile
	 * @member {string} [monoVersion]
	 * @member {string} [sdkBundle]
	 */
	constructor() {}

	/**
	 * Defines the metadata of XamarinBranchConfigurationProperties
	 *
	 * @returns {object} metadata of XamarinBranchConfigurationProperties
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "XamarinBranchConfigurationProperties",
			type: {
				name: "Composite",
				className: "XamarinBranchConfigurationProperties",
				modelProperties: {
					slnPath: {
						required: true,
						serializedName: "slnPath",
						type: {
							name: "String",
						},
					},
					isSimBuild: {
						required: true,
						serializedName: "isSimBuild",
						type: {
							name: "String",
						},
					},
					args: {
						required: true,
						serializedName: "args",
						type: {
							name: "String",
						},
					},
					configuration: {
						required: true,
						serializedName: "configuration",
						type: {
							name: "String",
						},
					},
					p12File: {
						required: true,
						serializedName: "p12File",
						type: {
							name: "String",
						},
					},
					p12Pwd: {
						required: true,
						serializedName: "p12Pwd",
						type: {
							name: "String",
						},
					},
					provProfile: {
						required: true,
						serializedName: "provProfile",
						type: {
							name: "String",
						},
					},
					monoVersion: {
						required: false,
						serializedName: "monoVersion",
						type: {
							name: "String",
						},
					},
					sdkBundle: {
						required: false,
						serializedName: "sdkBundle",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = XamarinBranchConfigurationProperties;
