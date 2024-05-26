/**
 * @summary Test Cloud File Hash
 *
 * Hash, type, path and byte range of a file that is required in test run
 *
 */
class TestCloudFileHashDeprecated {
	/**
	 * Create a TestCloudFileHashDeprecated.
	 * @member {string} fileType Type of the file. Possible values include:
	 * 'dsym-file', 'app-file', 'test-file'
	 * @member {string} checksum SHA256 hash of the file
	 * @member {string} relativePath Relative path of the file
	 * @member {string} [byteRange] Range of bytes required to verify ownership
	 * of the file
	 */
	constructor() {}

	/**
	 * Defines the metadata of TestCloudFileHashDeprecated
	 *
	 * @returns {object} metadata of TestCloudFileHashDeprecated
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "TestCloudFileHashDeprecated",
			type: {
				name: "Composite",
				className: "TestCloudFileHashDeprecated",
				modelProperties: {
					fileType: {
						required: true,
						serializedName: "file_type",
						type: {
							name: "String",
						},
					},
					checksum: {
						required: true,
						serializedName: "checksum",
						type: {
							name: "String",
						},
					},
					relativePath: {
						required: true,
						serializedName: "relative_path",
						type: {
							name: "String",
						},
					},
					byteRange: {
						required: false,
						serializedName: "byte_range",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = TestCloudFileHashDeprecated;
