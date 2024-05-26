const models = require("./index");

/**
 * Class representing a XamarinToolset.
 */
class XamarinToolset {
	/**
	 * Create a XamarinToolset.
	 * @member {array} xamarinSolutions Xamarin solutions for the toolset
	 */
	constructor() {}

	/**
	 * Defines the metadata of XamarinToolset
	 *
	 * @returns {object} metadata of XamarinToolset
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "XamarinToolset",
			type: {
				name: "Composite",
				className: "XamarinToolset",
				modelProperties: {
					xamarinSolutions: {
						required: true,
						serializedName: "xamarinSolutions",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "XamarinSolutionElementType",
								type: {
									name: "Composite",
									className: "XamarinSolution",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = XamarinToolset;
