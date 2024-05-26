const models = require("./index");

/**
 * Class representing a HandledErrors.
 */
class HandledErrors {
	/**
	 * Create a HandledErrors.
	 * @member {string} [nextLink]
	 * @member {array} [errors] Errors list.
	 */
	constructor() {}

	/**
	 * Defines the metadata of HandledErrors
	 *
	 * @returns {object} metadata of HandledErrors
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "HandledErrors",
			type: {
				name: "Composite",
				className: "HandledErrors",
				modelProperties: {
					nextLink: {
						required: false,
						serializedName: "nextLink",
						type: {
							name: "String",
						},
					},
					errors: {
						required: false,
						serializedName: "errors",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "HandledErrorElementType",
								type: {
									name: "Composite",
									className: "HandledError",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = HandledErrors;
