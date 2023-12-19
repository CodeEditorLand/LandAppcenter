/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/**
 * Location for downloading symbol upload
 *
 */
class SymbolUploadLocation {
	/**
	 * Defines the metadata of SymbolUploadLocation
	 *
	 * @returns {object} metadata of SymbolUploadLocation
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "SymbolUploadLocation",
			type: {
				name: "Composite",
				className: "SymbolUploadLocation",
				modelProperties: {
					uri: {
						required: true,
						serializedName: "uri",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = SymbolUploadLocation;
