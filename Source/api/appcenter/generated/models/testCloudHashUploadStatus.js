/**
 * @summary Test Cloud Hash Upload Status
 *
 * Result of uploading a single file hash
 *
 */
class TestCloudHashUploadStatus {
	/**
	 * Create a TestCloudHashUploadStatus.
	 * @member {number} statusCode HTTP status code that represent result of
	 * upload
	 * @member {string} [location] URI that should be used to make POST request
	 * if file with given hash doesn't exist. This is set when status_code is
	 * equal to 412
	 */
	constructor() {}

	/**
	 * Defines the metadata of TestCloudHashUploadStatus
	 *
	 * @returns {object} metadata of TestCloudHashUploadStatus
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "TestCloudHashUploadStatus",
			type: {
				name: "Composite",
				className: "TestCloudHashUploadStatus",
				modelProperties: {
					statusCode: {
						required: true,
						serializedName: "statusCode",
						type: {
							name: "Number",
						},
					},
					location: {
						required: false,
						serializedName: "location",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = TestCloudHashUploadStatus;
