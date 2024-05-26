/**
 * Build configuration when React Native, or other JavaScript tech, is part of
 * the build steps
 *
 */
class JavaScriptBranchConfigurationProperties {
	/**
	 * Create a JavaScriptBranchConfigurationProperties.
	 * @member {string} packageJsonPath Path to package.json file for the main
	 * project, e.g. "package.json" or "myapp/package.json"
	 * @member {boolean} [runTests] Whether to run Jest unit tests, via npm test,
	 * during the build. Default value: true .
	 * @member {string} [reactNativeVersion] Version of React Native from
	 * package.json files
	 */
	constructor() {}

	/**
	 * Defines the metadata of JavaScriptBranchConfigurationProperties
	 *
	 * @returns {object} metadata of JavaScriptBranchConfigurationProperties
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "JavaScriptBranchConfigurationProperties",
			type: {
				name: "Composite",
				className: "JavaScriptBranchConfigurationProperties",
				modelProperties: {
					packageJsonPath: {
						required: true,
						serializedName: "packageJsonPath",
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
					reactNativeVersion: {
						required: false,
						serializedName: "reactNativeVersion",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = JavaScriptBranchConfigurationProperties;
