/**
 * @summary Test Cloud File Hash
 *
 * Hash, type, path and byte range of a file that is required in test run
 *
 */
class TestCloudFileHash {
	/**
	 * Create a TestCloudFileHash.
	 * @member {string} fileType Type of the file. Possible values include:
	 * 'dsym-file', 'app-file', 'test-file'
	 * @member {string} checksum SHA256 hash of the file
	 * @member {string} relativePath Relative path of the file
	 */
	constructor() {}

	/**
	 * Defines the metadata of TestCloudFileHash
	 *
	 * @returns {object} metadata of TestCloudFileHash
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "TestCloudFileHash",
			type: {
				name: "Composite",
				className: "TestCloudFileHash",
				modelProperties: {
					fileType: {
						required: true,
						serializedName: "fileType",
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
						serializedName: "relativePath",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = TestCloudFileHash;
