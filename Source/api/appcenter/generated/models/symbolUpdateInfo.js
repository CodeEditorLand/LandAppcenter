/**
 * symbol update message
 *
 */
class SymbolUpdateInfo {
	/**
	 * Create a SymbolUpdateInfo.
	 * @member {string} symbolId UUID of the symbol
	 * @member {string} appId application id
	 * @member {string} status symbol upload status. Possible values include:
	 * 'missing', 'ignored', 'available'
	 */
	constructor() {}

	/**
	 * Defines the metadata of SymbolUpdateInfo
	 *
	 * @returns {object} metadata of SymbolUpdateInfo
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "SymbolUpdateInfo",
			type: {
				name: "Composite",
				className: "SymbolUpdateInfo",
				modelProperties: {
					symbolId: {
						required: true,
						serializedName: "symbol_id",
						type: {
							name: "String",
						},
					},
					appId: {
						required: true,
						serializedName: "app_id",
						type: {
							name: "String",
						},
					},
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

module.exports = SymbolUpdateInfo;
