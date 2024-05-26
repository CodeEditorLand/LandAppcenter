const models = require("./index");

/**
 * Class representing a ErrorGroups.
 */
class ErrorGroups {
	/**
	 * Create a ErrorGroups.
	 * @member {string} [nextLink]
	 * @member {array} [errorGroups]
	 */
	constructor() {}

	/**
	 * Defines the metadata of ErrorGroups
	 *
	 * @returns {object} metadata of ErrorGroups
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ErrorGroups",
			type: {
				name: "Composite",
				className: "ErrorGroups",
				modelProperties: {
					nextLink: {
						required: false,
						serializedName: "nextLink",
						type: {
							name: "String",
						},
					},
					errorGroups: {
						required: false,
						serializedName: "errorGroups",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "ErrorGroupListItemElementType",
								type: {
									name: "Composite",
									className: "ErrorGroupListItem",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = ErrorGroups;
