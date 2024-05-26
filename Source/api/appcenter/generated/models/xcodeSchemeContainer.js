const models = require("./index");

/**
 * Class representing a XcodeSchemeContainer.
 */
class XcodeSchemeContainer {
	/**
	 * Create a XcodeSchemeContainer.
	 * @member {string} path Path to project
	 * @member {array} sharedSchemes Project schemes
	 * @member {string} [podfilePath] Path to CocoaPods file, if present
	 * @member {object} [cartfilePath] Path to Carthage file, if present
	 * @member {string} [xcodeProjectSha] repo object Id of the pbxproject
	 * @member {string} [workspaceProjectPaths] Related projects paths for
	 * xcworkspace
	 */
	constructor() {}

	/**
	 * Defines the metadata of XcodeSchemeContainer
	 *
	 * @returns {object} metadata of XcodeSchemeContainer
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "XcodeSchemeContainer",
			type: {
				name: "Composite",
				className: "XcodeSchemeContainer",
				modelProperties: {
					path: {
						required: true,
						serializedName: "path",
						type: {
							name: "String",
						},
					},
					sharedSchemes: {
						required: true,
						serializedName: "sharedSchemes",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "XcodeSchemeElementType",
								type: {
									name: "Composite",
									className: "XcodeScheme",
								},
							},
						},
					},
					podfilePath: {
						required: false,
						serializedName: "podfilePath",
						type: {
							name: "String",
						},
					},
					cartfilePath: {
						required: false,
						serializedName: "cartfilePath",
						type: {
							name: "Object",
						},
					},
					xcodeProjectSha: {
						required: false,
						serializedName: "xcodeProjectSha",
						type: {
							name: "String",
						},
					},
					workspaceProjectPaths: {
						required: false,
						serializedName: "workspaceProjectPaths",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = XcodeSchemeContainer;
