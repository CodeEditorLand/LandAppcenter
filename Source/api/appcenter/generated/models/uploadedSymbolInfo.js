/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

"use strict";

/**
 * Class representing a UploadedSymbolInfo.
 */
class UploadedSymbolInfo {
	/**
	 * Create a UploadedSymbolInfo.
	 * @member {string} symbolId The symbol id of the symbol binary
	 * @member {string} platform The platform the symbol is associated with
	 */
	constructor() {}

	/**
	 * Defines the metadata of UploadedSymbolInfo
	 *
	 * @returns {object} metadata of UploadedSymbolInfo
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "UploadedSymbolInfo",
			type: {
				name: "Composite",
				className: "UploadedSymbolInfo",
				modelProperties: {
					symbolId: {
						required: true,
						serializedName: "symbol_id",
						type: {
							name: "String",
						},
					},
					platform: {
						required: true,
						serializedName: "platform",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = UploadedSymbolInfo;
