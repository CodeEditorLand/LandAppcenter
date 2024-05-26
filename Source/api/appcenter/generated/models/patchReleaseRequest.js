/**
 * Class representing a PatchReleaseRequest.
 */
class PatchReleaseRequest {
	/**
	 * Create a PatchReleaseRequest.
	 * @member {string} [status] updated status of release
	 * @member {string} [destPublishId] Destination Publish Id
	 * @member {string} [errorDetails] failure error details from store
	 * @member {string} [errorContextId] contextId for failed error message
	 */
	constructor() {}

	/**
	 * Defines the metadata of PatchReleaseRequest
	 *
	 * @returns {object} metadata of PatchReleaseRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "PatchReleaseRequest",
			type: {
				name: "Composite",
				className: "PatchReleaseRequest",
				modelProperties: {
					status: {
						required: false,
						serializedName: "status",
						type: {
							name: "String",
						},
					},
					destPublishId: {
						required: false,
						serializedName: "dest_publish_id",
						type: {
							name: "String",
						},
					},
					errorDetails: {
						required: false,
						serializedName: "error_details",
						type: {
							name: "String",
						},
					},
					errorContextId: {
						required: false,
						serializedName: "error_contextId",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = PatchReleaseRequest;
