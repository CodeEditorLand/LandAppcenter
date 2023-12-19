/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/**
 * A request containing information pertaining to complete a release upload
 * process
 *
 */
class ReleaseUploadEndRequest {
	/**
	 * Defines the metadata of ReleaseUploadEndRequest
	 *
	 * @returns {object} metadata of ReleaseUploadEndRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ReleaseUploadEndRequest",
			type: {
				name: "Composite",
				className: "ReleaseUploadEndRequest",
				modelProperties: {
					status: {
						required: true,
						serializedName: "status",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = ReleaseUploadEndRequest;
