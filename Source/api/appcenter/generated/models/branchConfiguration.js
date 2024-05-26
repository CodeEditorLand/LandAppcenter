const models = require("./index");

/**
 * The branch build configuration
 *
 */
class BranchConfiguration {
	/**
	 * Create a BranchConfiguration.
	 * @member {number} id
	 * @member {string} [trigger] Possible values include: 'continous',
	 * 'continuous', 'manual'
	 * @member {boolean} [testsEnabled]
	 * @member {boolean} [badgeIsEnabled]
	 * @member {boolean} [signed]
	 * @member {object} [toolsets]
	 * @member {object} [toolsets.xcode]
	 * @member {string} [toolsets.xcode.projectOrWorkspacePath] Xcode
	 * project/workspace path
	 * @member {string} [toolsets.xcode.podfilePath] Path to CococaPods file, if
	 * present
	 * @member {string} [toolsets.xcode.cartfilePath] Path to Carthage file, if
	 * present
	 * @member {string} [toolsets.xcode.provisioningProfileEncoded]
	 * @member {string} [toolsets.xcode.certificateEncoded]
	 * @member {string} [toolsets.xcode.provisioningProfileFileId]
	 * @member {string} [toolsets.xcode.certificateFileId]
	 * @member {string} [toolsets.xcode.provisioningProfileUploadId]
	 * @member {string} [toolsets.xcode.certificateUploadId]
	 * @member {string} [toolsets.xcode.certificatePassword]
	 * @member {string} [toolsets.xcode.scheme]
	 * @member {string} [toolsets.xcode.xcodeVersion]
	 * @member {string} [toolsets.xcode.provisioningProfileFilename]
	 * @member {string} [toolsets.xcode.certificateFilename]
	 * @member {string} [toolsets.xcode.teamId]
	 * @member {boolean} [toolsets.xcode.automaticSigning]
	 * @member {string} [toolsets.xcode.xcodeProjectSha] The selected pbxproject
	 * hash to the repositroy
	 * @member {string} [toolsets.xcode.archiveConfiguration] The build
	 * configuration of the target to archive
	 * @member {string} [toolsets.xcode.targetToArchive] The target id of the
	 * selected scheme to archive
	 * @member {object} [toolsets.javascript]
	 * @member {string} [toolsets.javascript.packageJsonPath] Path to
	 * package.json file for the main project, e.g. "package.json" or
	 * "myapp/package.json"
	 * @member {boolean} [toolsets.javascript.runTests] Whether to run Jest unit
	 * tests, via npm test, during the build
	 * @member {string} [toolsets.javascript.reactNativeVersion] Version of React
	 * Native from package.json files
	 * @member {object} [toolsets.xamarin]
	 * @member {string} [toolsets.xamarin.slnPath]
	 * @member {string} [toolsets.xamarin.isSimBuild]
	 * @member {string} [toolsets.xamarin.args]
	 * @member {string} [toolsets.xamarin.configuration]
	 * @member {string} [toolsets.xamarin.p12File]
	 * @member {string} [toolsets.xamarin.p12Pwd]
	 * @member {string} [toolsets.xamarin.provProfile]
	 * @member {string} [toolsets.xamarin.monoVersion]
	 * @member {string} [toolsets.xamarin.sdkBundle]
	 * @member {object} [toolsets.android]
	 * @member {string} [toolsets.android.gradleWrapperPath] Path to the Gradle
	 * wrapper script
	 * @member {string} [toolsets.android.module] The Gradle module to build
	 * @member {string} [toolsets.android.variant] The Android build variant to
	 * build
	 * @member {boolean} [toolsets.android.runTests] Whether to run unit tests
	 * during the build (default)
	 * @member {boolean} [toolsets.android.runLint] Whether to run lint checks
	 * during the build (default)
	 * @member {object} [artifactVersioning]
	 * @member {string} [artifactVersioning.buildNumberFormat] Possible values
	 * include: 'buildId', 'timestamp'
	 */
	constructor() {}

	/**
	 * Defines the metadata of BranchConfiguration
	 *
	 * @returns {object} metadata of BranchConfiguration
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "BranchConfiguration",
			type: {
				name: "Composite",
				additionalProperties: {
					type: {
						name: "Dictionary",
						value: {
							required: false,
							serializedName: "BranchPropertiesElementType",
							type: {
								name: "Composite",
								className: "BranchProperties",
							},
						},
					},
				},
				className: "BranchConfiguration",
				modelProperties: {
					id: {
						required: true,
						serializedName: "id",
						type: {
							name: "Number",
						},
					},
					trigger: {
						required: false,
						serializedName: "trigger",
						type: {
							name: "String",
						},
					},
					testsEnabled: {
						required: false,
						serializedName: "testsEnabled",
						type: {
							name: "Boolean",
						},
					},
					badgeIsEnabled: {
						required: false,
						serializedName: "badgeIsEnabled",
						type: {
							name: "Boolean",
						},
					},
					signed: {
						required: false,
						serializedName: "signed",
						type: {
							name: "Boolean",
						},
					},
					toolsets: {
						required: false,
						serializedName: "toolsets",
						type: {
							name: "Composite",
							className: "BranchConfigurationToolsets",
						},
					},
					artifactVersioning: {
						required: false,
						serializedName: "artifactVersioning",
						type: {
							name: "Composite",
							className: "BranchConfigurationArtifactVersioning",
						},
					},
				},
			},
		};
	}
}

module.exports = BranchConfiguration;
