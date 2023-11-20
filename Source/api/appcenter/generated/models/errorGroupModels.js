/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

"use strict";

const models = require("./index");

/**
 * Class representing a ErrorGroupModels.
 */
class ErrorGroupModels {
	/**
	 * Create a ErrorGroupModels.
	 * @member {number} [errorCount]
	 * @member {array} [modelsProperty]
	 */
	constructor() {}

	/**
	 * Defines the metadata of ErrorGroupModels
	 *
	 * @returns {object} metadata of ErrorGroupModels
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ErrorGroupModels",
			type: {
				name: "Composite",
				className: "ErrorGroupModels",
				modelProperties: {
					errorCount: {
						required: false,
						serializedName: "errorCount",
						type: {
							name: "Number",
						},
					},
					modelsProperty: {
						required: false,
						serializedName: "models",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "ErrorGroupModelElementType",
								type: {
									name: "Composite",
									className: "ErrorGroupModel",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = ErrorGroupModels;
