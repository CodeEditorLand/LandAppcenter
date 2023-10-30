/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

"use strict";

const models = require("./index");

/**
 * Class representing a Languages.
 */
class Languages {
	/**
	 * Create a Languages.
	 * @member {number} [total]
	 * @member {array} [languages]
	 */
	constructor() {}

	/**
	 * Defines the metadata of Languages
	 *
	 * @returns {object} metadata of Languages
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "Languages",
			type: {
				name: "Composite",
				className: "Languages",
				modelProperties: {
					total: {
						required: false,
						serializedName: "total",
						type: {
							name: "Number",
						},
					},
					languages: {
						required: false,
						serializedName: "languages",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "LanguageElementType",
								type: {
									name: "Composite",
									className: "Language",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = Languages;
