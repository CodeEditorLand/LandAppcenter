/**
 * Class representing a XamarinSolution.
 */
class XamarinSolution {
	/**
	 * Create a XamarinSolution.
	 * @member {string} path Path to solution
	 * @member {array} configurations Solution configurations
	 * @member {string} [defaultConfiguration] Solution default configuration
	 */
	constructor() {}

	/**
	 * Defines the metadata of XamarinSolution
	 *
	 * @returns {object} metadata of XamarinSolution
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "XamarinSolution",
			type: {
				name: "Composite",
				className: "XamarinSolution",
				modelProperties: {
					path: {
						required: true,
						serializedName: "path",
						type: {
							name: "String",
						},
					},
					configurations: {
						required: true,
						serializedName: "configurations",
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
					defaultConfiguration: {
						required: false,
						serializedName: "defaultConfiguration",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = XamarinSolution;
