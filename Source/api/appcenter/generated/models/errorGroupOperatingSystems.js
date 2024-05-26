const models = require("./index");

/**
 * Class representing a ErrorGroupOperatingSystems.
 */
class ErrorGroupOperatingSystems {
	/**
	 * Create a ErrorGroupOperatingSystems.
	 * @member {number} [errorCount]
	 * @member {array} [operatingSystems]
	 */
	constructor() {}

	/**
	 * Defines the metadata of ErrorGroupOperatingSystems
	 *
	 * @returns {object} metadata of ErrorGroupOperatingSystems
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ErrorGroupOperatingSystems",
			type: {
				name: "Composite",
				className: "ErrorGroupOperatingSystems",
				modelProperties: {
					errorCount: {
						required: false,
						serializedName: "errorCount",
						type: {
							name: "Number",
						},
					},
					operatingSystems: {
						required: false,
						serializedName: "operatingSystems",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName:
									"ErrorGroupOperatingSystemElementType",
								type: {
									name: "Composite",
									className: "ErrorGroupOperatingSystem",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = ErrorGroupOperatingSystems;
