/**
 * Class representing a SymbolUploadUserInfo.
 */
class SymbolUploadUserInfo {
	/**
	 * Create a SymbolUploadUserInfo.
	 * @member {string} [email] The email of the user
	 * @member {string} [displayName] The full name of the user. Might for
	 * example be first and last name
	 */
	constructor() {}

	/**
	 * Defines the metadata of SymbolUploadUserInfo
	 *
	 * @returns {object} metadata of SymbolUploadUserInfo
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "SymbolUploadUserInfo",
			type: {
				name: "Composite",
				className: "SymbolUploadUserInfo",
				modelProperties: {
					email: {
						required: false,
						serializedName: "email",
						type: {
							name: "String",
						},
					},
					displayName: {
						required: false,
						serializedName: "display_name",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = SymbolUploadUserInfo;
