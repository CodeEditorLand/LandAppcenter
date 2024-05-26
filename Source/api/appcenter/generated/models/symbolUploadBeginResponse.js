/**
 * A response containing information pertaining to starting a symbol upload
 * process
 *
 */
class SymbolUploadBeginResponse {
	/**
	 * Create a SymbolUploadBeginResponse.
	 * @member {string} symbolUploadId The id for the current upload
	 * @member {string} uploadUrl The URL where the client needs to upload the
	 * symbol blob to
	 * @member {date} expirationDate Describes how long the upload_url is valid
	 */
	constructor() {}

	/**
	 * Defines the metadata of SymbolUploadBeginResponse
	 *
	 * @returns {object} metadata of SymbolUploadBeginResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "SymbolUploadBeginResponse",
			type: {
				name: "Composite",
				className: "SymbolUploadBeginResponse",
				modelProperties: {
					symbolUploadId: {
						required: true,
						serializedName: "symbol_upload_id",
						type: {
							name: "String",
						},
					},
					uploadUrl: {
						required: true,
						serializedName: "upload_url",
						type: {
							name: "String",
						},
					},
					expirationDate: {
						required: true,
						serializedName: "expiration_date",
						type: {
							name: "DateTime",
						},
					},
				},
			},
		};
	}
}

module.exports = SymbolUploadBeginResponse;
