/**
 * A request containing information for updating a release.
 *
 */
class PrivateReleaseUpdateRequest {
	/**
	 * Create a PrivateReleaseUpdateRequest.
	 * @member {string} [publishingStatus] The store publishing status. Possible
	 * values include: 'failed', 'processing', 'submitted'
	 */
	constructor() {}

	/**
	 * Defines the metadata of PrivateReleaseUpdateRequest
	 *
	 * @returns {object} metadata of PrivateReleaseUpdateRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "PrivateReleaseUpdateRequest",
			type: {
				name: "Composite",
				className: "PrivateReleaseUpdateRequest",
				modelProperties: {
					publishingStatus: {
						required: false,
						serializedName: "publishing_status",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = PrivateReleaseUpdateRequest;
