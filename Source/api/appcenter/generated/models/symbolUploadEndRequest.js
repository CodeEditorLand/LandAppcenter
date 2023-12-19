/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/**
 * A request containing information pertaining to completing a symbol upload
 * process
 *
 */
class SymbolUploadEndRequest {
	/**
	 * Defines the metadata of SymbolUploadEndRequest
	 *
	 * @returns {object} metadata of SymbolUploadEndRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "SymbolUploadEndRequest",
			type: {
				name: "Composite",
				className: "SymbolUploadEndRequest",
				modelProperties: {
					status: {
						required: true,
						serializedName: "status",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = SymbolUploadEndRequest;
