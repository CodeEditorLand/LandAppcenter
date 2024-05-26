const models = require("./index");

/**
 * Class representing a IntuneGroups.
 */
class IntuneGroups {
	/**
	 * Create a IntuneGroups.
	 * @member {string} [odatacontext] context
	 * @member {array} [value] categories for intune app
	 */
	constructor() {}

	/**
	 * Defines the metadata of IntuneGroups
	 *
	 * @returns {object} metadata of IntuneGroups
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "IntuneGroups",
			type: {
				name: "Composite",
				className: "IntuneGroups",
				modelProperties: {
					odatacontext: {
						required: false,
						serializedName: "odata\\.context",
						type: {
							name: "String",
						},
					},
					value: {
						required: false,
						serializedName: "value",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "IntuneGroupValueElementType",
								type: {
									name: "Composite",
									className: "IntuneGroupValue",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = IntuneGroups;
