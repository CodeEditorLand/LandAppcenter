/**
 * Build configuration for Android projects
 *
 */
class AndroidBranchConfigurationProperties {
	/**
	 * Create a AndroidBranchConfigurationProperties.
	 * @member {string} [gradleWrapperPath] Path to the Gradle wrapper script
	 * @member {string} module The Gradle module to build
	 * @member {string} variant The Android build variant to build
	 * @member {boolean} [runTests] Whether to run unit tests during the build
	 * (default). Default value: true .
	 * @member {boolean} [runLint] Whether to run lint checks during the build
	 * (default). Default value: true .
	 */
	constructor() {}

	/**
	 * Defines the metadata of AndroidBranchConfigurationProperties
	 *
	 * @returns {object} metadata of AndroidBranchConfigurationProperties
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AndroidBranchConfigurationProperties",
			type: {
				name: "Composite",
				className: "AndroidBranchConfigurationProperties",
				modelProperties: {
					gradleWrapperPath: {
						required: false,
						serializedName: "gradleWrapperPath",
						type: {
							name: "String",
						},
					},
					module: {
						required: true,
						serializedName: "module",
						type: {
							name: "String",
						},
					},
					variant: {
						required: true,
						serializedName: "variant",
						type: {
							name: "String",
						},
					},
					runTests: {
						required: false,
						serializedName: "runTests",
						defaultValue: true,
						type: {
							name: "Boolean",
						},
					},
					runLint: {
						required: false,
						serializedName: "runLint",
						defaultValue: true,
						type: {
							name: "Boolean",
						},
					},
				},
			},
		};
	}
}

module.exports = AndroidBranchConfigurationProperties;
