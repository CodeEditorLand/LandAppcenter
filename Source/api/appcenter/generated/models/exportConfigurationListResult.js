/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

const models = require("./index");

/**
 * List of export configurations
 *
 */
class ExportConfigurationListResult {
	/**
	 * Defines the metadata of ExportConfigurationListResult
	 *
	 * @returns {object} metadata of ExportConfigurationListResult
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ExportConfigurationListResult",
			type: {
				name: "Composite",
				className: "ExportConfigurationListResult",
				modelProperties: {
					values: {
						required: true,
						serializedName: "values",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName:
									"ExportConfigurationResultElementType",
								type: {
									name: "Composite",
									className: "ExportConfigurationResult",
								},
							},
						},
					},
					total: {
						required: false,
						serializedName: "total",
						type: {
							name: "Number",
						},
					},
					nextLink: {
						required: false,
						serializedName: "nextLink",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = ExportConfigurationListResult;
