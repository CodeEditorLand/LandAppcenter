/**
 * Class representing a JavaScriptSolution.
 */
class JavaScriptSolution {
	/**
	 * Create a JavaScriptSolution.
	 * @member {string} packageJsonPath The path to the detected package.json
	 * @member {string} [reactNativeVersion] Version of React Native from
	 * package.json files
	 */
	constructor() {}

	/**
	 * Defines the metadata of JavaScriptSolution
	 *
	 * @returns {object} metadata of JavaScriptSolution
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "JavaScriptSolution",
			type: {
				name: "Composite",
				className: "JavaScriptSolution",
				modelProperties: {
					packageJsonPath: {
						required: true,
						serializedName: "packageJsonPath",
						type: {
							name: "String",
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

module.exports = JavaScriptSolution;
