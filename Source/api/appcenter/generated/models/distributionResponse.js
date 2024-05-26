/**
 * Class representing a DistributionResponse.
 */
class DistributionResponse {
	/**
	 * Create a DistributionResponse.
	 * @member {string} [status] Status of the Request
	 * @member {string} [uploadId] A unique ID of the upload
	 */
	constructor() {}

	/**
	 * Defines the metadata of DistributionResponse
	 *
	 * @returns {object} metadata of DistributionResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "DistributionResponse",
			type: {
				name: "Composite",
				className: "DistributionResponse",
				modelProperties: {
					status: {
						required: false,
						serializedName: "status",
						type: {
							name: "String",
						},
					},
					uploadId: {
						required: false,
						serializedName: "upload_id",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = DistributionResponse;
