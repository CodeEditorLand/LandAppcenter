/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

"use strict";

const models = require("./index");

/**
 * A collection of projects for each type of toolset
 *
 */
class ToolsetProjects {
	/**
	 * Create a ToolsetProjects.
	 * @member {string} [commit] The commit hash of the analyzed commit
	 * @member {object} [xcode]
	 * @member {array} [xcode.xcodeSchemeContainers] The Xcode scheme containers
	 * @member {object} [javascript]
	 * @member {array} [javascript.packageJsonPaths] Paths for detected
	 * package.json files
	 * @member {array} [javascript.javascriptSolutions] The React Native
	 * solutions detected
	 * @member {object} [xamarin]
	 * @member {array} [xamarin.xamarinSolutions] Xamarin solutions for the
	 * toolset
	 * @member {object} [android]
	 * @member {array} [android.androidModules] Android Gradle modules
	 * @member {string} [android.gradleWrapperPath] The path of the Gradle
	 * wrapper
	 * @member {object} [buildscripts]
	 * @member {object} [uwp]
	 * @member {array} [uwp.uwpSolutions] The UWP solutions detected
	 * @member {object} [testcloud]
	 * @member {array} [testcloud.projects] The TestCloud projects detected
	 */
	constructor() {}

	/**
	 * Defines the metadata of ToolsetProjects
	 *
	 * @returns {object} metadata of ToolsetProjects
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ToolsetProjects",
			type: {
				name: "Composite",
				className: "ToolsetProjects",
				modelProperties: {
					commit: {
						required: false,
						serializedName: "commit",
						type: {
							name: "String",
						},
					},
					xcode: {
						required: false,
						serializedName: "xcode",
						type: {
							name: "Composite",
							className: "XcodeToolset",
						},
					},
					javascript: {
						required: false,
						serializedName: "javascript",
						type: {
							name: "Composite",
							className: "JavaScriptToolset",
						},
					},
					xamarin: {
						required: false,
						serializedName: "xamarin",
						type: {
							name: "Composite",
							className: "XamarinToolset",
						},
					},
					android: {
						required: false,
						serializedName: "android",
						type: {
							name: "Composite",
							className: "AndroidProject",
						},
					},
					buildscripts: {
						required: false,
						serializedName: "buildscripts",
						type: {
							name: "Dictionary",
							value: {
								required: false,
								serializedName: "ToolsetProjectElementType",
								type: {
									name: "Composite",
									className: "ToolsetProject",
								},
							},
						},
					},
					uwp: {
						required: false,
						serializedName: "uwp",
						type: {
							name: "Composite",
							className: "UWPToolset",
						},
					},
					testcloud: {
						required: false,
						serializedName: "testcloud",
						type: {
							name: "Composite",
							className: "TestCloudToolset",
						},
					},
				},
			},
		};
	}
}

module.exports = ToolsetProjects;
