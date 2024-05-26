const models = require("./index");

/**
 * Class representing a XcodeToolset.
 */
class XcodeToolset {
	/**
	 * Create a XcodeToolset.
	 * @member {array} xcodeSchemeContainers The Xcode scheme containers
	 */
	constructor() {}

	/**
	 * Defines the metadata of XcodeToolset
	 *
	 * @returns {object} metadata of XcodeToolset
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "XcodeToolset",
			type: {
				name: "Composite",
				className: "XcodeToolset",
				modelProperties: {
					xcodeSchemeContainers: {
						required: true,
						serializedName: "xcodeSchemeContainers",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName:
									"XcodeSchemeContainerElementType",
								type: {
									name: "Composite",
									className: "XcodeSchemeContainer",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = XcodeToolset;
