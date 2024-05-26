const models = require("./index");

/**
 * @summary Test Cloud File Hash Response
 *
 * Response message for single uploaded file hash
 *
 */
class TestCloudFileHashResponse {
	/**
	 * Create a TestCloudFileHashResponse.
	 * @member {string} fileType Type of the file. Possible values include:
	 * 'dsym-file', 'app-file', 'test-file'
	 * @member {string} checksum SHA256 hash of the file
	 * @member {string} [relativePath] Relative path of the file
	 * @member {object} uploadStatus Status of the upload
	 * @member {number} [uploadStatus.statusCode] HTTP status code that represent
	 * result of upload
	 * @member {string} [uploadStatus.location] URI that should be used to make
	 * POST request if file with given hash doesn't exist. This is set when
	 * status_code is equal to 412
	 */
	constructor() {}

	/**
	 * Defines the metadata of TestCloudFileHashResponse
	 *
	 * @returns {object} metadata of TestCloudFileHashResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "TestCloudFileHashResponse",
			type: {
				name: "Composite",
				className: "TestCloudFileHashResponse",
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
						required: false,
						serializedName: "relativePath",
						type: {
							name: "String",
						},
					},
					uploadStatus: {
						required: true,
						serializedName: "uploadStatus",
						type: {
							name: "Composite",
							className: "TestCloudHashUploadStatus",
						},
					},
				},
			},
		};
	}
}

module.exports = TestCloudFileHashResponse;
