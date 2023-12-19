/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

const models = require("./index");

/**
 * Class representing a UWPToolset.
 */
class UWPToolset {
	/**
	 * Defines the metadata of UWPToolset
	 *
	 * @returns {object} metadata of UWPToolset
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "UWPToolset",
			type: {
				name: "Composite",
				className: "UWPToolset",
				modelProperties: {
					uwpSolutions: {
						required: true,
						serializedName: "uwpSolutions",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "UWPSolutionElementType",
								type: {
									name: "Composite",
									className: "UWPSolution",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = UWPToolset;
