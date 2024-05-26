const models = require("./index");

/**
 * Class representing a JavaScriptToolset.
 */
class JavaScriptToolset {
	/**
	 * Create a JavaScriptToolset.
	 * @member {array} packageJsonPaths Paths for detected package.json files
	 * @member {array} [javascriptSolutions] The React Native solutions detected
	 */
	constructor() {}

	/**
	 * Defines the metadata of JavaScriptToolset
	 *
	 * @returns {object} metadata of JavaScriptToolset
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "JavaScriptToolset",
			type: {
				name: "Composite",
				className: "JavaScriptToolset",
				modelProperties: {
					packageJsonPaths: {
						required: true,
						serializedName: "packageJsonPaths",
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
					javascriptSolutions: {
						required: false,
						serializedName: "javascriptSolutions",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "JavaScriptSolutionElementType",
								type: {
									name: "Composite",
									className: "JavaScriptSolution",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = JavaScriptToolset;
