/**
 * Class representing a FileAsset.
 */
class FileAsset {
	/**
	 * Create a FileAsset.
	 * @member {string} [id]
	 * @member {string} [location]
	 * @member {string} [token]
	 * @member {string} [uploadDomain]
	 * @member {string} [uploadWindowLocation]
	 * @member {string} [urlEncodedToken]
	 */
	constructor() {}

	/**
	 * Defines the metadata of FileAsset
	 *
	 * @returns {object} metadata of FileAsset
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "FileAsset",
			type: {
				name: "Composite",
				className: "FileAsset",
				modelProperties: {
					id: {
						required: false,
						serializedName: "id",
						type: {
							name: "String",
						},
					},
					location: {
						required: false,
						serializedName: "location",
						type: {
							name: "String",
						},
					},
					token: {
						required: false,
						serializedName: "token",
						type: {
							name: "String",
						},
					},
					uploadDomain: {
						required: false,
						serializedName: "uploadDomain",
						type: {
							name: "String",
						},
					},
					uploadWindowLocation: {
						required: false,
						serializedName: "uploadWindowLocation",
						type: {
							name: "String",
						},
					},
					urlEncodedToken: {
						required: false,
						serializedName: "urlEncodedToken",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = FileAsset;
