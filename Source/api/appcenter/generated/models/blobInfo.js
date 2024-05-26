/**
 * Class representing a BlobInfo.
 */
class BlobInfo {
	/**
	 * Create a BlobInfo.
	 * @member {number} size
	 * @member {string} url
	 */
	constructor() {}

	/**
	 * Defines the metadata of BlobInfo
	 *
	 * @returns {object} metadata of BlobInfo
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "BlobInfo",
			type: {
				name: "Composite",
				className: "BlobInfo",
				modelProperties: {
					size: {
						required: true,
						serializedName: "size",
						type: {
							name: "Number",
						},
					},
					url: {
						required: true,
						serializedName: "url",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = BlobInfo;
