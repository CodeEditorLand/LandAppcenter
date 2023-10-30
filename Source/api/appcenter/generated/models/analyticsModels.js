/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

"use strict";

const models = require("./index");

/**
 * Class representing a AnalyticsModels.
 */
class AnalyticsModels {
	/**
	 * Create a AnalyticsModels.
	 * @member {number} [total]
	 * @member {array} [modelsProperty]
	 */
	constructor() {}

	/**
	 * Defines the metadata of AnalyticsModels
	 *
	 * @returns {object} metadata of AnalyticsModels
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AnalyticsModels",
			type: {
				name: "Composite",
				className: "AnalyticsModels",
				modelProperties: {
					total: {
						required: false,
						serializedName: "total",
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
								serializedName: "ModelElementType",
								type: {
									name: "Composite",
									className: "Model",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = AnalyticsModels;
