/**
 * A request containing information pertaining to starting a symbol upload
 * process
 *
 */
class SymbolUploadBeginRequest {
	/**
	 * Create a SymbolUploadBeginRequest.
	 * @member {string} symbolType The type of the symbol for the current symbol
	 * upload. Possible values include: 'Apple', 'Breakpad', 'AndroidProguard',
	 * 'UWP'
	 * @member {string} [clientCallback] The callback URL that the client can
	 * optionally provide to get status updates for the current symbol upload
	 * @member {string} [fileName] The file name for the symbol upload
	 * @member {string} [build] The build number. Optional for Apple. Required
	 * for Android.
	 * @member {string} [version] The version number. Optional for Apple.
	 * Required for Android.
	 */
	constructor() {}

	/**
	 * Defines the metadata of SymbolUploadBeginRequest
	 *
	 * @returns {object} metadata of SymbolUploadBeginRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "SymbolUploadBeginRequest",
			type: {
				name: "Composite",
				className: "SymbolUploadBeginRequest",
				modelProperties: {
					symbolType: {
						required: true,
						serializedName: "symbol_type",
						type: {
							name: "String",
						},
					},
					clientCallback: {
						required: false,
						serializedName: "client_callback",
						type: {
							name: "String",
						},
					},
					fileName: {
						required: false,
						serializedName: "file_name",
						type: {
							name: "String",
						},
					},
					build: {
						required: false,
						serializedName: "build",
						type: {
							name: "String",
						},
					},
					version: {
						required: false,
						serializedName: "version",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = SymbolUploadBeginRequest;
