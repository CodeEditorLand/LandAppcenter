/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/**
 * Class representing a BuildLog.
 */
class BuildLog {
	/**
	 * Defines the metadata of BuildLog
	 *
	 * @returns {object} metadata of BuildLog
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "BuildLog",
			type: {
				name: "Composite",
				className: "BuildLog",
				modelProperties: {
					value: {
						required: false,
						serializedName: "value",
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
				},
			},
		};
	}
}

module.exports = BuildLog;
